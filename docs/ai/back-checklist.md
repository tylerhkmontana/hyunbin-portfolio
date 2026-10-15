# Backend Checklist

Use this checklist before, during, and after backend work.

The goal is to keep backend code safe, predictable, maintainable, consistent, and aligned with the existing project structure.

This checklist is for AI agents working on backend tasks.

---

## 1. Before Starting

For backend tasks, read only the required AI harness documents:

* `/docs/ai/agent-workflow.md`
* `/docs/ai/back-spec.md`
* `/docs/ai/back-checklist.md`
* `/docs/ai/back-forbidden-patterns.md`

Do not read additional docs unless the user explicitly provides them in the task prompt.

If the task seems to require information from another document, state what information is missing or which document may be useful.

Do not search unrelated docs automatically.

---

## 2. Understand the Task Scope

Before editing code, identify the backend task type.

Possible backend task types:

* API route
* server action
* database query
* validation update
* authentication update
* authorization update
* error handling update
* payment-related update
* order/status logic
* webhook handling
* backend utility
* backend refactor
* bug fix
* investigation only

Make the smallest reasonable change required to complete the task.

Do not modify unrelated files.

---

## 3. Inspect Existing Backend Patterns First

Before writing new code, inspect the existing implementation.

Check for:

* existing route handler patterns
* existing server action patterns
* existing validation patterns
* existing database access patterns
* existing auth checks
* existing authorization checks
* existing response format
* existing error format
* existing utility functions
* existing naming conventions
* existing file placement patterns

Do not create a new pattern before checking whether one already exists.

---

## 4. Project-Specific Spec Checklist

Check `/docs/ai/back-spec.md` for project-specific backend rules.

Confirm whether the task touches any project-specific rules such as:

* API response shape
* database conventions
* order/status logic
* authentication assumptions
* authorization rules
* validation conventions
* pricing/storage units
* error response conventions
* domain-specific business logic

If the user gives a new persistent backend rule, follow the Spec Update Rule in `/docs/ai/agent-workflow.md`.

Do not add temporary task instructions to `back-spec.md`.

---

## 5. API Contract Checklist

For API or server endpoint work, confirm:

* route path follows existing conventions
* HTTP method is appropriate
* request body is validated
* query parameters are validated
* route parameters are validated
* response shape follows existing pattern
* error response follows existing pattern
* status codes are appropriate
* authentication is handled if required
* authorization is handled if required
* sensitive data is not returned
* frontend impact is clear

Do not change existing API behavior unless the task requires it.

---

## 6. Validation Checklist

For all backend entry points, confirm validation for:

* request body
* query parameters
* route parameters
* form data
* server action input
* webhook payloads
* uploaded file metadata, if relevant

Validation should check:

* required fields
* field types
* enum values
* string length
* number ranges
* array length
* object shape
* nullable fields
* unknown fields, if relevant

Use the existing validation pattern.

Do not add a new validation library without approval.

---

## 7. Authentication Checklist

If the task touches protected data or protected actions, confirm:

* current user/session is checked
* unauthenticated users are rejected
* auth behavior follows existing patterns
* server-only auth utilities remain server-only
* client code does not receive secrets
* cookies/tokens are not exposed
* auth changes are not made unless required

Do not modify auth flow unless the task explicitly requires it.

---

## 8. Authorization Checklist

Confirm the user is allowed to perform the requested action.

Check authorization for:

* reading private records
* creating records
* updating records
* deleting records
* changing order status
* changing menu availability
* accessing admin routes
* accessing restaurant/store-specific data
* accessing customer data
* payment-related actions

Do not rely only on client-provided IDs or roles.

Scope database queries by the authenticated user, owner, restaurant, store, tenant, or project-specific ownership model.

---

## 9. Database Checklist

For database work, confirm:

* queries follow existing database access pattern
* queries are safely scoped
* only needed fields are selected
* unbounded queries are avoided
* pagination is used where needed
* updates have safe `where` conditions
* deletes have safe `where` conditions
* transactions are used when multiple related writes must succeed together
* race conditions are considered when relevant
* schema is not changed without approval

Do not create migrations unless explicitly approved.

---

## 10. Data Safety Checklist

Be careful with sensitive or important data.

Confirm that the task does not accidentally expose or corrupt:

* users
* sessions
* orders
* payments
* customer data
* restaurant/store records
* menu data
* private notes
* secrets
* credentials
* internal IDs, if the project avoids exposing them

Return only what the client needs.

Do not include stack traces or internal implementation details in production responses.

---

## 11. Error Handling Checklist

Confirm errors are handled intentionally.

Check:

* invalid input returns a clear error
* unauthenticated requests return the correct error
* unauthorized requests return the correct error
* missing records are handled
* database failures are handled
* third-party service failures are handled, if relevant
* unexpected errors return a safe response
* error format follows existing project pattern

Do not swallow errors silently.

Do not leak secrets or stack traces.

---

## 12. Response Shape Checklist

Confirm backend responses are consistent with existing patterns.

Check:

* success response shape
* error response shape
* status codes
* field names
* nullability
* arrays vs objects
* pagination metadata, if relevant
* date/time format, if relevant
* numeric units, if relevant

Do not change response shape unless the task requires it.

If response shape changes, mention frontend impact.

---

## 13. Server/Client Boundary Checklist

For Next.js projects, confirm server-only logic stays on the server.

Check:

* server-only modules are not imported into client components
* private environment variables are not used in client code
* database clients are not used in client components
* auth/session secrets are not exposed
* API keys remain server-only
* server actions do not expose sensitive behavior
* route handlers do not return unnecessary private data

Do not move backend logic into frontend files.

---

## 14. Environment Variable Checklist

If the task touches environment variables, confirm:

* no private variable is exposed to the client
* variable naming follows existing conventions
* new variables are not added without approval
* missing variable behavior is handled safely
* deployment impact is mentioned

Do not rename environment variables unless explicitly requested.

---

## 15. Third-Party Service Checklist

If the task touches an external service, confirm:

* existing integration pattern is followed
* secrets remain server-only
* request failures are handled
* retries or duplicate events are considered when relevant
* webhook signatures are verified when applicable
* idempotency is considered when relevant
* external response data is validated before use

Do not add a new provider SDK or service dependency without approval.

---

## 16. Payment or Order Logic Checklist

If the task touches payment, checkout, delivery, orders, or pricing, be extra careful.

Confirm:

* sensitive values are computed or verified server-side
* client-provided prices are not trusted
* duplicate requests are considered
* status transitions are valid
* cancellation/refund behavior is not changed accidentally
* third-party provider state is not assumed without verification
* database writes are safe and scoped
* frontend impact is mentioned

Do not modify payment or order-critical logic casually.

---

## 17. Caching and Revalidation Checklist

If the task touches caching, confirm:

* existing caching pattern is followed
* stale data risk is considered
* revalidation behavior is clear
* user-specific data is not cached publicly
* protected data is not leaked through cache
* frontend expectations are clear

Do not introduce a new caching layer unless explicitly approved.

---

## 18. Refactor Safety Checklist

If the task is a backend refactor, confirm:

* API behavior is preserved
* response shape is preserved
* validation behavior is preserved
* auth behavior is preserved
* database behavior is preserved
* error behavior is preserved
* frontend assumptions are preserved
* unrelated logic is not changed

Explain any intentional behavior changes.

---

## 19. Code Organization Checklist

Confirm:

* files are placed according to the current project structure
* names follow existing conventions
* imports are clean
* unused code is removed
* duplicated logic is avoided
* helper functions are small and focused
* no unrelated files are changed
* no new folders are created unless clearly necessary
* `/docs/ai` structure is not modified

Do not reorganize the project unless the user explicitly requests it.

---

## 20. Test and Verification Checklist

When possible, run or recommend relevant checks:

* typecheck
* lint
* unit tests
* integration tests
* route handler tests
* manual API request test
* database query verification
* auth/authorization verification

If tests cannot be run, state that they were not run.

Do not claim tests passed if they were not run.

---

## 21. Before Finishing

Before completing the task, provide:

* summary of what changed
* list of modified files
* backend routes, utilities, services, or database logic created or reused
* validation notes
* error-handling notes
* auth/security notes, if relevant
* database impact, if relevant
* frontend impact, if relevant
* confirmation that schema was not changed unless approved
* confirmation that dependencies were not added unless approved
* risks or unfinished parts
* whether `/docs/ai/current-handoff.md` was updated, if required
* whether any `back-spec.md` update was made or proposed

Do not claim everything is complete if there are unresolved issues.
