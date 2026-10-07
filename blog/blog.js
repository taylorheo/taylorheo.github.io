/* Blog shell: navigation, theme toggle, post list filtering, and reader helpers.
   Runs on blog/index.html, generated blog/<slug>/index.html, and (for the latest-posts
   block) the main index.html. No storage, no third-party scripts, no network calls. */
(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const lang = () => document.documentElement.lang === 'en' ? 'en' : 'ko';
  const t = (ko, en) => lang() === 'en' ? en : ko;
  const fmtDate = iso => {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '';
    const ymd = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
    return lang() === 'en' ? ymd : ymd.replace(/-/g, '.');
  };
  const sourceName = s => s === 'velog' ? 'velog' : t('이 사이트', 'This site');
  const posts = () => (window.BLOG_POSTS?.posts ?? []).slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  /* ---------------------------------------------------------------------- */
  /* Shared chrome (nav menu, theme)                                          */
  /* ---------------------------------------------------------------------- */
  function setMenu(open) {
    const toggle = $('#navToggle'), links = $('#navLinks');
    if (!toggle || !links) return;
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('nav__links--open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) $('#navClose')?.focus();
    else if (document.activeElement === $('#navClose')) toggle.focus();
  }
  function initChrome() {
    if (!document.body.classList.contains('blog-body')) return; // main page owns its own chrome via app.js
    window.addEventListener('scroll', () => $('#nav')?.classList.toggle('nav--scrolled', window.scrollY > 120), { passive: true });
    document.addEventListener('click', e => {
      const trigger = e.target.closest('#navToggle,#navClose,#themeToggle,[data-copy-code]');
      if (!trigger) { if (e.target.closest('.nav__link')) setMenu(false); return; }
      if (trigger.id === 'navToggle') setMenu(trigger.getAttribute('aria-expanded') !== 'true');
      else if (trigger.id === 'navClose') setMenu(false);
      else if (trigger.id === 'themeToggle') {
        const dark = document.documentElement.dataset.theme !== 'dark';
        document.documentElement.dataset.theme = dark ? 'dark' : 'light';
        trigger.setAttribute('aria-pressed', String(dark));
      } else if (trigger.hasAttribute('data-copy-code')) copyCode(trigger);
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 768) setMenu(false); });
  }

  /* ---------------------------------------------------------------------- */
  /* Post list (blog/index.html)                                              */
  /* ---------------------------------------------------------------------- */
  const state = { query: '', source: 'all', tag: '' };
  const card = p => `
    <article class="post-card${p.thumbnail ? ' post-card--thumb' : ''}">
      ${p.thumbnail ? `<a class="post-card__media" href="${esc(p.url.replace(/^\/blog\//, './'))}" tabindex="-1" aria-hidden="true"><img src="${esc(p.thumbnail)}" alt="" loading="lazy" decoding="async"></a>` : ''}
      <div class="post-card__body">
        <div class="post-card__meta">
          <span class="post__source post__source--${esc(p.source)}">${esc(sourceName(p.source))}</span>
          <span class="post__meta-sep" aria-hidden="true">·</span>
          <time datetime="${esc(p.date)}">${fmtDate(p.date)}</time>
          <span class="post__meta-sep" aria-hidden="true">·</span>
          <span>${p.readingMinutes}${t('분 읽기', ' min read')}</span>
        </div>
        <h2 class="post-card__title"><a href="${esc(p.url.replace(/^\/blog\//, './'))}">${esc(p.title)}</a></h2>
        <p class="post-card__excerpt">${esc(p.description)}</p>
        ${p.tags?.length ? `<ul class="post-card__tags" role="list">${p.tags.map(tag => `<li><button type="button" class="e-chip${state.tag === tag ? ' e-chip--on' : ''}" data-tag="${esc(tag)}" aria-pressed="${state.tag === tag}">${esc(tag)}</button></li>`).join('')}</ul>` : ''}
      </div>
    </article>`;

  function matches(p) {
    const q = state.query.trim().toLocaleLowerCase();
    const hay = [p.title, p.description, p.series, ...(p.tags || [])].join(' ').toLocaleLowerCase();
    return (state.source === 'all' || p.source === state.source)
      && (!state.tag || (p.tags || []).includes(state.tag))
      && (!q || hay.includes(q));
  }

  function renderList() {
    const list = $('#blogList');
    if (!list) return;
    const all = posts();
    const shown = all.filter(matches);
    list.innerHTML = shown.length ? shown.map(card).join('') : `
      <div class="e-empty"><span class="e-eyebrow">NO MATCHES</span>
        <h3>${t('조건에 맞는 글이 없습니다', 'No posts match these filters')}</h3>
        <p>${t('다른 검색어를 쓰거나 필터를 초기화해 보세요.', 'Try another keyword or reset the filters.')}</p>
        <button type="button" class="e-button" data-blog-reset>${t('필터 초기화', 'Reset filters')}</button></div>`;
    const stats = $('#blogStats');
    if (stats) {
      const velog = all.filter(p => p.source === 'velog').length, site = all.length - velog;
      stats.textContent = state.query || state.source !== 'all' || state.tag
        ? t(`${shown.length}개 글 표시 중 (전체 ${all.length}개)`, `Showing ${shown.length} of ${all.length} posts`)
        : t(`전체 ${all.length}개 · velog ${velog}개 · 이 사이트 ${site}개`, `${all.length} posts · ${velog} from velog · ${site} on this site`);
    }
    renderTags(all);
    $$('.blog__source-btn').forEach(b => {
      const on = b.dataset.source === state.source;
      b.classList.toggle('blog__source-btn--active', on); b.setAttribute('aria-pressed', String(on));
    });
    const url = new URL(location.href);
    state.tag ? url.searchParams.set('tag', state.tag) : url.searchParams.delete('tag');
    state.source !== 'all' ? url.searchParams.set('source', state.source) : url.searchParams.delete('source');
    state.query ? url.searchParams.set('q', state.query) : url.searchParams.delete('q');
    history.replaceState(null, '', url);
  }

  function renderTags(all) {
    const box = $('#blogTags');
    if (!box) return;
    const counts = {};
    for (const p of all) for (const tag of p.tags || []) counts[tag] = (counts[tag] || 0) + 1;
    const tags = Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    if (!tags.length) { box.hidden = true; return; }
    box.hidden = false;
    box.innerHTML = `<span class="blog__tags-label">${t('태그', 'Tags')}</span>` +
      `<button type="button" class="e-chip${state.tag ? '' : ' e-chip--on'}" data-tag="" aria-pressed="${!state.tag}">${t('전체', 'All')}</button>` +
      tags.map(([tag, n]) => `<button type="button" class="e-chip${state.tag === tag ? ' e-chip--on' : ''}" data-tag="${esc(tag)}" aria-pressed="${state.tag === tag}">${esc(tag)} <span class="e-count">${n}</span></button>`).join('');
  }

  function initList() {
    if (!$('#blogList')) return;
    const params = new URLSearchParams(location.search);
    state.tag = params.get('tag') || '';
    state.source = ['velog', 'site'].includes(params.get('source')) ? params.get('source') : 'all';
    state.query = params.get('q') || '';
    const search = $('#blogSearch');
    if (search) { search.value = state.query; search.addEventListener('input', () => { state.query = search.value; renderList(); }); }
    document.addEventListener('click', e => {
      const tagBtn = e.target.closest('[data-tag]');
      const srcBtn = e.target.closest('.blog__source-btn');
      if (tagBtn) { state.tag = tagBtn.dataset.tag === state.tag ? '' : tagBtn.dataset.tag; renderList(); }
      else if (srcBtn) { state.source = srcBtn.dataset.source; renderList(); }
      else if (e.target.closest('[data-blog-reset]')) { state.query = ''; state.source = 'all'; state.tag = ''; if (search) search.value = ''; renderList(); }
    });
    renderList();
    document.addEventListener('languagechange', renderList);
  }

  /* ---------------------------------------------------------------------- */
  /* Latest posts block on the main page                                      */
  /* ---------------------------------------------------------------------- */
  function renderLatest() {
    const box = $('#blogLatest');
    if (!box) return;
    const latest = posts().slice(0, 3);
    if (!latest.length) { box.closest('section')?.setAttribute('hidden', ''); return; }
    box.innerHTML = latest.map(p => `
      <a class="latest-post" href="./blog/${encodeURIComponent(p.slug)}/">
        <span class="latest-post__meta"><span class="post__source post__source--${esc(p.source)}">${esc(sourceName(p.source))}</span><time datetime="${esc(p.date)}">${fmtDate(p.date)}</time></span>
        <span class="latest-post__title">${esc(p.title)}</span>
        <span class="latest-post__excerpt">${esc(p.description)}</span>
      </a>`).join('');
  }

  /* ---------------------------------------------------------------------- */
  /* Reader helpers (generated post pages)                                    */
  /* ---------------------------------------------------------------------- */
  function copyCode(btn) {
    const code = btn.parentElement?.querySelector('code');
    if (!code || !navigator.clipboard) return;
    navigator.clipboard.writeText(code.textContent).then(() => {
      btn.textContent = t('복사됨', 'Copied'); btn.classList.add('post__copy--done');
      setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('post__copy--done'); }, 1600);
    }).catch(() => {});
  }
  function initReader() {
    if (!$('.post__content')) return;
    const applyDates = () => $$('time[data-date-ko]').forEach(el => { el.textContent = el.getAttribute(`data-date-${lang()}`) || el.textContent; });
    applyDates();
    document.addEventListener('languagechange', applyDates);
    const links = $$('.post__toc a');
    if (links.length && 'IntersectionObserver' in window) {
      const byId = new Map(links.map(a => [decodeURIComponent(a.getAttribute('href').slice(1)), a]));
      const headings = [...byId.keys()].map(id => document.getElementById(id)).filter(Boolean);
      let active = null;
      const io = new IntersectionObserver(entries => {
        for (const en of entries) if (en.isIntersecting) { active?.classList.remove('is-active'); active = byId.get(en.target.id); active?.classList.add('is-active'); }
      }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
      headings.forEach(h => io.observe(h));
    }
  }

  function init() { initChrome(); initList(); renderLatest(); initReader(); document.addEventListener('languagechange', renderLatest); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
