# Responsive Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep desktop navigation uncluttered and make the full-screen mobile menu's close and social controls reliably separated.

**Architecture:** Retain the current navigation structure and menu JavaScript. Define desktop visibility for controls that are mobile-only, then override it inside the existing 768px mobile media query. A small Node built-in test will guard those visibility rules against regression.

**Tech Stack:** Static HTML, CSS media queries, vanilla JavaScript, Node.js built-in test runner.

## Global Constraints

- Preserve the existing 768px responsive breakpoint.
- Preserve menu open/close JavaScript and its accessibility attributes.
- Do not add dependencies or change navigation destinations.
- Mobile icon controls remain at least 44 by 44 pixels.

---

### Task 1: Establish mobile-only control visibility

**Files:**
- Create: `tests/navigation-layout.test.mjs`
- Modify: `style.css:314-552`

**Interfaces:**
- Consumes: `.nav__close`, `.nav__shortcuts`, and the `@media (max-width: 768px)` navigation rules.
- Produces: desktop-hidden and mobile-visible close/social controls with social shortcuts laid out horizontally.

- [ ] **Step 1: Write the failing test**

```js
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const css = readFileSync(new URL('../style.css', import.meta.url), 'utf8');

test('desktop hides mobile-only navigation controls', () => {
  assert.match(css, /\.nav__close,\s*\.nav__shortcuts\s*\{\s*display:\s*none;/);
});

test('mobile menu shows two horizontal social shortcuts', () => {
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.nav__close\s*\{[\s\S]*?display:\s*flex;/);
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.nav__shortcuts\s*\{[\s\S]*?display:\s*flex;[\s\S]*?justify-content:\s*center;/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/navigation-layout.test.mjs`

Expected: FAIL because desktop visibility and mobile centering rules do not yet exist.

- [ ] **Step 3: Add the minimal CSS rules**

Add a desktop-default rule before the mobile media query:

```css
.nav__close,
.nav__shortcuts {
  display: none;
}
```

Within the existing `@media (max-width: 768px)` rules, preserve the close button's `display: flex` and add centered, full-width shortcut alignment:

```css
.nav__shortcuts {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: var(--space-4);
  padding-bottom: var(--space-2);
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test tests/navigation-layout.test.mjs`

Expected: PASS with both visibility assertions succeeding.

- [ ] **Step 5: Commit**

```bash
git add style.css tests/navigation-layout.test.mjs
git commit -m "fix: refine responsive navigation controls"
```

### Task 2: Verify responsive interaction in the browser

**Files:**
- Modify: none
- Test: `tests/navigation-layout.test.mjs`

**Interfaces:**
- Consumes: the responsive CSS from Task 1 and `app.js` `setMenuOpen(open)` behavior.
- Produces: visual evidence that layout and interaction agree at desktop, tablet, and mobile widths.

- [ ] **Step 1: Run the automated CSS regression test**

Run: `node --test tests/navigation-layout.test.mjs`

Expected: PASS with 2 passing tests.

- [ ] **Step 2: Check the desktop layout at 1440px**

Open the site at 1440px wide and confirm the navigation has one horizontal menu row, with no visible close button or social shortcuts.

- [ ] **Step 3: Check the tablet layout at 768px**

Open the hamburger menu and confirm the close button is in the upper right, menu links are centered, and the two social shortcuts are side by side at the bottom.

- [ ] **Step 4: Check the narrow-phone layout at 375px**

Open and close the hamburger menu. Confirm the close button and each shortcut can be tapped independently, and no controls overlap.

- [ ] **Step 5: Commit verification-only changes if any were needed**

If visual verification requires no further source changes, do not create an empty commit. Otherwise, stage only the corrective files and use:

```bash
git commit -m "fix: tune mobile navigation spacing"
```
