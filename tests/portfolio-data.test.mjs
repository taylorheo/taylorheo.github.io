import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
const context = { window: {} };
vm.runInNewContext(readFileSync(new URL('../portfolio-data.js', import.meta.url), 'utf8'), context);
const d = context.window.PORTFOLIO;
const techs = new Set(d.technologies.map(t => t.id));
const companies = new Set(d.companies.map(c => c.id));
const kinds = new Set(['implemented','context','poc','planned']);
const bilingual = value => typeof value?.ko === 'string' && value.ko.length && typeof value?.en === 'string' && value.en.length;

test('identifiers are unique and required original and resume projects exist', () => {
  assert.equal(new Set(d.projects.map(p=>p.id)).size, d.projects.length);
  assert.equal(techs.size, d.technologies.length);
  assert.equal(companies.size, d.companies.length);
  for (const id of ['p-braze','p1','p-poc','p2','p3','p4','p5','p-coverage','p6','p-migration','p-green2','p-bio','p-green1','p-survey']) {
    assert.ok(d.projects.some(p=>p.id===id), id);
  }
});

test('every project has bilingual details, a source, and evidence for every technology relationship', () => {
  for (const p of d.projects) {
    assert.ok(companies.has(p.company), p.id);
    for (const key of ['title','shortTitle','period','summary','impact']) assert.ok(bilingual(p[key]),`${p.id}.${key}`);
    assert.ok(p.sections.length, p.id);
    assert.ok(bilingual(p.source.label) && bilingual(p.source.note), p.id);
    assert.ok(['resume','existing','both'].includes(p.source.kind));
    assert.equal(new Set(p.stack.map(s=>s.tech)).size,p.stack.length,`${p.id} duplicate edge`);
    for(const s of p.stack) {
      assert.ok(techs.has(s.tech), `${p.id}:${s.tech}`);
      assert.ok(kinds.has(s.kind), `${p.id}:${s.kind}`);
      assert.ok(bilingual(s.role) && bilingual(s.evidence), `${p.id}:${s.tech} evidence`);
      assert.ok(s.source?.length, `${p.id}:${s.tech} source`);
    }
    for(const section of p.sections) {
      assert.ok(bilingual(section.heading));
      assert.ok(section.items.every(bilingual));
    }
  }
});

test('each directed relationship is explicit, sourced, and connects technologies in its project', () => {
  for(const p of d.projects) for(const edge of p.flows) {
    assert.ok(p.stack.some(s=>s.tech===edge.from), `${p.id}:${edge.from}`);
    assert.ok(p.stack.some(s=>s.tech===edge.to), `${p.id}:${edge.to}`);
    assert.ok(bilingual(edge.label) && bilingual(edge.evidence));
    assert.ok(['flow','migration','integration'].includes(edge.kind));
  }
});

test('earlier All-Purpose reuse and later Job Compute cost optimization remain separate', () => {
  const earlier=d.projects.find(p=>p.id==='p-migration');
  const later=d.projects.find(p=>p.id==='p3');
  assert.match(earlier.impact.ko,/5[~–-]20/);
  assert.match(later.impact.ko,/60[~–-]70/);
  assert.notEqual(earlier.period.ko,later.period.ko);
});

test('weather-station AWS never becomes an Amazon Web Services implementation', () => {
  for(const id of ['p-green2','p-bio','p-green1']) {
    const p=d.projects.find(p=>p.id===id);
    assert.ok(!p.stack.some(s=>s.tech==='aws'), id);
    assert.ok(p.stack.some(s=>s.tech==='weather-aws'), id);
  }
});

test('compound services and missing integration/research technologies are independently represented', () => {
  for(const id of ['lambda','eventbridge','bigquery','ga360','sap','transfer-family','gluecatalog','hive-metastore','msteams','presto','powerbi','konlpy','numpy','seaborn','scikit-learn','django','mongodb']) {
    assert.ok(techs.has(id),id);
    assert.ok(d.projects.some(p=>p.stack.some(s=>s.tech===id)),id);
  }
});

test('current employment is not rolled back and capstone year is not fabricated', () => {
  const p=d.projects.find(p=>p.id==='p-survey');
  assert.equal(p.start,null);
  assert.ok(d.projects.some(p=>p.company==='bithumb'));
});
