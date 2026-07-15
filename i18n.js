/* ==========================================================================
   i18n — Bilingual (KO default / EN) language toggle
   ========================================================================== */

(function () {
  'use strict';

  const STORAGE_KEY = 'resume-site.lang';
  const DEFAULT_LANG = 'ko';

  /* --- English translation dictionary ---
     Any key missing here falls back to the Korean text already in the HTML. */
  const EN = {
    /* Meta */
    'meta.title': 'Youngdae Heo — Data Engineer',
    'meta.description': 'Data Platform Engineer at Bithumb. Designing secure, cost-efficient data infrastructure for cryptocurrency exchange — Databricks, AWS, Airflow. Based in Seoul, South Korea.',
    'meta.ogDescription': 'Data Platform Engineer at Bithumb. Designing secure, cost-efficient data infrastructure for cryptocurrency exchange. Based in Seoul.',

    /* A11y */
    'a11y.skip': 'Skip to content',

    /* Nav */
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',

    /* Hero */
    'hero.tag': 'Data Platform Engineer · Bithumb',
    'hero.name': 'Youngdae Heo',
    'hero.title': 'Data Engineer',
    'hero.subtitle': "Building secure, cost-efficient data platforms for Korea's cryptocurrency exchange. 4 years 4 months engineering ETL pipelines, AWS infrastructure, and Databricks lakehouses under financial-grade compliance.",
    'hero.location': 'Seoul, KR',
    'hero.experience': '4 years 4 months',
    'hero.ctaContact': 'Get in Touch',
    'hero.scroll': 'scroll',

    /* About */
    'about.heading': 'About',
    'about.text': "Data Platform Engineer at Bithumb, Korea's leading cryptocurrency exchange, where I design and operate IDC + AWS data platforms under financial-regulatory and ISMS-P compliance. My focus sits at the intersection of data infrastructure, security, and FinOps — migrating legacy systems to modern lakehouses (Databricks, Redshift), cutting compute costs by 30–70% through workload optimization, and building secure landing zones that pass financial-grade security audits. Previously shipped data platforms at JobKorea and Bespin Global.",
    'about.stat.years': 'Total Experience',
    'about.stat.savings': 'Avg ETL Cost Savings',
    'about.stat.companies': 'Companies Shipped',

    /* Skills */
    'skills.heading': 'Skills',
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
    'skills.tag.piiEnc': 'PII Encryption (SHA-256)',
    'skills.tag.unsupervised': 'Unsupervised Classification',

    /* Experience */
    'experience.heading': 'Experience',

    /* Career 3-view section */
    'career.heading': 'Career',
    'career.tab.company': 'By Company',
    'career.tab.project': 'By Project',
    'career.tab.tech': 'By Tech (Mindmap)',
    'career.sub.company': 'Experience by company',
    'career.sub.project': 'Featured projects',
    'career.sub.tech': 'Technology mindmap',
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
    'exp.jk.company': 'JobKorea — Data & AI Division, Data Platform Team · Seoul, KR',
    'exp.jk.date': 'Jul 2022 — Sep 2024',
    'exp.jk.b1': 'Built Self-Insight Data Mart — a company-wide self-serve analytics platform — cutting mart runtimes 5–20% via SparkSQL optimization and eliminating duplicated profile data. Built hybrid On-Prem Airflow + Databricks Workflow pipeline.',
    'exp.jk.b2': 'Designed Airflow custom operators extending Astro + Databricks providers, migrating ETL from All-Purpose to Job Compute clusters. Cut ETL cost 60–70%, SageMaker-Databricks cost 50–60%. Added auto-retry and Jinja2 template rendering.',
    'exp.jk.b3': 'Migrated data lake from AWS EMR to Databricks + Delta Lake with Unity Catalog — built an All-Purpose-cluster reuse operator that cut DAG runtime by 5–20% and removed 3–5 min of per-task resource allocation overhead. Connected EMR Hive Metastore to Databricks for validation.',
    'exp.jk.b4': 'Shipped Onepick, an AI-driven talent recommendation ML pipeline: authored a Python Deferrable operator for SageMaker that reduced Airflow worker resource usage by avg 20% without additional scaling. Added webhook-based monitoring and Grafana dashboard.',
    'exp.jk.b5': 'Data Coverage — automated analyst data mart generation pipelines, migrated Presto report queries to PySpark, 5–10% performance improvement per table (May–Jun 2023).',
    'exp.jk.b6': 'Developed SHA-256 PII encryption and Databricks↔AWS Glue Catalog automation modules for ISMS-P compliance and analyst productivity.',

    'exp.bespin.role': 'Cloud Data Engineer',
    'exp.bespin.company': 'Bespin Global — DataOps Division, Data Analytics Team · Seoul, KR',
    'exp.bespin.date': 'Jul 2021 — Jul 2022',
    'exp.bespin.b1': "Delivered JOBIA — JobKorea's AWS-based data/AI platform — migrating on-prem MSSQL SSIS warehouse and marts to Redshift + S3 data lake and reducing pipeline runtime by 15%+.",
    'exp.bespin.b2': 'Consolidated external data (GA360, SAP via AWS Transfer Family, Appsflyer via S3 event-triggered Lambda micro-ETL) into a single Glue Catalog / Athena analytical environment.',
    'exp.bespin.b3': 'Authored batch pipeline development guides and trained client teams on AWS Step Functions + Glue + Spark ETL patterns during PoC.',
    'exp.bespin.b4': 'Improved AWS resource governance with a Lambda + CloudTrail–based asset management system.',

    'exp.intern.role': 'Research Engineer · Public Data Intern',
    'exp.intern.company': 'Kookmin Univ. / Dankook Univ. / Cheongju Univ. ICC · National Assembly Library (HyoSung ITX)',
    'exp.intern.date': '2019 — 2020',
    'exp.intern.b1': "Built Raspberry Pi–based air-quality sensor network at Kookmin University for the Korea Forest Service's \"Green Shelter\" research project, delivering a real-time ingestion and visualization pipeline.",
    'exp.intern.b2': 'Optimized a fine-dust recovery-time algorithm, cutting analysis runtime 50%+ for the Bio+ City research project — co-authored the ICLEE 2019 poster "PM 2.5 Distribution Trend in an Urban Area".',
    'exp.intern.b3': 'Stood up Ubuntu + JupyterLab + MySQL analysis environments that replaced SPSS/Excel workflows and cut analyst turnaround time ~20%.',

    /* Projects */
    'projects.heading': 'Featured Projects',

    'proj.braze.title': 'Braze CRM Data Mart Design',
    'proj.braze.desc': 'Braze adoption for customer push automation and personalized marketing. Designed Redshift + S3 PII data extraction architecture and process, CRM customer aggregation attribute mart design and pipeline development. Built Redshift Spectrum query environment for campaign results and impression data.',

    'proj.p1.badge': 'Jan 2026 — Apr 2026 (MVP)',
    'proj.p1.title': 'Databricks AI Agent Platform (MVP)',
    'proj.p1.desc': 'Company-wide Databricks AI Agent platform rollout at Bithumb — Text-to-SQL, data analytics, and Insight Agent development and user training. Built PII and credit-information catalog and data governance processes, completed security vulnerability remediation, workspace separation and tagging policies.',

    'proj.poc.title': 'Databricks AI Agent Platform PoC',
    'proj.poc.desc': 'Built AWS-based Databricks platform for AI Agent platform selection. AWS PrivateLink physical infrastructure design and direct workspace construction, security compliance coordination. Built Databricks Genie Text-to-SQL Agent, achieved 90% accuracy on benchmark queries.',

    'proj.p2.title': 'Data Platform Modernization (Phase 1–3)',
    'proj.p2.desc': "Consolidating Bithumb's dual IDC + AWS analytics/information platforms — new AWS account IaC transition (Terraform), VPC/Subnet design, Prefect+EMR → Airflow+Glue pipeline migration (PySpark), SageMaker Unified Studio & Redshift Serverless PoC, multi-cluster isolation cutting Redshift node cost 33%.",

    'proj.p3.title': 'Airflow × Databricks Custom Operator',
    'proj.p3.desc': "Extended Astro + Databricks providers to run ETL on Job Compute instead of All-Purpose clusters. Added auto-retry and Jinja2 template rendering, eliminated Databricks Workflow dual-development burden. Cut Databricks ETL cost 60–70%, SageMaker-Databricks cost 50–60% across JobKorea pipelines. Developed SQL Warehouse module cutting ML costs avg 50%+.",

    'proj.p4.title': 'Self-Insight Data Mart',
    'proj.p4.desc': 'Company-wide self-serve data mart at JobKorea absorbing ad-hoc statistical requests from planning, operations, and marketing teams. SparkSQL optimization cut mart runtimes 5–20%. Databricks API module enabled Unity Catalog read/write without Compute. Hybrid On-Prem Airflow + Databricks Workflow pipeline removed cloud single-point-of-failure risk.',

    'proj.p5.title': 'Onepick — AI Talent Recommendation',
    'proj.p5.desc': 'End-to-end ML pipeline for AI-driven job-to-candidate matching. Python Deferrable operator for SageMaker reduced Airflow worker resource usage avg 20% without additional scaling. Webhook-based performance/error monitoring and Grafana dashboard.',

    'proj.coverage.title': 'Data Coverage — Analytics Environment Automation',
    'proj.coverage.desc': 'Transitioned On-Prem BI dashboards to cloud-based Power BI. Automated unmanaged analyst data marts and data quality check pipelines. Migrated Presto report queries to PySpark, 5–10% performance improvement per table.',

    'proj.p6.title': 'JOBIA — Data & AI Platform',
    'proj.p6.desc': "JobKorea's AWS-native data platform built at Bespin Global — migrated on-prem MSSQL SSIS warehouse to Redshift + S3. Integrated GA360 (BigQuery Connector) / SAP / Appsflyer through Transfer Family (SFTP), EventBridge, and Lambda micro-ETL. Provided Glue Catalog + Athena analytics environment. 15%+ pipeline speedup over legacy.",

    /* Education */
    'education.heading': 'Education & Certifications',
    'edu.degree': 'B.S. in Computer Information Engineering',
    'edu.school': 'Cheongju University · GPA 3.8 / 4.5 (Full-time)',
    'edu.year': 'Mar 2013 — Feb 2019',
    'edu.thesis': '[Capstone Design] SurveyChat: Conversational Chatbot Survey & Response Analysis System — KoNLPy morphological analysis, scikit-learn unsupervised classification, Django API server, MongoDB storage, KakaoTalk chatbot integration.',

    /* Certifications */
    'certs.heading': 'Certifications',
    'awards.heading': 'Awards',
    'pubs.heading': 'Publications',

    /* Contact */
    'contact.heading': 'Contact',
    'contact.text': 'Interested in collaborating on data platform, crypto data infrastructure, or lakehouse architecture? Reach me through the links below.',
    'contact.note': 'For direct email, please reach out via LinkedIn or GitHub first.',

    /* Footer */
    'footer.copy': '© 2026 Youngdae Heo. All rights reserved.'
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

  /* --- Apply a language across the page --- */
  function applyLang(lang) {
    if (lang !== 'ko' && lang !== 'en') lang = DEFAULT_LANG;

    // Set root attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    // Translate every data-i18n node
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');
      const value = DICT[lang][key];
      if (value === undefined) return; // fall back to existing content
      if (attr) {
        el.setAttribute(attr, value);
      } else {
        el.innerHTML = value;
      }
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

    // Persist
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  /* --- Init on DOM ready --- */
  function init() {
    captureKoreanDefaults();

    // Read stored preference, default to Korean
    let saved = DEFAULT_LANG;
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s === 'ko' || s === 'en') saved = s;
    } catch (e) { /* ignore */ }

    applyLang(saved);

    // Wire up toggle buttons
    document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
