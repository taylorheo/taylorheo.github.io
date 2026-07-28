/* ==========================================================================
   Resume Site — Interactive Behaviors
   ========================================================================== */

(function () {
  'use strict';

  /* --- Nav: hide on scroll down, show on scroll up --- */
  const nav = document.getElementById('nav');
  const hero = document.getElementById('hero');
  var pastHero = false;

  function updateNavState() {
    if (pastHero) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  if ('IntersectionObserver' in window && hero) {
    var heroObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          pastHero = entry.intersectionRatio < 0.15;
          updateNavState();
        });
      },
      { threshold: [0, 0.15, 0.5, 1] }
    );
    heroObserver.observe(hero);
  }

  window.addEventListener('scroll', updateNavState, { passive: true });
  updateNavState();

  /* --- Mobile nav toggle --- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      navLinks.classList.toggle('nav__links--open');

      if (!isOpen) {
        navToggle.setAttribute('aria-label', 'Close navigation menu');
      } else {
        navToggle.setAttribute('aria-label', 'Open navigation menu');
      }
    });

    /* Close mobile nav when a link is clicked */
    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation menu');
        navLinks.classList.remove('nav__links--open');
      });
    });
  }

  /* --- Intersection Observer for reveal animations --- */
  const revealElements = document.querySelectorAll('.section, .about__stat, .skills__category, .experience__item, .project-card, .education__card, .contact__link');
  let revealObserver = null;

  function forceRevealInView(scope) {
    /* Make all .reveal elements in `scope` (or document) that are in the
       viewport immediately visible, and re-observe the rest. Used when a
       hidden panel becomes visible (e.g. tab switch). */
    var root = scope || document;
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var pending = [];
    root.querySelectorAll('.reveal:not(.reveal--visible)').forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) {
        el.classList.add('reveal--visible');
        if (revealObserver) {
          try { revealObserver.unobserve(el); } catch (e) { /* ignore */ }
        }
      } else {
        pending.push(el);
      }
    });
    if (revealObserver) {
      pending.forEach(function (el) {
        try { revealObserver.observe(el); } catch (e) { /* ignore */ }
      });
    }
  }

  if ('IntersectionObserver' in window) {
    // Generous bottom rootMargin so elements that are within a viewport
    // of being visible get revealed early — critical on mobile where
    // the viewport is small and the user can scroll quickly.
    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            // Small stagger delay based on index within siblings
            requestAnimationFrame(function () {
              entry.target.classList.add('reveal--visible');
            });
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px 10% 0px' }
    );

    revealElements.forEach(function (el) {
      el.classList.add('reveal');
      /* If the element is already in or above the viewport at load time,
         mark it visible immediately — IO sometimes doesn't fire for
         elements that are already fully visible on initial layout, and
         we don't want the user to see invisible content. */
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh && rect.bottom > 0) {
        el.classList.add('reveal--visible');
      } else {
        revealObserver.observe(el);
      }
    });
  } else {
    /* Fallback: show everything if no IO support */
    revealElements.forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  /* --- Active nav link highlight on scroll --- */
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav__link');

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinksAll.forEach(function (link) {
              link.classList.remove('nav__link--active');
              if (link.getAttribute('href') === '#' + id) {
                link.classList.add('nav__link--active');
              }
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* --- Smooth scroll for anchor links (fallback for older browsers) --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Career 3-view tab switcher --- */
  var careerTabs = document.querySelectorAll('.career__tab');
  var careerViews = document.querySelectorAll('.career__view');
  var techGraphInited = false;
  var lockedNode = null;

  function switchCareerView(view) {
    careerTabs.forEach(function (tab) {
      var active = tab.getAttribute('data-view') === view;
      tab.classList.toggle('career__tab--active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    careerViews.forEach(function (panel) {
      var active = panel.getAttribute('data-view') === view;
      panel.classList.toggle('career__view--active', active);
      if (active) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    });
    /* When a panel becomes visible after being hidden, its child reveal
       elements are still opacity:0 from the .reveal class. Force-reveal
       anything in the now-active panel that is already in the viewport,
       and re-observe the rest so IO can fire on scroll. */
    var activePanel = document.querySelector('.career__view--active');
    if (activePanel && typeof forceRevealInView === 'function') {
      forceRevealInView(activePanel);
    }
    if (view === 'tech') {
      /* Re-init graph every time to ensure DOM nodes are fresh and match current lang */
      initTechGraph();
      techGraphInited = true;
      lockedNode = null;
    }
  }

  /* --- Skill tag → tech mindmap node jump --- */
  function jumpToTech(techId) {
    var target = document.getElementById('experience');
    if (!target) return;
    /* Smooth scroll to career section */
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    /* Switch to tech view (this re-renders the mindmap) */
    switchCareerView('tech');
    /* Wait for graph DOM to be created, then click the node */
    requestAnimationFrame(function () {
      setTimeout(function () {
        var nodeEl = document.querySelector(
          '.tech-graph .node-group[data-node="' + techId + '"]'
        );
        if (nodeEl) {
          nodeEl.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }
      }, 80);
    });
  }

  /* Bind skill tags with data-skill */
  document.querySelectorAll('.skill-tag[data-skill]').forEach(function (tag) {
    tag.addEventListener('click', function () {
      var techId = tag.getAttribute('data-skill');
      if (techId) jumpToTech(techId);
    });
  });

  careerTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      switchCareerView(tab.getAttribute('data-view'));
    });
    tab.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        var tabsArr = Array.prototype.slice.call(careerTabs);
        var idx = tabsArr.indexOf(tab);
        var next = e.key === 'ArrowRight' ? (idx + 1) % tabsArr.length : (idx - 1 + tabsArr.length) % tabsArr.length;
        tabsArr[next].focus();
        switchCareerView(tabsArr[next].getAttribute('data-view'));
      }
    });
  });

  /* --- Tech mindmap: centralized career → tech graph data --- */

  var CAREER_GRAPH = {
    companies: [
      { id: 'bithumb', label: '빗썸', labelEn: 'Bithumb' },
      { id: 'jk',      label: '잡코리아', labelEn: 'JobKorea' },
      { id: 'bespin',  label: '베스핀글로벌', labelEn: 'Bespin Global' },
      { id: 'intern',  label: '인턴/연구', labelEn: 'Internships' }
    ],
    projects: [
      { id: 'p-braze', label: 'Braze CRM 마트', labelEn: 'Braze CRM Mart', company: 'bithumb' },
      { id: 'p1', label: 'AI Agent 플랫폼 MvP', labelEn: 'AI Agent MVP', company: 'bithumb' },
      { id: 'p-poc', label: 'AI Agent PoC', labelEn: 'AI Agent PoC', company: 'bithumb' },
      { id: 'p2', label: '플랫폼 고도화', labelEn: 'Platform Modernization', company: 'bithumb' },
      { id: 'p3', label: 'Airflow 커스텀 오퍼레이터', labelEn: 'Airflow Custom Operator', company: 'jk' },
      { id: 'p4', label: 'Self-Insight 마트', labelEn: 'Self-Insight Mart', company: 'jk' },
      { id: 'p5', label: 'Onepick AI 추천', labelEn: 'Onepick AI Recs', company: 'jk' },
      { id: 'p-coverage', label: 'Data Coverage', labelEn: 'Data Coverage', company: 'jk' },
      { id: 'p6', label: 'JOBIA 플랫폼', labelEn: 'JOBIA Platform', company: 'bespin' }
    ],
    techs: [
      { id: 'databricks',   label: 'Databricks',   projects: ['p1','p-poc','p2','p3','p4'] },
      { id: 'aws',          label: 'AWS',           projects: ['p-braze','p1','p-poc','p2','p6'] },
      { id: 'airflow',      label: 'Airflow',       projects: ['p2','p3','p4','p5','p-coverage'] },
      { id: 'redshift',     label: 'Redshift',      projects: ['p-braze','p2','p6'] },
      { id: 'glue',         label: 'Glue',          projects: ['p2','p6'] },
      { id: 'spark',        label: 'Spark/PySpark', projects: ['p2','p3','p4','p5','p-coverage','p6'] },
      { id: 'terraform',    label: 'Terraform',     projects: ['p2'] },
      { id: 'emr',          label: 'EMR',           projects: ['p5','p6'] },
      { id: 'sagemaker',    label: 'SageMaker',     projects: ['p3','p5'] },
      { id: 's3',           label: 'S3',            projects: ['p-braze','p6'] },
      { id: 'athena',       label: 'Athena',        projects: ['p6'] },
      { id: 'stepfunctions',label:'Step Functions', projects: ['p6'] },
      { id: 'unitycatalog', label: 'Unity Catalog', projects: ['p1','p3','p4'] },
      { id: 'deltalake',    label: 'Delta Lake',    projects: ['p3','p4'] },
      { id: 'ismsp',        label: 'ISMS-P',        projects: ['p1','p3'] },
      { id: 'python',       label: 'Python',        projects: ['p2','p3','p4'] },
      { id: 'sql',          label: 'SQL',           projects: ['p-braze','p1','p2','p4'] },
      { id: 'privatelink',  label: 'PrivateLink',   projects: ['p1','p-poc'] },
      { id: 'genie',        label: 'Databricks Genie',projects: ['p1','p-poc'] },
      { id: 'spectrum',     label: 'Redshift Spectrum',projects: ['p-braze'] },
      { id: 'lambda',       label: 'Lambda/EventBridge',projects: ['p6'] },
      { id: 'grafana',      label: 'Grafana',        projects: ['p5'] }
    ]
  };

  function getCurrentLang() {
    var html = document.documentElement;
    return html.getAttribute('data-lang') || 'ko';
  }

  function getLabel(node, lang) {
    if (lang === 'en' && node.labelEn) return node.labelEn;
    return node.label;
  }

  function initTechGraph() {
    var container = document.getElementById('techGraph');
    if (!container) return;
    var lang = getCurrentLang();

    var CX = 400, CY = 260;
    var techCount = CAREER_GRAPH.techs.length;

    var nodes = [];
    var edges = [];

    nodes.push({ id: 'hub', label: lang === 'en' ? 'Career' : '경력', type: 'hub', x: CX, y: CY, r: 8 });

    var companyIndices = {};
    CAREER_GRAPH.companies.forEach(function (c, i) {
      var angle = (i / CAREER_GRAPH.companies.length) * Math.PI * 2 - Math.PI / 2;
      var R = 110;
      companyIndices[c.id] = i;
      nodes.push({ id: c.id, label: getLabel(c, lang), type: 'company', x: CX + Math.cos(angle) * R, y: CY + Math.sin(angle) * R, r: 5 });
      edges.push({ from: 'hub', to: c.id });
    });

    var projIndices = {};
    CAREER_GRAPH.projects.forEach(function (p, i) {
      var angle = (i / CAREER_GRAPH.projects.length) * Math.PI * 2 - Math.PI / 2 + 0.3;
      var R = 200;
      projIndices[p.id] = i;
      nodes.push({ id: p.id, label: getLabel(p, lang), type: 'project', x: CX + Math.cos(angle) * R, y: CY + Math.sin(angle) * R, r: 4 });
      edges.push({ from: p.company, to: p.id });
    });

    CAREER_GRAPH.techs.forEach(function (t, i) {
      var angle = (i / techCount) * Math.PI * 2;
      var R = 180;
      nodes.push({ id: t.id, label: t.label, type: 'tech', x: CX + Math.cos(angle) * R, y: CY + Math.sin(angle) * R, r: 4 });
      t.projects.forEach(function (pid) {
        edges.push({ from: t.id, to: pid });
      });
    });

    var nodeMap = {};
    nodes.forEach(function (n) { nodeMap[n.id] = n; });

    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 800 520');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    var edgeGroup = document.createElementNS(ns, 'g');
    edgeGroup.setAttribute('class', 'edges');
    var nodeGroup = document.createElementNS(ns, 'g');
    nodeGroup.setAttribute('class', 'nodes');

    var edgeEls = [];
    edges.forEach(function (e) {
      var from = nodeMap[e.from], to = nodeMap[e.to];
      if (!from || !to) return;
      var line = document.createElementNS(ns, 'line');
      line.setAttribute('x1', from.x);
      line.setAttribute('y1', from.y);
      line.setAttribute('x2', to.x);
      line.setAttribute('y2', to.y);
      line.setAttribute('class', 'edge');
      line.setAttribute('data-from', e.from);
      line.setAttribute('data-to', e.to);
      edgeGroup.appendChild(line);
      edgeEls.push(line);
    });

    var nodeEls = [];
    nodes.forEach(function (n) {
      var g = document.createElementNS(ns, 'g');
      g.setAttribute('class', 'node-group node--' + n.type);
      g.setAttribute('data-node', n.id);

      var circle = document.createElementNS(ns, 'circle');
      circle.setAttribute('cx', n.x);
      circle.setAttribute('cy', n.y);
      circle.setAttribute('r', n.r);
      circle.setAttribute('class', 'node-circle');
      g.appendChild(circle);

      var text = document.createElementNS(ns, 'text');
      text.setAttribute('x', n.x);
      text.setAttribute('y', n.y - n.r - 4);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('class', 'node-label');
      text.textContent = n.label;
      g.appendChild(text);

      g.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleFocus(container, n, nodeEls, edgeEls);
      });
      g.addEventListener('mouseenter', function () {
        hoverFocus(container, n, nodeEls, edgeEls);
      });
      g.addEventListener('mouseleave', function () {
        if (!container.classList.contains('is-locked')) {
          clearFocus(container, nodeEls, edgeEls);
        }
      });

      nodeGroup.appendChild(g);
      nodeEls.push({ node: n, el: g });
    });

    svg.appendChild(edgeGroup);
    svg.appendChild(nodeGroup);

    container.innerHTML = '';
    container.appendChild(svg);

    container.addEventListener('click', function () {
      container.classList.remove('is-focusing', 'is-locked');
      clearFocus(container, nodeEls, edgeEls);
    });
  }

  function getAdjacent(fromId) {
    var adj = {};
    CAREER_GRAPH.techs.forEach(function (t) {
      if (t.id === fromId) {
        t.projects.forEach(function (pid) { adj[pid] = true; adj[t.id] = true; });
      }
    });
    CAREER_GRAPH.projects.forEach(function (p) {
      if (p.id === fromId) {
        adj[p.company] = true;
        CAREER_GRAPH.techs.forEach(function (t) {
          if (t.projects.indexOf(p.id) >= 0) adj[t.id] = true;
        });
      }
    });
    CAREER_GRAPH.companies.forEach(function (c) {
      if (c.id === fromId) {
        CAREER_GRAPH.projects.forEach(function (p) {
          if (p.company === c.id) adj[p.id] = true;
        });
      }
    });
    adj[fromId] = true;
    if (fromId === 'hub') {
      CAREER_GRAPH.companies.forEach(function (c) { adj[c.id] = true; });
      CAREER_GRAPH.projects.forEach(function (p) { adj[p.id] = true; });
      CAREER_GRAPH.techs.forEach(function (t) { adj[t.id] = true; });
    }
    return adj;
  }

  function applyFocus(container, targetId, nodeEls, edgeEls) {
    var adj = targetId ? getAdjacent(targetId) : null;
    container.classList.toggle('is-focusing', !!targetId);
    nodeEls.forEach(function (item) {
      var hl = targetId ? !!adj[item.node.id] : false;
      item.el.classList.toggle('is-highlight', hl);
    });
    edgeEls.forEach(function (line) {
      var hl = targetId ? (line.getAttribute('data-from') === targetId || line.getAttribute('data-to') === targetId) : false;
      line.classList.toggle('is-highlight', hl);
    });
  }

  function clearFocus(container, nodeEls, edgeEls) {
    applyFocus(container, null, nodeEls, edgeEls);
  }

  function hoverFocus(container, node, nodeEls, edgeEls) {
    if (container.classList.contains('is-locked')) return;
    applyFocus(container, node.id, nodeEls, edgeEls);
  }

  function toggleFocus(container, node, nodeEls, edgeEls) {
    if (lockedNode && lockedNode.id === node.id) {
      lockedNode = null;
      container.classList.remove('is-locked');
      clearFocus(container, nodeEls, edgeEls);
    } else {
      lockedNode = node;
      container.classList.add('is-locked');
      applyFocus(container, node.id, nodeEls, edgeEls);
    }
  }

  /* Re-render graph when language changes */
  document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      techGraphInited = false;
      var active = document.querySelector('.career__tab--active');
      if (active && active.getAttribute('data-view') === 'tech') {
        setTimeout(initTechGraph, 50);
        techGraphInited = true;
      }
    });
  });

  if (document.querySelector('.career__tab--active[data-view="tech"]')) {
    initTechGraph();
    techGraphInited = true;
  }

  /* --- Email obfuscation: compose mailto link at runtime from data attributes --- */
  document.querySelectorAll('.contact__link--email').forEach(function (el) {
    var user = el.getAttribute('data-email-user');
    var domain = el.getAttribute('data-email-domain');
    var tld = el.getAttribute('data-email-tld');
    if (!user || !domain || !tld) return;
    var at = String.fromCharCode(64);
    var email = user + at + domain + '.' + tld;
    el.setAttribute('href', 'mailto:' + email);
    var display = el.querySelector('[data-email-display]');
    if (display) display.textContent = email;
  });

  /* ========================================================================
     PROJECT DETAIL MODAL
     Click a project card to open a floating modal with full project details.
     Data is read from the inline #projectDetails JSON (i18n-keyed by language).
     Supports keyboard (Esc), backdrop click, X button. Re-renders body when
     language changes while open.
     ======================================================================== */

  var modal = document.getElementById('projectModal');
  var modalTitle = document.getElementById('projectModalTitle');
  var modalBadge = document.getElementById('projectModalBadge');
  var modalOwner = document.getElementById('projectModalOwner');
  var modalBody = document.getElementById('projectModalBody');

  /* Parse the embedded project details JSON */
  var PROJECT_DETAILS = {};
  (function loadProjectDetails() {
    var el = document.getElementById('projectDetails');
    if (!el) return;
    try {
      PROJECT_DETAILS = JSON.parse(el.textContent);
    } catch (err) {
      console.error('Failed to parse #projectDetails JSON:', err);
    }
  })();

  var lastFocus = null;
  var keydownHandler = null;
  var currentProjectId = null;

  function getLang() {
    return (window.__i18n && window.__i18n.getLang && window.__i18n.getLang()) || 'ko';
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderProjectModal() {
    if (!currentProjectId) return;
    var data = PROJECT_DETAILS[currentProjectId];
    if (!data) return;
    var lang = getLang();
    var content = data[lang] || data.ko || {};

    /* Header fields from the card itself (translated by the i18n system) */
    var card = document.querySelector('.project-card[data-project="' + currentProjectId + '"]');
    var cardTitle = card ? card.querySelector('.project-card__title') : null;
    var cardBadge = card ? card.querySelector('.project-card__badge') : null;
    modalTitle.textContent = (cardTitle ? cardTitle.textContent : '').trim();
    modalBadge.textContent = (cardBadge ? cardBadge.textContent : '').trim();
    /* Owner label: prefer JSON entry, fall back to data-owner attribute */
    var ownerText = content.owner || '';
    if (!ownerText && card) {
      var ownerMap = { bithumb: '빗썸', jk: '웍스피어 (구 잡코리아)', bespin: '베스핀글로벌' };
      ownerText = ownerMap[card.getAttribute('data-owner')] || '';
    }
    modalOwner.textContent = ownerText;

    /* Body */
    var html = '';
    if (content.summary) {
      html += '<p>' + escapeHtml(content.summary) + '</p>';
    }
    (content.sections || []).forEach(function (section) {
      html += '<h4>' + escapeHtml(section.heading) + '</h4>';
      html += '<ul>';
      (section.items || []).forEach(function (item) {
        html += '<li>' + escapeHtml(item) + '</li>';
      });
      html += '</ul>';
    });
    modalBody.innerHTML = html;

    /* Scroll modal body to top so users see the summary first */
    modalBody.scrollTop = 0;
  }

  function openProjectModal(projectId) {
    if (!modal) return;
    currentProjectId = projectId;
    lastFocus = document.activeElement;
    renderProjectModal();
    modal.hidden = false;
    /* Force reflow so the CSS transition runs from its initial state */
    // eslint-disable-next-line no-unused-expressions
    modal.offsetHeight;
    modal.classList.add('modal--open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    /* Move focus to the close button for keyboard users */
    var closeBtn = modal.querySelector('.modal__close');
    if (closeBtn) closeBtn.focus();

    /* Keyboard handlers: Esc to close, Tab to trap focus */
    if (keydownHandler) document.removeEventListener('keydown', keydownHandler);
    keydownHandler = function (e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeProjectModal();
        return;
      }
      if (e.key === 'Tab') {
        var focusables = modal.querySelectorAll(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', keydownHandler);
  }

  function closeProjectModal() {
    if (!modal || modal.hidden) return;
    modal.classList.remove('modal--open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (keydownHandler) {
      document.removeEventListener('keydown', keydownHandler);
      keydownHandler = null;
    }
    /* Wait for the close transition to finish before fully hiding */
    setTimeout(function () {
      modal.hidden = true;
      currentProjectId = null;
      if (lastFocus && typeof lastFocus.focus === 'function') {
        lastFocus.focus();
      }
    }, 250);
  }

  /* Wire up project cards (click + keyboard) */
  document.querySelectorAll('.project-card[data-project]').forEach(function (card) {
    var projectId = card.getAttribute('data-project');
    card.addEventListener('click', function () {
      openProjectModal(projectId);
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(projectId);
      }
    });
  });

  /* Wire up close controls (backdrop + X button) */
  if (modal) {
    modal.querySelectorAll('[data-modal-close]').forEach(function (el) {
      el.addEventListener('click', closeProjectModal);
    });
  }

  /* Re-render the open modal when the user toggles language */
  document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      /* Wait for i18n to finish its DOM updates before re-rendering */
      setTimeout(function () {
        if (modal && !modal.hidden && currentProjectId) {
          renderProjectModal();
        }
      }, 0);
    });
  });
})();
