# Source Basis

This public plugin package intentionally does not publish licensed,
controlled, internal, or purchase-only source names. Runtime agents must use
the distilled TraceWeaver rules in this skill, not source text or
source-specific summaries.

## Public Package Boundary

The risk-gap-change-control rules are original TraceWeaver guidance informed
by TraceWeaver product needs, implementation experience, and generally known
engineering concepts such as authority boundaries, traceability, evidence,
baselines, risk/gap/change control, and verification/validation separation.
Protected source names, page references, extraction notes, and internal
provenance are kept out of the public plugin package.

This skill does not represent certification, endorsement, or implementation
of any third-party publication.

## Runtime Boundary

- Use source context only to justify the existence of the distilled model.
- Do not quote protected source text in runtime findings or records.
- Do not copy source tables, source diagrams, page layouts, or examples.
- Mermaid diagrams in runtime material must be new TraceWeaver diagrams.
- Examples, schemas, and record shapes must stay TraceWeaver-specific.

## Update Rule

When adding a new source to a non-public provenance record, record:

- source ID
- exact source name
- access type
- what operational rule family it informed
- whether it is public, licensed/internal, or controlled/purchase-only
- any reuse restriction relevant to runtime agent material

Do not add protected source names or internal provenance details to this
public runtime package without a new public-hygiene review.
