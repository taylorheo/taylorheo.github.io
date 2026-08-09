import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const css = readFileSync(new URL('../style.css', import.meta.url), 'utf8');

test('desktop hides mobile-only navigation controls', () => {
  assert.match(css, /\.nav__close,\s*\.nav__shortcuts\s*\{\s*display:\s*none;/);
});

test('mobile menu centers two horizontal social shortcuts', () => {
  const mobileNav = css.slice(css.indexOf('/* Mobile toggle */'));
  const shortcuts = mobileNav.match(/\.nav__shortcuts\s*\{([^}]*)\}/)?.[1] ?? '';

  assert.match(mobileNav, /\.nav__close\s*\{[^}]*display:\s*flex;/);
  assert.match(shortcuts, /display:\s*flex;/);
  assert.match(shortcuts, /width:\s*100%;/);
  assert.match(shortcuts, /justify-content:\s*center;/);
});
