#!/usr/bin/env bun

// TRACEWEAVER: file-role=codex-installer; req=REQ-TW-016; trace=TRACE-TW-010; ver=VER-TW-019
// TRACEWEAVER: file-role=model-routing-installer-projection; req=REQ-TW-060; trace=TRACE-TW-065; ver=VER-TW-085
// TRACEWEAVER: file-role=antigravity-installer; req=REQ-TW-068; trace=TRACE-TW-054; ver=VER-TW-069
import { createHash } from "node:crypto";
import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { homedir } from "node:os";
import { basename, isAbsolute, join, resolve } from "node:path";

const callableMarkerFile = ".traceweaver-core-install.json";
const modelRoutingContractRelativePath = "references/workflow-profile-template.yml";
const skillExecutionContractRegistryRelativePath = "references/skill-execution-contracts.yml";

type ModelRoutingSnapshot = {
  contractReference: string;
  contractSha256: string;
  schemaVersion: string;
  codexMainModel: string;
  codexSubagentModel: string;
  codexSubagentReasoningEffort: string;
  solAllowedForSubagents: boolean;
  terraUnavailableConsequence: string;
  riskReasoningEffort: Record<"L0" | "L1" | "L2" | "L3", string>;
  adapter: string;
  enforcement: string;
};

type SkillExecutionContractSnapshot = {
  registryReference: string;
  registrySha256: string;
  schemaVersion: string;
  callableCount: number;
  controlRoute: string;
  contractSkills: string[];
};

function readSkillExecutionContractSnapshot(pluginRoot: string, callableSkills: string[]): SkillExecutionContractSnapshot {
  const registryPath = join(pluginRoot, skillExecutionContractRegistryRelativePath);
  const registry = readFileSync(registryPath, "utf8");
  const schemaVersion = registry.match(/^schema_version:\s*(\S+)\s*$/m)?.[1];
  const count = registry.match(/^callable_count:\s*(\d+)\s*$/m)?.[1];
  const controlRoute = registry.match(/^control_route:\s*(\S+)\s*$/m)?.[1];
  const contractSkills = [...registry.matchAll(/^\s+- \{ skill: ([a-z0-9-]+)/gm)].map((match) => match[1]);
  if (schemaVersion !== "tw-skill-execution-contract-registry/1" || !count || !controlRoute) {
    throw new Error("skill execution contract registry is incomplete");
  }
  if (Number(count) !== contractSkills.length || contractSkills.length !== callableSkills.length) {
    throw new Error("skill execution contract registry callable count is invalid");
  }
  if (new Set(contractSkills).size !== contractSkills.length || contractSkills.join("\n") !== [...contractSkills].sort().join("\n")) {
    throw new Error("skill execution contract registry is ambiguous or non-deterministic");
  }
  if (contractSkills.join("\n") !== callableSkills.join("\n")) {
    throw new Error("skill execution contract registry does not exactly match the callable surface");
  }
  return {
    registryReference: skillExecutionContractRegistryRelativePath,
    registrySha256: `sha256:${createHash("sha256").update(registry).digest("hex")}`,
    schemaVersion,
    callableCount: contractSkills.length,
    controlRoute,
    contractSkills,
  };
}

function routingScalar(block: string, indentation: number, field: string): string {
  const expression = new RegExp(`^${" ".repeat(indentation)}${field}:\\s*([^#\\n]+?)\\s*$`, "m");
  const match = block.match(expression);
  if (!match) {
    throw new Error(`central model-routing contract is missing ${field}`);
  }
  return match[1].trim();
}

function readModelRoutingSnapshot(pluginRoot: string): ModelRoutingSnapshot {
  const contractPath = join(pluginRoot, modelRoutingContractRelativePath);
  const contract = readFileSync(contractPath, "utf8");
  const section = contract.match(/^model_routing:\s*\n([\s\S]*?)(?=^selected_controls:)/m);
  if (!section) {
    throw new Error("central model-routing contract block is missing");
  }
  const block = section[1];
  const solAllowed = routingScalar(block, 2, "sol_allowed_for_subagents");
  if (solAllowed !== "false") {
    throw new Error("central model-routing contract permits Sol subagents");
  }
  return {
    contractReference: modelRoutingContractRelativePath,
    contractSha256: `sha256:${createHash("sha256").update(contract).digest("hex")}`,
    schemaVersion: routingScalar(block, 2, "schema_version"),
    codexMainModel: routingScalar(block, 2, "codex_main_model"),
    codexSubagentModel: routingScalar(block, 2, "codex_subagent_model"),
    codexSubagentReasoningEffort: routingScalar(block, 2, "codex_subagent_reasoning_effort"),
    solAllowedForSubagents: false,
    terraUnavailableConsequence: routingScalar(block, 2, "terra_unavailable_consequence"),
    riskReasoningEffort: {
      L0: routingScalar(block, 4, "L0"),
      L1: routingScalar(block, 4, "L1"),
      L2: routingScalar(block, 4, "L2"),
      L3: routingScalar(block, 4, "L3"),
    },
    adapter: routingScalar(block, 4, "adapter"),
    enforcement: "adapter_and_ci_static_contract_runtime_attestation_held",
  };
}

type InstallOptions = {
  pluginRoot: string;
  target: string;
  codexHome: string;
  geminiHome: string;
  includeSkills: boolean;
};

function usage(): never {
  console.error(
    [
      "Usage:",
      "  bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills [--codexHome <path>]",
      "  bun run src/index.ts install ./plugins/traceweaver-core --to antigravity --include-skills [--geminiHome <path>]",
      "",
      "TraceWeaver alpha installs are self-contained for Codex and require --include-skills.",
    ].join("\n"),
  );
  process.exit(1);
}

function parseInstallArgs(argv: string[]): InstallOptions {
  if (argv[0] !== "install" || argv.length < 2) {
    usage();
  }

  let target = "";
  let codexHome = homedir();
  let geminiHome = join(homedir(), ".gemini");
  let includeSkills = false;
  const pluginRoot = resolve(argv[1]);

  for (let index = 2; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--include-skills") {
      includeSkills = true;
      continue;
    }

    if (arg === "--to") {
      target = argv[index + 1] ?? "";
      index += 1;
      continue;
    }

    if (arg === "--codexHome") {
      codexHome = argv[index + 1] ?? "";
      if (!codexHome || codexHome.startsWith("--")) {
        console.error("TraceWeaver alpha installer requires a path after --codexHome.");
        process.exit(1);
      }
      index += 1;
      continue;
    }

    if (arg === "--geminiHome") {
      geminiHome = argv[index + 1] ?? "";
      if (!geminiHome || geminiHome.startsWith("--")) {
        console.error("TraceWeaver alpha installer requires a path after --geminiHome.");
        process.exit(1);
      }
      index += 1;
      continue;
    }

    console.error(`Unsupported TraceWeaver installer argument: ${arg}`);
    usage();
  }

  if (target !== "codex" && target !== "antigravity") {
    console.error("TraceWeaver alpha installer currently supports only --to codex or --to antigravity.");
    process.exit(1);
  }

  if (!includeSkills) {
    console.error(
      "TraceWeaver alpha installs require --include-skills so tw-auto and its templates are materialized.",
    );
    process.exit(1);
  }

  return {
    pluginRoot,
    target,
    codexHome: isAbsolute(codexHome) ? codexHome : resolve(codexHome),
    geminiHome: isAbsolute(geminiHome) ? geminiHome : resolve(geminiHome),
    includeSkills,
  };
}

function assertTraceWeaverPlugin(pluginRoot: string, target: string): void {
  const manifestSubdir = target === "antigravity" ? ".antigravity-plugin" : ".codex-plugin";
  const manifestPath = join(pluginRoot, manifestSubdir, "plugin.json");
  const skillsRoot = join(pluginRoot, "skills");
  const agentsRoot = join(pluginRoot, "agents");

  if (!existsSync(manifestPath)) {
    console.error(`TraceWeaver ${target} manifest not found: ${manifestPath}`);
    process.exit(1);
  }

  if (!existsSync(skillsRoot) || !statSync(skillsRoot).isDirectory()) {
    console.error(`TraceWeaver skills directory not found: ${skillsRoot}`);
    process.exit(1);
  }

  if (!existsSync(agentsRoot) || !statSync(agentsRoot).isDirectory()) {
    console.error(`TraceWeaver agents directory not found: ${agentsRoot}`);
    process.exit(1);
  }

  const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as {
    id?: string;
    name?: string;
  };
  const pluginId = manifest.id ?? manifest.name;

  if (pluginId !== "traceweaver-core") {
    console.error(
      `Unexpected plugin id ${pluginId ?? "(missing)"} in ${manifestPath}; expected traceweaver-core.`,
    );
    process.exit(1);
  }
}

type ParsedAgent = {
  name: string;
  description: string;
  instructions: string;
};

function parseAgentMarkdown(sourcePath: string): ParsedAgent {
  const content = readFileSync(sourcePath, "utf8");
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!frontmatterMatch) {
    console.error(`Agent frontmatter not found: ${sourcePath}`);
    process.exit(1);
  }

  const frontmatter = frontmatterMatch[1];
  const body = frontmatterMatch[2].trim();
  const name = readFrontmatterField(frontmatter, "name");
  const description = readFrontmatterField(frontmatter, "description");

  if (!name || !description) {
    console.error(`Agent name/description missing in ${sourcePath}`);
    process.exit(1);
  }

  return {
    name,
    description: description.replace(/\s+/g, " ").trim(),
    instructions: body.length > 0 ? body : `Instructions converted from the ${name} agent.`,
  };
}

function readFrontmatterField(frontmatter: string, field: string): string {
  const pattern = new RegExp(`^${field}:\\s*(.*)$`, "m");
  const match = frontmatter.match(pattern);
  if (!match) return "";
  return match[1].trim().replace(/^['"]|['"]$/g, "");
}

function renderCodexAgentToml(agent: ParsedAgent): string {
  return [
    `name = ${JSON.stringify(agent.name)}`,
    `description = ${JSON.stringify(agent.description)}`,
    `developer_instructions = ${JSON.stringify(agent.instructions)}`,
  ].join("\n");
}

// TRACEWEAVER: entrypoint=installCodexSkills; req=REQ-TW-016; trace=TRACE-TW-010; ver=VER-TW-019
// TRACEWEAVER: entrypoint=installCodexSkills; req=REQ-TW-060; trace=TRACE-TW-065; ver=VER-TW-085
// TRACEWEAVER: entrypoint=installCodexSkills; req=REQ-TW-092; trace=TRACE-TW-070; ver=VER-TW-090
function installCodexSkills(options: InstallOptions): void {
  assertTraceWeaverPlugin(options.pluginRoot, options.target);

  const codexRoot = join(options.codexHome, ".codex");
  const sourceSkillsRoot = join(options.pluginRoot, "skills");
  const sourceAgentsRoot = join(options.pluginRoot, "agents");
  const sourceReferencesRoot = join(options.pluginRoot, "references");
  const targetCallableSkillsRoot = join(codexRoot, "skills");
  const legacyActiveSkillsRoot = join(targetCallableSkillsRoot, "traceweaver-core");
  const targetPackagedSkillsRoot = join(codexRoot, "traceweaver-core", "skills");
  const targetAgentsRoot = join(codexRoot, "agents", "traceweaver-core");
  const targetReferencesRoot = join(codexRoot, "traceweaver-core", "references");
  const manifestTargetDir = join(codexRoot, "traceweaver-core");
  const manifestPath = join(manifestTargetDir, "install-manifest.json");
  const installedSkills = readdirSync(sourceSkillsRoot)
    .filter((entry) => statSync(join(sourceSkillsRoot, entry)).isDirectory())
    .sort();
  const callableSkills = installedSkills.filter(isUserCallableSkill);
  const internalPackagedSkills = installedSkills.filter((skillName) => !isUserCallableSkill(skillName));
  const installedAgents = readdirSync(sourceAgentsRoot)
    .filter((entry) => entry.endsWith(".md") && statSync(join(sourceAgentsRoot, entry)).isFile())
    .map((entry) => entry.replace(/(?:\.agent)?\.md$/, ".toml"))
    .sort();
  const installedReferences = existsSync(sourceReferencesRoot)
    ? listFiles(sourceReferencesRoot).map((entry) => entry.replace(`${sourceReferencesRoot}/`, "")).sort()
    : [];
  const modelRouting = readModelRoutingSnapshot(options.pluginRoot);
  const skillExecutionContracts = readSkillExecutionContractSnapshot(options.pluginRoot, callableSkills);

  const legacyActiveSurfaceStatus = removeLegacyActiveSkillSurface(legacyActiveSkillsRoot, manifestPath);
  assertCallableTargetsAvailable(targetCallableSkillsRoot, callableSkills);
  assertNoUnownedCeCallableTargets(targetCallableSkillsRoot);

  mkdirSync(targetPackagedSkillsRoot, { recursive: true });
  rmSync(targetPackagedSkillsRoot, { force: true, recursive: true });
  mkdirSync(targetPackagedSkillsRoot, { recursive: true });
  mkdirSync(targetCallableSkillsRoot, { recursive: true });
  mkdirSync(targetAgentsRoot, { recursive: true });
  rmSync(targetAgentsRoot, { force: true, recursive: true });
  mkdirSync(targetAgentsRoot, { recursive: true });

  const retiredCallableSkills = removeRetiredCallableSkillTargets(targetCallableSkillsRoot, installedSkills, callableSkills);

  for (const skillName of installedSkills) {
    cpSync(join(sourceSkillsRoot, skillName), join(targetPackagedSkillsRoot, skillName), {
      recursive: true,
    });

    if (!isUserCallableSkill(skillName)) {
      continue;
    }

    const callableTarget = join(targetCallableSkillsRoot, skillName);
    rmSync(callableTarget, { force: true, recursive: true });
    cpSync(join(sourceSkillsRoot, skillName), callableTarget, { recursive: true });
    writeCallableMarker(callableTarget, skillName);
  }

  if (existsSync(sourceReferencesRoot)) {
    rmSync(targetReferencesRoot, { force: true, recursive: true });
    cpSync(sourceReferencesRoot, targetReferencesRoot, { recursive: true });
  }

  for (const agentFile of installedAgents) {
    const baseName = agentFile.replace(/\.toml$/, "");
    const sourceFile = existsSync(join(sourceAgentsRoot, `${baseName}.md`))
      ? `${baseName}.md`
      : `${baseName}.agent.md`;
    const agent = parseAgentMarkdown(join(sourceAgentsRoot, sourceFile));
    writeFileSync(join(targetAgentsRoot, agentFile), `${renderCodexAgentToml(agent)}\n`);
  }

  mkdirSync(manifestTargetDir, { recursive: true });
  writeFileSync(
    manifestPath,
    `${JSON.stringify(
      {
        plugin: "traceweaver-core",
        source: options.pluginRoot,
        target: options.target,
        includeSkills: options.includeSkills,
        standalone: true,
        externalCePluginRequired: false,
        ceDerivedComponentsOwner: "traceweaver-core",
        skills: installedSkills,
        callableSkills,
        internalPackagedSkills,
        packagedSkillsRoot: targetPackagedSkillsRoot,
        callableSkillsRoot: targetCallableSkillsRoot,
        agents: installedAgents,
        references: installedReferences,
        modelRouting,
        skillExecutionContracts,
        prompts: [],
        promptFiles: [],
        installer: basename(import.meta.path),
      },
      null,
      2,
    )}\n`,
  );

  console.log(`installed_skill_directory_count=${installedSkills.length}`);
  console.log(`installed_callable_skill_directory_count=${callableSkills.length}`);
  console.log(`installed_internal_packaged_skill_directory_count=${internalPackagedSkills.length}`);
  console.log(`installed_agent_toml_count=${installedAgents.length}`);
  console.log(`installed_reference_file_count=${installedReferences.length}`);
  console.log(`installed_manifest=${manifestPath}`);
  console.log(`installed_model_routing_contract=${modelRouting.contractReference}`);
  console.log(`installed_model_routing_contract_sha256=${modelRouting.contractSha256}`);
  console.log(`installed_model_routing_main=${modelRouting.codexMainModel}`);
  console.log(`installed_model_routing_subagent=${modelRouting.codexSubagentModel}`);
  console.log(`installed_model_routing_effort=${modelRouting.codexSubagentReasoningEffort}`);
  console.log(`installed_sec_registry=${skillExecutionContracts.registryReference}`);
  console.log(`installed_sec_registry_sha256=${skillExecutionContracts.registrySha256}`);
  console.log(`installed_sec_callable_count=${skillExecutionContracts.callableCount}`);
  console.log("installed_manifest_prompts=0");
  console.log(`installed_packaged_skills_root=${targetPackagedSkillsRoot}`);
  console.log(`installed_callable_skills_root=${targetCallableSkillsRoot}`);
  console.log(`retired_direct_callable_skills=${retiredCallableSkills.length > 0 ? retiredCallableSkills.join(" ") : "none"}`);
  console.log(`legacy_active_namespaced_skill_surface=${legacyActiveSurfaceStatus}`);
  console.log(`installed_agents_root=${targetAgentsRoot}`);
  console.log(`installed_references_root=${targetReferencesRoot}`);
}

function isUserCallableSkill(skillName: string): boolean {
  return skillName.startsWith("tw-") || skillName === "lfg";
}

function removeRetiredCallableSkillTargets(
  targetCallableSkillsRoot: string,
  installedSkills: string[],
  callableSkills: string[],
): string[] {
  const callableSkillSet = new Set(callableSkills);
  const retiredSkills: string[] = [];

  for (const skillName of installedSkills) {
    if (callableSkillSet.has(skillName)) continue;

    const target = join(targetCallableSkillsRoot, skillName);
    if (!existsSync(target)) continue;

    if (!isTraceWeaverCallableTarget(target)) {
      continue;
    }

    rmSync(target, { force: true, recursive: true });
    retiredSkills.push(skillName);
  }

  return retiredSkills.sort();
}

function assertNoUnownedCeCallableTargets(targetCallableSkillsRoot: string): void {
  if (!existsSync(targetCallableSkillsRoot)) return;

  const conflicts = readdirSync(targetCallableSkillsRoot)
    .filter((entry) => entry.startsWith("ce-"))
    .map((entry) => join(targetCallableSkillsRoot, entry))
    .filter((target) => existsSync(target) && statSync(target).isDirectory() && !isTraceWeaverCallableTarget(target));

  if (conflicts.length === 0) return;

  console.error(
    [
      "TraceWeaver standalone installer found existing direct ce-* skill directories.",
      "Standalone TraceWeaver exposes tw-* and lfg user-facing skills only.",
      "Run scripts/traceweaver-reconcile-codex-host-skills to back up/remove external CE callables,",
      "or install into an isolated --codexHome:",
      ...conflicts.map((target) => `  - ${target}`),
    ].join("\n"),
  );
  process.exit(1);
}

function removeLegacyActiveSkillSurface(legacyActiveSkillsRoot: string, manifestPath: string): "absent" | "removed_owned_upgrade" {
  if (!existsSync(legacyActiveSkillsRoot)) return "absent";

  if (!statSync(legacyActiveSkillsRoot).isDirectory()) {
    console.error(`TraceWeaver alpha installer found a legacy active skill path that is not a directory: ${legacyActiveSkillsRoot}`);
    process.exit(1);
  }

  if (!isTraceWeaverInstallManifest(manifestPath)) {
    console.error(
      [
        "TraceWeaver alpha installer will not remove legacy active TraceWeaver skill surface without ownership proof.",
        `Legacy path: ${legacyActiveSkillsRoot}`,
        `Expected manifest: ${manifestPath}`,
        "Remove or relocate the legacy directory, or reinstall into an isolated --codexHome.",
      ].join("\n"),
    );
    process.exit(1);
  }

  rmSync(legacyActiveSkillsRoot, { force: true, recursive: true });
  return "removed_owned_upgrade";
}

function isTraceWeaverInstallManifest(manifestPath: string): boolean {
  if (!existsSync(manifestPath)) return false;

  try {
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as {
      plugin?: string;
      target?: string;
      includeSkills?: boolean;
    };
    return manifest.plugin === "traceweaver-core" && manifest.target === "codex" && manifest.includeSkills === true;
  } catch {
    return false;
  }
}

function assertCallableTargetsAvailable(targetCallableSkillsRoot: string, installedSkills: string[]): void {
  const conflicts = installedSkills
    .map((skillName) => join(targetCallableSkillsRoot, skillName))
    .filter((target) => existsSync(target) && !isTraceWeaverCallableTarget(target));

  if (conflicts.length === 0) return;

  console.error(
    [
      "TraceWeaver alpha installer will not overwrite existing global callable skill directories.",
      "Remove or relocate these directories, or install into an isolated --codexHome:",
      ...conflicts.map((target) => `  - ${target}`),
    ].join("\n"),
  );
  process.exit(1);
}

function isTraceWeaverCallableTarget(target: string): boolean {
  const markerPath = join(target, callableMarkerFile);
  if (!existsSync(markerPath)) return false;

  try {
    const marker = JSON.parse(readFileSync(markerPath, "utf8")) as {
      plugin?: string;
      purpose?: string;
    };
    return marker.plugin === "traceweaver-core" && marker.purpose === "direct-callable-skill-copy";
  } catch {
    return false;
  }
}

function writeCallableMarker(target: string, skillName: string): void {
  writeFileSync(
    join(target, callableMarkerFile),
    `${JSON.stringify(
      {
        plugin: "traceweaver-core",
        skill: skillName,
        purpose: "direct-callable-skill-copy",
        installer: basename(import.meta.path),
      },
      null,
      2,
    )}\n`,
  );
}

function listFiles(root: string): string[] {
  return readdirSync(root).flatMap((entry) => {
    const path = join(root, entry);
    if (statSync(path).isDirectory()) {
      return listFiles(path);
    }
    return [path];
  });
}

// TRACEWEAVER: entrypoint=installAntigravitySkills; req=REQ-TW-068; trace=TRACE-TW-054; ver=VER-TW-069
// TRACEWEAVER: entrypoint=installAntigravitySkills; req=REQ-TW-092; trace=TRACE-TW-070; ver=VER-TW-090
function installAntigravitySkills(options: InstallOptions): void {
  assertTraceWeaverPlugin(options.pluginRoot, options.target);

  const geminiRoot = options.geminiHome;
  const targetPluginRoot = join(geminiRoot, "config", "plugins", "traceweaver-core");
  const targetSkillsRoot = join(targetPluginRoot, "skills");
  const targetReferencesRoot = join(targetPluginRoot, "references");

  const sourceSkillsRoot = join(options.pluginRoot, "skills");
  const sourceReferencesRoot = join(options.pluginRoot, "references");
  const sourceManifestPath = join(options.pluginRoot, ".antigravity-plugin", "plugin.json");
  const targetManifestPath = join(targetPluginRoot, "plugin.json");
  const targetVersionPath = join(targetPluginRoot, "installed_version.json");

  // Read installed skills
  const installedSkills = readdirSync(sourceSkillsRoot)
    .filter((entry) => statSync(join(sourceSkillsRoot, entry)).isDirectory())
    .sort();
  const callableSkills = installedSkills.filter(isUserCallableSkill);

  // Clean target directory or ensure it exists
  mkdirSync(targetSkillsRoot, { recursive: true });
  rmSync(targetSkillsRoot, { force: true, recursive: true });
  mkdirSync(targetSkillsRoot, { recursive: true });

  // Copy manifest and version
  cpSync(sourceManifestPath, targetManifestPath);
  const sourceManifest = JSON.parse(readFileSync(sourceManifestPath, "utf8")) as { version?: string };
  if (!sourceManifest.version || !/^\d+\.\d+\.\d+$/.test(sourceManifest.version)) {
    console.error(`TraceWeaver Antigravity manifest version is missing or invalid: ${sourceManifestPath}`);
    process.exit(1);
  }
  writeFileSync(targetVersionPath, JSON.stringify({ version: sourceManifest.version }) + "\n");

  // Copy user-callable skills
  for (const skillName of callableSkills) {
    const sourceSkillDir = join(sourceSkillsRoot, skillName);
    const targetSkillDir = join(targetSkillsRoot, skillName);
    cpSync(sourceSkillDir, targetSkillDir, { recursive: true });
  }

  if (existsSync(sourceReferencesRoot)) {
    rmSync(targetReferencesRoot, { force: true, recursive: true });
    cpSync(sourceReferencesRoot, targetReferencesRoot, { recursive: true });
  }

  console.log(`installed_skill_directory_count=${callableSkills.length}`);
  console.log(`installed_callable_skill_directory_count=${callableSkills.length}`);
  console.log(`installed_reference_root=${targetReferencesRoot}`);
  console.log(`installed_manifest=${targetManifestPath}`);
  console.log(`installed_packaged_skills_root=${targetSkillsRoot}`);
}

const installOptions = parseInstallArgs(process.argv.slice(2));
if (installOptions.target === "antigravity") {
  installAntigravitySkills(installOptions);
} else {
  installCodexSkills(installOptions);
}
