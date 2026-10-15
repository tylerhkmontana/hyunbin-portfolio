# Backend Spec

This document stores project-specific backend rules.

Use this file only for backend rules that must remain consistent across future tasks.

This document is not for general backend best practices.
General backend rules belong in:

* `/docs/ai/back-checklist.md`
* `/docs/ai/back-forbidden-patterns.md`

Agents may update this file only under the Spec Update Rule defined in:

* `/docs/ai/agent-workflow.md`

---

## Purpose

Use this document to record project-specific backend decisions such as:

* API response shape
* database conventions
* order/status rules
* authentication assumptions
* authorization rules
* validation conventions
* pricing/storage units
* error response conventions
* domain-specific business logic
* third-party integration rules

---

## Do Not Add

Do not add:

* one-time task instructions
* temporary experiments
* general backend best practices
* implementation details that may change soon
* unapproved database schema changes
* unapproved authentication changes
* unapproved dependency decisions
* rules that conflict with existing harness documents

---

## Project-Specific Backend Rules

Add persistent backend rules below.

Each rule should be concrete, specific, and easy for an AI agent to follow.

Recommended format:

```md
### Rule Name

Rule:
- ...

Applies to:
- ...

Do not:
- ...
```

---

<!-- Add project-specific backend rules below this line. -->
