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

test('about and contact text use the same width as their cards on desktop', () => {
  assert.match(html, /데이터 플랫폼의 인프라 설계와 자산 관리, 보안, FinOps를 포함한 운영 업무 전반/);
  assert.match(i18n, /platform infrastructure design and asset management, security, FinOps, day-to-day operations/);
  assert.match(css, /\.about__content\s*\{[^}]*grid-template-columns:\s*1fr;/);
  assert.match(css, /\.about__stats\s*\{[^}]*grid-template-columns:\s*repeat\(3,\s*1fr\);/);
  assert.match(css, /\.contact__links\s*\{[^}]*flex-wrap:\s*wrap;/);
  assert.doesNotMatch(css, /@media \(min-width: 1100px\)/);
  assert.match(css, /\.about__text\s*\{[^}]*max-width:\s*none;/);
  assert.match(css, /\.contact__text\s*\{[^}]*max-width:\s*none;/);
});

test('the stylesheet URL changes when desktop layout rules change', () => {
  assert.match(html, /href="\.\/style\.css\?v=6"/);
});
