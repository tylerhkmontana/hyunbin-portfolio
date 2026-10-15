# Backend Forbidden Patterns

This document defines backend patterns that AI agents must avoid.

The goal is to keep backend logic safe, predictable, maintainable, consistent, and easy to extend.

Agents must follow:

* the user’s task prompt
* `/docs/ai/agent-workflow.md`
* `/docs/ai/back-spec.md`
* `/docs/ai/back-checklist.md`
* this document
* existing backend patterns in the codebase

---

## 1. Do Not Invent Backend Architecture

Do not introduce new backend architecture unless the user explicitly requests it.

Do not create new patterns for:

* API routing
* database access
* authentication
* authorization
* validation
* error handling
* logging
* service layers
* repositories
* middleware
* server actions
* background jobs

Prefer existing backend structure and conventions.

If the current structure is unclear, inspect nearby files before creating new ones.

---

## 2. Do Not Change API Contracts Casually

Do not change request shapes, response shapes, status codes, or endpoint behavior unless the task explicitly requires it.

Avoid silently changing:

* field names
* field types
* response nesting
* error format
* HTTP status codes
* pagination behavior
* sorting behavior
* filtering behavior
* authentication requirements

If an API contract change is necessary, clearly explain:

* what changed
* why it changed
* what frontend or client code may be affected

Do not break existing consumers unless the user approved the change.

---

## 3. Do Not Skip Input Validation

Do not trust client input.

All backend entry points must validate incoming data.

This includes:

* API route body
* query parameters
* route parameters
* form data
* server action input
* webhook payloads
* uploaded file metadata

Avoid:

```ts
const { price } = await req.json();
await updatePrice(price);
```

Prefer validation before use:

```ts
const body = await req.json();
const result = schema.safeParse(body);

if (!result.success) {
  return errorResponse("Invalid request body", 400);
}

await updatePrice(result.data.price);
```

Use the existing validation pattern in the project.

Do not add a new validation library without approval.

---

## 4. Do Not Expose Sensitive Data

Do not return sensitive data from backend responses.

Never expose:

* passwords
* password hashes
* access tokens
* refresh tokens
* session secrets
* API keys
* private environment variables
* internal database IDs if the project avoids exposing them
* payment provider secrets
* full authentication objects
* unnecessary user data
* stack traces in production responses

Return only the fields needed by the client.

---

## 5. Do Not Bypass Authentication or Authorization

Do not remove, weaken, or bypass authentication or authorization checks.

Do not assume a user is allowed to perform an action just because the request reaches the endpoint.

Check authorization for actions such as:

* reading private data
* creating records
* updating records
* deleting records
* changing order status
* changing availability
* accessing admin features
* accessing restaurant/store data
* payment-related actions

Authentication answers: “Who is this user?”
Authorization answers: “Can this user do this action?”

Both may be required.

---

## 6. Do Not Modify Auth Logic Without Approval

Authentication and session logic are high-risk areas.

Do not modify auth behavior unless the task explicitly requires it.

This includes:

* login
* logout
* sessions
* cookies
* tokens
* OAuth configuration
* middleware auth checks
* admin checks
* role checks
* user lookup behavior

If auth changes are required, explain the risk before making the change.

---

## 7. Do Not Change Database Schema Without Approval

Do not add, remove, rename, or modify database tables, columns, indexes, constraints, relations, or migrations unless the user explicitly requests it or clearly approves it.

Do not create migrations automatically.

If the task seems to require a schema change, stop and report:

* what schema change seems necessary
* why the existing schema is not enough
* what code would be affected
* whether existing data may need migration

Wait for user approval before changing schema.

---

## 8. Do Not Write Unsafe Database Queries

Do not write queries that can cause security, data consistency, or performance issues.

Avoid:

* raw SQL without parameterization
* missing ownership checks
* missing tenant/store/user scoping
* unbounded queries
* N+1 query patterns
* fetching unnecessary columns
* updating records without a safe `where` condition
* deleting records without a safe `where` condition
* relying only on client-provided IDs for authorization

If raw SQL is necessary, use parameterized queries and explain why raw SQL is needed.

---

## 9. Do Not Mix Business Logic Into Route Handlers Unnecessarily

Do not put large amounts of business logic directly inside API route handlers if the project already separates logic into services, utilities, or server modules.

Route handlers should usually focus on:

* authentication
* authorization
* parsing input
* validation
* calling the appropriate backend logic
* returning a consistent response

Prefer existing service/helper patterns when available.

Do not create a new abstraction layer unless the project already uses one or the task clearly requires it.

---

## 10. Do Not Return Inconsistent Error Responses

Do not return random error formats.

Avoid mixing formats like:

```ts
return Response.json({ message: "Failed" }, { status: 400 });
return Response.json({ error: "Failed" }, { status: 400 });
return Response.json("Failed", { status: 400 });
```

Use the project’s existing error response format.

If no format exists, keep the response simple and consistent within the files you touch.

Do not expose internal implementation details to users.

---

## 11. Do Not Swallow Errors Silently

Do not catch errors and do nothing.

Avoid:

```ts
try {
  await updateOrder();
} catch (error) {}
```

Handle errors intentionally.

A valid error path should usually:

* log if appropriate
* return a safe error response
* preserve useful debugging context
* avoid leaking secrets
* avoid hiding data consistency issues

---

## 12. Do Not Use Environment Variables Unsafely

Do not expose server-only environment variables to the client.

Do not use private secrets in client components or frontend bundles.

Do not rename environment variables unless explicitly requested.

Do not add new required environment variables without explaining:

* variable name
* purpose
* where it is used
* whether it is server-only or public
* required deployment configuration

Only variables intentionally prefixed for public client use may be exposed to the client.

---

## 13. Do Not Add Dependencies Without Approval

Do not add new backend dependencies without explicit user approval.

This includes libraries for:

* authentication
* validation
* database access
* payments
* email
* file uploads
* queues
* logging
* monitoring
* caching
* rate limiting
* background jobs
* testing

If a dependency seems necessary, explain:

* why it is needed
* what problem it solves
* why existing tools are not enough
* what maintenance cost it adds

Do not install or import the dependency until approved.

---

## 14. Do Not Perform Destructive Operations Casually

Do not delete data, drop tables, clear records, reset state, or overwrite important records unless the user explicitly requests it.

Be especially careful with:

* orders
* users
* payments
* restaurant/store records
* menu data
* customer data
* auth/session data
* production-like data

Prefer soft delete if the project uses it.

If a destructive action is required, explain the impact before proceeding.

---

## 15. Do Not Ignore Race Conditions or Duplicate Requests

Backend logic should account for repeated or concurrent requests when relevant.

Be careful with:

* order status updates
* payment confirmation
* inventory changes
* menu availability changes
* webhook handling
* account creation
* coupon redemption
* retryable operations

Do not assume a request will only happen once.

Use existing idempotency or transaction patterns when available.

---

## 16. Do Not Trust Client-Side Prices, Roles, or Permissions

Do not trust values sent from the frontend for sensitive decisions.

Never trust client-provided:

* price
* discount
* tax
* fee
* user role
* admin status
* owner ID
* store ID access
* payment status
* order ownership
* permission flags

Compute or verify sensitive values on the server.

---

## 17. Do Not Break Frontend Assumptions Silently

If backend changes affect frontend behavior, do not leave it unexplained.

Mention when changes affect:

* response shape
* field names
* loading states
* error handling
* empty states
* authentication behavior
* status code handling
* cache behavior
* form submission behavior

If frontend updates are needed but not part of the task, report them as follow-up work.

---

## 18. Do Not Add Background Jobs, Caching, or Rate Limiting Casually

Do not introduce background job systems, queues, cache layers, cron jobs, or rate limiters unless the user explicitly requests it.

These features affect architecture and operations.

If needed, propose them first and explain:

* why they are needed
* what behavior changes
* how failures are handled
* what deployment requirements they add

---

## 19. Do Not Modify `/docs/ai` Structure

Do not add, remove, rename, split, merge, or reorganize files inside `/docs/ai` unless the user explicitly requests it.

Allowed only when permitted by `/docs/ai/agent-workflow.md`:

* update `/docs/ai/current-handoff.md` if required
* update `/docs/ai/back-spec.md` only under the Spec Update Rule
* update `/docs/ai/front-spec.md` only under the Spec Update Rule

Do not create new AI harness files automatically.

---

## 20. Do Not Finish Without a Backend Self-Check

Before finishing a backend task, verify:

* existing backend patterns were followed
* request input is validated
* authentication is preserved
* authorization is preserved
* sensitive data is not exposed
* error responses are consistent
* database access is safely scoped
* schema was not changed without approval
* dependencies were not added without approval
* frontend impact is mentioned if relevant
* modified files are listed
* unresolved risks are reported
