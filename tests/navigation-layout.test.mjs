import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
const read = file => readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
const html = read('index.html'), app = read('app.js'), i18n = read('i18n.js');

test('existing sections and accessible navigation are preserved', () => {
  for (const id of ['nav','navToggle','navLinks','navClose','hero','main','about','skills','experience','education','contact']) {
    assert.match(html, new RegExp(`id="${id}"`), id);
  }
  for (const view of ['company','project','tech']) {
    assert.match(html, new RegExp(`id="tab-${view}"`));
    assert.match(html, new RegExp(`id="view-${view}"`));
  }
  assert.match(html, /class="skip-link"/);
});

test('all project surfaces load a single dataset before the application', () => {
  assert.ok(html.indexOf('src="./portfolio-data.js') < html.indexOf('src="./app.js'));
  assert.match(html, /id="projectExplorer"/);
  assert.match(html, /id="techExplorer"/);
  assert.match(app, /window\.PORTFOLIO/);
  assert.doesNotMatch(app, /var CAREER_GRAPH/);
  assert.doesNotMatch(html, /id="projectDetails"/);
});

test('modal, keyboard navigation, reduced motion and language updates are supported', () => {
  assert.match(html, /aria-modal="true"/);
  assert.match(app, /setBackgroundInert/);
  assert.match(app, /ArrowLeft/);
  assert.match(app, /Escape/);
  assert.match(app, /languagechange/);
  assert.match(i18n, /languagechange/);
  assert.match(read('explorer.css'), /prefers-reduced-motion/);
});

test('static preview has no storage dependency or untrusted third-party script', () => {
  assert.doesNotMatch(app + i18n, /\b(?:localStorage|sessionStorage)\b/);
  assert.doesNotMatch(html, /<script[^>]+src="https?:/);
  assert.match(html, /explorer\.css\?v=10/);
  assert.match(html, /Content-Security-Policy/);
});

test('unjustified global average and SHA-256 encryption wording are removed', () => {
  assert.doesNotMatch(html + i18n, /평균 ETL 비용 절감|Avg ETL Cost Savings|PII Encryption \(SHA-256\)|SHA-256 PII 암호화/);
});
