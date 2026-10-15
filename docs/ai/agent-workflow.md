# Agent Workflow

This document defines how AI agents should work inside this project.

The goal is to keep AI-assisted development consistent, focused, safe, maintainable, and easy to continue across sessions.

Agents must follow:

1. the user’s latest task prompt
2. this workflow document
3. the relevant project-specific spec
4. the relevant checklist
5. the relevant forbidden-patterns document
6. the existing codebase patterns

---

## 1. Core Principle

Do not guess the project direction.

Do not invent new architecture, design patterns, styling systems, tokens, folder structures, abstractions, or domain rules unless the user explicitly asks for them.

Prefer:

* existing files
* existing components
* existing utilities
* existing conventions
* existing project structure
* existing design tokens
* existing API patterns
* existing domain rules
* existing project-specific specs

Make the smallest reasonable change that completes the task.

Do not perform unrelated cleanup.

Do not rewrite large parts of the project unless the user explicitly requests it.

---

## 2. AI Harness Directory Rule

The `/docs/ai` directory is the project’s AI harness directory.

Agents must not add, remove, rename, split, merge, or reorganize files inside `/docs/ai` unless the user explicitly requests it.

Expected AI harness files:

```txt
/docs/ai/agent-workflow.md

/docs/ai/front-spec.md
/docs/ai/front-checklist.md
/docs/ai/front-forbidden-patterns.md

/docs/ai/back-spec.md
/docs/ai/back-checklist.md
/docs/ai/back-forbidden-patterns.md

/docs/ai/current-handoff.md
```

Allowed actions without additional approval:

* read the required harness documents
* update `/docs/ai/current-handoff.md` when required by the workflow
* update `/docs/ai/front-spec.md` or `/docs/ai/back-spec.md` only under the Spec Update Rule in this document

Not allowed without explicit user approval:

* creating a new file inside `/docs/ai`
* deleting a file inside `/docs/ai`
* renaming a file inside `/docs/ai`
* moving a file inside `/docs/ai`
* splitting one harness document into multiple files
* merging multiple harness documents
* changing the purpose of an existing harness document

If a required harness file is missing, do not create it automatically.

Instead, report the missing file and continue with the available context if the task can still be completed safely.

---

## 3. Required Reading Rules

Agents should not read unrelated project documents automatically.

Read only the AI harness documents required for the current task type.

### For Frontend Tasks

Read:

* `/docs/ai/agent-workflow.md`
* `/docs/ai/front-spec.md`
* `/docs/ai/front-checklist.md`
* `/docs/ai/front-forbidden-patterns.md`

Frontend tasks include:

* UI changes
* layout changes
* styling
* Tailwind CSS
* components
* responsive design
* accessibility
* forms
* navigation
* images/media
* frontend refactors
* frontend API integration

### For Backend Tasks

Read:

* `/docs/ai/agent-workflow.md`
* `/docs/ai/back-spec.md`
* `/docs/ai/back-checklist.md`
* `/docs/ai/back-forbidden-patterns.md`

Backend tasks include:

* API routes
* database logic
* authentication
* authorization
* server actions
* validation
* backend utilities
* payment logic
* order processing
* backend refactors

### For Full-Stack Tasks

Read:

* `/docs/ai/agent-workflow.md`
* `/docs/ai/front-spec.md`
* `/docs/ai/front-checklist.md`
* `/docs/ai/front-forbidden-patterns.md`
* `/docs/ai/back-spec.md`
* `/docs/ai/back-checklist.md`
* `/docs/ai/back-forbidden-patterns.md`

Full-stack tasks include:

* frontend and backend changes in the same task
* API contract changes
* database changes that affect UI
* form submission flows
* admin dashboard flows
* order management flows
* authentication flows used by the UI

---

## 4. Additional Document Rule

Do not read additional documents unless the user explicitly provides them in the task prompt.

If the task seems to require additional context from another document, state what information is missing or which document may be useful.

Do not search unrelated docs automatically.

Allowed:

```txt
Read `/docs/engineering/api-contract.md` and implement this endpoint.
```

Allowed:

```txt
Use `/docs/design/layout-system.md` as reference for this page.
```

Not allowed:

```txt
The user asked for a button change, so I will read every file under `/docs/design`.
```

---

## 5. Task Classification

Before editing code, classify the task as one of:

* Frontend
* Backend
* Full-stack
* Documentation
* Refactor
* Bug fix
* Investigation only

If the task type is unclear, infer the most likely type from the files and requested change.

Do not ask for clarification unless the task cannot be safely attempted.

---

## 6. Before Editing

Before making changes:

1. Read the required AI harness documents for the task type.
2. Inspect the relevant existing files.
3. Find existing components, utilities, patterns, and conventions.
4. Identify the smallest reasonable implementation path.
5. Avoid changing unrelated files.
6. Avoid introducing new dependencies.
7. Avoid creating new folders unless clearly necessary.
8. Avoid modifying `/docs/ai` files unless allowed by this workflow.

Do not start by creating new architecture.

Do not start by rewriting large parts of the project.

---

## 7. Frontend Workflow

For frontend tasks:

1. Follow `/docs/ai/front-spec.md`.
2. Follow `/docs/ai/front-checklist.md`.
3. Avoid everything listed in `/docs/ai/front-forbidden-patterns.md`.
4. Use existing Tailwind theme utilities.
5. Do not use arbitrary Tailwind values unless explicitly approved.
6. Do not add, remove, rename, or modify design tokens unless explicitly approved.
7. Use shared UI components for core UI elements.
8. Preserve existing visual patterns unless the task asks for design changes.
9. Check mobile, tablet, desktop, and wide viewport behavior.
10. Use semantic HTML where appropriate.
11. Preserve accessibility behavior.

Required viewport ranges:

* Mobile: 0px - 767px
* Tablet: 768px - 1023px
* Desktop: 1024px - 1535px
* Wide: 1536px and above

Tailwind CSS is the primary styling system.

Do not add CSS Modules or custom CSS files for component-specific styling unless the project already uses that pattern or the user explicitly requests it.

---

## 8. Backend Workflow

For backend tasks:

1. Follow `/docs/ai/back-spec.md`.
2. Follow `/docs/ai/back-checklist.md`.
3. Avoid everything listed in `/docs/ai/back-forbidden-patterns.md`.
4. Follow existing API patterns.
5. Follow existing validation patterns.
6. Follow existing database access patterns.
7. Do not modify authentication or authorization behavior unless required.
8. Do not change the database schema unless explicitly requested or clearly necessary.
9. Do not expose sensitive data.
10. Return consistent response shapes.
11. Handle errors intentionally.

If a backend change affects the frontend, mention the expected frontend impact.

If a frontend change depends on backend behavior, mention the backend assumption.

---

## 9. Spec Update Rule

`front-spec.md` and `back-spec.md` store project-specific rules that must remain consistent across future tasks.

Agents may update the relevant `*-spec.md` only when the user clearly states a rule that should persist across the project.

Examples of persistent rule language:

* "Always..."
* "From now on..."
* "In this project..."
* "All modals should..."
* "Every page should..."
* "Never use this pattern..."
* "This should be the standard pattern..."
* "Use this as the default pattern..."

Do not add temporary task instructions to `*-spec.md`.

Temporary instructions belong only to the current task.

### Frontend Spec Updates

Update `/docs/ai/front-spec.md` only for project-specific frontend rules such as:

* repeated visual structure
* component behavior
* layout rules
* page composition rules
* modal/dialog rules
* navigation rules
* title/heading rules
* accent color usage rules
* recurring responsive behavior
* project-specific accessibility expectations

Do not use `front-spec.md` for general frontend best practices.

General frontend best practices belong in:

* `/docs/ai/front-checklist.md`
* `/docs/ai/front-forbidden-patterns.md`

### Backend Spec Updates

Update `/docs/ai/back-spec.md` only for project-specific backend rules such as:

* API response shape
* database conventions
* order/status rules
* authentication assumptions
* authorization rules
* validation conventions
* pricing/storage units
* error response conventions
* domain-specific business logic

Do not use `back-spec.md` for general backend best practices.

General backend best practices belong in:

* `/docs/ai/back-checklist.md`
* `/docs/ai/back-forbidden-patterns.md`

### When Unsure

If it is unclear whether a user instruction should become a persistent project rule, do not update the spec automatically.

Instead, include a short proposal in the final response:

```txt
Spec update candidate:
- Proposed rule: [rule]
- Suggested file: /docs/ai/front-spec.md or /docs/ai/back-spec.md
- Reason: [why this appears to be a recurring project-specific rule]
```

Wait for user approval before adding it.

### Do Not Add These to Spec

Do not add:

* one-time task instructions
* temporary experiments
* vague style preferences
* abstract design words
* implementation details that may change soon
* personal opinions not stated as project rules
* rules that conflict with existing harness documents
* token changes unless explicitly approved

### Required Final Report for Spec Updates

If a spec file was updated, mention:

* which spec file changed
* what rule was added
* why it was considered persistent

---

## 10. Dependency Rule

Do not add new dependencies without explicit user approval.

This includes libraries for:

* UI components
* styling
* animation
* icons
* forms
* validation
* state management
* data fetching
* authentication
* payments
* charts
* testing

If a dependency seems necessary, explain:

* why it is needed
* what problem it solves
* why the existing stack is not enough
* what maintenance cost it adds

Do not install or import the dependency until approved.

---

## 11. Project Structure Rule

Follow the current project structure.

Before creating a new file:

* inspect nearby files
* follow existing naming conventions
* follow existing import patterns
* follow existing component organization
* follow existing route organization

Do not create a new folder unless the task clearly requires it.

If a new folder or structure is necessary, explain why before making the change.

Do not reorganize the project unless the user explicitly requests it.

This rule also applies to `/docs/ai`.

Do not add, remove, rename, or reorganize AI harness files unless the user explicitly requests it.

---

## 12. Refactor Rule

Refactors must preserve behavior unless the task explicitly asks for a behavior change.

For frontend refactors, preserve:

* visual appearance
* layout
* responsive behavior
* accessibility behavior
* component API
* user interactions

For backend refactors, preserve:

* API behavior
* response shape
* validation behavior
* auth behavior
* database behavior
* error behavior

Do not combine refactoring with unrelated feature work.

---

## 13. Implementation Style

Prefer simple, readable code.

Avoid:

* unnecessary abstractions
* generic component factories
* config-driven systems unless already used
* excessive props
* duplicate components
* unrelated cleanup
* large rewrites
* clever code that is hard to maintain

Allowed:

* extracting repeated markup when useful
* reusing existing utilities
* creating small focused components
* adding simple variants to existing components when clearly needed
* fixing directly related issues found during the task

---

## 14. Investigation-Only Tasks

If the task is investigation-only, do not edit files.

Instead, provide:

* what was inspected
* what was found
* likely cause
* recommended fix
* files that would need changes

Do not make changes unless the user asks for implementation.

---

## 15. Development Server Rule

Do not start a new development server after every update.

Before attempting to launch a development server:

1. Check whether a development server for the project is already running in the user’s terminal.
2. If one is running, use that existing server to verify the update.
3. Do not start a duplicate server or use another port unnecessarily.
4. If no development server is running, ask the user to launch one.

Agents should validate updates through the project’s currently running development server whenever possible.

Do not assume a new server is required simply because files were changed.

---

## 16. Handoff Rule

At the end of a development session, update `/docs/ai/current-handoff.md` if the file exists and the user asked for handoff tracking or the current task prompt requires it.

Do not create `/docs/ai/current-handoff.md` automatically if it does not exist.

If handoff tracking is required but the file is missing, report that it is missing.

The handoff should be short and practical.

Include:

```md
# Current Handoff

## Completed
- ...

## Modified Files
- ...

## Current State
- ...

## Next Steps
- ...

## Risks / Warnings
- ...
```

Do not let `current-handoff.md` become a long changelog.

Keep only the latest useful project state.

---

## 17. Before Finishing

Before finishing any development task, provide a short final report.

Include:

* summary of what changed
* list of modified files
* components, utilities, routes, or APIs created or reused
* important decisions made
* tests/checks run, if any
* risks or unfinished parts
* whether `/docs/ai/current-handoff.md` was updated, if required
* whether any `*-spec.md` update was made or proposed

For frontend tasks, also include:

* confirmation that design tokens were not changed
* confirmation that arbitrary Tailwind values were avoided or explicitly approved
* responsive behavior notes
* accessibility notes

For backend tasks, also include:

* validation notes
* error-handling notes
* auth/security notes, if relevant
* database impact, if relevant

Do not claim a task is complete if unresolved issues remain.

---

## 18. Conflict Resolution

If the task prompt conflicts with an AI harness document, follow the task prompt only when the user clearly overrides the harness rule.

If the conflict involves safety, data loss, authentication, authorization, payment logic, database schema, `/docs/ai` structure, or design tokens, stop and explain the conflict before proceeding.

If two harness documents conflict, follow this priority order:

1. User’s latest task prompt
2. `/docs/ai/agent-workflow.md`
3. `/docs/ai/front-spec.md` or `/docs/ai/back-spec.md`
4. Task-specific checklist
5. Task-specific forbidden patterns
6. Existing codebase patterns

Do not silently ignore conflicts.

---

## 19. Default Behavior

When in doubt:

* make the smallest reasonable change
* preserve existing behavior
* preserve existing design
* reuse existing components
* use existing tokens
* follow existing structure
* avoid new dependencies
* avoid new abstractions
* do not modify `/docs/ai` structure
* report uncertainty clearly
