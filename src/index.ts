#!/usr/bin/env bun

// TRACEWEAVER: file-role=codex-installer; req=REQ-TW-016,REQ-TW-121; trace=TRACE-TW-010,TRACE-TW-072; ver=VER-TW-019,VER-TW-092
// TRACEWEAVER: file-role=model-routing-installer-projection; req=REQ-TW-060,REQ-TW-121; trace=TRACE-TW-065,TRACE-TW-072; ver=VER-TW-085,VER-TW-092
// TRACEWEAVER: file-role=antigravity-installer; req=REQ-TW-068,REQ-TW-121; trace=TRACE-TW-054,TRACE-TW-072; ver=VER-TW-069,VER-TW-092
import { createHash } from "node:crypto";
import {
  chmodSync,
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  realpathSync,
  rmSync,
  rmdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { homedir, tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";

const callableMarkerFile = ".traceweaver-core-install.json";
const modelRoutingContractRelativePath = "references/workflow-profile-template.yml";
const skillExecutionContractRegistryRelativePath = "references/skill-execution-contracts.yml";
const modelContextMapRelativePath = "references/model-context-map.yml";
const modelContextMapMirrorRelativePath = "skills/tw-auto/references/model-context-map.yml";
const modelContextProfileMirrorRelativePath = "skills/tw-auto/references/workflow-profile-template.yml";
const generatedRoutingArtifactFile = "model-context-routing.json";
const installFailurePhases = [
  "after_preflight_snapshot",
  "after_skills_projection",
  "after_references_projection",
  "after_agents_projection",
  "after_direct_callables_projection",
  "after_generated_routing_projection",
  "after_plugin_manifest_projection",
  "after_install_manifest_write",
  "after_reconciliation_cleanup",
] as const;

type InstallFailurePhase = (typeof installFailurePhases)[number];

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

type ModelContextSnapshot = {
  map: {
    path: string;
    mirrorPath: string;
    schemaVersion: string;
    mapDigest: string;
    fileSha256: string;
  };
  profile: {
    path: string;
    mirrorPath: string;
    schemaVersion: string;
    fileSha256: string;
    mode: string;
    authoritativeRuntime: string;
    activeCutover: string;
    qualificationState: string;
  };
  capability: {
    snapshot: string;
    contextWindow: number;
    tokenizerSnapshot: string;
    pricingSnapshot: string;
    maximumShardFanout: number;
    maximumRouteDepth: number;
  };
};

type SkillExecutionContractSnapshot = {
  registryReference: string;
  registrySha256: string;
  schemaVersion: string;
  callableCount: number;
  controlRoute: string;
  contractSkills: string[];
};

type PluginManifestSnapshot = { sourcePath: string; sha256: string; version: string };

type InstallProjection = {
  installedSkills: string[];
  callableSkills: string[];
  internalPackagedSkills: string[];
  installedAgents: string[];
  installedReferences: string[];
  modelRouting: ModelRoutingSnapshot;
  modelContext: ModelContextSnapshot;
  skillExecutionContracts: SkillExecutionContractSnapshot;
  pluginManifest: PluginManifestSnapshot;
};

type InstallOptions = {
  pluginRoot: string;
  target: "codex" | "antigravity";
  codexHome: string;
  geminiHome: string;
  includeSkills: boolean;
};

type PathMode = { relativePath: string; mode: number };
type TargetSnapshot = {
  target: string;
  cleanupBoundary: string;
  existed: boolean;
  backupPath?: string;
  modes: PathMode[];
  initiallyMissingParents: string[];
};

type TransactionTarget = { target: string; cleanupBoundary: string };

function sha256(value: string): string {
  return `sha256:${createHash("sha256").update(value).digest("hex")}`;
}

function readRequiredFile(path: string, label: string): string {
  if (!existsSync(path) || !statSync(path).isFile()) throw new Error(`TraceWeaver installer requires ${label}: ${path}`);
  return readFileSync(path, "utf8");
}

function yamlScalar(block: string, indentation: number, field: string): string {
  const expression = new RegExp(`^${" ".repeat(indentation)}${field}:\\s*([^#\\n]+?)\\s*$`, "m");
  const match = block.match(expression);
  if (!match) throw new Error(`TraceWeaver packaged metadata is missing ${field}`);
  return match[1].trim().replace(/^['"]|['"]$/g, "");
}

function topLevelYamlBlock(contents: string, key: string): string {
  const lines = contents.split("\n");
  const start = lines.findIndex((line) => new RegExp(`^${key}:\\s*$`).test(line));
  if (start === -1) throw new Error(`TraceWeaver packaged metadata is missing ${key}`);
  const block: string[] = [];
  for (const line of lines.slice(start + 1)) {
    if (/^[A-Za-z_][A-Za-z0-9_-]*:\s*/.test(line)) break;
    block.push(line);
  }
  return block.join("\n");
}

function readSkillExecutionContractSnapshot(pluginRoot: string, callableSkills: string[]): SkillExecutionContractSnapshot {
  const registry = readRequiredFile(join(pluginRoot, skillExecutionContractRegistryRelativePath), "skill execution contract registry");
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
    registrySha256: sha256(registry),
    schemaVersion,
    callableCount: contractSkills.length,
    controlRoute,
    contractSkills,
  };
}

function readModelRoutingSnapshot(pluginRoot: string): ModelRoutingSnapshot {
  const contract = readRequiredFile(join(pluginRoot, modelRoutingContractRelativePath), "central model-routing contract");
  const section = contract.match(/^model_routing:\s*\n([\s\S]*?)(?=^selected_controls:)/m);
  if (!section) throw new Error("central model-routing contract block is missing");
  const block = section[1];
  if (yamlScalar(block, 2, "sol_allowed_for_subagents") !== "false") {
    throw new Error("central model-routing contract permits Sol subagents");
  }
  return {
    contractReference: modelRoutingContractRelativePath,
    contractSha256: sha256(contract),
    schemaVersion: yamlScalar(block, 2, "schema_version"),
    codexMainModel: yamlScalar(block, 2, "codex_main_model"),
    codexSubagentModel: yamlScalar(block, 2, "codex_subagent_model"),
    codexSubagentReasoningEffort: yamlScalar(block, 2, "codex_subagent_reasoning_effort"),
    solAllowedForSubagents: false,
    terraUnavailableConsequence: yamlScalar(block, 2, "terra_unavailable_consequence"),
    riskReasoningEffort: {
      L0: yamlScalar(block, 4, "L0"),
      L1: yamlScalar(block, 4, "L1"),
      L2: yamlScalar(block, 4, "L2"),
      L3: yamlScalar(block, 4, "L3"),
    },
    adapter: yamlScalar(block, 4, "adapter"),
    enforcement: "adapter_and_ci_static_contract_runtime_attestation_held",
  };
}

function readModelContextSnapshot(pluginRoot: string): ModelContextSnapshot {
  const mapPath = join(pluginRoot, modelContextMapRelativePath);
  const mapMirrorPath = join(pluginRoot, modelContextMapMirrorRelativePath);
  const profilePath = join(pluginRoot, modelRoutingContractRelativePath);
  const profileMirrorPath = join(pluginRoot, modelContextProfileMirrorRelativePath);
  const map = readRequiredFile(mapPath, "canonical model-context map");
  if (map !== readRequiredFile(mapMirrorPath, "skill-local model-context map")) {
    throw new Error("canonical and skill-local model-context maps are not byte-identical");
  }
  const profile = readRequiredFile(profilePath, "canonical workflow profile");
  if (profile !== readRequiredFile(profileMirrorPath, "skill-local workflow profile")) {
    throw new Error("canonical and skill-local workflow profiles are not byte-identical");
  }
  const modelContext = topLevelYamlBlock(profile, "model_context");
  const contextWindow = Number(yamlScalar(modelContext, 2, "capability_context_window"));
  const maximumShardFanout = Number(yamlScalar(modelContext, 2, "maximum_shard_fanout"));
  const maximumRouteDepth = Number(yamlScalar(modelContext, 2, "maximum_route_depth"));
  if (![contextWindow, maximumShardFanout, maximumRouteDepth].every(Number.isInteger)) {
    throw new Error("model-context capability limits must be integers");
  }
  return {
    map: {
      path: modelContextMapRelativePath,
      mirrorPath: modelContextMapMirrorRelativePath,
      schemaVersion: yamlScalar(map, 0, "schema_version"),
      mapDigest: yamlScalar(map, 0, "map_digest"),
      fileSha256: sha256(map),
    },
    profile: {
      path: modelRoutingContractRelativePath,
      mirrorPath: modelContextProfileMirrorRelativePath,
      schemaVersion: yamlScalar(modelContext, 2, "schema_version"),
      fileSha256: sha256(profile),
      mode: yamlScalar(modelContext, 2, "mode"),
      authoritativeRuntime: yamlScalar(modelContext, 2, "authoritative_runtime"),
      activeCutover: yamlScalar(modelContext, 2, "active_cutover"),
      qualificationState: yamlScalar(modelContext, 2, "qualification_state"),
    },
    capability: {
      snapshot: yamlScalar(modelContext, 2, "capability_snapshot"),
      contextWindow,
      tokenizerSnapshot: yamlScalar(modelContext, 2, "tokenizer_snapshot"),
      pricingSnapshot: yamlScalar(modelContext, 2, "pricing_snapshot"),
      maximumShardFanout,
      maximumRouteDepth,
    },
  };
}

function readPluginManifestSnapshot(pluginRoot: string, target: InstallOptions["target"]): PluginManifestSnapshot {
  const sourcePath = target === "antigravity" ? ".antigravity-plugin/plugin.json" : ".codex-plugin/plugin.json";
  const contents = readRequiredFile(join(pluginRoot, sourcePath), `TraceWeaver ${target} plugin manifest`);
  const manifest = JSON.parse(contents) as { id?: string; name?: string; version?: string };
  if ((manifest.id ?? manifest.name) !== "traceweaver-core") {
    throw new Error(`Unexpected plugin id ${manifest.id ?? manifest.name ?? "(missing)"} in ${sourcePath}; expected traceweaver-core.`);
  }
  if (!manifest.version || !/^\d+\.\d+\.\d+$/.test(manifest.version)) {
    throw new Error(`TraceWeaver ${target} manifest version is missing or invalid: ${sourcePath}`);
  }
  return { sourcePath, sha256: sha256(contents), version: manifest.version };
}

function usage(): string {
  return [
    "Usage:",
    "  bun run src/index.ts install ./plugins/traceweaver-core --to codex --include-skills [--codexHome <path>]",
    "  bun run src/index.ts install ./plugins/traceweaver-core --to antigravity --include-skills [--geminiHome <path>]",
    "",
    "TraceWeaver alpha installs are self-contained for Codex and require --include-skills.",
  ].join("\n");
}

function parseInstallArgs(argv: string[]): InstallOptions {
  if (argv[0] !== "install" || argv.length < 2) throw new Error(usage());
  let target = "";
  let codexHome = homedir();
  let geminiHome = join(homedir(), ".gemini");
  let includeSkills = false;
  const pluginRoot = resolve(argv[1]);
  for (let index = 2; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--include-skills") {
      includeSkills = true;
    } else if (arg === "--to") {
      target = argv[index + 1] ?? "";
      index += 1;
    } else if (arg === "--codexHome") {
      codexHome = argv[index + 1] ?? "";
      if (!codexHome || codexHome.startsWith("--")) throw new Error("TraceWeaver alpha installer requires a path after --codexHome.");
      index += 1;
    } else if (arg === "--geminiHome") {
      geminiHome = argv[index + 1] ?? "";
      if (!geminiHome || geminiHome.startsWith("--")) throw new Error("TraceWeaver alpha installer requires a path after --geminiHome.");
      index += 1;
    } else {
      throw new Error(`Unsupported TraceWeaver installer argument: ${arg}\n${usage()}`);
    }
  }
  if (target !== "codex" && target !== "antigravity") {
    throw new Error("TraceWeaver alpha installer currently supports only --to codex or --to antigravity.");
  }
  if (!includeSkills) throw new Error("TraceWeaver alpha installs require --include-skills so tw-auto and its templates are materialized.");
  return {
    pluginRoot,
    target,
    codexHome: resolve(codexHome),
    geminiHome: resolve(geminiHome),
    includeSkills,
  };
}

function assertTraceWeaverPlugin(pluginRoot: string, target: InstallOptions["target"]): void {
  const manifestSubdir = target === "antigravity" ? ".antigravity-plugin" : ".codex-plugin";
  readRequiredFile(join(pluginRoot, manifestSubdir, "plugin.json"), `TraceWeaver ${target} manifest`);
  for (const [name, path] of Object.entries({ skills: join(pluginRoot, "skills"), agents: join(pluginRoot, "agents") })) {
    if (!existsSync(path) || !statSync(path).isDirectory()) throw new Error(`TraceWeaver ${name} directory not found: ${path}`);
  }
  readPluginManifestSnapshot(pluginRoot, target);
}

type ParsedAgent = { name: string; description: string; instructions: string };

function parseAgentMarkdown(sourcePath: string): ParsedAgent {
  const content = readRequiredFile(sourcePath, "agent source");
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!frontmatterMatch) throw new Error(`Agent frontmatter not found: ${sourcePath}`);
  const frontmatter = frontmatterMatch[1];
  const name = readFrontmatterField(frontmatter, "name");
  const description = readFrontmatterField(frontmatter, "description");
  if (!name || !description) throw new Error(`Agent name/description missing in ${sourcePath}`);
  return {
    name,
    description: description.replace(/\s+/g, " ").trim(),
    instructions: frontmatterMatch[2].trim() || `Instructions converted from the ${name} agent.`,
  };
}

function readFrontmatterField(frontmatter: string, field: string): string {
  const match = frontmatter.match(new RegExp(`^${field}:\\s*(.*)$`, "m"));
  return match ? match[1].trim().replace(/^['"]|['"]$/g, "") : "";
}

function renderCodexAgentToml(agent: ParsedAgent): string {
  return [
    `name = ${JSON.stringify(agent.name)}`,
    `description = ${JSON.stringify(agent.description)}`,
    `developer_instructions = ${JSON.stringify(agent.instructions)}`,
  ].join("\n");
}

function listFiles(root: string): string[] {
  return readdirSync(root).sort().flatMap((entry) => {
    const path = join(root, entry);
    return statSync(path).isDirectory() ? listFiles(path) : [path];
  });
}

function isUserCallableSkill(skillName: string): boolean {
  return skillName.startsWith("tw-") || skillName === "lfg";
}

function collectProjection(options: InstallOptions): InstallProjection {
  const sourceSkillsRoot = join(options.pluginRoot, "skills");
  const sourceAgentsRoot = join(options.pluginRoot, "agents");
  const sourceReferencesRoot = join(options.pluginRoot, "references");
  const packagedSkills = readdirSync(sourceSkillsRoot).filter((entry) => statSync(join(sourceSkillsRoot, entry)).isDirectory()).sort();
  const callableSkills = packagedSkills.filter(isUserCallableSkill);
  const sourceAgentFiles = readdirSync(sourceAgentsRoot)
    .filter((entry) => entry.endsWith(".md") && statSync(join(sourceAgentsRoot, entry)).isFile())
    .sort();
  const installedSkills = options.target === "antigravity" ? callableSkills : packagedSkills;
  return {
    installedSkills,
    callableSkills,
    internalPackagedSkills: packagedSkills.filter((skillName) => !isUserCallableSkill(skillName)),
    installedAgents: options.target === "antigravity"
      ? sourceAgentFiles
      : sourceAgentFiles.map((entry) => entry.replace(/(?:\.agent)?\.md$/, ".toml")).sort(),
    installedReferences: existsSync(sourceReferencesRoot)
      ? listFiles(sourceReferencesRoot).map((entry) => entry.replace(`${sourceReferencesRoot}/`, "")).sort()
      : [],
    modelRouting: readModelRoutingSnapshot(options.pluginRoot),
    modelContext: readModelContextSnapshot(options.pluginRoot),
    skillExecutionContracts: readSkillExecutionContractSnapshot(options.pluginRoot, callableSkills),
    pluginManifest: readPluginManifestSnapshot(options.pluginRoot, options.target),
  };
}

function capturePathModes(path: string, relativePath: string, modes: PathMode[]): void {
  const stats = lstatSync(path);
  if (!stats.isSymbolicLink()) modes.push({ relativePath, mode: stats.mode & 0o7777 });
  if (stats.isDirectory()) {
    for (const entry of readdirSync(path).sort()) capturePathModes(join(path, entry), join(relativePath, entry), modes);
  }
}

function restoreModes(target: string, modes: PathMode[]): void {
  for (const { relativePath, mode } of [...modes].sort((left, right) => right.relativePath.length - left.relativePath.length)) {
    chmodSync(join(target, relativePath), mode);
  }
}

function pathExists(path: string): boolean {
  try {
    lstatSync(path);
    return true;
  } catch {
    return false;
  }
}

function realLocation(path: string): string {
  let existing = resolve(path);
  const missing: string[] = [];
  while (!pathExists(existing)) {
    const parent = dirname(existing);
    if (parent === existing) throw new Error(`TraceWeaver installer cannot resolve a safe ancestor for ${path}`);
    missing.unshift(basename(existing));
    existing = parent;
  }
  return join(realpathSync(existing), ...missing);
}

function assertSafeTargetPath({ target, cleanupBoundary }: TransactionTarget): void {
  const boundary = resolve(cleanupBoundary);
  const destination = resolve(target);
  if (destination === boundary || !destination.startsWith(`${boundary}/`)) {
    throw new Error(`TraceWeaver installer target escapes its cleanup boundary: ${destination}`);
  }

  let current = boundary;
  const relative = destination.slice(boundary.length + 1).split("/");
  for (const component of ["", ...relative]) {
    if (component) current = join(current, component);
    if (!pathExists(current)) continue;
    const stats = lstatSync(current);
    if (stats.isSymbolicLink()) {
      throw new Error(`TraceWeaver installer refuses a symbolic-link destination component: ${current}`);
    }
    if (current !== destination && !stats.isDirectory()) {
      throw new Error(`TraceWeaver installer destination ancestor is not a directory: ${current}`);
    }
    if (current === destination && !stats.isDirectory()) {
      throw new Error(`TraceWeaver installer target is not a directory: ${current}`);
    }
  }

  const realBoundary = realLocation(boundary);
  const realDestination = realLocation(destination);
  if (!realDestination.startsWith(`${realBoundary}/`)) {
    throw new Error(`TraceWeaver installer target is not contained by its real cleanup boundary: ${destination}`);
  }
}

function assertSafeTargetPaths(targets: TransactionTarget[]): void {
  for (const target of targets) assertSafeTargetPath(target);
}

function initiallyMissingParents(target: string, boundary: string): string[] {
  const parents: string[] = [];
  let current = dirname(target);
  while (current !== boundary && current.startsWith(`${boundary}/`)) {
    if (pathExists(current)) break;
    parents.push(current);
    current = dirname(current);
  }
  return parents;
}

function removeInitiallyMissingParents(parents: string[]): void {
  for (const parent of parents) {
    try {
      rmdirSync(parent);
    } catch {
      break;
    }
  }
}

class InstallTransaction {
  private readonly root: string;
  private readonly snapshots: TargetSnapshot[];

  constructor(targets: TransactionTarget[]) {
    this.root = mkdtempSync(join(tmpdir(), "traceweaver-install-transaction-"));
    const uniqueTargets = [...new Map(targets.map((entry) => [entry.target, entry])).values()];
    assertSafeTargetPaths(uniqueTargets);
    this.snapshots = uniqueTargets.map((entry, index) => {
      const existed = pathExists(entry.target);
      const modes: PathMode[] = [];
      const backupPath = join(this.root, `${index}`);
      if (existed) {
        capturePathModes(entry.target, "", modes);
        cpSync(entry.target, backupPath, { recursive: true, preserveTimestamps: true, verbatimSymlinks: true });
      }
      return {
        ...entry,
        existed,
        backupPath: existed ? backupPath : undefined,
        modes,
        initiallyMissingParents: existed ? [] : initiallyMissingParents(entry.target, entry.cleanupBoundary),
      };
    });
  }

  snapshotTargets(): string[] {
    return this.snapshots.map(({ target }) => target);
  }

  assertSafe(): void {
    assertSafeTargetPaths(this.snapshots);
  }

  rollback(): void {
    let rollbackFailure: unknown;
    for (const snapshot of [...this.snapshots].reverse()) {
      try {
        assertSafeTargetPath(snapshot);
        rmSync(snapshot.target, { recursive: true, force: true });
        if (snapshot.existed && snapshot.backupPath) {
          mkdirSync(dirname(snapshot.target), { recursive: true });
          assertSafeTargetPath(snapshot);
          cpSync(snapshot.backupPath, snapshot.target, { recursive: true, preserveTimestamps: true, verbatimSymlinks: true });
          assertSafeTargetPath(snapshot);
          restoreModes(snapshot.target, snapshot.modes);
        } else {
          removeInitiallyMissingParents(snapshot.initiallyMissingParents);
        }
      } catch (error) {
        rollbackFailure ??= error;
      }
    }
    this.dispose();
    if (rollbackFailure) throw rollbackFailure;
  }

  commit(): void {
    this.dispose();
  }

  private dispose(): void {
    rmSync(this.root, { recursive: true, force: true });
  }
}

function waitForSnapshotTestRelease(transaction: InstallTransaction): void {
  const signalPath = process.env.TRACEWEAVER_INSTALL_TEST_AFTER_SNAPSHOT_SIGNAL;
  if (!signalPath) return;
  if (!process.env.TRACEWEAVER_INSTALL_FAIL_PHASE) {
    throw new Error("TRACEWEAVER_INSTALL_TEST_AFTER_SNAPSHOT_SIGNAL requires TRACEWEAVER_INSTALL_FAIL_PHASE.");
  }
  writeFileSync(
    signalPath,
    `${JSON.stringify({ schemaVersion: "tw-installer-snapshot-scope/1", targets: transaction.snapshotTargets() })}\n`,
  );
  const releasePath = `${signalPath}.release`;
  const waitState = new Int32Array(new SharedArrayBuffer(4));
  const deadline = Date.now() + 5_000;
  while (!pathExists(releasePath)) {
    if (Date.now() >= deadline) {
      throw new Error(`Timed out waiting for installer snapshot test release: ${releasePath}`);
    }
    Atomics.wait(waitState, 0, 0, 10);
  }
}

function requestedFailurePhase(): InstallFailurePhase | undefined {
  const requested = process.env.TRACEWEAVER_INSTALL_FAIL_PHASE;
  if (!requested) return undefined;
  if (!installFailurePhases.includes(requested as InstallFailurePhase)) {
    throw new Error(`Unsupported TRACEWEAVER_INSTALL_FAIL_PHASE=${requested}`);
  }
  return requested as InstallFailurePhase;
}

function withInstallTransaction<T>(
  targets: TransactionTarget[],
  install: (fail: (phase: InstallFailurePhase) => void, guard: () => void) => T,
): T {
  const requested = requestedFailurePhase();
  const transaction = new InstallTransaction(targets);
  const guard = (): void => transaction.assertSafe();
  const fail = (phase: InstallFailurePhase): void => {
    guard();
    if (requested === phase) throw new Error(`TraceWeaver injected installer failure at ${phase}`);
  };
  try {
    waitForSnapshotTestRelease(transaction);
    fail("after_preflight_snapshot");
    const result = install(fail, guard);
    guard();
    transaction.commit();
    return result;
  } catch (error) {
    try {
      transaction.rollback();
      console.error("traceweaver_install_rollback=restored_prior_projection");
    } catch (rollbackError) {
      throw new Error(`TraceWeaver installation failed and rollback could not restore the prior projection: ${String(rollbackError)}`, {
        cause: error,
      });
    }
    throw error;
  }
}

function isTraceWeaverCallableTarget(target: string): boolean {
  const markerPath = join(target, callableMarkerFile);
  if (!existsSync(markerPath)) return false;
  try {
    const marker = JSON.parse(readFileSync(markerPath, "utf8")) as { plugin?: string; purpose?: string };
    return marker.plugin === "traceweaver-core" && marker.purpose === "direct-callable-skill-copy";
  } catch {
    return false;
  }
}

function assertCallableTargetsAvailable(targetCallableSkillsRoot: string, callableSkills: string[]): void {
  const conflicts = callableSkills
    .map((skillName) => join(targetCallableSkillsRoot, skillName))
    .filter((target) => existsSync(target) && !isTraceWeaverCallableTarget(target));
  if (conflicts.length === 0) return;
  throw new Error(
    [
      "TraceWeaver alpha installer will not overwrite existing global callable skill directories.",
      "Remove or relocate these directories, or install into an isolated --codexHome:",
      ...conflicts.map((target) => `  - ${target}`),
    ].join("\n"),
  );
}

function assertNoUnownedCeCallableTargets(targetCallableSkillsRoot: string): void {
  if (!existsSync(targetCallableSkillsRoot)) return;
  const conflicts = readdirSync(targetCallableSkillsRoot)
    .filter((entry) => entry.startsWith("ce-"))
    .map((entry) => join(targetCallableSkillsRoot, entry))
    .filter((target) => existsSync(target) && statSync(target).isDirectory() && !isTraceWeaverCallableTarget(target));
  if (conflicts.length === 0) return;
  throw new Error(
    [
      "TraceWeaver standalone installer found existing direct ce-* skill directories.",
      "Standalone TraceWeaver exposes tw-* and lfg user-facing skills only.",
      "Run scripts/traceweaver-reconcile-codex-host-skills to back up/remove external CE callables,",
      "or install into an isolated --codexHome:",
      ...conflicts.map((target) => `  - ${target}`),
    ].join("\n"),
  );
}

function isTraceWeaverInstallManifest(manifestPath: string): boolean {
  if (!existsSync(manifestPath)) return false;
  try {
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as { plugin?: string; target?: string; includeSkills?: boolean };
    return manifest.plugin === "traceweaver-core" && manifest.target === "codex" && manifest.includeSkills === true;
  } catch {
    return false;
  }
}

function legacyActiveSkillSurfaceStatus(legacyActiveSkillsRoot: string, manifestPath: string): "absent" | "removed_owned_upgrade" {
  if (!existsSync(legacyActiveSkillsRoot)) return "absent";
  if (!statSync(legacyActiveSkillsRoot).isDirectory()) {
    throw new Error(`TraceWeaver alpha installer found a legacy active skill path that is not a directory: ${legacyActiveSkillsRoot}`);
  }
  if (!isTraceWeaverInstallManifest(manifestPath)) {
    throw new Error(
      [
        "TraceWeaver alpha installer will not remove legacy active TraceWeaver skill surface without ownership proof.",
        `Legacy path: ${legacyActiveSkillsRoot}`,
        `Expected manifest: ${manifestPath}`,
        "Remove or relocate the legacy directory, or reinstall into an isolated --codexHome.",
      ].join("\n"),
    );
  }
  return "removed_owned_upgrade";
}

function findRetiredCallableSkillTargets(targetCallableSkillsRoot: string, callableSkills: string[]): string[] {
  if (!existsSync(targetCallableSkillsRoot)) return [];
  const activeSkills = new Set(callableSkills);
  return readdirSync(targetCallableSkillsRoot)
    .filter((entry) => !activeSkills.has(entry))
    .map((entry) => ({ skillName: entry, target: join(targetCallableSkillsRoot, entry) }))
    .filter(({ target }) => existsSync(target) && statSync(target).isDirectory() && isTraceWeaverCallableTarget(target))
    .map(({ skillName }) => skillName)
    .sort();
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

function renderInstallManifest(options: InstallOptions, projection: InstallProjection, targetPaths: Record<string, string>): string {
  return `${JSON.stringify(
    {
      plugin: "traceweaver-core",
      pluginVersion: projection.pluginManifest.version,
      pluginManifest: projection.pluginManifest,
      source: options.pluginRoot,
      target: options.target,
      includeSkills: options.includeSkills,
      standalone: true,
      externalCePluginRequired: false,
      ceDerivedComponentsOwner: "traceweaver-core",
      skills: projection.installedSkills,
      callableSkills: projection.callableSkills,
      internalPackagedSkills: projection.internalPackagedSkills,
      agents: projection.installedAgents,
      references: projection.installedReferences,
      modelRouting: projection.modelRouting,
      modelContextMap: projection.modelContext.map,
      modelContextProfile: projection.modelContext.profile,
      modelContextCapability: projection.modelContext.capability,
      generatedRoutingArtifact: targetPaths.generatedRoutingArtifact,
      skillExecutionContracts: projection.skillExecutionContracts,
      prompts: [],
      promptFiles: [],
      installer: basename(import.meta.path),
      ...targetPaths,
    },
    null,
    2,
  )}\n`;
}

function renderGeneratedRoutingArtifact(options: InstallOptions, projection: InstallProjection): string {
  return `${JSON.stringify(
    {
      schemaVersion: "tw-installed-model-context-routing/1",
      plugin: "traceweaver-core",
      pluginVersion: projection.pluginManifest.version,
      target: options.target,
      modelContextMap: projection.modelContext.map,
      modelContextProfile: projection.modelContext.profile,
      modelContextCapability: projection.modelContext.capability,
      generatedBy: basename(import.meta.path),
    },
    null,
    2,
  )}\n`;
}

function treeRecords(root: string, ignoredRelativePaths: Set<string> = new Set()): string[] {
  if (!pathExists(root) || !lstatSync(root).isDirectory() || lstatSync(root).isSymbolicLink()) {
    throw new Error(`TraceWeaver installed projection is not a real directory: ${root}`);
  }
  const records: string[] = [];
  const visit = (current: string, relative: string): void => {
    for (const entry of readdirSync(current).sort()) {
      const path = join(current, entry);
      const childRelative = relative ? join(relative, entry) : entry;
      if (ignoredRelativePaths.has(childRelative)) continue;
      const stats = lstatSync(path);
      if (stats.isSymbolicLink()) throw new Error(`TraceWeaver installed projection contains a symbolic link: ${path}`);
      if (stats.isDirectory()) {
        records.push(`${childRelative}\tdirectory`);
        visit(path, childRelative);
      } else if (stats.isFile()) {
        const digest = createHash("sha256").update(readFileSync(path)).digest("hex");
        records.push(`${childRelative}\tfile\t${digest}`);
      } else {
        throw new Error(`TraceWeaver installed projection contains an unsupported path type: ${path}`);
      }
    }
  };
  visit(root, "");
  return records;
}

function assertExactCopiedTree(source: string, target: string, ignoredTargetPaths: Set<string> = new Set()): void {
  if (treeRecords(source).join("\n") !== treeRecords(target, ignoredTargetPaths).join("\n")) {
    throw new Error(`TraceWeaver installed projection does not exactly match its source: ${target}`);
  }
}

function assertExactFile(source: string, target: string): void {
  if (!pathExists(target)) throw new Error(`TraceWeaver installed projection is missing ${target}`);
  const stats = lstatSync(target);
  if (stats.isSymbolicLink() || !stats.isFile() || !readFileSync(source).equals(readFileSync(target))) {
    throw new Error(`TraceWeaver installed file does not exactly match its source: ${target}`);
  }
}

function assertExactEntries(root: string, expected: string[]): void {
  const actual = readdirSync(root).sort();
  if (actual.join("\n") !== [...expected].sort().join("\n")) {
    throw new Error(`TraceWeaver installed directory entries do not match the manifest: ${root}`);
  }
}

function assertInstalledProjection(
  options: InstallOptions,
  projection: InstallProjection,
  targetPaths: Record<string, string>,
): void {
  const manifestPath = options.target === "codex"
    ? join(options.codexHome, ".codex", "traceweaver-core", "install-manifest.json")
    : join(options.geminiHome, "config", "plugins", "traceweaver-core", "install-manifest.json");
  const manifestStats = lstatSync(manifestPath);
  if (manifestStats.isSymbolicLink() || !manifestStats.isFile()) {
    throw new Error(`TraceWeaver install manifest is not a regular file: ${manifestPath}`);
  }
  if (readFileSync(manifestPath, "utf8") !== renderInstallManifest(options, projection, targetPaths)) {
    throw new Error("TraceWeaver install manifest bytes do not match the completed physical projection");
  }
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as {
    skills?: string[];
    callableSkills?: string[];
    internalPackagedSkills?: string[];
    agents?: string[];
    references?: string[];
    pluginManifestPath?: string;
  };
  for (const [field, expected] of Object.entries({
    skills: projection.installedSkills,
    callableSkills: projection.callableSkills,
    internalPackagedSkills: projection.internalPackagedSkills,
    agents: projection.installedAgents,
    references: projection.installedReferences,
  })) {
    const actual = manifest[field as keyof typeof manifest];
    if (!Array.isArray(actual) || actual.join("\n") !== expected.join("\n")) {
      throw new Error(`TraceWeaver install manifest ${field} does not match the physical projection`);
    }
  }

  const sourceSkillsRoot = join(options.pluginRoot, "skills");
  const sourceAgentsRoot = join(options.pluginRoot, "agents");
  const sourceReferencesRoot = join(options.pluginRoot, "references");
  assertExactFile(join(options.pluginRoot, projection.pluginManifest.sourcePath), targetPaths.pluginManifestPath);
  assertExactCopiedTree(sourceReferencesRoot, targetPaths.referencesRoot);

  if (options.target === "codex") {
    assertExactCopiedTree(sourceSkillsRoot, targetPaths.packagedSkillsRoot);
    assertExactEntries(targetPaths.agentsRoot, projection.installedAgents);
    for (const agent of projection.installedAgents) {
      const stats = lstatSync(join(targetPaths.agentsRoot, agent));
      if (stats.isSymbolicLink() || !stats.isFile() || stats.size === 0) {
        throw new Error(`TraceWeaver generated Codex agent is invalid: ${agent}`);
      }
    }
    for (const skillName of projection.callableSkills) {
      const callableTarget = join(targetPaths.callableSkillsRoot, skillName);
      assertExactCopiedTree(join(sourceSkillsRoot, skillName), callableTarget, new Set([callableMarkerFile]));
      if (!isTraceWeaverCallableTarget(callableTarget)) {
        throw new Error(`TraceWeaver callable ownership marker is invalid: ${callableTarget}`);
      }
    }
  } else {
    assertExactEntries(targetPaths.packagedSkillsRoot, projection.callableSkills);
    for (const skillName of projection.callableSkills) {
      assertExactCopiedTree(join(sourceSkillsRoot, skillName), join(targetPaths.packagedSkillsRoot, skillName));
    }
    if (!targetPaths.internalPackagedSkillsRoot) {
      throw new Error("TraceWeaver Antigravity projection is missing its controlled internal skill root");
    }
    assertExactEntries(targetPaths.internalPackagedSkillsRoot, projection.internalPackagedSkills);
    for (const skillName of projection.internalPackagedSkills) {
      assertExactCopiedTree(join(sourceSkillsRoot, skillName), join(targetPaths.internalPackagedSkillsRoot, skillName));
    }
    assertExactCopiedTree(sourceAgentsRoot, targetPaths.agentsRoot);
  }

  const routingPath = targetPaths.generatedRoutingArtifact;
  const routingStats = lstatSync(routingPath);
  if (routingStats.isSymbolicLink() || !routingStats.isFile()) {
    throw new Error(`TraceWeaver generated routing artifact is invalid: ${routingPath}`);
  }
  if (readFileSync(routingPath, "utf8") !== renderGeneratedRoutingArtifact(options, projection)) {
    throw new Error("TraceWeaver generated routing artifact bytes do not match the installed projection");
  }
  const routing = JSON.parse(readFileSync(routingPath, "utf8")) as { target?: string; pluginVersion?: string };
  if (routing.target !== options.target || routing.pluginVersion !== projection.pluginManifest.version) {
    throw new Error("TraceWeaver generated routing artifact does not match the installed target");
  }
  if (options.target === "antigravity") {
    const expectedVersion = `${JSON.stringify({ version: projection.pluginManifest.version })}\n`;
    if (!targetPaths.installedVersionPath || readFileSync(targetPaths.installedVersionPath, "utf8") !== expectedVersion) {
      throw new Error("TraceWeaver installed Antigravity version bytes do not match the source manifest");
    }
  }
}

// TRACEWEAVER: entrypoint=installCodexSkills; req=REQ-TW-016,REQ-TW-060,REQ-TW-121; trace=TRACE-TW-010,TRACE-TW-065,TRACE-TW-072; ver=VER-TW-019,VER-TW-085,VER-TW-092
function installCodexSkills(options: InstallOptions): void {
  assertTraceWeaverPlugin(options.pluginRoot, options.target);
  const projection = collectProjection(options);
  const codexRoot = join(options.codexHome, ".codex");
  const sourceSkillsRoot = join(options.pluginRoot, "skills");
  const sourceAgentsRoot = join(options.pluginRoot, "agents");
  const sourceReferencesRoot = join(options.pluginRoot, "references");
  const sourcePluginManifestPath = join(options.pluginRoot, projection.pluginManifest.sourcePath);
  const targetCallableSkillsRoot = join(codexRoot, "skills");
  const targetPackagedSkillsRoot = join(codexRoot, "traceweaver-core", "skills");
  const targetAgentsRoot = join(codexRoot, "agents", "traceweaver-core");
  const targetReferencesRoot = join(codexRoot, "traceweaver-core", "references");
  const manifestTargetDir = join(codexRoot, "traceweaver-core");
  const manifestPath = join(manifestTargetDir, "install-manifest.json");
  const pluginManifestTargetPath = join(manifestTargetDir, "plugin.json");
  const generatedRoutingArtifactPath = join(manifestTargetDir, generatedRoutingArtifactFile);
  const legacyActiveSkillsRoot = join(targetCallableSkillsRoot, "traceweaver-core");

  assertSafeTargetPaths([
    { target: manifestTargetDir, cleanupBoundary: options.codexHome },
    { target: targetAgentsRoot, cleanupBoundary: options.codexHome },
    { target: targetCallableSkillsRoot, cleanupBoundary: options.codexHome },
  ]);
  const legacyActiveSurfaceStatus = legacyActiveSkillSurfaceStatus(legacyActiveSkillsRoot, manifestPath);
  assertCallableTargetsAvailable(targetCallableSkillsRoot, projection.callableSkills);
  assertNoUnownedCeCallableTargets(targetCallableSkillsRoot);
  const retiredCallableSkills = findRetiredCallableSkillTargets(targetCallableSkillsRoot, projection.callableSkills);
  const transactionTargets = [
    { target: manifestTargetDir, cleanupBoundary: options.codexHome },
    { target: targetAgentsRoot, cleanupBoundary: options.codexHome },
    ...projection.callableSkills.map((skillName) => ({
      target: join(targetCallableSkillsRoot, skillName),
      cleanupBoundary: options.codexHome,
    })),
    { target: legacyActiveSkillsRoot, cleanupBoundary: options.codexHome },
    ...retiredCallableSkills.map((skillName) => ({
      target: join(targetCallableSkillsRoot, skillName),
      cleanupBoundary: options.codexHome,
    })),
  ];

  withInstallTransaction(
    transactionTargets,
    (fail, guard) => {
      guard();
      mkdirSync(dirname(targetPackagedSkillsRoot), { recursive: true });
      rmSync(targetPackagedSkillsRoot, { recursive: true, force: true });
      cpSync(sourceSkillsRoot, targetPackagedSkillsRoot, { recursive: true, preserveTimestamps: true });
      fail("after_skills_projection");

      rmSync(targetReferencesRoot, { recursive: true, force: true });
      if (existsSync(sourceReferencesRoot)) cpSync(sourceReferencesRoot, targetReferencesRoot, { recursive: true, preserveTimestamps: true });
      fail("after_references_projection");

      rmSync(targetAgentsRoot, { recursive: true, force: true });
      mkdirSync(targetAgentsRoot, { recursive: true });
      for (const agentFile of projection.installedAgents) {
        const baseName = agentFile.replace(/\.toml$/, "");
        const sourceFile = existsSync(join(sourceAgentsRoot, `${baseName}.md`)) ? `${baseName}.md` : `${baseName}.agent.md`;
        writeFileSync(join(targetAgentsRoot, agentFile), `${renderCodexAgentToml(parseAgentMarkdown(join(sourceAgentsRoot, sourceFile)))}\n`);
      }
      fail("after_agents_projection");

      mkdirSync(targetCallableSkillsRoot, { recursive: true });
      for (const skillName of projection.callableSkills) {
        const callableTarget = join(targetCallableSkillsRoot, skillName);
        rmSync(callableTarget, { recursive: true, force: true });
        cpSync(join(sourceSkillsRoot, skillName), callableTarget, { recursive: true, preserveTimestamps: true });
        writeCallableMarker(callableTarget, skillName);
      }
      fail("after_direct_callables_projection");

      mkdirSync(manifestTargetDir, { recursive: true });
      writeFileSync(generatedRoutingArtifactPath, renderGeneratedRoutingArtifact(options, projection));
      fail("after_generated_routing_projection");

      rmSync(pluginManifestTargetPath, { force: true });
      cpSync(sourcePluginManifestPath, pluginManifestTargetPath, { preserveTimestamps: true });
      fail("after_plugin_manifest_projection");

      writeFileSync(
        manifestPath,
        renderInstallManifest(options, projection, {
          packagedSkillsRoot: targetPackagedSkillsRoot,
          callableSkillsRoot: targetCallableSkillsRoot,
          agentsRoot: targetAgentsRoot,
          referencesRoot: targetReferencesRoot,
          pluginManifestPath: pluginManifestTargetPath,
          generatedRoutingArtifact: generatedRoutingArtifactPath,
        }),
      );
      fail("after_install_manifest_write");

      if (legacyActiveSurfaceStatus === "removed_owned_upgrade") rmSync(legacyActiveSkillsRoot, { recursive: true, force: true });
      for (const skillName of retiredCallableSkills) rmSync(join(targetCallableSkillsRoot, skillName), { recursive: true, force: true });
      fail("after_reconciliation_cleanup");
      assertInstalledProjection(options, projection, {
        packagedSkillsRoot: targetPackagedSkillsRoot,
        callableSkillsRoot: targetCallableSkillsRoot,
        agentsRoot: targetAgentsRoot,
        referencesRoot: targetReferencesRoot,
        pluginManifestPath: pluginManifestTargetPath,
        generatedRoutingArtifact: generatedRoutingArtifactPath,
      });
    },
  );

  console.log(`installed_plugin_version=${projection.pluginManifest.version}`);
  console.log(`installed_skill_directory_count=${projection.installedSkills.length}`);
  console.log(`installed_callable_skill_directory_count=${projection.callableSkills.length}`);
  console.log(`installed_internal_packaged_skill_directory_count=${projection.internalPackagedSkills.length}`);
  console.log(`installed_agent_toml_count=${projection.installedAgents.length}`);
  console.log(`installed_reference_file_count=${projection.installedReferences.length}`);
  console.log(`installed_manifest=${manifestPath}`);
  console.log(`installed_plugin_manifest=${pluginManifestTargetPath}`);
  console.log(`installed_model_context_map=${projection.modelContext.map.path}`);
  console.log(`installed_model_context_map_digest=${projection.modelContext.map.mapDigest}`);
  console.log(`installed_model_context_profile=${projection.modelContext.profile.path}`);
  console.log(`installed_model_context_capability_snapshot=${projection.modelContext.capability.snapshot}`);
  console.log(`installed_generated_routing_artifact=${generatedRoutingArtifactPath}`);
  console.log(`installed_model_routing_contract=${projection.modelRouting.contractReference}`);
  console.log(`installed_model_routing_contract_sha256=${projection.modelRouting.contractSha256}`);
  console.log(`installed_model_routing_main=${projection.modelRouting.codexMainModel}`);
  console.log(`installed_model_routing_subagent=${projection.modelRouting.codexSubagentModel}`);
  console.log(`installed_model_routing_effort=${projection.modelRouting.codexSubagentReasoningEffort}`);
  console.log(`installed_sec_registry=${projection.skillExecutionContracts.registryReference}`);
  console.log(`installed_sec_registry_sha256=${projection.skillExecutionContracts.registrySha256}`);
  console.log(`installed_sec_callable_count=${projection.skillExecutionContracts.callableCount}`);
  console.log("installed_manifest_prompts=0");
  console.log(`installed_packaged_skills_root=${targetPackagedSkillsRoot}`);
  console.log(`installed_callable_skills_root=${targetCallableSkillsRoot}`);
  console.log(`retired_direct_callable_skills=${retiredCallableSkills.length > 0 ? retiredCallableSkills.join(" ") : "none"}`);
  console.log(`legacy_active_namespaced_skill_surface=${legacyActiveSurfaceStatus}`);
  console.log(`installed_agents_root=${targetAgentsRoot}`);
  console.log(`installed_references_root=${targetReferencesRoot}`);
}

// TRACEWEAVER: entrypoint=installAntigravitySkills; req=REQ-TW-068,REQ-TW-121; trace=TRACE-TW-054,TRACE-TW-072; ver=VER-TW-069,VER-TW-092
function installAntigravitySkills(options: InstallOptions): void {
  assertTraceWeaverPlugin(options.pluginRoot, options.target);
  const projection = collectProjection(options);
  const sourceSkillsRoot = join(options.pluginRoot, "skills");
  const sourceAgentsRoot = join(options.pluginRoot, "agents");
  const sourceReferencesRoot = join(options.pluginRoot, "references");
  const sourcePluginManifestPath = join(options.pluginRoot, projection.pluginManifest.sourcePath);
  const targetPluginRoot = join(options.geminiHome, "config", "plugins", "traceweaver-core");
  const targetSkillsRoot = join(targetPluginRoot, "skills");
  const targetInternalSkillsRoot = join(targetPluginRoot, "internal-skills");
  const targetReferencesRoot = join(targetPluginRoot, "references");
  const targetAgentsRoot = join(targetPluginRoot, "agents");
  const targetManifestPath = join(targetPluginRoot, "plugin.json");
  const targetInstallManifestPath = join(targetPluginRoot, "install-manifest.json");
  const targetVersionPath = join(targetPluginRoot, "installed_version.json");
  const generatedRoutingArtifactPath = join(targetPluginRoot, generatedRoutingArtifactFile);

  const transactionTargets = [{ target: targetPluginRoot, cleanupBoundary: options.geminiHome }];
  assertSafeTargetPaths(transactionTargets);
  withInstallTransaction(transactionTargets, (fail, guard) => {
    guard();
    mkdirSync(targetPluginRoot, { recursive: true });
    rmSync(targetSkillsRoot, { recursive: true, force: true });
    mkdirSync(targetSkillsRoot, { recursive: true });
    for (const skillName of projection.callableSkills) {
      cpSync(join(sourceSkillsRoot, skillName), join(targetSkillsRoot, skillName), { recursive: true, preserveTimestamps: true });
    }
    rmSync(targetInternalSkillsRoot, { recursive: true, force: true });
    mkdirSync(targetInternalSkillsRoot, { recursive: true });
    for (const skillName of projection.internalPackagedSkills) {
      cpSync(join(sourceSkillsRoot, skillName), join(targetInternalSkillsRoot, skillName), { recursive: true, preserveTimestamps: true });
    }
    fail("after_skills_projection");

    rmSync(targetReferencesRoot, { recursive: true, force: true });
    if (existsSync(sourceReferencesRoot)) cpSync(sourceReferencesRoot, targetReferencesRoot, { recursive: true, preserveTimestamps: true });
    fail("after_references_projection");

    rmSync(targetAgentsRoot, { recursive: true, force: true });
    cpSync(sourceAgentsRoot, targetAgentsRoot, { recursive: true, preserveTimestamps: true });
    fail("after_agents_projection");

    // Antigravity exposes the callable package as its installed skill surface.
    fail("after_direct_callables_projection");

    writeFileSync(generatedRoutingArtifactPath, renderGeneratedRoutingArtifact(options, projection));
    fail("after_generated_routing_projection");

    rmSync(targetManifestPath, { force: true });
    cpSync(sourcePluginManifestPath, targetManifestPath, { preserveTimestamps: true });
    fail("after_plugin_manifest_projection");

    writeFileSync(
      targetInstallManifestPath,
      renderInstallManifest(options, projection, {
        packagedSkillsRoot: targetSkillsRoot,
        internalPackagedSkillsRoot: targetInternalSkillsRoot,
        callableSkillsRoot: targetSkillsRoot,
        agentsRoot: targetAgentsRoot,
        referencesRoot: targetReferencesRoot,
        pluginManifestPath: targetManifestPath,
        generatedRoutingArtifact: generatedRoutingArtifactPath,
        installedVersionPath: targetVersionPath,
      }),
    );
    writeFileSync(targetVersionPath, `${JSON.stringify({ version: projection.pluginManifest.version })}\n`);
    fail("after_install_manifest_write");
    fail("after_reconciliation_cleanup");
    assertInstalledProjection(options, projection, {
      packagedSkillsRoot: targetSkillsRoot,
      internalPackagedSkillsRoot: targetInternalSkillsRoot,
      callableSkillsRoot: targetSkillsRoot,
      agentsRoot: targetAgentsRoot,
      referencesRoot: targetReferencesRoot,
      pluginManifestPath: targetManifestPath,
      generatedRoutingArtifact: generatedRoutingArtifactPath,
      installedVersionPath: targetVersionPath,
    });
  });

  console.log(`installed_plugin_version=${projection.pluginManifest.version}`);
  console.log(`installed_skill_directory_count=${projection.callableSkills.length}`);
  console.log(`installed_callable_skill_directory_count=${projection.callableSkills.length}`);
  console.log(`installed_internal_packaged_skill_directory_count=${projection.internalPackagedSkills.length}`);
  console.log(`installed_agent_directory_count=${projection.installedAgents.length}`);
  console.log(`installed_reference_root=${targetReferencesRoot}`);
  console.log(`installed_manifest=${targetManifestPath}`);
  console.log(`installed_install_manifest=${targetInstallManifestPath}`);
  console.log(`installed_model_context_map=${projection.modelContext.map.path}`);
  console.log(`installed_model_context_map_digest=${projection.modelContext.map.mapDigest}`);
  console.log(`installed_model_context_profile=${projection.modelContext.profile.path}`);
  console.log(`installed_model_context_capability_snapshot=${projection.modelContext.capability.snapshot}`);
  console.log(`installed_generated_routing_artifact=${generatedRoutingArtifactPath}`);
  console.log(`installed_packaged_skills_root=${targetSkillsRoot}`);
  console.log(`installed_internal_packaged_skills_root=${targetInternalSkillsRoot}`);
}

function main(): void {
  const options = parseInstallArgs(process.argv.slice(2));
  if (options.target === "antigravity") installAntigravitySkills(options);
  else installCodexSkills(options);
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
