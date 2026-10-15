# Frontend Forbidden Patterns

This document defines frontend patterns that AI agents must avoid.

The goal is to keep the frontend consistent, token-driven, reusable, accessible, responsive, and easy to modify.

Agents must follow the existing project structure, existing design tokens, existing components, existing CSS Module patterns, and the task prompt.

This project uses CSS Modules as the primary component styling system.

---

## 1. Do Not Hardcode Design Values

Do not hardcode one-off design values for:

* colors
* backgrounds
* spacing
* font sizes
* line heights
* border radius
* shadows
* container widths
* grid gaps
* z-index values
* breakpoints

Avoid:

```css
.card {
  margin-top: 37px;
  color: #232323;
  border-radius: 13px;
}
```

Prefer approved design tokens and CSS custom properties:

```css
.card {
  margin-block-start: var(--space-8);
  color: var(--color-foreground);
  border-radius: var(--radius-md);
}
```

Avoid:

```css
.panel {
  padding: 31px;
  max-width: 1173px;
  color: #1f1f1f;
}
```

Use the project’s existing token system, global CSS variables, and shared component styles.

---

## 2. Do Not Add, Remove, Rename, or Modify Design Tokens Without Approval

Do not add, remove, rename, or modify design tokens unless the user explicitly requests it.

This includes tokens for:

* color
* background
* text
* spacing
* font size
* line height
* border radius
* shadow
* container width
* grid
* breakpoint
* z-index

Design tokens are part of the frontend harness.

If the current task seems to require a new token, do not implement the token change.

Instead, state:

* what token seems necessary
* why existing tokens are not enough
* where the token would be used

Wait for user approval before changing tokens.

---

## 3. Do Not Add Unapproved Visual Design

Do not add visual design choices that were not requested or already established in the project.

Do not introduce unapproved:

* colors
* gradients
* shadows
* borders
* animations
* hover effects
* decorative backgrounds
* icons
* illustrations
* font styles
* layout patterns
* card styles
* visual motifs

If a design detail is not already present in the project, not defined in tokens, and not requested in the task, do not add it.

When unsure, preserve the existing visual pattern.

---

## 4. Do Not Create One-Off Core UI Styles

Do not create isolated styles for core UI elements.

This applies to:

* Button
* Link
* Input
* Textarea
* Select
* Checkbox
* Radio
* Card
* Badge
* Modal
* FormField
* Navigation item
* Tabs
* Dropdown
* Dialog

Avoid directly styling core UI elements inside page or section files:

```tsx
<button className={styles.submitButton}>
  Submit
</button>
```

```css
.submitButton {
  border-radius: var(--radius-full);
  background: var(--color-accent);
  padding: var(--space-3) var(--space-6);
  color: var(--color-background);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}
```

when a shared `Button` component already exists.

Prefer shared UI components:

```tsx
<Button variant="primary" size="md">
  Submit
</Button>
```

Core UI must be managed centrally through shared components and their own CSS Modules.

---

## 5. Do Not Bypass the CSS Modules Styling System

This project uses CSS Modules as the primary styling system.

CSS Modules must be used through a centralized design approach:

1. Design tokens are managed in global CSS variables or the approved token source.
2. Component-specific styles live in colocated `*.module.css` files.
3. Core UI elements are managed through shared components and their own CSS Modules.
4. Conditional classes use the project’s existing class merge utility, such as `clsx`, `cn()`, or the established local equivalent.
5. Page and section files compose existing components instead of redefining core styles.
6. Global CSS is reserved for resets, base styles, tokens, font variables, and truly global primitives.

Do not scatter repeated CSS Module declarations across the project.

Avoid duplicating the same button styling in multiple modules:

```css
.contactButton {
  border-radius: var(--radius-full);
  background: var(--color-accent);
  padding: var(--space-3) var(--space-6);
  color: var(--color-background);
}

.orderButton {
  border-radius: var(--radius-full);
  background: var(--color-accent);
  padding: var(--space-3) var(--space-6);
  color: var(--color-background);
}
```

Prefer:

```tsx
<Button variant="primary" size="md">
  Contact
</Button>

<Button variant="primary" size="md">
  Order Now
</Button>
```

Do not create custom global classes for component-specific styling.

Avoid:

```css
/* globals.css */
.marketing-card-title {
  color: var(--color-foreground);
  font-size: var(--font-size-xl);
}
```

Prefer:

```css
/* MarketingCard.module.css */
.title {
  color: var(--color-foreground);
  font-size: var(--font-size-xl);
}
```

Do not use Tailwind utility strings in component markup unless the project explicitly keeps Tailwind as an approved secondary system.

Avoid:

```tsx
<section className="grid gap-6 md:grid-cols-2 lg:gap-8">
```

Prefer:

```tsx
<section className={styles.grid}>
```

```css
.grid {
  display: grid;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .grid {
    gap: var(--space-8);
  }
}
```

---

## 6. Do Not Duplicate Existing Components

Before creating a new component, inspect the existing codebase.

Do not create a new component if an existing component can be reused or safely extended.

Avoid creating multiple components for the same visual pattern.

Bad pattern:

```txt
WorkCard.tsx
ProjectCard.tsx
PortfolioCard.tsx
CaseStudyCard.tsx
```

if they all represent the same basic card pattern.

Prefer extending or composing the existing component.

Do not duplicate:

* card structures
* button styles
* form field structures
* navigation items
* layout wrappers
* section wrappers
* repeated list item markup
* repeated CSS Module declarations for the same visual pattern

---

## 7. Do Not Use `div` for Everything

Use semantic HTML whenever possible.

Avoid:

```tsx
<div className={styles.nav}>
  <div>Home</div>
  <div>Work</div>
</div>
```

Prefer:

```tsx
<header>
  <nav className={styles.nav} aria-label="Primary navigation">
    <a className={styles.navLink} href="/">Home</a>
    <a className={styles.navLink} href="/work">Work</a>
  </nav>
</header>
```

Use appropriate elements:

* `header`
* `nav`
* `main`
* `section`
* `article`
* `aside`
* `footer`
* `button`
* `a`
* `ul`
* `ol`
* `li`
* `form`
* `label`
* `input`
* `textarea`
* `select`

Do not use clickable `div`s.

Avoid:

```tsx
<div className={styles.trigger} onClick={handleClick}>Open</div>
```

Prefer:

```tsx
<button className={styles.trigger} onClick={handleClick}>Open</button>
```

---

## 8. Do Not Misuse ARIA

Do not add meaningless ARIA labels.

Avoid:

```tsx
<section aria-label="section">
<div aria-label="card">
```

Prefer visible headings and `aria-labelledby`:

```tsx
<section className={styles.section} aria-labelledby="featured-work-heading">
  <h2 className={styles.title} id="featured-work-heading">Featured Work</h2>
</section>
```

Use `aria-label` mainly when there is no visible text, such as icon-only buttons:

```tsx
<button className={styles.iconButton} aria-label="Open navigation menu">
  <MenuIcon />
</button>
```

Do not use ARIA to hide bad HTML structure.

Fix the HTML first.

---

## 9. Do Not Remove Accessibility Behavior

Do not remove or break:

* keyboard navigation
* visible focus states
* form labels
* button semantics
* link semantics
* alt text for meaningful images
* accessible names for icon-only controls
* proper heading order
* proper form structure
* proper disabled states

Interactive elements must remain accessible by keyboard.

Do not remove focus styles unless replacing them with an equally visible focus state.

Avoid:

```css
.link:focus {
  outline: none;
}
```

Prefer:

```css
.link:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: var(--focus-ring-offset);
}
```

---

## 10. Do Not Create Layouts Without Responsive Behavior

All frontend layouts must work across these viewport ranges:

* Mobile: 0px - 767px
* Tablet: 768px - 1023px
* Desktop: 1024px - 1535px
* Wide: 1536px and above

Use mobile-first CSS.

Required checks:

* Mobile layout must work without horizontal overflow.
* Tablet layout must not look like a broken desktop layout.
* Desktop layout must use the intended grid/container structure.
* Wide layout must not stretch content endlessly.

Do not use one-off arbitrary breakpoints unless explicitly requested.

Avoid:

```css
.grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 913px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

Prefer the project’s approved breakpoint system:

```css
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--space-8);
  }
}
```

Avoid fixed heights unless the task explicitly requires them.

Avoid:

```css
.section {
  height: 900px;
}
```

Prefer flexible layouts:

```css
.section {
  min-height: 100svh;
  padding-block: var(--section-padding-block);
}
```

---

## 11. Do Not Add New Libraries Without Approval

Do not add new packages unless the user explicitly approves them.

This includes libraries for:

* styling
* animation
* icons
* forms
* state management
* UI components
* data fetching
* validation
* routing
* charts

Before proposing a dependency, explain:

* why it is needed
* what problem it solves
* why existing tools are not enough
* the long-term maintenance cost

Do not install or import a new dependency without approval.

Do not add Sass, Less, Styled Components, Emotion, Tailwind, or another styling system unless the user explicitly approves it.

---

## 12. Do Not Over-Engineer Components

Do not introduce complex abstractions unless the task clearly requires them.

Avoid creating:

* config-driven section renderers
* generic component factories
* unnecessary variant systems
* deeply nested compound components
* reusable abstractions for a pattern used only once
* components with excessive props
* layout systems that duplicate existing layout primitives

Prefer simple, readable components.

Allowed:

* extracting repeated markup
* creating shared UI primitives
* creating small section-specific components
* reusing existing components
* adding simple variants to an existing component when clearly needed
* adding local CSS Module classes for component-specific structure

If a component is only used once and the pattern is not stable yet, keep it simple.

---

## 13. Do Not Change Visual Design Accidentally

When refactoring, preserve the existing visual appearance unless the task asks for design changes.

Refactoring should not silently change:

* spacing
* alignment
* font size
* colors
* section height
* responsive behavior
* hover states
* focus states
* component hierarchy
* layout density

If visual changes are necessary, explicitly explain them.

---

## 14. Do Not Ignore the Existing Project Structure

Do not place files randomly.

Follow the current project structure.

Before creating a new file:

* inspect nearby files
* follow existing naming conventions
* follow existing import patterns
* follow existing component organization
* follow existing route organization
* follow existing CSS Module organization

Do not create a new folder unless the task clearly requires it.

If a new folder or structure is necessary, explain why before making the change.

Do not reorganize the project structure unless the user explicitly requests it.

---

## 15. Do Not Pollute Global CSS

Do not place component-specific styles in global CSS.

Global CSS should be limited to:

* CSS reset or normalize rules
* base element styles
* font variables
* design tokens
* theme variables
* app-level layout primitives that are already established
* browser-level defaults

Avoid:

```css
/* globals.css */
.heroCard {
  padding: var(--space-8);
  background: var(--color-surface);
}
```

Prefer:

```css
/* HeroCard.module.css */
.card {
  padding: var(--space-8);
  background: var(--color-surface);
}
```

Do not use global CSS as a shortcut to avoid importing a CSS Module.

---

## 16. Do Not Create Fragile CSS Selectors

Keep selectors shallow, local, and predictable.

Avoid deeply nested selectors:

```css
.page .section .grid .card .content h3 span {
  color: var(--color-accent);
}
```

Prefer explicit local classes:

```css
.titleAccent {
  color: var(--color-accent);
}
```

Avoid styling by DOM position when a local class is clearer.

Avoid:

```css
.card > div > h3:first-child {
  margin-block-start: 0;
}
```

Prefer:

```css
.title {
  margin-block-start: 0;
}
```

Do not rely on generated CSS Module class names.

---

## 17. Do Not Finish Without a Self-Check

Before finishing a frontend task, verify:

* no design tokens were added, removed, renamed, or modified
* existing CSS variables and tokens were used
* hardcoded design values were avoided
* existing components were reused where appropriate
* no duplicate UI pattern was introduced
* CSS Module files are colocated according to project convention
* global CSS was not polluted
* selectors are shallow and maintainable
* semantic HTML was used
* accessibility was preserved
* responsive behavior was checked for mobile, tablet, desktop, and wide viewports
* current project structure was followed
* modified files are listed
* unfinished or risky parts are mentioned
