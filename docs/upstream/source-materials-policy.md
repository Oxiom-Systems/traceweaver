# Source Materials Policy

This project may use a local-only source cache for standards, handbooks, public reference downloads, and extraction notes used while creating original distilled guidance.

Local cache path:

```text
.source-materials/
```

This folder is intentionally ignored by git.

## Allowed Uses

- Store user-provided licensed copies of standards or handbooks for local reading.
- Store public reference downloads, such as NASA public systems engineering material.
- Keep local extraction notes, page references, checksums, and source inventories.
- Use the material to create original project-specific summaries and operating models.

## Not Allowed

- Do not commit licensed standards, handbook PDFs, screenshots, copied tables, or long excerpts.
- Do not reproduce ISO, IEEE, INCOSE, or other protected source text in project artifacts.
- Do not treat local scratch notes as approved project guidance.
- Do not cite a local private file as the only source for a committed distilled artifact.

## Distillation Rule

Committed project artifacts must be original writing.

They may cite official or public source pages, but they should only include short, necessary quotations and should otherwise paraphrase concepts in project-specific language.

## Ground-Truth Workflow

1. Put source materials in `.source-materials/`.
2. Record where the source came from and whether it is public, licensed, or user-provided.
3. Draft local notes in `.source-materials/notes/`.
4. Write committed guidance from those notes using original language.
5. Link committed guidance to official/public source pages where possible.
6. Keep any uncertain or inferred guidance marked as provisional until reviewed against the ground-truth source.

Until licensed ground-truth sources are available, provisional distilled guidance may be drafted from public knowledge and public references, but it must be marked as provisional and must not claim standards compliance.
