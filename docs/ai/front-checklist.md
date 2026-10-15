# Frontend Checklist

Use this checklist before, during, and after frontend work.

The goal is to keep the frontend consistent, maintainable, reusable, accessible, responsive, and aligned with the existing project structure.

This checklist is for AI agents working on frontend tasks.

This project uses CSS Modules as the primary component styling system.

---

## 1. Before Starting

For frontend tasks, read only the required AI harness documents:

* `/docs/ai/agent-workflow.md`
* `/docs/ai/front-checklist.md`
* `/docs/ai/front-forbidden-patterns.md`

Do not read additional docs unless the user explicitly provides them in the task prompt.

If the task seems to require information from another document, state what information is missing or which document may be useful.

Do not search unrelated docs automatically.

---

## 2. Understand the Task Scope

Before editing code, identify the task type.

Possible frontend task types:

* new UI section
* component extraction
* component refactor
* page layout update
* responsive fix
* accessibility fix
* form UI
* navigation UI
* image/media layout
* frontend API integration
* visual cleanup
* bug fix

Make the smallest reasonable change required to complete the task.

Do not modify unrelated files.

---

## 3. Inspect Existing Patterns First

Before writing new code, inspect the existing implementation.

Check for:

* existing UI components
* existing layout components
* existing section patterns
* existing CSS Module files
* existing global CSS variables
* existing design token usage
* existing responsive media query patterns
* existing class naming conventions
* existing file placement patterns
* existing class composition or class merging utilities

Do not create a new pattern before checking whether one already exists.

---

## 4. Design Token Safety Checklist

Confirm that no design tokens are added, removed, renamed, or modified.

Do not change tokens unless the user explicitly requests it.

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

In CSS Modules, design values should come from approved CSS custom properties or existing project tokens.

Prefer:

```css
.card {
  padding: var(--space-6);
  color: var(--color-foreground);
  border-radius: var(--radius-md);
}
```

Avoid:

```css
.card {
  padding: 31px;
  color: #222222;
  border-radius: 13px;
}
```

If the task appears to require a token change, stop and report:

* what token seems necessary
* why existing tokens are not enough
* where the token would be used

Do not implement token changes without approval.

---

## 5. CSS Modules Checklist

This project uses CSS Modules as the primary styling system.

Confirm:

* component-specific styles are placed in a nearby `*.module.css` file
* global styles are not added for component-specific styling
* design values use approved CSS custom properties or existing tokens
* repeated component styles are centralized in shared components
* class names are semantic and readable
* CSS selectors stay shallow
* conditional classes use the existing class merge utility, such as `clsx`, `cn()`, or the established local equivalent
* media queries use the approved project breakpoint tokens or existing breakpoint pattern
* CSS Modules are imported with a conventional name, usually `styles`
* unused classes are removed

Example component usage:

```tsx
import styles from "./FeatureCard.module.css";

export function FeatureCard() {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>Fast ordering</h3>
      <p className={styles.description}>A cleaner ordering flow for customers.</p>
    </article>
  );
}
```

Example module:

```css
.card {
  padding: var(--space-6);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
}

.title {
  margin: 0;
  color: var(--color-foreground);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-tight);
}

.description {
  margin-block-start: var(--space-3);
  color: var(--color-muted-foreground);
  font-size: var(--font-size-md);
  line-height: var(--line-height-normal);
}
```

Avoid:

```tsx
<div className="feature-card">
```

when the project expects CSS Modules.

Prefer:

```tsx
<div className={styles.card}>
```

Avoid one-off global classes:

```css
.feature-card-special-red-box {
  color: #d21d1d;
  margin-top: 37px;
}
```

Prefer local module classes using tokens:

```css
.cardAlert {
  color: var(--color-danger);
  margin-block-start: var(--space-8);
}
```

---

## 6. Component Reuse Checklist

Before creating a new component, ask:

* Is there an existing component that already solves this?
* Can an existing component be composed?
* Can an existing component be safely extended?
* Is this a reusable UI primitive?
* Is this a section-specific component?
* Is this truly a one-off layout?

Use shared components for:

* buttons
* links
* inputs
* cards
* badges
* forms
* modals
* navigation items
* layout containers
* sections
* grids

Do not duplicate existing component patterns.

Core UI styles should live in the shared component’s own CSS Module, not in page-level modules.

---

## 7. Layout Checklist

Confirm the layout follows existing project patterns.

Check:

* container width
* section padding
* grid columns
* grid gap
* vertical rhythm
* alignment
* spacing between sections
* spacing inside components
* content width on wide screens
* mobile stacking behavior

Do not introduce a new layout pattern unless the task requires it.

Do not use hardcoded layout values unless explicitly approved.

Prefer token-driven layout styles:

```css
.section {
  padding-block: var(--section-padding-block);
}

.container {
  width: min(100% - var(--container-gutter) * 2, var(--container-max-width));
  margin-inline: auto;
}
```

Avoid:

```css
.section {
  padding-top: 93px;
  padding-bottom: 117px;
}

.container {
  max-width: 1173px;
}
```

---

## 8. Responsive Checklist

Check the UI across these viewport ranges:

* Mobile: 0px - 767px
* Tablet: 768px - 1023px
* Desktop: 1024px - 1535px
* Wide: 1536px and above

Confirm:

* no horizontal overflow
* text remains readable
* images scale correctly
* grids collapse appropriately
* spacing is not too large on mobile
* tap targets are large enough
* important content remains visible
* fixed heights do not break the layout
* wide screens do not stretch content endlessly

Use mobile-first CSS.

Use the project’s established media query pattern.

Prefer:

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
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--space-8);
  }
}
```

Do not use arbitrary breakpoints unless explicitly approved.

---

## 9. Typography Checklist

Check that typography follows the existing project system.

Confirm:

* heading levels are logical
* font sizes use existing tokens
* line heights are consistent
* text width is readable
* visual hierarchy follows existing patterns
* body text is not too dense
* labels, captions, and metadata are visually distinct
* mobile typography remains readable

Do not choose arbitrary font sizes for individual components.

Avoid:

```css
.title {
  font-size: 43px;
  line-height: 49px;
}
```

Prefer approved typography tokens:

```css
.title {
  font-size: var(--font-size-4xl);
  line-height: var(--line-height-tight);
}
```

---

## 10. Color and Theme Checklist

Check that colors follow the existing project theme.

Confirm:

* background colors use existing tokens
* text colors use existing tokens
* muted text is consistent
* accent color is used only where appropriate
* borders are consistent
* hover states are consistent
* focus states are visible
* color contrast is acceptable

Do not introduce a new color.

Avoid:

```css
.description {
  color: #6f6f6f;
}
```

Prefer:

```css
.description {
  color: var(--color-muted-foreground);
}
```

---

## 11. Semantic HTML Checklist

Use semantic elements where appropriate.

Check for:

* `header`
* `nav`
* `main`
* `section`
* `article`
* `aside`
* `footer`
* `button`
* `a`
* `form`
* `label`
* `input`
* `textarea`
* `select`
* `ul`
* `ol`
* `li`

Avoid using `div` when a semantic element is better.

Do not use clickable `div`s.

---

## 12. Accessibility Checklist

Confirm:

* interactive elements are keyboard accessible
* buttons are real `button` elements
* links are real `a` elements
* icon-only buttons have accessible names
* form inputs have labels
* focus states are visible
* heading order is logical
* images have appropriate `alt` text
* decorative images use empty alt text
* nav elements have useful labels when needed
* sections use headings or `aria-labelledby` when appropriate
* ARIA is not used unnecessarily

Prefer native HTML behavior over custom ARIA.

Focus styles should be token-driven and visible.

Example:

```css
.button:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: var(--focus-ring-offset);
}
```

---

## 13. Image and Media Checklist

For images and media, confirm:

* aspect ratio is preserved
* layout does not shift unexpectedly
* image sizes are appropriate
* meaningful images have alt text
* decorative images use empty alt text
* images do not overflow containers
* responsive behavior is handled
* media does not force fixed layout dimensions unnecessarily

Do not force image dimensions in a way that breaks aspect ratio.

Prefer:

```css
.image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
```

---

## 14. State and Interaction Checklist

For interactive UI, confirm:

* default state is clear
* hover state follows existing patterns
* focus state is visible
* active state is understandable
* disabled state is clear
* loading state exists when needed
* error state exists when needed
* empty state exists when needed

Do not add animation unless it is requested or already part of the existing component pattern.

Keep state styles in the component’s CSS Module unless they belong to a shared UI primitive.

Example:

```css
.button:hover {
  background: var(--color-accent-hover);
}

.button:disabled {
  cursor: not-allowed;
  opacity: var(--opacity-disabled);
}
```

---

## 15. Form Checklist

For forms, confirm:

* every input has a label
* required fields are clear
* validation errors are visible
* error messages are useful
* keyboard navigation works
* submit behavior is clear
* disabled state is handled
* loading state is handled
* form layout works on mobile
* shared form components are used when available

Do not create one-off input or button styles inside forms.

Shared form controls should own their CSS Module styles.

---

## 16. Code Organization Checklist

Confirm:

* files are placed according to the current project structure
* component names follow existing conventions
* CSS Module files follow existing naming conventions
* props are typed
* component API is simple
* repeated markup is extracted only when useful
* unnecessary abstractions are avoided
* imports are clean
* unused code is removed
* unused CSS classes are removed
* unrelated files are not changed

Do not create new folders unless the task clearly requires it.

Do not reorganize the project unless the user explicitly requests it.

Typical colocated pattern:

```txt
components/
  FeatureCard/
    FeatureCard.tsx
    FeatureCard.module.css
    index.ts
```

or, if the project uses flat colocated files:

```txt
components/
  FeatureCard.tsx
  FeatureCard.module.css
```

Follow the existing project structure.

---

## 17. Refactor Safety Checklist

If the task is a refactor, confirm:

* visual appearance is preserved unless change was requested
* component behavior is preserved
* responsive behavior is preserved
* accessibility is not reduced
* public component API is not broken
* unrelated code is not changed
* existing design tokens are not changed
* existing project structure is preserved
* global CSS is not polluted with component-specific styles

Explain any intentional visual or behavioral changes.

---

## 18. Before Finishing

Before completing the task, provide:

* summary of what changed
* list of modified files
* components created or reused
* CSS Module files created or modified
* confirmation that no design tokens were added, removed, renamed, or modified
* confirmation that hardcoded design values were avoided or explicitly approved
* accessibility considerations
* responsive behavior notes for mobile, tablet, desktop, and wide viewports
* risks or unfinished parts

If required by workflow, update:

* `/docs/ai/current-handoff.md`

Do not claim everything is complete if there are unresolved issues.
