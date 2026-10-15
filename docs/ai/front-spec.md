# Frontend Spec

This document stores project-specific frontend rules.

Use this file only for frontend rules that must remain consistent across future tasks.

This document is not for general frontend best practices.
General frontend rules belong in:

* `/docs/ai/front-checklist.md`
* `/docs/ai/front-forbidden-patterns.md`

Agents may update this file only under the Spec Update Rule defined in:

* `/docs/ai/agent-workflow.md`

---

## Purpose

Use this document to record project-specific frontend decisions such as:

* repeated visual structure
* component behavior
* layout rules
* page composition rules
* modal/dialog rules
* navigation rules
* title/heading rules
* accent color usage rules
* responsive behavior rules
* project-specific accessibility expectations

---

## Do Not Add

Do not add:

* one-time task instructions
* temporary experiments
* vague style preferences
* abstract design words
* general frontend best practices
* implementation details that may change soon
* token changes unless explicitly approved
* rules that conflict with existing harness documents

---

## Project-Specific Frontend Rules

Add persistent frontend rules below.

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

<!-- Add project-specific frontend rules below this line. -->

### No Diagonal Arrows

Rule:
- Do not use diagonal-arrow glyphs or icons in this portfolio.

Applies to:
- Navigation, links, buttons, project imagery, and decorative elements on all pages.

Do not:
- Add diagonal arrows to indicate external links. Use descriptive link text instead.
