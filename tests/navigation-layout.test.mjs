import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const css = readFileSync(new URL('../style.css', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const i18n = readFileSync(new URL('../i18n.js', import.meta.url), 'utf8');

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

test('large screens use a wider hero reading measure and fluid menu gaps', () => {
  const desktop = css.slice(css.indexOf('@media (min-width: 769px)'));

  assert.match(desktop, /\.hero__content\s*\{[^}]*width:\s*min\(70vw,\s*1200px\);[^}]*max-width:\s*none;/);
  assert.match(desktop, /\.hero__subtitle\s*\{[^}]*max-width:\s*100%;/);
  assert.match(desktop, /\.nav__menu\s*\{[^}]*display:\s*flex;[^}]*gap:\s*clamp\(1rem,\s*2\.5vw,\s*2\.5rem\);/);
});

test('hero introduction breaks after its first sentence in both languages', () => {
  assert.match(html, /데이터 플랫폼을 설계 및 운영합니다\.\s*<br>\s*\{\{tenure\}\}/);
  assert.match(i18n, /cryptocurrency exchange\.\s*<br>\s*For \{\{tenure\}\}/);
});
