/* Portfolio views share one evidence-backed dataset. No runtime API or build required. */
(() => {
  'use strict';
  const D = window.PORTFOLIO;
  if (!D) { console.error('Portfolio data could not be loaded.'); return; }
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const lang = () => document.documentElement.lang === 'en' ? 'en' : 'ko';
  const tx = value => typeof value === 'string' ? value : (value?.[lang()] ?? value?.ko ?? '');
  const t = (ko, en) => lang() === 'en' ? en : ko;
  const companies = new Map(D.companies.map(c => [c.id, c]));
  const technologies = new Map(D.technologies.map(s => [s.id, s]));
  const projects = new Map(D.projects.map(p => [p.id, p]));
  const kinds = {
    implemented: {ko:'직접 구현·운영', en:'Implemented / operated', symbol:'●'},
    context: {ko:'기존·연동 환경', en:'Legacy / integrated context', symbol:'◇'},
    poc: {ko:'PoC 검증', en:'PoC evaluation', symbol:'◐'},
    planned: {ko:'후속 계획', en:'Planned follow-up', symbol:'○'}
  };
  const categories = {
    language:['언어','Languages'], orchestration:['워크플로우','Orchestration'],
    processing:['데이터 처리','Processing'], storage:['저장·데이터베이스','Storage'],
    cloud:['클라우드·인프라','Cloud / infrastructure'], governance:['보안·거버넌스','Governance'],
    analytics:['분석·BI','Analytics / BI'], ml:['ML·NLP','ML / NLP'],
    observability:['모니터링','Observability'], integration:['연동·API','Integration']
  };
  const state = {projectQuery:'',company:'all',techFilter:'all',projectMode:'cards',
    project:'p-migration',tech:'airflow',techQuery:'',category:'all',kind:'all',techMode:'graph'};
  let currentModal = null, restoreFocus = null, activeView = 'project';
  const companyName = id => tx(companies.get(id)?.label);
  const techName = id => technologies.get(id)?.label ?? id;
  const kindName = id => tx(kinds[id]) || id;
  const kindLabel = id => `${kinds[id]?.symbol || '●'} ${kindName(id)}`;
  const categoryName = id => categories[id] ? t(...categories[id]) : id;
  const selectedStack = p => p.stack.filter(s => state.kind === 'all' || s.kind === state.kind);
  const projectMatches = p => {
    const q = state.projectQuery.trim().toLocaleLowerCase();
    const haystack = [tx(p.title),tx(p.summary),tx(p.impact),companyName(p.company),
      ...p.stack.flatMap(s => [techName(s.tech),tx(s.role),tx(s.evidence)]),
      ...p.sections.flatMap(s => s.items.map(tx))].join(' ').toLocaleLowerCase();
    return (state.company === 'all' || p.company === state.company)
      && (state.techFilter === 'all' || p.stack.some(s => s.tech === state.techFilter))
      && (!q || haystack.includes(q));
  };
  const techProjects = id => D.projects.filter(p => selectedStack(p).some(s => s.tech === id));
  const filteredTechs = () => D.technologies.filter(s => {
    const q = state.techQuery.trim().toLowerCase();
    return (state.category === 'all' || s.category === state.category)
      && (!q || `${s.label} ${categoryName(s.category)}`.toLowerCase().includes(q))
      && techProjects(s.id).length;
  }).sort((a,b) => techProjects(b.id).length - techProjects(a.id).length || a.label.localeCompare(b.label));
  const option = (value, label, selected) => `<option value="${esc(value)}"${value === selected ? ' selected' : ''}>${esc(label)}</option>`;
  const techChip = (id, more = '') => `<button type="button" class="e-chip" data-select-tech="${esc(id)}" ${more}>${esc(techName(id))}</button>`;
  const sourceLabel = p => `${tx(p.source.label)}${p.source.pages?.length ? ' · '+t('p. ','p. ')+p.source.pages.join(', ') : ''}`;
  const empty = (type) => `<div class="e-empty"><span class="e-eyebrow">NO MATCHES</span><h3>${t('조건에 맞는 결과가 없습니다','No matching results')}</h3><p>${t('다른 검색어를 사용하거나 필터를 초기화해 보세요.','Try another keyword or reset the filters.')}</p><button class="e-button" data-reset="${type}">${t('필터 초기화','Reset filters')}</button></div>`;
  function copyElements() {
    $$('[data-copy-ko]').forEach(el => el.textContent = el.getAttribute(`data-copy-${lang()}`) || el.getAttribute('data-copy-ko'));
  }
  function initExplorers() {
    const projectRoot = $('#projectExplorer'), techRoot = $('#techExplorer');
    if (!projectRoot || !techRoot) return;
    projectRoot.innerHTML = `
      <div class="e-intro"><div><span class="e-eyebrow">PROJECT INDEX</span><h3>${t('문제에서 구현, 그리고 성과까지','From the problem to the outcome')}</h3></div><p>${t('프로젝트 상세와 기술 관계를 함께 살펴보세요.','Explore the work and the technology behind it.')}</p></div>
      <div class="e-toolbar"><label class="e-search">${t('프로젝트 검색','Search projects')}<input id="projectSearch" type="search" value="${esc(state.projectQuery)}" placeholder="${t('프로젝트, 기술, 구현 내용 검색','Project, technology, implementation')}" autocomplete="off"></label>
      <label>${t('소속','Organization')}<select id="companyFilter">${option('all',t('전체 소속','All organizations'),state.company)}${D.companies.map(c => option(c.id,tx(c.label),state.company)).join('')}</select></label>
      <label>${t('기술','Technology')}<select id="projectTechFilter">${option('all',t('전체 기술','All technologies'),state.techFilter)}${[...D.technologies].sort((a,b)=>a.label.localeCompare(b.label)).map(s=>option(s.id,s.label,state.techFilter)).join('')}</select></label></div>
      <div class="e-resultbar"><p id="projectCount" role="status" aria-live="polite"></p><div class="e-segment" role="group" aria-label="${t('프로젝트 표시 방식','Project display')}"><button data-project-mode="cards">${t('프로젝트 카드','Project cards')}</button><button data-project-mode="graph">${t('관계도','Relationship map')}</button></div></div>
      <div id="projectResults"></div>`;
    techRoot.innerHTML = `
      <div class="e-intro"><div><span class="e-eyebrow">TECHNOLOGY EXPLORER</span><h3>${t('기술을 누르면, 경험이 연결됩니다','Follow a technology through the work')}</h3></div><p>${t('기술 → 프로젝트 → 소속 관계를 탐색하세요.','Explore technology → project → organization.')}</p></div>
      <div class="e-toolbar"><label class="e-search">${t('기술 검색','Search technologies')}<input id="techSearch" type="search" value="${esc(state.techQuery)}" placeholder="${t('Airflow, BigQuery, MongoDB…','Airflow, BigQuery, MongoDB…')}" autocomplete="off"></label>
      <label>${t('기술 분류','Category')}<select id="techCategory">${option('all',t('전체 분류','All categories'),state.category)}${Object.keys(categories).map(id=>option(id,categoryName(id),state.category)).join('')}</select></label>
      <label>${t('활용 구분','Evidence type')}<select id="techKind">${option('all',t('모든 관계','All relationships'),state.kind)}${Object.keys(kinds).map(id=>option(id,kindName(id),state.kind)).join('')}</select></label></div>
      <div class="e-tech-layout"><aside class="e-tech-list" aria-label="${t('기술 선택','Choose technology')}"><div id="techListCount" class="e-list-label"></div><div id="techList"></div></aside><div id="techResults"></div></div>`;
    renderProjects(); renderTechs(); copyElements();
  }
  function projectCard(p, index) {
    return `<article class="e-project-card">
      <div class="e-card-meta"><span>${esc(companyName(p.company))}</span><time>${esc(tx(p.period))}</time></div>
      <div class="e-card-title"><span class="e-index">${String(index+1).padStart(2,'0')}</span><h3><button data-open-project="${esc(p.id)}">${esc(tx(p.title))}</button></h3></div>
      <p class="e-card-summary">${esc(tx(p.summary))}</p>
      <div class="e-impact"><span>${t('주요 성과','OUTCOME')}</span><p>${esc(tx(p.impact))}</p></div>
      <div class="e-chips">${p.stack.slice(0,5).map(s=>techChip(s.tech)).join('')}${p.stack.length>5 ? `<button class="e-chip e-chip--more" data-open-project="${p.id}">+${p.stack.length-5}</button>` : ''}</div>
      <div class="e-card-footer"><span>${p.stack.length} ${t('개 기술 관계','technology relationships')}</span><button data-open-project="${p.id}" class="e-text-button">${t('상세 사례 읽기','Read case study')} <span aria-hidden="true">↗</span></button></div></article>`;
  }
  function renderProjects() {
    const rows = D.projects.filter(projectMatches).sort((a,b)=>(b.start||'').localeCompare(a.start||''));
    $('#projectCount').textContent = t(`${rows.length} / ${D.projects.length}개 프로젝트`,`${rows.length} / ${D.projects.length} projects`);
    $$('[data-project-mode]').forEach(el => el.setAttribute('aria-pressed',String(el.dataset.projectMode === state.projectMode)));
    const root = $('#projectResults');
    if (!rows.length) { root.innerHTML = empty('project'); return; }
    if (state.projectMode === 'cards') { root.innerHTML = `<div class="e-project-grid">${rows.map(projectCard).join('')}</div>`; return; }
    if (!rows.some(p=>p.id === state.project)) state.project = rows[0].id;
    const p = projects.get(state.project);
    root.innerHTML = `<div class="e-map-shell"><div class="e-map-heading"><label>${t('관계도를 볼 프로젝트','Choose a project')}<select id="mapProject">${rows.map(p=>option(p.id,tx(p.title),state.project)).join('')}</select></label><button class="e-button" data-open-project="${p.id}">${t('프로젝트 상세','Project details')} ↗</button></div>
      <div class="e-map-stats"><span>${esc(companyName(p.company))}</span><strong>${p.stack.length}</strong><span>${t('개 기술 관계','technology relationships')}</span></div>
      ${legend()}${graphFrame('projectNetwork')}<div class="e-map-caption">${t('소속 → 프로젝트 → 기술. 선은 활용 관계이며, 실행 순서나 데이터 흐름이 아닙니다. 기술을 선택하면 다른 프로젝트와의 연결로 이동합니다.','Organization → project → technology. Edges indicate usage, not execution order or data flow. Select a technology to explore its other projects.')}</div>
      <details class="e-evidence"><summary>${t('기술별 역할과 추출 근거','Roles and extraction evidence')} (${p.stack.length})</summary>${evidenceTable(p)}</details></div>`;
    drawProjectGraph(p, $('#projectNetwork'));
  }
  function legend() {
    return `<div class="e-legend">${Object.entries(kinds).map(([id,k])=>`<span class="e-kind e-kind--${id}">${k.symbol} ${esc(tx(k))}</span>`).join('')}</div>`;
  }
  function graphFrame(id) {
    return `<div class="e-graph-controls"><span>${t('노드를 눌러 연결을 탐색하세요','Select a node to explore connections')}</span><div role="group" aria-label="${t('그래프 확대·축소','Graph zoom')}"><button data-zoom="-0.15" aria-label="${t('축소','Zoom out')}">−</button><button data-zoom="reset" aria-label="${t('배율 초기화','Reset zoom')}">100%</button><button data-zoom="0.15" aria-label="${t('확대','Zoom in')}">+</button></div></div><div class="e-graph-scroll" tabindex="0" role="region" aria-label="${t('관계도. 확대 시 가로 스크롤 가능','Relationship map. Horizontally scrollable when zoomed')}"><div class="e-graph" id="${id}" data-scale="1"></div></div>`;
  }
  function renderTechs() {
    const rows = filteredTechs();
    $('#techListCount').textContent = `${rows.length} ${t('개 기술 · 숫자는 연결된 프로젝트 수','technologies · counts represent linked projects')}`;
    if (!rows.some(s => s.id === state.tech)) state.tech = rows[0]?.id ?? null;
    $('#techList').innerHTML = rows.map(s=>`<button class="e-tech-option" data-select-tech="${s.id}" aria-pressed="${s.id===state.tech}"><span>${esc(s.label)}</span><span>${techProjects(s.id).length}</span></button>`).join('');
    const root = $('#techResults');
    if (!state.tech) { root.innerHTML = empty('tech'); return; }
    const tech = technologies.get(state.tech), linked = techProjects(tech.id);
    const links = linked.map(p=>({p,s:selectedStack(p).find(s=>s.tech===tech.id)}));
    const uniqueCompanies = new Set(linked.map(p=>p.company));
    const coTech = new Map();
    linked.forEach(p=>selectedStack(p).forEach(s=>{
      if(s.tech !== tech.id) {
        if (!coTech.has(s.tech)) coTech.set(s.tech,new Set());
        coTech.get(s.tech).add(p.id);
      }
    }));
    const coRows = [...coTech].sort((a,b)=>b[1].size-a[1].size || techName(a[0]).localeCompare(techName(b[0]))).slice(0,8);
    root.innerHTML = `<div class="e-tech-main"><div class="e-tech-heading"><div><span class="e-eyebrow">${esc(categoryName(tech.category))}</span><h3>${esc(tech.label)}</h3></div><p><strong>${linked.length}</strong> ${t('프로젝트','projects')} <span>·</span> <strong>${uniqueCompanies.size}</strong> ${t('소속','organizations')}</p></div>
      <div class="e-resultbar">${legend()}<div class="e-segment" role="group" aria-label="${t('기술 표시 방식','Technology display')}"><button data-tech-mode="graph" aria-pressed="${state.techMode==='graph'}">${t('관계도','Map')}</button><button data-tech-mode="list" aria-pressed="${state.techMode==='list'}">${t('근거 목록','Evidence list')}</button></div></div>
      ${state.techMode==='graph' ? `${graphFrame('techNetwork')}<p class="e-map-caption">${t('기술 → 프로젝트 → 소속. 프로젝트 노드를 누르면 구현 내용과 성과를 볼 수 있습니다.','Technology → project → organization. Select a project node for implementation details and outcomes.')}</p>` : ''}
      <div class="e-linked-projects"><h4>${t('프로젝트에서의 역할','Role in each project')}</h4>${links.map(({p,s})=>`<article class="e-role-row"><div><button class="e-text-button" data-open-project="${p.id}">${esc(tx(p.shortTitle || p.title))} ↗</button><span class="e-kind e-kind--${s.kind}">${esc(kindLabel(s.kind))}</span></div><p>${esc(tx(s.role))}</p><details><summary>${t('추출 근거','Evidence')}</summary><blockquote>${esc(tx(s.evidence))}</blockquote><small>${esc(s.source)}</small></details></article>`).join('')}</div>
      ${coRows.length? `<div class="e-co-use"><h4>${t('같은 프로젝트에 함께 등장한 기술','Technologies recorded in the same projects')}</h4><p>${t('막대는 공통 프로젝트 수입니다. 데이터 흐름이나 숙련도 점수가 아닙니다.','Bars count shared projects, not data flow or proficiency.')}</p>${coRows.map(([id,set])=>`<button class="e-bar" data-select-tech="${id}"><span>${esc(techName(id))}</span><span class="e-bar-track"><span data-bar-width="${100*set.size/linked.length}"></span></span><strong>${set.size}</strong></button>`).join('')}</div>`:''}</div>`;
    $$('[data-bar-width]',root).forEach(el => el.style.width = `${el.dataset.barWidth}%`);
    if (state.techMode==='graph') drawTechGraph(tech, linked, $('#techNetwork'));
  }
  const ns = 'http://www.w3.org/2000/svg';
  function svgEl(tag,attrs={},text) {
    const e = document.createElementNS(ns,tag);
    Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));
    if(text !== undefined) e.textContent=text;
    return e;
  }
  function svgRoot(container,height,label,width=960) {
    container.dataset.baseWidth=String(width);
    container.style.width=`${width}px`;container.style.minWidth='0';
    const svg=svgEl('svg',{viewBox:`0 0 ${width} ${height}`,width,height,role:'group','aria-label':label});
    svg.append(svgEl('title',{},label));
    container.append(svg); return svg;
  }
  function line(svg,a,b,kind='implemented') {
    const path=svgEl('path',{d:`M ${a.x+a.w} ${a.y+25} C ${a.x+a.w+56} ${a.y+25}, ${b.x-56} ${b.y+25}, ${b.x} ${b.y+25}`,class:`e-edge e-edge--${kind}`});
    svg.append(path);
  }
  function wrapLabel(text, max=22) {
    const lines=[];let line='',width=0;
    for(const char of text) {
      const weight=/[^\u0000-\u00ff]/.test(char)?1.7:1;
      if(width+weight>max && line) {
        const space=line.lastIndexOf(' ');
        if(space>line.length/2) {
          const tail=line.slice(space+1);lines.push(line.slice(0,space));line=tail;
          width=[...tail].reduce((sum,c)=>sum+(/[^\u0000-\u00ff]/.test(c)?1.7:1),0);
        } else {lines.push(line.trim());line='';width=0;}
      }
      line+=char;width+=weight;
    }
    if(line.trim())lines.push(line.trim());
    return lines;
  }
  function node(svg,n) {
    const g=svgEl('g',{class:`e-node e-node--${n.type}`,transform:`translate(${n.x} ${n.y})`});
    if(n.action) {
      g.setAttribute('tabindex','0');g.setAttribute('role','button');
      g.setAttribute(n.action,n.id);g.setAttribute('aria-label',n.label);
    }
    g.append(svgEl('title',{},`${n.label}${n.hint?' · '+n.hint:''}`));
    g.append(svgEl('rect',{width:n.w,height:50,rx:6,class:'e-node-bg'}));
    const lines=wrapLabel(n.label,(n.w-28)/7);
    lines.slice(0,3).forEach((l,i)=>g.append(svgEl('text',{x:14,y:lines.length>2?14+i*15:lines.length>1?20+i*17:30,class:`e-node-label${lines.length>2?' e-node-label--small':''}`},l)));
    if(n.kind) g.append(svgEl('text',{x:n.w-14,y:14,'text-anchor':'end',class:`e-node-kind e-kind--${n.kind}`},kinds[n.kind]?.symbol || '●'));
    svg.append(g);
  }
  function graphColumn(svg,x,label) {
    svg.append(svgEl('text',{x,y:27,class:'e-column-label'},label));
  }
  function mobileGraphWidth(container) {
    return Math.max(260,container.parentElement.clientWidth || window.innerWidth-76);
  }
  function mobileBranches(svg,root,nodes) {
    if(!nodes.length)return;
    const y=root.y+50, turn=y+20;
    svg.append(svgEl('path',{d:`M ${root.x+root.w/2} ${y} V ${turn} H 18 V ${nodes.at(-1).y+25}`,class:'e-edge'}));
    nodes.forEach(n=>svg.append(svgEl('path',{d:`M 18 ${n.y+25} H ${n.x}`,class:`e-edge e-edge--${n.kind||'implemented'}`})));
  }
  function drawMobileProject(p,container) {
    const width=mobileGraphWidth(container),svg=svgRoot(container,242+p.stack.length*66,tx(p.title),width);
    graphColumn(svg,16,t('소속 · 프로젝트 · 기술','ORGANIZATION · PROJECT · TECHNOLOGY'));
    const company={x:16,y:46,w:width-32,type:'company',label:companyName(p.company)};
    const project={x:16,y:132,w:width-32,type:'project',label:tx(p.shortTitle||p.title),id:p.id,action:'data-open-project'};
    svg.append(svgEl('path',{d:`M ${width/2} 96 V 132`,class:'e-edge'}));
    const nodes=p.stack.map((s,i)=>({x:40,y:224+i*66,w:width-56,type:'tech',label:techName(s.tech),id:s.tech,action:'data-select-tech',kind:s.kind,hint:tx(s.role)}));
    mobileBranches(svg,project,nodes);
    node(svg,company);node(svg,project);nodes.forEach(n=>node(svg,n));
  }
  function drawMobileTech(tech,linked,container) {
    const width=mobileGraphWidth(container),svg=svgRoot(container,140+linked.length*106,tech.label,width);
    graphColumn(svg,16,t('기술 · 프로젝트와 소속','TECHNOLOGY · PROJECTS / ORGANIZATION'));
    const root={x:16,y:46,w:width-32,type:'tech',label:tech.label};
    const nodes=linked.map((p,i)=>({x:40,y:140+i*106,w:width-56,type:'project',label:tx(p.shortTitle||p.title),id:p.id,action:'data-open-project',kind:selectedStack(p).find(s=>s.tech===tech.id).kind}));
    mobileBranches(svg,root,nodes);node(svg,root);
    nodes.forEach((n,i)=>{
      node(svg,n);
      wrapLabel(companyName(linked[i].company),(width-64)/6.5).slice(0,2).forEach((text,row)=>svg.append(svgEl('text',{x:46,y:n.y+68+row*14,class:'e-column-label'},text)));
    });
  }
  function drawProjectGraph(p, container) {
    if(window.innerWidth<=640){drawMobileProject(p,container);return;}
    const rows=Math.ceil(p.stack.length/2), height=Math.max(380,rows*66+70);
    const svg=svgRoot(container,height,tx(p.title));
    graphColumn(svg,18,t('소속','ORGANIZATION'));graphColumn(svg,244,t('프로젝트','PROJECT'));graphColumn(svg,528,t('기술 · 활용 구분','TECHNOLOGY · EVIDENCE TYPE'));
    const c={x:18,y:height/2-25,w:188,type:'company',label:companyName(p.company)};
    const pr={x:244,y:height/2-25,w:234,type:'project',label:tx(p.shortTitle||p.title),id:p.id,action:'data-open-project'};
    line(svg,c,pr);
    const nodes=p.stack.map((s,i)=>({x:i%2===0?528:758,y:58+Math.floor(i/2)*66,w:188,type:'tech',label:techName(s.tech),id:s.tech,action:'data-select-tech',kind:s.kind,hint:tx(s.role)}));
    nodes.forEach((n,i)=>line(svg,pr,n,p.stack[i].kind));
    node(svg,c);node(svg,pr);nodes.forEach(n=>node(svg,n));
  }
  function drawTechGraph(tech,linked,container) {
    if(window.innerWidth<=640){drawMobileTech(tech,linked,container);return;}
    const height=Math.max(330,linked.length*72+72), svg=svgRoot(container,height,tech.label);
    graphColumn(svg,18,t('기술','TECHNOLOGY'));graphColumn(svg,314,t('프로젝트','PROJECT'));graphColumn(svg,730,t('소속','ORGANIZATION'));
    const tn={x:18,y:height/2-25,w:220,type:'tech',label:tech.label};
    const cs=[...new Set(linked.map(p=>p.company))];
    const cn=cs.map((id,i)=>({x:730,y:height/(cs.length+1)*(i+1)-10,w:212,type:'company',label:companyName(id),id}));
    const pn=linked.map((p,i)=>({x:314,y:58+i*72,w:300,type:'project',label:tx(p.shortTitle||p.title),id:p.id,action:'data-open-project',kind:selectedStack(p).find(s=>s.tech===tech.id).kind}));
    pn.forEach((n,i)=>{line(svg,tn,n,n.kind);line(svg,n,cn.find(c=>c.id===linked[i].company));});
    node(svg,tn);pn.forEach(n=>node(svg,n));cn.forEach(n=>node(svg,n));
  }
  function evidenceTable(p) {
    return `<div class="e-table-scroll"><table class="e-table"><caption class="sr-only">${t('프로젝트 기술별 활용 근거','Project technology evidence')}</caption><thead><tr><th>${t('기술','Technology')}</th><th>${t('구분 · 역할','Type / role')}</th><th>${t('근거','Evidence')}</th></tr></thead><tbody>${p.stack.map(s=>`<tr><th scope="row">${techChip(s.tech)}</th><td><span class="e-kind e-kind--${s.kind}">${esc(kindLabel(s.kind))}</span><p>${esc(tx(s.role))}</p></td><td>${esc(tx(s.evidence))}<small>${esc(s.source)}</small></td></tr>`).join('')}</tbody></table></div>`;
  }
  function renderModal() {
    const p=projects.get(currentModal); if(!p) return;
    $('#projectModalTitle').textContent=tx(p.title);
    $('#projectModalBadge').textContent=tx(p.period);
    $('#projectModalOwner').textContent=companyName(p.company);
    const related=D.projects.filter(other=>other.id!==p.id).map(other=>({p:other,shared:other.stack.filter(s=>p.stack.some(ps=>ps.tech===s.tech))})).filter(r=>r.shared.length).sort((a,b)=>b.shared.length-a.shared.length).slice(0,3);
    $('#projectModalBody').innerHTML=`<p class="e-modal-summary">${esc(tx(p.summary))}</p><div class="e-modal-impact"><span class="e-eyebrow">${t('주요 성과','OUTCOME')}</span><p>${esc(tx(p.impact))}</p></div>
      ${p.sections.map(s=>`<section class="e-case-section"><h3>${esc(tx(s.heading))}</h3><ul>${s.items.map(i=>`<li>${esc(tx(i))}</li>`).join('')}</ul></section>`).join('')}
      <section class="e-case-section"><h3>${t('기술 스택과 맡은 역할','Technology stack and responsibilities')} <span class="e-count">${p.stack.length}</span></h3>${legend()}${evidenceTable(p)}</section>
      ${p.flows?.length ? `<section class="e-case-section"><h3>${t('구현 단계의 기술 연결','Implementation relationships')}</h3><p class="e-section-note">${t('상세 설명에 명시된 연결만 표시합니다. 전체 운영 아키텍처를 뜻하지 않습니다.','Only relationships explicitly stated in the project description are shown, not the complete production architecture.')}</p><div class="e-flows">${p.flows.map(f=>`<details class="e-flow"><summary><span>${esc(techName(f.from))}</span><span class="e-flow-verb">${esc(tx(f.label))} →</span><span>${esc(techName(f.to))}</span></summary><p>${esc(tx(f.evidence))}</p></details>`).join('')}</div></section>`:''}
      <section class="e-case-section"><h3>${t('공통 기술로 연결된 프로젝트','Projects with shared technologies')}</h3><div class="e-related">${related.map(r=>`<button data-open-project="${r.p.id}"><strong>${esc(tx(r.p.shortTitle||r.p.title))} ↗</strong><span>${r.shared.length} ${t('개 공통 기술','shared technologies')} · ${r.shared.slice(0,4).map(s=>esc(techName(s.tech))).join(', ')}</span></button>`).join('')}</div></section>
      <footer class="e-source"><span>${t('내용 근거','Content provenance')}: ${esc(sourceLabel(p))}</span><p>${esc(tx(p.source.note))}</p></footer>`;
  }
  function setBackgroundInert(value) {
    ['nav','hero','main'].forEach(id=>{const el=document.getElementById(id);if(el) el.inert=value;});
    const footer=$('body > footer');if(footer) footer.inert=value;
  }
  function openProject(id) {
    if(!projects.has(id)) return;
    if(!currentModal) restoreFocus=document.activeElement;
    currentModal=id; renderModal();
    const modal=$('#projectModal');
    modal.hidden=false;modal.classList.add('modal--open');modal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');setBackgroundInert(true);
    $('.modal__close',modal)?.focus();$('#projectModalBody').scrollTop=0;
  }
  function closeModal(restore=true) {
    const modal=$('#projectModal');if(!modal||!currentModal) return;
    modal.hidden=true;modal.classList.remove('modal--open');modal.setAttribute('aria-hidden','true');
    currentModal=null;document.body.classList.remove('modal-open');setBackgroundInert(false);
    if(restore && restoreFocus?.isConnected) restoreFocus.focus();
  }
  function switchView(view,scroll=false) {
    if(!['company','project','tech'].includes(view)) return;
    activeView=view;
    $$('.career__tab').forEach(tab=>{
      const on=tab.dataset.view===view;
      tab.classList.toggle('career__tab--active',on);tab.setAttribute('aria-selected',String(on));tab.tabIndex=on?0:-1;
    });
    $$('.career__view').forEach(panel=>{
      const on=panel.dataset.view===view;panel.hidden=!on;panel.classList.toggle('career__view--active',on);
    });
    if(view==='tech')renderTechs();
    if(view==='project')renderProjects();
    if(scroll) $('#experience').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
  }
  function selectTech(id) {
    if(!technologies.has(id)) return;
    closeModal(false);state.tech=id;state.techQuery='';state.category='all';
    if(!techProjects(id).length) state.kind='all';
    $('#techSearch').value='';$('#techCategory').value='all';$('#techKind').value=state.kind;
    renderTechs();switchView('tech',true);
    // The selected option remains visible even for long technology indexes.
    requestAnimationFrame(()=>{const e=$(`.e-tech-option[data-select-tech="${id}"]`);if(e) {e.parentElement.scrollTop=e.offsetTop-e.parentElement.offsetTop-80;e.focus({preventScroll:true});}});
  }
  function setMenu(open) {
    const panel=$('#navLinks'), toggle=$('#navToggle');
    if(!panel||!toggle) return;
    panel.classList.toggle('nav__links--open',open);$('#nav').classList.toggle('nav--menu-open',open);
    toggle.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':'';
    if(open) $('#navClose')?.focus();
    else if(document.activeElement===$('#navClose')) toggle.focus();
  }
  function resetFilters(which) {
    if(which==='project') {state.projectQuery='';state.company='all';state.techFilter='all';}
    else {state.techQuery='';state.category='all';state.kind='all';state.tech='airflow';}
    initExplorers();
  }
  function init() {
    initExplorers();switchView($('.career__tab--active')?.dataset.view || 'project');
    $$('.skill-tag[data-skill]').forEach(el=>{el.tabIndex=0;el.setAttribute('role','button');});
    $$('.contact__link--email').forEach(el=>{
      const {emailUser:u,emailDomain:d,emailTld:ext}=el.dataset;
      if(u&&d&&ext){el.href='mailto:'+u+String.fromCharCode(64)+d+'.'+ext;const text=$('[data-email-display]',el);if(text)text.textContent=u+String.fromCharCode(64)+d+'.'+ext;}
    });
    window.addEventListener('scroll',()=>$('#nav')?.classList.toggle('nav--scrolled',window.scrollY>120),{passive:true});
    document.addEventListener('click',e=>{
      const trigger=e.target.closest('[data-open-project],[data-select-tech],[data-project-mode],[data-tech-mode],[data-reset],[data-zoom],[data-skill],.career__tab,[data-modal-close],[data-career-view],#navToggle,#navClose,#themeToggle');
      if(trigger) {
        if(trigger.dataset.openProject) openProject(trigger.dataset.openProject);
        else if(trigger.dataset.selectTech || trigger.dataset.skill) selectTech(trigger.dataset.selectTech || trigger.dataset.skill);
        else if(trigger.dataset.projectMode) {state.projectMode=trigger.dataset.projectMode;renderProjects();}
        else if(trigger.dataset.techMode) {state.techMode=trigger.dataset.techMode;renderTechs();}
        else if(trigger.dataset.reset) resetFilters(trigger.dataset.reset);
        else if(trigger.hasAttribute('data-zoom')) {
          const map=trigger.closest('.e-graph-controls').nextElementSibling.firstElementChild;
          const scale=trigger.dataset.zoom==='reset'?1:Math.min(1.75,Math.max(.75,Number(map.dataset.scale)+Number(trigger.dataset.zoom)));
          map.dataset.scale=String(scale);map.style.width=`${Number(map.dataset.baseWidth||960)*scale}px`;
          const svg=$('svg',map);svg.style.width='100%';svg.style.height='auto';
          $('[data-zoom="reset"]',trigger.closest('.e-graph-controls')).textContent=Math.round(scale*100)+'%';
        }
        else if(trigger.classList.contains('career__tab')) switchView(trigger.dataset.view);
        else if(trigger.hasAttribute('data-modal-close')) closeModal();
        else if(trigger.dataset.careerView) {e.preventDefault();switchView(trigger.dataset.careerView,true);}
        else if(trigger.id==='navToggle') setMenu(trigger.getAttribute('aria-expanded')!=='true');
        else if(trigger.id==='navClose') setMenu(false);
        else if(trigger.id==='themeToggle') {
          const dark=document.documentElement.dataset.theme!=='dark';
          document.documentElement.dataset.theme=dark?'dark':'light';trigger.setAttribute('aria-pressed',String(dark));
        }
      }
      if(e.target.closest('.nav__link')) setMenu(false);
    });
    document.addEventListener('input',e=>{
      if(e.target.id==='projectSearch'){state.projectQuery=e.target.value;renderProjects();}
      if(e.target.id==='techSearch'){state.techQuery=e.target.value;renderTechs();}
    });
    document.addEventListener('change',e=>{
      const id=e.target.id,v=e.target.value;
      if(id==='companyFilter'){state.company=v;renderProjects();}
      if(id==='projectTechFilter'){state.techFilter=v;renderProjects();}
      if(id==='mapProject'){state.project=v;renderProjects();}
      if(id==='techCategory'){state.category=v;renderTechs();}
      if(id==='techKind'){state.kind=v;renderTechs();}
    });
    document.addEventListener('keydown',e=>{
      const target=e.target;
      if((e.key==='Enter'||e.key===' ') && target.matches('g[role="button"],.skill-tag[role="button"]')) {
        e.preventDefault();target.dispatchEvent(new MouseEvent('click',{bubbles:true}));
      }
      if(e.key==='Escape'){closeModal();setMenu(false);}
      if(target.classList?.contains('career__tab') && ['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) {
        e.preventDefault();const tabs=$$('.career__tab');let i=tabs.indexOf(target);
        i=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
        switchView(tabs[i].dataset.view);tabs[i].focus();
      }
      const focusRoot=currentModal?$('#projectModal'):$('#navToggle')?.getAttribute('aria-expanded')==='true'?$('#navLinks'):null;
      if(e.key==='Tab' && focusRoot) {
        const items=$$('button:not([disabled]),a[href],input,select,[tabindex="0"]',focusRoot).filter(el=>el.getClientRects().length);
        const first=items[0],last=items[items.length-1];
        if(e.shiftKey && document.activeElement===first){e.preventDefault();last?.focus();}
        else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first?.focus();}
      }
    });
    document.addEventListener('languagechange',()=>{initExplorers();if(currentModal) renderModal();});
    let graphResize;
    window.addEventListener('resize',()=>{
      if(window.innerWidth>768)setMenu(false);
      clearTimeout(graphResize);graphResize=setTimeout(()=>{renderProjects();renderTechs();},100);
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);else init();
})();
