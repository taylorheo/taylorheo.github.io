/* ==========================================================================
   i18n — Bilingual (KO default / EN) language toggle
   ========================================================================== */

(function () {
  'use strict';

  const DEFAULT_LANG = 'ko';

  /* --- English translation dictionary ---
     Any key missing here falls back to the Korean text already in the HTML. */
  const EN = {
    /* Meta */
    'meta.title': 'Youngdae Heo — Data Engineer',
    'meta.description': 'Youngdae Heo, Data Engineer at Bithumb. Projects in AWS and Databricks data platforms, ETL pipelines, and infrastructure operations.',
    'meta.ogDescription': 'Youngdae Heo, Data Engineer at Bithumb. Projects in AWS and Databricks data platforms, ETL pipelines, and infrastructure operations.',

    /* A11y */
    'a11y.skip': 'Skip to content',

    /* Nav */
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Work',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'nav.open': 'Toggle navigation menu',
    'nav.close': 'Close navigation menu',
    'nav.theme': 'Dark theme',
    'nav.themeLabel': 'Theme',

    /* Hero */
    'hero.tag': 'Bithumb · Data Platform Team',
    'hero.name': 'Youngdae Heo',
    'hero.title': 'Data Engineer',
    'hero.subtitle': 'I build and operate<br>data platforms.',
    'hero.description': 'I develop data pipelines and manage infrastructure on AWS and Databricks. My work includes improving queries and compute configurations to reduce runtime and cost.',
    'hero.location': 'Seoul, KR',
    'hero.experience': '{{tenure}} in data engineering',
    'hero.ctaProjects': 'Explore projects',
    'hero.ctaContact': 'Get in Touch',
    'hero.scroll': 'scroll',
    'hero.brand.company': 'Bithumb',
    'hero.brand.role': 'Data Engineer',
    'hero.impactHeading': 'Project results',
    'hero.impact.etl': 'ETL cost reduction',
    'hero.impact.etlDetail': 'Job Compute migration',
    'hero.impact.dag': 'DAG runtime reduction',
    'hero.impact.dagDetail': 'Databricks cluster reuse',
    'hero.impact.worker': 'Lower worker resource usage',
    'hero.impact.workerDetail': 'SageMaker Deferrable Operator',
    'hero.impact.note': 'Project-specific results at Worxphere (ex-JobKorea).<br>Open each project for its scope and implementation.',

    /* About */
    'about.heading': 'About',
    'about.text': "I design and operate IDC- and AWS-based data platforms on Bithumb's Data Platform Team in the Data/AI Division. I manage infrastructure design, assets, security reviews, and cloud costs. I also work on platform consolidation and AI Agent adoption under financial regulations and ISMS-P requirements.<br><br>Previously, I built AWS data platforms at Bespin Global and worked on Databricks migration and custom Airflow operators at Worxphere LLC (ex-JobKorea LLC).",
    'about.stat.years': 'Data engineering experience',
    'about.stat.savings': 'ETL cost reduction through Job Compute migration',
    'about.stat.companies': 'Companies worked at',

    /* Skills */
    'skills.heading': 'Skills',
    'skills.hint': 'Select a technology with an arrow to explore the projects where it was used.',
    'skills.cat.languages': 'Languages',
    'skills.cat.dataEng': 'Data Engineering',
    'skills.cat.crypto': 'Crypto & Financial Data',
    'skills.cat.cloud': 'Cloud & Platforms',
    'skills.cat.ml': 'ML & NLP',
    'skills.tag.dataModeling': 'Data Modeling',
    'skills.tag.customOperators': 'Custom Operators',
    'skills.tag.orderFlow': 'Exchange Order Flow',
    'skills.tag.marketData': 'Market Data Pipelines',
    'skills.tag.ismsp': 'ISMS-P Compliance',
    'skills.tag.cspm': 'CSPM / Security Review',
    'skills.tag.piiEnc': 'PII Hashing (SHA-256)',
    'skills.tag.unsupervised': 'Unsupervised Classification',
    'skills.tag.webhook': 'Webhook Alerts',
    'skills.tag.webCollection': 'Selenium / BS4 Data Collection',
    'skills.tag.braze': 'Braze / CRM Push',
    'skills.tag.crm': 'CRM Push',
    'skills.tag.dr': 'DR (Disaster Recovery)',

    /* Experience */
    'experience.heading': 'Experience',

    /* Career 3-view section */
    'career.heading': 'Projects & career',
    'career.tab.company': 'Experience',
    'career.tab.project': 'Projects',
    'career.tab.tech': 'Technology',
    'career.prompt': 'Responsibilities, implementation details, and results for each project.',
    'career.sub.company': 'Experience by company',
    'career.sub.project': 'Featured projects',
    'career.sub.tech': 'Technology and project connections',
    'career.hint': 'Click a tech, company, or project node to highlight its connections. Click the background to clear.',
    'career.legend.tech': 'Tech',
    'career.legend.company': 'Company',
    'career.legend.project': 'Project',
    'career.legend.hub': 'Hub',
    'career.fallback': 'JavaScript is required to render the mindmap.',

    'exp.bithumb.role': 'Data Platform Engineer',
    'exp.bithumb.company': 'Bithumb — Data/AI Division, Data Platform Team · Seoul, KR',
    'exp.bithumb.date': 'Sep 2024 — Present',
    'exp.bithumb.b1': 'Led company-wide rollout of a Databricks-based AI Agent platform — Text-to-SQL, data analytics, and Insight Agent development and user training. Achieved 90% accuracy in the Nov–Dec 2025 PoC; built MVP and production rollout Jan–Apr 2026.',
    'exp.bithumb.b2': 'Designed customer aggregation attribute marts and pipelines for Braze CRM adoption — Redshift + S3 PII data extraction architecture, Redshift Spectrum query environment (Jan–Apr 2026).',
    'exp.bithumb.b3': 'Architected AWS PrivateLink-based Databricks workspaces that passed financial-sector security review — network segmentation design, security team coordination, PII and credit-information catalog and data governance processes.',
    'exp.bithumb.b4': 'Consolidating dual IDC + AWS analytics/information platforms — new AWS account IaC transition (Terraform), VPC/Subnet design, Prefect+EMR → Airflow+Glue pipeline migration (PySpark), SageMaker Unified Studio & Redshift Serverless PoC, multi-cluster isolation cutting Redshift node cost 33% (Jun 2025–ongoing).',
    'exp.bithumb.b5': 'Own platform-wide security operations: CSPM-based reviews, patch and vulnerability management, certificate lifecycle, and ISMS-P data lifecycle documentation and audit interviews (Oct 2025).',
    'exp.bithumb.b6': 'Other operational projects: Tomcat-based BI MATRIX redundancy (Nov 2024–Jun 2025), DR failover setup (Apr–Jul 2025), order book storage migration (Jun–Sep 2025), BI service credit-information compliance feature (Oct–Dec 2025).',
    'exp.bithumb.b7': 'Operate core data assets across VERTICA, Redshift, Airflow, Aurora MySQL, EMR, and BI MATRIX — including ingestion pipelines for exchange trading data (Oracle, Aurora MySQL), GA4, and Appsflyer.',

    'exp.jk.role': 'Data Engineer, Manager',
    'exp.jk.company': 'Worxphere LLC (ex-JobKorea LLC) — Data & AI Division, Data Platform Team · Seoul, KR',
    'exp.jk.date': 'Jul 2022 — Sep 2024',
    'exp.jk.b1': 'Built Self-Insight Data Mart — a company-wide self-serve analytics platform — cutting mart runtimes 5–20% via SparkSQL optimization and eliminating duplicated profile data. Built hybrid On-Prem Airflow + Databricks Workflow pipeline.',
    'exp.jk.b2': 'Designed Airflow custom operators extending Astro + Databricks providers, migrating ETL from All-Purpose to Job Compute clusters. Cut ETL cost 60–70%, SageMaker-Databricks cost 50–60%. Added auto-retry and Jinja2 template rendering.',
    'exp.jk.b3': 'Migrated data lake from AWS EMR to Databricks + Delta Lake with Unity Catalog — built an All-Purpose-cluster reuse operator that cut DAG runtime by 5–20% and removed 3–5 min of per-task resource allocation overhead. Connected EMR Hive Metastore to Databricks for validation.',
    'exp.jk.b4': 'Built the Onepick AI-driven talent recommendation ML pipeline: applied a Python Deferrable operator for SageMaker, reducing Airflow worker resource usage by approximately 20%. Added MS Teams webhook-based performance/error monitoring and a Grafana dashboard.',
    'exp.jk.b5': 'Data Coverage — automated analyst data mart generation pipelines, migrated Presto report queries to PySpark, 5–10% performance improvement per table (May–Jun 2023).',
    'exp.jk.b6': 'Developed SHA-256 PII hashing and Databricks↔AWS Glue Catalog automation modules to support ISMS-P requirements and analyst productivity.',

    'exp.bespin.role': 'Cloud Data Engineer',
    'exp.bespin.company': 'Bespin Global — DataOps Division, Data Analytics Team · Seoul, KR',
    'exp.bespin.date': 'Jul 2021 — Jul 2022',
    'exp.bespin.b1': "Delivered JOBIA — Worxphere LLC (ex-JobKorea LLC)'s AWS-based data/AI platform — migrating on-prem MSSQL SSIS warehouse and marts to Redshift + S3 data lake and reducing pipeline runtime by 15%+.",
    'exp.bespin.b2': 'Consolidated external data (GA360, SAP via AWS Transfer Family, Appsflyer via S3 event-triggered Lambda micro-ETL) into a single Glue Catalog / Athena analytical environment.',
    'exp.bespin.b3': 'Authored batch pipeline development guides and trained client teams on AWS Step Functions + Glue + Spark ETL patterns during PoC.',
    'exp.bespin.b4': 'Improved AWS resource governance with a Lambda + CloudTrail–based asset management system.',

    'exp.intern.role': 'Research Engineer · Public Data Intern',
    'exp.intern.company': 'Kookmin Univ. / Dankook Univ. / Cheongju Univ. ICC · National Assembly Library (HyoSung ITX)',
    'exp.intern.date': '2019 — 2020',
    'exp.intern.b1': "Built Raspberry Pi–based air-quality sensor network at Kookmin University for the Korea Forest Service's \"Green Shelter\" research project, delivering a real-time ingestion and visualization pipeline.",
    'exp.intern.b2': 'Optimized a fine-dust recovery-time algorithm, cutting analysis runtime 50%+ for the Bio+ City research project — co-authored the ICLEE 2019 poster "PM 2.5 Distribution Trend in an Urban Area".',
    'exp.intern.b3': 'Built Ubuntu / MySQL-based Jupyter Notebook and JupyterLab analysis environments. The initial Green Shelter project reduced analysis time by approximately 20% versus Excel / SPSS workflows.',

    /* Education */
    'education.heading': 'Education & Certifications',
    'edu.degree': 'B.S. in Computer Information Engineering',
    'edu.school': 'Cheongju University · GPA 3.8 / 4.5 (Full-time)',
    'edu.year': 'Mar 2013 — Feb 2019',
    'edu.thesis': '[Capstone Design] SurveyChat: Conversational Chatbot Survey & Response Analysis System — KoNLPy morphological analysis, scikit-learn unsupervised classification, Django API server, MongoDB storage, KakaoTalk chatbot integration.',

    /* Certifications */
    'certs.heading': 'Certifications',
    'certs.toeic': 'TOEIC 895',
    'certs.engineer': 'Engineer Information Processing',
    'certs.sqld': 'SQL Developer (SQLD)',
    'awards.heading': 'Awards',
    'awards.paper': 'Korean Institute of Intelligent Systems, Spring Conference — Outstanding Paper Award',
    'awards.samsung': 'Young Samsung, 10th University Supporters — Individual Excellence Award',
    'pubs.heading': 'Publications',
    'pubs.iclee': 'PM 2.5 Distribution Trend in an Urban Area — ICLEE 2019 Poster Session',
    'pubs.patterns': 'Restaurant User Pattern Analysis Using Online Information — Korean Institute of Intelligent Systems (2019)',
    'aria.pubs.mdpi': 'Open MDPI Land 2022 paper (DOI link, new tab)',

    /* Contact */
    'contact.heading': 'Contact',
    'contact.text': 'For work or collaboration inquiries, please contact me by email or LinkedIn.',
    'contact.note': 'For direct email, please reach out via LinkedIn or GitHub first.',

    /* Footer */
    'footer.copy': '© 2026 Youngdae Heo. All rights reserved.',

    /* Project detail modal — UI chrome */
    'modal.close': 'Close',
    'modal.role': 'Role',

    /* Writing block on the main page */
    'writing.heading': 'Writing',
    'writing.intro': 'Notes from building and operating data platforms. Posts from velog are synced automatically.',
    'writing.all': 'All posts',

    /* Blog list and post pages */
    'blog.meta.title': 'Blog — Youngdae Heo',
    'blog.meta.description': 'Technical blog by Youngdae Heo, Data Engineer. Posts from velog and posts published only on this site, in one place.',
    'blog.heading': 'Blog',
    'blog.lead': 'Notes from building and operating data platforms. Posts on <a href="https://velog.io/@graphy-young/" target="_blank" rel="noopener noreferrer">velog</a> are synced automatically, alongside posts published only on this site.',
    'blog.search': 'Search',
    'blog.searchPlaceholder': 'Search by title, summary, or tag',
    'blog.source.all': 'All',
    'blog.source.site': 'This site',
    'blog.backToList': 'All posts',
    'blog.minutes': ' min read',
    'blog.updated': 'Updated',
    'blog.toc': 'Contents',
    'blog.originVelog': 'This post was first published on velog.',
    'blog.viewOnVelog': 'Read the original on velog',
    'blog.prev': 'Previous',
    'blog.next': 'Next'
  };

  /* Korean defaults are captured from the initial HTML (first paint) */
  const KO = {};
  function captureKoreanDefaults() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');
      if (key in KO) return;
      if (attr) {
        KO[key] = el.getAttribute(attr) || '';
      } else {
        KO[key] = el.innerHTML;
      }
    });
  }

  const DICT = { ko: KO, en: EN };

  /* --- Dynamic tenure calculation ---
     Computes the years/months since the start of the data engineering
     career (Bespin Global, 2021-07-01) and substitutes the {{tenure}}
     placeholder in any translated or data-dynamic value. */
  const CAREER_START = new Date(2021, 6, 1); // 2021-07-01 (Bespin Global start)

  function formatTenure(lang) {
    var now = new Date();
    var years = now.getFullYear() - CAREER_START.getFullYear();
    var months = now.getMonth() - CAREER_START.getMonth();
    if (now.getDate() < CAREER_START.getDate()) months -= 1;
    if (months < 0) { years -= 1; months += 12; }
    if (lang === 'en') {
      var yearStr = years + ' year' + (years === 1 ? '' : 's');
      if (months === 0) return yearStr;
      return yearStr + ' ' + months + ' month' + (months === 1 ? '' : 's');
    }
    var koStr = years + '년';
    if (months > 0) koStr += ' ' + months + '개월';
    return koStr;
  }

  function resolveTenure(value, lang) {
    if (typeof value !== 'string' || value.indexOf('{{tenure}}') === -1) return value;
    return value.replace(/\{\{tenure\}\}/g, formatTenure(lang));
  }

  /* --- Apply a language across the page --- */
  function applyLang(lang) {
    if (lang !== 'ko' && lang !== 'en') lang = DEFAULT_LANG;
    currentLang = lang;

    // Set root attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    // Translate every data-i18n node
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');
      const value = DICT[lang][key];
      if (value === undefined) return; // fall back to existing content
      const resolved = resolveTenure(value, lang);
      if (attr) {
        el.setAttribute(attr, resolved);
      } else {
        el.innerHTML = resolved;
      }
    });

    // Dynamic-only nodes (not in i18n)
    document.querySelectorAll('[data-dynamic="tenure"]').forEach(function (el) {
      if (el.hasAttribute('data-i18n')) return;
      el.textContent = formatTenure(lang);
    });

    // Update <title> if present
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) document.title = titleEl.textContent;

    // Update toggle button states
    document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('lang-toggle__btn--active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    // Notify project and technology explorers after all static text is updated.
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang } }));
  }

  /* --- Init on DOM ready --- */
  let currentLang = DEFAULT_LANG;

  function init() {
    captureKoreanDefaults();

    // Preferences stay in memory, including in restricted preview frames.
    applyLang(DEFAULT_LANG);

    // Wire up toggle buttons
    document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const next = btn.getAttribute('data-lang');
        applyLang(next);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* --- Public API (exposed for app.js to read the active language) --- */
  window.__i18n = {
    getLang: function () { return currentLang; },
    setLang: applyLang,
    t: function (key, fallback) {
      const v = (DICT[currentLang] && DICT[currentLang][key]);
      if (v === undefined) return fallback !== undefined ? fallback : key;
      return resolveTenure(v, currentLang);
    }
  };
})();
