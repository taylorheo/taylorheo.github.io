/* Source-grounded portfolio data. Technology presence is not a proficiency rating.
 * implemented = delivered work; context = upstream, legacy, target, or related environment;
 * planned = proposed follow-up; poc = evaluation rather than production adoption.
 * Source pages refer to the supplied resume, not a publicly hosted copy.
 */
window.PORTFOLIO = {
  schemaVersion: 1,
  companies: [
    {id: "bithumb", label: {ko: "빗썸", en: "Bithumb"}},
    {id: "jk", label: {ko: "웍스피어 (구 잡코리아)", en: "Worxphere (ex-JobKorea)"}},
    {id: "bespin", label: {ko: "베스핀글로벌", en: "Bespin Global"}},
    {id: "intern", label: {ko: "연구·공공데이터 인턴", en: "Research & Public Data Internships"}},
    {id: "education", label: {ko: "청주대학교 · 캡스톤", en: "Cheongju University · Capstone"}}
  ],
  technologies: [
    {id: "databricks", label: "Databricks", category: "cloud"},
    {id: "aws", label: "Amazon Web Services", category: "cloud"},
    {id: "airflow", label: "Apache Airflow", category: "orchestration"},
    {id: "redshift", label: "Amazon Redshift", category: "storage"},
    {id: "glue", label: "AWS Glue", category: "processing"},
    {id: "spark", label: "Apache Spark", category: "processing"},
    {id: "terraform", label: "Terraform", category: "cloud"},
    {id: "emr", label: "Amazon EMR", category: "processing"},
    {id: "sagemaker", label: "Amazon SageMaker", category: "ml"},
    {id: "s3", label: "Amazon S3", category: "storage"},
    {id: "athena", label: "Amazon Athena", category: "analytics"},
    {id: "stepfunctions", label: "AWS Step Functions", category: "orchestration"},
    {id: "unitycatalog", label: "Unity Catalog", category: "governance"},
    {id: "deltalake", label: "Delta Lake", category: "storage"},
    {id: "ismsp", label: "ISMS-P", category: "governance"},
    {id: "python", label: "Python", category: "language"},
    {id: "sql", label: "SQL", category: "language"},
    {id: "privatelink", label: "AWS PrivateLink", category: "cloud"},
    {id: "genie", label: "Databricks Genie", category: "ml"},
    {id: "spectrum", label: "Redshift Spectrum", category: "analytics"},
    {id: "lambda", label: "AWS Lambda", category: "processing"},
    {id: "grafana", label: "Grafana", category: "observability"},
    {id: "braze", label: "Braze", category: "integration"},
    {id: "prefect", label: "Prefect", category: "orchestration"},
    {id: "vpc", label: "Amazon VPC / Subnets", category: "cloud"},
    {id: "sagemaker-unified-studio", label: "SageMaker Unified Studio", category: "ml"},
    {id: "redshift-serverless", label: "Redshift Serverless", category: "storage"},
    {id: "pyspark", label: "PySpark", category: "processing"},
    {id: "sparksql", label: "Spark SQL", category: "processing"},
    {id: "astro-provider", label: "Astro Provider / Operator", category: "orchestration"},
    {id: "databricks-provider", label: "Airflow Databricks Provider", category: "orchestration"},
    {id: "jinja2", label: "Jinja2", category: "language"},
    {id: "databricks-workflows", label: "Databricks Workflows", category: "orchestration"},
    {id: "all-purpose-compute", label: "Databricks All-Purpose Compute", category: "processing"},
    {id: "job-compute", label: "Databricks Job Compute", category: "processing"},
    {id: "sql-warehouse", label: "Databricks SQL Warehouse", category: "analytics"},
    {id: "pandas", label: "Pandas", category: "processing"},
    {id: "rest-api", label: "REST API", category: "integration"},
    {id: "databricks-api", label: "Databricks Catalog API", category: "integration"},
    {id: "gluecatalog", label: "AWS Glue Data Catalog", category: "governance"},
    {id: "sha256", label: "SHA-256 Hashing", category: "governance"},
    {id: "hive-metastore", label: "Hive Metastore", category: "governance"},
    {id: "hue", label: "Hue", category: "analytics"},
    {id: "databricks-notebooks", label: "Databricks Notebooks", category: "analytics"},
    {id: "autoscaling", label: "Cluster Auto Scaling", category: "cloud"},
    {id: "webhook", label: "Webhook", category: "integration"},
    {id: "msteams", label: "Microsoft Teams", category: "integration"},
    {id: "presto", label: "Presto", category: "analytics"},
    {id: "powerbi", label: "Power BI", category: "analytics"},
    {id: "eventbridge", label: "Amazon EventBridge", category: "orchestration"},
    {id: "bigquery", label: "Google BigQuery", category: "storage"},
    {id: "ga360", label: "Google Analytics 360", category: "analytics"},
    {id: "sap", label: "SAP", category: "integration"},
    {id: "appsflyer", label: "AppsFlyer", category: "analytics"},
    {id: "transfer-family", label: "AWS Transfer Family", category: "integration"},
    {id: "sftp", label: "SFTP", category: "integration"},
    {id: "azure", label: "Microsoft Azure", category: "cloud"},
    {id: "mssql", label: "Microsoft SQL Server", category: "storage"},
    {id: "ssis", label: "SQL Server Integration Services", category: "integration"},
    {id: "bigquery-connector", label: "AWS Glue BigQuery Connector", category: "integration"},
    {id: "r", label: "R", category: "language"},
    {id: "mysql", label: "MySQL", category: "storage"},
    {id: "ubuntu", label: "Ubuntu", category: "processing"},
    {id: "linux", label: "Linux", category: "processing"},
    {id: "jupyterlab", label: "JupyterLab", category: "analytics"},
    {id: "jupyter-notebook", label: "Jupyter Notebook", category: "analytics"},
    {id: "raspberrypi", label: "Raspberry Pi", category: "processing"},
    {id: "weather-aws", label: "Automated Weather System (기상청 AWS)", category: "integration"},
    {id: "airkorea", label: "AirKorea", category: "integration"},
    {id: "public-data-api", label: "Public Data API", category: "integration"},
    {id: "spss", label: "SPSS", category: "analytics"},
    {id: "excel", label: "Microsoft Excel", category: "analytics"},
    {id: "konlpy", label: "KoNLPy", category: "ml"},
    {id: "numpy", label: "NumPy", category: "processing"},
    {id: "seaborn", label: "Seaborn", category: "analytics"},
    {id: "scikit-learn", label: "scikit-learn", category: "ml"},
    {id: "django", label: "Django", category: "integration"},
    {id: "bootstrap", label: "Bootstrap", category: "integration"},
    {id: "mongodb", label: "MongoDB", category: "storage"},
    {id: "kakao", label: "KakaoTalk Chatbot API", category: "integration"}
  ],
  projects: [
    {
      id: "p-braze", company: "bithumb",
      title: {ko: "Braze CRM 데이터 마트 설계", en: "Braze CRM Data Mart Design"},
      shortTitle: {ko: "Braze CRM 마트", en: "Braze CRM Mart"},
      period: {ko: "2026.01 — 2026.04", en: "Jan 2026 — Apr 2026"}, start: "2026-01",
      summary: {ko: "Braze에서 앱 푸시와 개인화 마케팅에 사용할 고객 속성 마트와 데이터 파이프라인을 설계했습니다. 개인정보 반출·취급 절차도 함께 구성했습니다.", en: "Designed customer attribute marts and data pipelines for app push notifications and personalized marketing in Braze. Also set up procedures for exporting and handling personal information."},
      impact: {ko: "CRM용 고객 속성 마트와 캠페인 결과·임프레션 조회 환경 구축", en: "Delivered CRM customer attribute marts and campaign-result / impression query access"},
      sections: [
        {heading: {ko: "문제 · 목표", en: "Problem & Goal"}, items: [
          {ko: "마케팅팀이 Braze에서 앱 푸시를 자동화하고 개인화 캠페인을 운영할 수 있도록 고객 속성 데이터를 제공해야 했습니다.", en: "The marketing team needed customer attribute data to automate app push notifications and run personalized campaigns in Braze."}
        ]},
        {heading: {ko: "역할", en: "Role"}, items: [
          {ko: "고객 집계 속성 마트를 신규 설계하고 CRM 활용 파이프라인을 개발했습니다.", en: "Designed new customer aggregation attribute marts and developed pipelines for CRM use."},
          {ko: "Redshift + S3 기반 개인정보 반출·취급 아키텍처와 운영 프로세스를 설계·구성했습니다.", en: "Designed and configured the Redshift + S3 architecture and operational process for controlled PII extraction and handling."}
        ]},
        {heading: {ko: "구현", en: "Implementation"}, items: [
          {ko: "운영 환경 개인정보 취급을 고려한 데이터 제공 구조를 구성하고, Redshift Spectrum으로 캠페인 결과와 고객 임프레션 데이터를 조회할 수 있도록 했습니다.", en: "Built a data-provisioning structure addressing production PII handling and a Redshift Spectrum query environment for campaign results and customer impressions."}
        ]},
        {heading: {ko: "성과", en: "Outcome"}, items: [
          {ko: "마케팅팀이 CRM에 사용할 고객 속성 데이터를 제공하고 캠페인 결과를 조회할 수 있도록 했습니다.", en: "Provided customer attribute data for CRM use and enabled the marketing team to query campaign results."}
        ]}
      ],
      source: {kind: "existing", label: {ko: "기존 사이트 · Braze 상세·경력", en: "Existing site · Braze details & career"}, pages: [], note: {ko: "개인정보 반출·취급 절차와 CRM용 데이터 제공을 담당했습니다.", en: "Responsibilities covered controlled PII export and handling procedures, and data delivery for CRM use."}},
      stack: [
        {tech: "redshift", kind: "implemented", role: {ko: "고객 집계 속성 마트", en: "Customer aggregation attribute marts"}, evidence: {ko: "Redshift + S3 아키텍처와 고객 속성 마트 설계·파이프라인 개발을 명시합니다.", en: "Explicitly describes Redshift + S3 architecture, customer attribute mart design, and pipeline development."}, source: "Existing site: p-braze details and career exp.bithumb.b2"},
        {tech: "s3", kind: "implemented", role: {ko: "개인정보 취급 아키텍처의 저장 계층", en: "Storage within the PII-handling architecture"}, evidence: {ko: "Redshift + S3 기반 개인정보 취급 아키텍처 설계·구성을 명시합니다.", en: "Explicitly names S3 in the designed and configured Redshift + S3 PII-handling architecture."}, source: "Existing site: p-braze details"},
        {tech: "spectrum", kind: "implemented", role: {ko: "캠페인 결과·임프레션 조회", en: "Campaign-result and impression queries"}, evidence: {ko: "Redshift Spectrum 기반 캠페인 결과·고객 임프레션 데이터 조회 환경을 구축했습니다.", en: "Built a Redshift Spectrum environment for campaign-result and customer-impression queries."}, source: "Existing site: p-braze details"},
        {tech: "braze", kind: "context", role: {ko: "데이터 제공 대상 CRM", en: "CRM adoption context"}, evidence: {ko: "Braze 도입을 위한 데이터 마트와 파이프라인이 담당 범위이며 Braze 내부 구현은 별도로 설명되지 않습니다.", en: "The stated responsibility is marts and pipelines for Braze adoption; implementation inside Braze is not separately described."}, source: "Existing site: p-braze details"}
      ],
      flows: []
    },
    {
      id: "p1", company: "bithumb",
      title: {ko: "Databricks AI Agent 플랫폼 (MVP)", en: "Databricks AI Agent Platform (MVP)"},
      shortTitle: {ko: "AI Agent MVP", en: "AI Agent MVP"},
      period: {ko: "2026.01 — 2026.04 (MVP)", en: "Jan 2026 — Apr 2026 (MVP)"}, start: "2026-01",
      summary: {ko: "Databricks에서 Text-to-SQL, 데이터 분석, Insight Agent를 개발하고 사내 사용자를 교육했습니다. 운영 환경 도입에 필요한 망분리 설계, 보안 협의와 실사 검증을 단독으로 담당했습니다.", en: "Developed Text-to-SQL, data analytics, and Insight Agents on Databricks and trained users across the company. Independently handled network-segregation design, security coordination, and due-diligence checks for production deployment."},
      impact: {ko: "MVP 구축·프로덕션 도입 및 전사 사용자 교육", en: "MVP deployment to production and company-wide user training"},
      sections: [
        {heading: {ko: "문제 · 목표", en: "Problem & Goal"}, items: [
          {ko: "PoC 이후 AI Agent를 사내 업무에 도입하고 운영 환경의 보안 요구사항을 충족해야 했습니다.", en: "After the PoC, the agents needed to support day-to-day work and meet production security requirements."}
        ]},
        {heading: {ko: "역할", en: "Role"}, items: [
          {ko: "Text-to-SQL, 데이터 분석, Insight Agent 개발·운영과 현업 교육을 수행했습니다.", en: "Developed and operated Text-to-SQL, data analytics, and Insight Agents and trained business users."},
          {ko: "망분리 설계, 보안 부문 요구사항 협의 및 실사 검증을 단독으로 주도했습니다.", en: "Independently led network-segregation design, security-requirement alignment, and due-diligence verification."}
        ]},
        {heading: {ko: "구현", en: "Implementation"}, items: [
          {ko: "개인정보·신용정보 처리 카탈로그와 데이터 거버넌스 프로세스를 구축했습니다.", en: "Built catalogs and data-governance processes for personal and credit information."},
          {ko: "보안 취약점을 조치하고 운영 절차를 협의했습니다. 워크스페이스를 분리하고 비용을 추적할 수 있도록 태깅 정책을 정했습니다.", en: "Fixed security vulnerabilities and agreed on operating procedures. Separated workspaces and defined tagging policies for tracking costs."}
        ]},
        {heading: {ko: "성과", en: "Outcome"}, items: [
          {ko: "2026.01~04에 MVP를 구축해 운영 환경에 도입하고 사내 사용자를 교육했습니다.", en: "Built and deployed the MVP to production in Jan–Apr 2026 and trained users across the company."}
        ]}
      ],
      source: {kind: "existing", label: {ko: "기존 사이트 · AI Agent MVP", en: "Existing site · AI Agent MVP"}, pages: [], note: {ko: "기존 사이트 프로젝트 상세 기준. 첨부 이력서에는 해당 기간이 포함되어 있지 않습니다. 90% 정확도는 별도 PoC 결과입니다.", en: "Based on existing site project details; this period is not covered by the attached resume. The 90% accuracy result belongs to the separate PoC."}},
      stack: [
        {tech: "databricks", kind: "implemented", role: {ko: "전사 AI Agent 플랫폼", en: "Company-wide AI Agent platform"}, evidence: {ko: "Databricks에서 Agent 개발·운영·교육 및 프로덕션 도입을 수행했습니다.", en: "Developed and operated agents on Databricks, trained users, and delivered production adoption."}, source: "Existing site: p1 details and career exp.bithumb.b1"},
        {tech: "unitycatalog", kind: "implemented", role: {ko: "개인정보·신용정보 카탈로그 및 거버넌스", en: "Personal / credit-information catalogs and governance"}, evidence: {ko: "p1 기술 태그에 Unity Catalog가 있고 설명에 개인정보·신용정보 처리 카탈로그 구축을 명시합니다.", en: "The p1 card names Unity Catalog and explicitly describes building personal / credit-information catalogs."}, source: "Existing site: p1 card and career exp.bithumb.b3"},
        {tech: "aws", kind: "context", role: {ko: "플랫폼 클라우드 환경", en: "Platform cloud environment"}, evidence: {ko: "p1 카드의 AWS 태그와 경력의 AWS 기반 Databricks 환경을 근거로 하며 별도 AWS 기능 구현을 추가하지 않습니다.", en: "Supported by the p1 AWS tag and the career's AWS-based Databricks environment; no additional AWS implementation is asserted."}, source: "Existing site: p1 card and career exp.bithumb.b3"},
        {tech: "ismsp", kind: "context", role: {ko: "보안·컴플라이언스 기준", en: "Security and compliance context"}, evidence: {ko: "p1 기술 태그에 ISMS-P가 있으며 보안 요구사항 검증을 설명합니다. 프로젝트만의 인증 획득을 뜻하지 않습니다.", en: "ISMS-P is a p1 tag alongside security verification; this does not assert a project-specific certification."}, source: "Existing site: p1 card and details"}
      ],
      flows: []
    },
    {
      id: "p-poc", company: "bithumb",
      title: {ko: "Databricks AI Agent 플랫폼 도입 PoC", en: "Databricks AI Agent Platform PoC"},
      shortTitle: {ko: "AI Agent PoC", en: "AI Agent PoC"},
      period: {ko: "2025.11 — 2025.12 (PoC)", en: "Nov 2025 — Dec 2025 (PoC)"}, start: "2025-11",
      summary: {ko: "AI Agent 플랫폼 선정을 위해 AWS 기반 Databricks PoC 환경을 설계·구축했습니다. 금융 규제 보안 요건을 검토하고 Genie 기반 Text-to-SQL Agent의 정확도와 성능을 검증했습니다.", en: "Designed and built an AWS-based Databricks PoC for AI Agent platform selection, addressing financial-sector security requirements and validating a Genie Text-to-SQL Agent's accuracy and performance."},
      impact: {ko: "벤치마크 쿼리 정확도 90% · 금융 규제 보안 검토 통과", en: "90% benchmark-query accuracy · Passed financial-sector security review"},
      sections: [
        {heading: {ko: "문제 · 목표", en: "Problem & Goal"}, items: [
          {ko: "전사 핵심 과제인 AI Agent 플랫폼을 선정하기 위해 기능 검증과 금융 규제 보안 요건을 함께 충족해야 했습니다.", en: "Selecting the company-wide AI Agent platform required both functional validation and compliance with financial-sector security requirements."}
        ]},
        {heading: {ko: "역할", en: "Role"}, items: [
          {ko: "AWS PrivateLink 기반 네트워크를 설계하고 Databricks 계정과 워크스페이스를 구축했습니다.", en: "Designed the network using AWS PrivateLink and set up the Databricks account and workspaces."},
          {ko: "플랫폼 아키텍처와 데이터 정책의 보안 검토·협의를 수행했습니다.", en: "Coordinated security review of the platform architecture and data policies."}
        ]},
        {heading: {ko: "구현", en: "Implementation"}, items: [
          {ko: "Databricks Genie 기반 Text-to-SQL Agent를 구축하고 정확도와 성능을 검증했습니다.", en: "Built a Databricks Genie Text-to-SQL Agent and validated its accuracy and performance."},
          {ko: "Text-to-SQL Agent 시맨틱 레이어의 데이터 격리 아키텍처를 구성하고 이관했습니다.", en: "Configured and migrated the data-isolation architecture for the Text-to-SQL Agent's semantic layer."}
        ]},
        {heading: {ko: "성과", en: "Outcome"}, items: [
          {ko: "벤치마크 쿼리에서 90% 정확도를 달성했으며 금융 규제 준수 보안 검토를 통과했습니다.", en: "Achieved 90% accuracy on benchmark queries and passed financial-regulatory security review."},
          {ko: "PoC 이후 Databricks가 사내 AI Agent 플랫폼으로 선정됐고, MVP 구축과 운영 환경 도입으로 이어졌습니다.", en: "After the PoC, Databricks was selected as the company-wide AI Agent platform. The next steps were the MVP and production deployment."}
        ]}
      ],
      source: {kind: "existing", label: {ko: "기존 사이트 · AI Agent PoC", en: "Existing site · AI Agent PoC"}, pages: [], note: {ko: "90% 정확도는 벤치마크 쿼리 기준의 PoC 검증 결과입니다.", en: "The 90% accuracy figure is the PoC validation result on benchmark queries."}},
      stack: [
        {tech: "databricks", kind: "poc", role: {ko: "플랫폼 선정용 평가 환경", en: "Platform-selection evaluation environment"}, evidence: {ko: "AI Agent 플랫폼 선정을 위한 Databricks PoC 구축을 명시합니다.", en: "Explicitly describes building a Databricks PoC for AI Agent platform selection."}, source: "Existing site: p-poc details"},
        {tech: "aws", kind: "poc", role: {ko: "PoC 클라우드 기반", en: "PoC cloud foundation"}, evidence: {ko: "AWS 기반 Databricks 플랫폼을 구축했습니다.", en: "Built the Databricks platform on AWS."}, source: "Existing site: p-poc details"},
        {tech: "privatelink", kind: "poc", role: {ko: "보안 네트워크 설계", en: "Secure network design"}, evidence: {ko: "AWS PrivateLink 기반 물리적 인프라 설계와 계정·Workspace 구축을 명시합니다.", en: "Explicitly names PrivateLink-based physical infrastructure design and account / workspace provisioning."}, source: "Existing site: p-poc details"},
        {tech: "genie", kind: "poc", role: {ko: "Text-to-SQL Agent 검증", en: "Text-to-SQL Agent validation"}, evidence: {ko: "Genie 기반 Agent를 구축하여 벤치마크 정확도 90%를 달성했습니다.", en: "Built a Genie-based Agent and achieved 90% benchmark accuracy."}, source: "Existing site: p-poc details"}
      ],
      flows: [
        {from: "privatelink", to: "databricks", label: {ko: "PrivateLink 기반 Workspace 연결 구조", en: "PrivateLink-based workspace architecture"}, kind: "integration", evidence: {ko: "기존 p-poc 상세에 PrivateLink 기반 인프라와 Databricks 계정·Workspace 직접 구축을 함께 명시합니다.", en: "Existing p-poc details explicitly describe PrivateLink-based infrastructure with direct Databricks account and workspace provisioning."}},
        {from: "databricks", to: "genie", label: {ko: "Genie Text-to-SQL Agent 구성", en: "Genie Text-to-SQL Agent setup"}, kind: "integration", evidence: {ko: "기존 p-poc 상세는 구축한 Databricks 플랫폼에서 Genie 기반 Agent를 검증했다고 설명합니다.", en: "Existing p-poc details describe validating a Genie-based Agent on the constructed Databricks platform."}}
      ]
    },
    {
      id: "p2", company: "bithumb",
      title: {ko: "데이터 플랫폼 고도화 (Phase 1–3)", en: "Data Platform Modernization (Phase 1–3)"},
      shortTitle: {ko: "플랫폼 고도화", en: "Platform Modernization"},
      period: {ko: "2025.06 — 진행중", en: "Jun 2025 — Ongoing"}, start: "2025-06",
      summary: {ko: "IDC와 AWS에 나뉜 분석·정보계 플랫폼을 AWS로 통합하고 있습니다. 신규 계정의 인프라 코드화, 네트워크 설계, 파이프라인 이전과 보안 검토·취약점 조치를 맡고 있습니다.", en: "I am consolidating analytics and information platforms from IDC and AWS into one AWS platform. My responsibilities include infrastructure as code for the new account, network design, pipeline migration, security reviews, and vulnerability fixes."},
      impact: {ko: "멀티 클러스터 분리·Reserved Node 설계로 Redshift 노드 비용 33% 절감", en: "33% lower Redshift node cost through multi-cluster isolation and Reserved Node design"},
      sections: [
        {heading: {ko: "문제 · 목표", en: "Problem & Goal"}, items: [
          {ko: "IDC와 AWS에 분산된 분석·정보계 플랫폼을 통합하고 신규 서비스 도입과 마이그레이션의 보안 요구사항을 충족해야 했습니다.", en: "Analytics and information systems split between IDC and AWS needed consolidation while meeting security requirements for new services and migrations."}
        ]},
        {heading: {ko: "역할", en: "Role"}, items: [
          {ko: "VPC·Subnet 단위 인프라 설계와 서비스별 보안 검토·취약점 조치를 단독으로 주도했습니다.", en: "Independently led VPC / subnet-level infrastructure design, per-service security review, and vulnerability remediation."},
          {ko: "신규 AWS 계정 내 기존 자원의 IaC 전환과 파이프라인 마이그레이션, 비용 최적화 및 신규 서비스 PoC를 수행했습니다.", en: "Worked on IaC transition into a new AWS account, pipeline migration, cost optimization, and PoCs for new services."}
        ]},
        {heading: {ko: "구현", en: "Implementation"}, items: [
          {ko: "Terraform으로 신규 AWS 계정 자원을 IaC로 전환하고 VPC·Subnet을 설계·배포했습니다.", en: "Transitioned resources in the new AWS account to IaC with Terraform and designed and deployed VPCs and subnets."},
          {ko: "Prefect + Amazon EMR 기반 파이프라인을 Airflow + AWS Glue(PySpark) 기반으로 전환했습니다.", en: "Migrated Prefect + Amazon EMR pipelines to Airflow + AWS Glue using PySpark."},
          {ko: "SageMaker Unified Studio와 Redshift Serverless 도입 PoC를 수행하고 보안 요구사항을 위한 감사 로그 프로세스를 구축했습니다.", en: "Conducted adoption PoCs for SageMaker Unified Studio and Redshift Serverless and established audit-log processes to address security requirements."},
          {ko: "Redshift 멀티 클러스터 분리와 Reserved Node 비용안을 설계했습니다.", en: "Designed Redshift multi-cluster isolation and Reserved Node cost plans."}
        ]},
        {heading: {ko: "성과", en: "Outcome"}, items: [
          {ko: "Redshift 노드 비용을 33% 절감했습니다. 전체 플랫폼 통합은 진행중입니다.", en: "Reduced Redshift node cost by 33%. The overall platform consolidation remains ongoing."}
        ]}
      ],
      source: {kind: "existing", label: {ko: "기존 사이트 · 플랫폼 고도화", en: "Existing site · Platform modernization"}, pages: [], note: {ko: "기존 사이트 프로젝트 상세 기준. 첨부 이력서에는 해당 기간이 포함되어 있지 않습니다. 신규 서비스는 PoC로 구분합니다.", en: "Based on existing site project details; this period is not covered by the attached resume. New-service evaluations are classified as PoCs."}},
      stack: [
        {tech: "aws", kind: "implemented", role: {ko: "통합 대상 클라우드 플랫폼", en: "Consolidated cloud platform"}, evidence: {ko: "AWS 단일 플랫폼 통합과 신규 계정 자원 전환을 명시합니다.", en: "Explicitly describes consolidation into AWS and resource transition into a new account."}, source: "Existing site: p2 details"},
        {tech: "terraform", kind: "implemented", role: {ko: "자원 IaC 전환", en: "Infrastructure as code"}, evidence: {ko: "Terraform으로 AWS 자원 IaC 전환 및 네트워크 설계·배포를 수행했습니다.", en: "Used Terraform for AWS resource IaC transition and network design / deployment."}, source: "Existing site: p2 details"},
        {tech: "vpc", kind: "implemented", role: {ko: "네트워크 분리·배포", en: "Network segmentation and deployment"}, evidence: {ko: "VPC·Subnet 단위 설계·배포를 명시합니다.", en: "Explicitly states VPC / subnet-level design and deployment."}, source: "Existing site: p2 details"},
        {tech: "airflow", kind: "implemented", role: {ko: "이전 후 오케스트레이션", en: "Target orchestration"}, evidence: {ko: "Prefect + EMR 파이프라인을 Airflow + Glue로 전환했습니다.", en: "Migrated Prefect + EMR pipelines to Airflow + Glue."}, source: "Existing site: p2 details"},
        {tech: "glue", kind: "implemented", role: {ko: "이전 후 ETL 실행", en: "Target ETL execution"}, evidence: {ko: "AWS Glue(PySpark) 기반 파이프라인 전환을 명시합니다.", en: "Explicitly describes migration to AWS Glue pipelines using PySpark."}, source: "Existing site: p2 details"},
        {tech: "spark", kind: "implemented", role: {ko: "분산 ETL 처리", en: "Distributed ETL processing"}, evidence: {ko: "Glue 기반 PySpark 파이프라인 전환을 수행했습니다.", en: "Delivered PySpark pipeline migration on Glue."}, source: "Existing site: p2 details"},
        {tech: "pyspark", kind: "implemented", role: {ko: "Glue 파이프라인 코드", en: "Glue pipeline code"}, evidence: {ko: "AWS Glue(PySpark)를 이전 후 구현으로 명시합니다.", en: "AWS Glue (PySpark) is explicitly named as the migration implementation."}, source: "Existing site: p2 details"},
        {tech: "python", kind: "implemented", role: {ko: "PySpark 개발 언어", en: "PySpark implementation language"}, evidence: {ko: "PySpark로 AWS Glue 파이프라인을 구현했습니다.", en: "Implemented AWS Glue pipelines with PySpark."}, source: "Existing site: p2 details"},
        {tech: "prefect", kind: "context", role: {ko: "이전 전 오케스트레이터", en: "Legacy orchestrator"}, evidence: {ko: "전환 전 파이프라인이 Prefect + EMR 기반이었습니다.", en: "The pre-migration pipelines used Prefect + EMR."}, source: "Existing site: p2 details"},
        {tech: "emr", kind: "context", role: {ko: "이전 전 처리 엔진", en: "Legacy compute engine"}, evidence: {ko: "EMR 기반 파이프라인을 AWS Glue로 전환했습니다.", en: "Migrated EMR-based pipelines to AWS Glue."}, source: "Existing site: p2 details"},
        {tech: "redshift", kind: "implemented", role: {ko: "클러스터 분리·비용 최적화", en: "Cluster isolation and cost optimization"}, evidence: {ko: "멀티 클러스터 및 Reserved Node 설계로 노드 비용 33% 절감을 명시합니다.", en: "Explicitly reports 33% node-cost savings through multi-cluster and Reserved Node design."}, source: "Existing site: p2 details"},
        {tech: "sagemaker-unified-studio", kind: "poc", role: {ko: "신규 서비스 도입 검증", en: "New-service adoption evaluation"}, evidence: {ko: "SageMaker Unified Studio 신규 도입 PoC를 명시합니다.", en: "Explicitly describes a SageMaker Unified Studio adoption PoC."}, source: "Existing site: p2 details"},
        {tech: "redshift-serverless", kind: "poc", role: {ko: "서버리스 서비스 검증", en: "Serverless-service evaluation"}, evidence: {ko: "Redshift Serverless 도입 PoC와 감사 로그 프로세스를 명시합니다.", en: "Explicitly describes a Redshift Serverless adoption PoC and audit-log processes."}, source: "Existing site: p2 details"}
      ],
      flows: [
        {from: "terraform", to: "aws", label: {ko: "신규 계정 자원 IaC 배포", en: "IaC deployment in the new account"}, kind: "integration", evidence: {ko: "기존 p2 상세에 신규 AWS 계정 자원의 Terraform IaC 전환을 명시합니다.", en: "Existing p2 details explicitly describe Terraform IaC transition of resources in a new AWS account."}},
        {from: "prefect", to: "airflow", label: {ko: "오케스트레이션 전환", en: "Orchestration migration"}, kind: "migration", evidence: {ko: "기존 p2 상세의 Prefect + EMR → Airflow + Glue 전환을 나타냅니다.", en: "Represents the explicit Prefect + EMR → Airflow + Glue migration in existing p2 details."}},
        {from: "emr", to: "glue", label: {ko: "ETL 실행 환경 전환", en: "ETL compute migration"}, kind: "migration", evidence: {ko: "기존 p2 상세에 EMR 기반 파이프라인을 Glue(PySpark)로 전환했다고 명시합니다.", en: "Existing p2 details explicitly state migration from EMR pipelines to Glue (PySpark)."}},
        {from: "airflow", to: "glue", label: {ko: "이전 후 워크플로우·ETL", en: "Target workflow and ETL"}, kind: "integration", evidence: {ko: "기존 p2 상세는 이전 후 환경을 Airflow + AWS Glue 기반 파이프라인으로 명시합니다.", en: "Existing p2 details explicitly identify the target as Airflow + AWS Glue pipelines."}}
      ]
    },
    {
      id: "p3", company: "jk",
      title: {ko: "Airflow × Databricks 커스텀 오퍼레이터", en: "Airflow × Databricks Custom Operator"},
      shortTitle: {ko: "Job Compute 오퍼레이터", en: "Job Compute Operator"},
      period: {ko: "2023.08 — 2023.11", en: "Aug 2023 — Nov 2023"}, start: "2023-08",
      summary: {ko: "Astro + Databricks 프로바이더를 확장한 Airflow 커스텀 오퍼레이터로 ETL을 All-Purpose에서 Job Compute로 재마이그레이션했습니다. SageMaker의 데이터 접근을 SQL Warehouse로 라우팅하는 Pandas 모듈도 개발했습니다.", en: "Built Airflow custom operators extending Astro + Databricks providers to re-migrate ETL from All-Purpose to Job Compute. Also developed a Pandas module routing SageMaker data access through SQL Warehouse."},
      impact: {ko: "ETL 비용 60–70% · SageMaker–Databricks 비용 50–60% 절감", en: "60–70% lower ETL cost · 50–60% lower SageMaker–Databricks cost"},
      sections: [
        {heading: {ko: "문제 · 목표", en: "Problem & Goal"}, items: [
          {ko: "All-Purpose Compute의 높은 ETL 비용과 Databricks Workflow 이중 개발 부담을 줄여야 했습니다.", en: "Needed to reduce high ETL costs on All-Purpose Compute and the burden of duplicate Databricks Workflow development."},
          {ko: "기존 Astro Operator는 Retry와 Jinja Template 사용에 제약이 있어 Airflow 운영 리스크가 있었습니다.", en: "The existing Astro Operator's limitations around retries and Jinja templates created Airflow operational risks."}
        ]},
        {heading: {ko: "역할", en: "Role"}, items: [
          {ko: "Astro + Databricks 프로바이더를 확장하고 Airflow 커스텀 오퍼레이터를 설계·개발했습니다.", en: "Extended Astro + Databricks providers and designed and developed custom Airflow operators."},
          {ko: "당시 Airflow 기반 전사 파이프라인을 재마이그레이션하고 SageMaker 데이터 접근 모듈을 개발했습니다.", en: "Re-migrated all Airflow-based company pipelines at the time and developed a SageMaker data-access module."}
        ]},
        {heading: {ko: "구현", en: "Implementation"}, items: [
          {ko: "All-Purpose → Job Compute 전환과 자동 Retry, Jinja2 Template 렌더링을 구현하여 Workflow 이중 개발 부담과 운영 제약을 해소했습니다.", en: "Implemented the All-Purpose → Job Compute migration, automatic retries, and Jinja2 template rendering to remove duplicate Workflow development and operational limitations."},
          {ko: "SageMaker Notebook·Training Job에서 Databricks SQL Warehouse로 데이터 접근을 라우팅하는 Pandas 모듈을 개발했습니다.", en: "Developed a Pandas module routing data access from SageMaker Notebooks and Training Jobs through Databricks SQL Warehouse."}
        ]},
        {heading: {ko: "성과", en: "Outcome"}, items: [
          {ko: "Databricks ETL 비용을 60~70% 절감했으며 당시 모든 Airflow 파이프라인 재이전 후 ETL 비용은 약 1/3 수준이 되었습니다.", en: "Reduced Databricks ETL cost by 60–70%; after re-migrating all Airflow pipelines at the time, ETL cost was approximately one-third of the previous level."},
          {ko: "SageMaker에서 Databricks를 사용하는 비용은 50~60% 감소했습니다. SQL Warehouse 모듈의 ML 업무 Databricks 비용은 평균 50% 이상 감소했습니다.", en: "Reduced the cost of using Databricks from SageMaker by 50–60%. The SQL Warehouse module reduced Databricks costs for ML workloads by over 50% on average."},
          {ko: "자동 Retry와 템플릿 렌더링을 지원하여 기존 Astro Operator 운영 제약을 해결했습니다.", en: "Resolved the prior Astro Operator's operational limitations with automatic retries and template rendering."}
        ]}
      ],
      source: {kind: "existing", label: {ko: "기존 사이트 · 후속 Job Compute 전환", en: "Existing site · Later Job Compute migration"}, pages: [], note: {ko: "Job Compute 전환에 따른 비용 최적화 프로젝트. 초기 All-Purpose 재사용·런타임 개선과 구분합니다.", en: "Cost optimization through Job Compute migration, distinct from the earlier All-Purpose reuse and runtime improvements."}},
      stack: [
        {tech: "airflow", kind: "implemented", role: {ko: "커스텀 오퍼레이터·전사 파이프라인", en: "Custom operators and company pipelines"}, evidence: {ko: "Airflow 커스텀 오퍼레이터 개발과 모든 Airflow 파이프라인 재마이그레이션을 명시합니다.", en: "Explicitly describes custom Airflow operators and re-migration of all Airflow pipelines."}, source: "Existing site: p3 details"},
        {tech: "databricks", kind: "implemented", role: {ko: "ETL 실행 환경 최적화", en: "ETL execution optimization"}, evidence: {ko: "Databricks All-Purpose에서 Job Compute로 이전했습니다.", en: "Migrated Databricks workloads from All-Purpose to Job Compute."}, source: "Existing site: p3 details"},
        {tech: "astro-provider", kind: "implemented", role: {ko: "프로바이더·오퍼레이터 확장", en: "Provider and operator extension"}, evidence: {ko: "Astro Operator의 Retry·Jinja Template 제약을 해결하는 확장을 명시합니다.", en: "Explicitly describes extensions resolving Astro Operator retry and Jinja-template limitations."}, source: "Existing site: p3 details"},
        {tech: "databricks-provider", kind: "implemented", role: {ko: "Databricks 실행 연동 확장", en: "Databricks execution integration"}, evidence: {ko: "Astro + Databricks 프로바이더 확장을 명시합니다.", en: "Explicitly names extensions to Astro + Databricks providers."}, source: "Existing site: p3 details"},
        {tech: "jinja2", kind: "implemented", role: {ko: "오퍼레이터 템플릿 렌더링", en: "Operator template rendering"}, evidence: {ko: "Jinja2 Template 렌더링 기능을 추가했습니다.", en: "Added Jinja2 template-rendering support."}, source: "Existing site: p3 details"},
        {tech: "all-purpose-compute", kind: "context", role: {ko: "이전 전 클러스터 유형", en: "Legacy cluster type"}, evidence: {ko: "All-Purpose가 Job Compute 전환의 출발 환경으로 명시됩니다.", en: "All-Purpose is explicitly the source environment for the Job Compute migration."}, source: "Existing site: p3 details"},
        {tech: "job-compute", kind: "implemented", role: {ko: "이전 후 ETL 실행", en: "Target ETL execution"}, evidence: {ko: "Job Compute로 ETL 실행을 전환해 비용을 절감했습니다.", en: "Moved ETL execution to Job Compute to reduce costs."}, source: "Existing site: p3 details"},
        {tech: "databricks-workflows", kind: "context", role: {ko: "이중 개발 부담이 있던 기존 경로", en: "Prior duplicate-development path"}, evidence: {ko: "Databricks Workflow 이중 개발 부담을 해소했다고 명시합니다.", en: "Explicitly states that duplicate Databricks Workflow development was removed."}, source: "Existing site: p3 details"},
        {tech: "sagemaker", kind: "implemented", role: {ko: "Notebook·Training Job 데이터 접근 연동", en: "Notebook / Training Job data-access integration"}, evidence: {ko: "SageMaker Notebook·Training Job의 SQL Warehouse 접근 모듈을 개발했습니다.", en: "Developed a SQL Warehouse access module for SageMaker Notebooks and Training Jobs."}, source: "Existing site: p3 details"},
        {tech: "sql-warehouse", kind: "implemented", role: {ko: "ML 데이터 접근 경로", en: "ML data-access path"}, evidence: {ko: "SageMaker 데이터 접근을 Databricks SQL Warehouse로 라우팅했습니다.", en: "Routed SageMaker data access through Databricks SQL Warehouse."}, source: "Existing site: p3 details"},
        {tech: "pandas", kind: "implemented", role: {ko: "데이터 접근 모듈", en: "Data-access module"}, evidence: {ko: "SQL Warehouse로 라우팅하는 Pandas 모듈 개발을 명시합니다.", en: "Explicitly describes a Pandas module routing access through SQL Warehouse."}, source: "Existing site: p3 details"},
        {tech: "python", kind: "implemented", role: {ko: "커스텀 오퍼레이터·모듈 개발", en: "Custom operator and module development"}, evidence: {ko: "기존 p3 카드에 Python이 명시되며 Pandas 모듈과 커스텀 오퍼레이터를 설명합니다.", en: "The p3 card explicitly names Python and describes Pandas modules and custom operators."}, source: "Existing site: p3 card and details"},
        {tech: "spark", kind: "context", role: {ko: "이전 대상 ETL 처리 환경", en: "Migrated ETL processing environment"}, evidence: {ko: "p3 카드의 PySpark 태그를 근거로 하며 별도 Spark 최적화 성과는 주장하지 않습니다.", en: "Grounded in the p3 PySpark tag; no additional Spark optimization outcome is asserted."}, source: "Existing site: p3 card"},
        {tech: "pyspark", kind: "context", role: {ko: "이전 대상 워크로드", en: "Migrated workload"}, evidence: {ko: "p3 기술 태그에 PySpark가 있으며 상세 성과는 실행 환경·오퍼레이터 비용 최적화입니다.", en: "PySpark is a p3 technology tag; detailed results concern compute and operator cost optimization."}, source: "Existing site: p3 card"}
      ],
      flows: [
        {from: "all-purpose-compute", to: "job-compute", label: {ko: "ETL 컴퓨트 재마이그레이션", en: "ETL compute re-migration"}, kind: "migration", evidence: {ko: "기존 p3 상세에 All-Purpose → Job Compute 전환을 명시합니다.", en: "Existing p3 details explicitly state All-Purpose → Job Compute migration."}},
        {from: "airflow", to: "job-compute", label: {ko: "커스텀 오퍼레이터로 ETL 실행", en: "ETL execution via custom operators"}, kind: "integration", evidence: {ko: "기존 p3 상세는 확장한 Airflow 오퍼레이터로 Job Compute에서 ETL을 실행한다고 설명합니다.", en: "Existing p3 details describe running ETL on Job Compute through extended Airflow operators."}},
        {from: "sagemaker", to: "sql-warehouse", label: {ko: "Pandas 모듈로 데이터 접근 라우팅", en: "Data-access routing through a Pandas module"}, kind: "integration", evidence: {ko: "기존 p3 상세에 SageMaker Notebook·Training Job에서 SQL Warehouse로 접근하는 Pandas 모듈을 명시합니다.", en: "Existing p3 details explicitly describe a Pandas module routing SageMaker Notebook / Training Job access through SQL Warehouse."}}
      ]
    },
    {
      id: "p4", company: "jk",
      title: {ko: "Self-Insight 데이터 마트", en: "Self-Insight Data Mart"},
      shortTitle: {ko: "Self-Insight 마트", en: "Self-Insight Mart"},
      period: {ko: "2023.12 — 2024.06", en: "Dec 2023 — Jun 2024"}, start: "2023-12",
      summary: {ko: "기획·운영·마케팅 부서가 필요한 통계를 직접 조회할 수 있도록 데이터 마트를 구축했습니다. SparkSQL 쿼리를 최적화하고 중복 프로파일을 통합했으며, 하이브리드 파이프라인과 카탈로그 자동화 모듈을 개발했습니다.", en: "Built data marts so planning, operations, and marketing teams could query the statistics they needed. Optimized SparkSQL queries, consolidated duplicate profiles, and developed hybrid pipelines and catalog automation modules."},
      impact: {ko: "마트 수행시간 5–20% 단축 · 중복 프로파일 데이터 제거", en: "5–20% shorter mart runtimes · Deduplicated profile data"},
      sections: [
        {heading: {ko: "문제 · 목표", en: "Problem & Goal"}, items: [
          {ko: "기획·운영·마케팅의 반복적인 애드혹 통계 요청 부담을 줄이고 전사 범용 데이터 마트와 분석 환경을 제공해야 했습니다.", en: "Needed to reduce recurring ad-hoc statistical request workloads and provide general-purpose data marts and analytics across the company."},
          {ko: "마트·ML에서 사용하는 중복 프로파일과 클라우드 단일 장애점 리스크를 줄이는 것이 목표였습니다.", en: "The goals included reducing duplicated profiles used by marts and ML and addressing cloud single-point-of-failure risk."}
        ]},
        {heading: {ko: "역할", en: "Role"}, items: [
          {ko: "분석가의 SparkSQL 쿼리를 최적화하고 프로파일 데이터를 통합하는 중간 마트를 구축했습니다.", en: "Optimized analysts' SparkSQL queries and built intermediate marts to consolidate profile data."},
          {ko: "하이브리드 워크플로우, Databricks API·카탈로그 자동화와 ISMS-P 대응 모듈을 개발했습니다.", en: "Developed hybrid workflows, Databricks API / catalog automation, and modules supporting ISMS-P audit requirements."}
        ]},
        {heading: {ko: "구현", en: "Implementation"}, items: [
          {ko: "On-Premise Airflow + Databricks Workflow 하이브리드 파이프라인을 구축했습니다.", en: "Built hybrid pipelines combining on-premises Airflow and Databricks Workflows."},
          {ko: "Databricks API 기반으로 Unity Catalog 메타데이터 접근·관리 모듈과 Databricks↔AWS Glue Catalog 자동화 모듈을 개발했습니다.", en: "Developed a Databricks API module for Unity Catalog metadata access / management and automation between Databricks and AWS Glue Catalog."},
          {ko: "ISMS-P 심사 대응을 위한 SHA-256 기반 PII 해싱 모듈을 개발했습니다. SHA-256은 복호화 가능한 암호화가 아닙니다.", en: "Built a SHA-256-based PII hashing module for ISMS-P audit support. SHA-256 is not reversible encryption."}
        ]},
        {heading: {ko: "성과", en: "Outcome"}, items: [
          {ko: "SparkSQL 최적화로 데이터 마트별 수행시간을 5~20% 단축하고 중간 마트로 중복 프로파일 데이터를 제거했습니다.", en: "Reduced individual mart runtimes by 5–20% through SparkSQL optimization and removed duplicated profile data through intermediate marts."},
          {ko: "각 부서가 통계를 직접 조회할 수 있게 해 개별 요청을 줄였고, 하이브리드 파이프라인으로 클라우드 단일 장애점에 대응했습니다.", en: "Reduced individual statistics requests by enabling teams to query data themselves, and used hybrid pipelines to address cloud single-point-of-failure risk."}
        ]}
      ],
      source: {kind: "existing", label: {ko: "기존 사이트 · Self-Insight 상세", en: "Existing site · Self-Insight details"}, pages: [], note: {ko: "API 기반 메타데이터 접근과 카탈로그 자동화 범위. PII 처리는 SHA-256 해싱을 사용했습니다.", en: "API scope covers metadata access and catalog automation. PII handling used SHA-256 hashing."}},
      stack: [
        {tech: "databricks", kind: "implemented", role: {ko: "마트·워크플로우·API 플랫폼", en: "Mart, workflow, and API platform"}, evidence: {ko: "Databricks Workflow·API와 데이터 마트 환경을 상세에 명시합니다.", en: "Details explicitly describe Databricks Workflows, APIs, and the mart environment."}, source: "Existing site: p4 details"},
        {tech: "spark", kind: "implemented", role: {ko: "마트 쿼리 처리", en: "Mart-query processing"}, evidence: {ko: "데이터 분석가의 SparkSQL 쿼리를 최적화했습니다.", en: "Optimized analysts' SparkSQL queries."}, source: "Existing site: p4 details"},
        {tech: "sparksql", kind: "implemented", role: {ko: "마트 로직 최적화", en: "Mart-logic optimization"}, evidence: {ko: "SparkSQL 최적화로 마트별 수행시간을 5~20% 단축했습니다.", en: "SparkSQL optimization reduced mart runtimes by 5–20%."}, source: "Existing site: p4 details"},
        {tech: "sql", kind: "implemented", role: {ko: "분석 쿼리 개발·최적화", en: "Analytical-query development and optimization"}, evidence: {ko: "SparkSQL 기반 분석 쿼리 최적화를 명시합니다.", en: "Explicitly describes optimization of SparkSQL analytical queries."}, source: "Existing site: p4 details"},
        {tech: "airflow", kind: "implemented", role: {ko: "온프레미스 오케스트레이션", en: "On-premises orchestration"}, evidence: {ko: "On-Premise Airflow + Databricks Workflow 하이브리드 파이프라인을 구축했습니다.", en: "Built hybrid on-premises Airflow + Databricks Workflow pipelines."}, source: "Existing site: p4 details"},
        {tech: "databricks-workflows", kind: "implemented", role: {ko: "하이브리드 워크플로우", en: "Hybrid workflows"}, evidence: {ko: "온프레미스 Airflow와 결합한 Databricks Workflow 구현을 명시합니다.", en: "Explicitly describes Databricks Workflows combined with on-premises Airflow."}, source: "Existing site: p4 details"},
        {tech: "unitycatalog", kind: "implemented", role: {ko: "API 기반 카탈로그 접근·관리", en: "API-based catalog access and management"}, evidence: {ko: "Unity Catalog 읽기·쓰기 API 모듈을 명시하나 실제 데이터 조회 범위는 불명확하여 메타데이터 접근으로 한정합니다.", en: "Names a Unity Catalog read/write API module, but the actual data-read scope is ambiguous and is limited here to metadata access."}, source: "Existing site: p4 details"},
        {tech: "databricks-api", kind: "implemented", role: {ko: "Databricks 카탈로그 API 연동", en: "Databricks catalog API integration"}, evidence: {ko: "Databricks API 기반 카탈로그 모듈 개발을 명시합니다. 개별 엔드포인트는 기재되어 있지 않습니다.", en: "Explicitly describes a Databricks API-based catalog module; individual endpoints are not documented."}, source: "Existing site: p4 details"},
        {tech: "gluecatalog", kind: "implemented", role: {ko: "카탈로그 간 자동화", en: "Cross-catalog automation"}, evidence: {ko: "Databricks↔AWS Glue Catalog 자동화 모듈을 개발했습니다.", en: "Developed an automation module between Databricks and AWS Glue Catalog."}, source: "Existing site: p4 details"},
        {tech: "sha256", kind: "implemented", role: {ko: "PII 단방향 해싱", en: "One-way PII hashing"}, evidence: {ko: "기존 상세의 SHA-256 PII 모듈을 기술적으로 정확한 해싱으로 표기합니다.", en: "The existing detail's SHA-256 PII module is described using the technically correct term hashing."}, source: "Existing site: p4 details"},
        {tech: "ismsp", kind: "implemented", role: {ko: "PII 처리 모듈의 심사 대응 기준", en: "Audit requirement for the PII-handling module"}, evidence: {ko: "ISMS-P 심사 대응을 위한 SHA-256 PII 모듈 개발을 명시하며 단독 인증 성과를 뜻하지 않습니다.", en: "Explicitly describes a SHA-256 PII module for ISMS-P audit support, not an independent certification outcome."}, source: "Existing site: p4 details"},
        {tech: "deltalake", kind: "context", role: {ko: "마트 저장 환경", en: "Mart storage environment"}, evidence: {ko: "p4 카드의 Delta Lake 태그를 근거로 하며 상세한 저장 설계는 기재되지 않았습니다.", en: "Grounded in the p4 Delta Lake tag; detailed storage design is not documented."}, source: "Existing site: p4 card"}
      ],
      flows: [
        {from: "airflow", to: "databricks-workflows", label: {ko: "온프레미스·클라우드 하이브리드", en: "On-premises / cloud hybrid"}, kind: "integration", evidence: {ko: "기존 p4 상세에 On-Premise Airflow + Databricks Workflow 하이브리드 파이프라인을 명시합니다.", en: "Existing p4 details explicitly describe hybrid on-premises Airflow + Databricks Workflow pipelines."}},
        {from: "databricks", to: "gluecatalog", label: {ko: "카탈로그 간 자동화 연동", en: "Cross-catalog automation"}, kind: "integration", evidence: {ko: "기존 p4 상세에 Databricks↔AWS Glue Catalog 자동화 모듈 개발을 명시합니다. 테이블 데이터 복제를 뜻하지 않습니다.", en: "Existing p4 details explicitly describe Databricks↔AWS Glue Catalog automation; this does not assert table-data replication."}},
        {from: "databricks-api", to: "unitycatalog", label: {ko: "카탈로그 메타데이터 접근", en: "Catalog metadata access"}, kind: "integration", evidence: {ko: "기존 p4 상세의 Databricks API 기반 Unity Catalog 접근 문구를 메타데이터 범위로 제한합니다.", en: "The Databricks API-based Unity Catalog access described in existing p4 details is limited to metadata scope."}}
      ]
    },
    {
      id: "p5", company: "jk",
      title: {ko: "Onepick — AI 인재 추천", en: "Onepick — AI Talent Recommendation"},
      shortTitle: {ko: "Onepick ML 파이프라인", en: "Onepick ML Pipelines"},
      period: {ko: "2023.01 — 2023.04", en: "Jan 2023 — Apr 2023"}, start: "2023-01",
      summary: {ko: "AI 모델 기반 공고 추천·매칭과 헤드헌팅을 결합한 기업 맞춤형 인재 추천 서비스의 데이터·ML 파이프라인을 구축했습니다. SageMaker용 Deferrable Operator로 Airflow 자원 점유 문제를 해결하고 운영 모니터링을 확장했습니다.", en: "Built data and ML pipelines for a corporate talent-recommendation service combining AI job matching with headhunting. Resolved Airflow resource saturation with a SageMaker Deferrable Operator and expanded operational monitoring."},
      impact: {ko: "Airflow 워커 자원 점유율 평균 20% 감소 · 추가 확장 없이 장애 해소", en: "20% lower average Airflow worker resource use · Resolved saturation without scaling"},
      sections: [
        {heading: {ko: "문제 · 목표", en: "Problem & Goal"}, items: [
          {ko: "장시간 ML Task가 증가하면서 Airflow Worker의 메모리·CPU를 오래 점유해 다른 DAG에도 잦은 장애가 발생했습니다.", en: "Growing numbers of long-running ML tasks occupied Airflow worker memory and CPU for extended periods, causing frequent failures in other DAGs."},
          {ko: "추천 모델 개발용 데이터와 SageMaker 파이프라인을 제공하고 성능·장애를 효율적으로 모니터링해야 했습니다.", en: "Needed data and SageMaker pipelines for recommendation-model development and efficient performance / incident monitoring."}
        ]},
        {heading: {ko: "역할", en: "Role"}, items: [
          {ko: "PythonOperator를 기반으로 SageMaker 자원을 활용하는 Airflow Deferrable 커스텀 오퍼레이터를 개발했습니다.", en: "Developed an Airflow Deferrable custom operator based on PythonOperator for SageMaker resources."},
          {ko: "Airflow·AWS EMR·Spark 기반 추천·ML 서비스 파이프라인을 개발·운영하고 Webhook 알림을 구축했습니다.", en: "Developed and operated recommendation / ML service pipelines using Airflow, AWS EMR, and Spark, and built webhook notifications."}
        ]},
        {heading: {ko: "구현", en: "Implementation"}, items: [
          {ko: "장시간 SageMaker 작업에 Deferrable Operator를 적용하고 다른 DAG에도 재사용하여 워커 자원 점유를 줄였습니다.", en: "Applied the Deferrable Operator to long-running SageMaker work and reused it across other DAGs to reduce worker resource occupation."},
          {ko: "Webhook 기반 성능·장애 모니터링과 MS Teams 알림을 개발했습니다.", en: "Developed webhook-based performance / incident monitoring and Microsoft Teams notifications."},
          {ko: "팀원들과 협업하여 Airflow 서버와 파이프라인을 전반적으로 모니터링하는 Grafana 대시보드를 구축했습니다.", en: "Collaborated with teammates to build a Grafana dashboard monitoring Airflow servers and pipelines."}
        ]},
        {heading: {ko: "성과", en: "Outcome"}, items: [
          {ko: "오퍼레이터 재사용으로 평균 자원 점유율을 약 20% 줄여 Worker 추가 확장 없이 동시 DAG 장애를 해결했습니다. 이력서 요약은 자원 가용률 20% 이상 향상으로도 표현합니다.", en: "Operator reuse reduced average resource occupation by about 20%, resolving concurrent DAG failures without adding workers. The resume summary also describes this as over 20% higher resource availability."},
          {ko: "추천 모델용 데이터와 SageMaker 파이프라인을 제공하고, 팀에서 Airflow 서버와 파이프라인 상태를 확인할 수 있도록 Grafana 대시보드를 구축했습니다.", en: "Provided data and SageMaker pipelines for the recommendation model, and built Grafana dashboards for the team to monitor Airflow servers and pipelines."}
        ]}
      ],
      source: {kind: "both", label: {ko: "이력서 p. 3–4 · 기존 Onepick 상세", en: "Resume pp. 3–4 · Existing Onepick details"}, pages: [3, 4], note: {ko: "데이터·ML 파이프라인과 운영 모니터링 구축 범위. 자원 점유율은 평균 약 20% 감소 기준입니다.", en: "Scope covers data / ML pipelines and operational monitoring, with approximately 20% lower average resource occupation."}},
      stack: [
        {tech: "airflow", kind: "implemented", role: {ko: "ML 오케스트레이션·Deferrable Operator", en: "ML orchestration and Deferrable Operator"}, evidence: {ko: "PythonOperator 기반 SageMaker용 Deferrable Operator와 DAG 운영을 명시합니다.", en: "Explicitly describes a PythonOperator-based SageMaker Deferrable Operator and DAG operations."}, source: "PDF p. 3–4"},
        {tech: "python", kind: "implemented", role: {ko: "커스텀 오퍼레이터 개발", en: "Custom operator development"}, evidence: {ko: "Python Deferrable Operator 및 PythonOperator 기반 개발을 명시합니다.", en: "Explicitly names Python Deferrable Operator and PythonOperator-based development."}, source: "PDF p. 3–4"},
        {tech: "sagemaker", kind: "implemented", role: {ko: "추천 모델 데이터·ML 파이프라인", en: "Recommendation-model data and ML pipelines"}, evidence: {ko: "추천 모델용 SageMaker 파이프라인과 자원 활용 오퍼레이터를 구축했습니다.", en: "Built SageMaker pipelines and a resource-use operator for the recommendation model."}, source: "PDF p. 3–4"},
        {tech: "emr", kind: "implemented", role: {ko: "추천·ML 서비스 데이터 처리", en: "Recommendation / ML service data processing"}, evidence: {ko: "주요 역할에 AWS EMR 기반 추천·ML 서비스 파이프라인 개발·운영을 명시합니다.", en: "The role explicitly includes developing and operating recommendation / ML service pipelines on AWS EMR."}, source: "PDF p. 4"},
        {tech: "spark", kind: "implemented", role: {ko: "추천 파이프라인 분산 처리", en: "Distributed recommendation-pipeline processing"}, evidence: {ko: "주요 역할에 Apache Spark 기반 추천·ML 서비스 파이프라인 개발·운영을 명시합니다.", en: "The role explicitly names Apache Spark in recommendation / ML service pipeline development and operations."}, source: "PDF p. 4"},
        {tech: "webhook", kind: "implemented", role: {ko: "성능·장애 알림", en: "Performance and incident notifications"}, evidence: {ko: "Webhook 기반 성능·장애 모니터링 알림 개발·운영을 명시합니다.", en: "Explicitly describes developing and operating webhook-based performance / incident alerts."}, source: "PDF p. 3–4"},
        {tech: "msteams", kind: "implemented", role: {ko: "운영 알림 연동", en: "Operational notification integration"}, evidence: {ko: "Webhook 기반 운영 및 MS Teams 알림 개발을 명시합니다.", en: "Explicitly describes webhook-based operations and MS Teams notification development."}, source: "PDF p. 3"},
        {tech: "grafana", kind: "implemented", role: {ko: "Airflow 서버·파이프라인 모니터링", en: "Airflow server and pipeline monitoring"}, evidence: {ko: "팀원들과 Grafana 기반 대시보드를 구축했다고 명시합니다.", en: "Explicitly states that a Grafana dashboard was built with teammates."}, source: "PDF p. 4"}
      ],
      flows: [
        {from: "airflow", to: "sagemaker", label: {ko: "Deferrable Operator 연동", en: "Deferrable Operator integration"}, kind: "integration", evidence: {ko: "PDF p. 3–4에 PythonOperator 기반 SageMaker용 Airflow 커스텀 오퍼레이터를 명시합니다.", en: "Resume pp. 3–4 explicitly describe a PythonOperator-based Airflow custom operator for SageMaker."}},
        {from: "airflow", to: "webhook", label: {ko: "성능·장애 알림", en: "Performance and incident alerts"}, kind: "integration", evidence: {ko: "PDF p. 4의 주요 역할에 Airflow Webhook 기반 성능·장애 알림 개발·운영을 명시합니다.", en: "The role on resume p. 4 explicitly describes Airflow webhook-based performance / incident alert development and operation."}},
        {from: "webhook", to: "msteams", label: {ko: "운영 알림 전달", en: "Operational notification delivery"}, kind: "integration", evidence: {ko: "PDF p. 3에 Webhook 기반 운영 및 MS Teams 알림 개발을 명시합니다.", en: "Resume p. 3 explicitly names webhook-based operations and MS Teams notification development."}},
        {from: "airflow", to: "grafana", label: {ko: "서버·파이프라인 모니터링", en: "Server and pipeline monitoring"}, kind: "integration", evidence: {ko: "PDF p. 4는 Airflow 서버·파이프라인을 모니터링하는 Grafana 대시보드를 명시합니다.", en: "Resume p. 4 explicitly describes a Grafana dashboard monitoring Airflow servers and pipelines."}}
      ]
    },
    {
      id: "p-coverage", company: "jk",
      title: {ko: "Data Coverage — 분석 환경 자동화", en: "Data Coverage — Analytics Environment Automation"},
      shortTitle: {ko: "Data Coverage", en: "Data Coverage"},
      period: {ko: "2023.05 — 2023.06", en: "May 2023 — Jun 2023"}, start: "2023-05",
      summary: {ko: "온프레미스 분석·BI 환경의 Power BI 전환을 지원하기 위해 데이터 마트 생성과 수동 분석·전처리를 자동화했습니다. Presto 리포트 쿼리를 분석해 PySpark로 이전하고 재적재·정합성 검사를 파이프라인화했습니다.", en: "Automated mart generation and manual analysis / preprocessing to support migration from on-premises analytics and BI to Power BI. Analyzed Presto reporting queries, migrated them to PySpark, and automated reloads and data-quality checks."},
      impact: {ko: "테이블당 쿼리 수행시간 약 5–10% 단축", en: "Approximately 5–10% shorter query runtime per table"},
      sections: [
        {heading: {ko: "문제 · 목표", en: "Problem & Goal"}, items: [
          {ko: "분석가가 임의 생성한 미관리 마트 테이블과 수동 업무가 증가하여 자동화·관리 필요성이 커졌습니다.", en: "Unmanaged mart tables created by analysts and increasing manual tasks made automation and governance necessary."},
          {ko: "온프레미스 분석 환경과 BI 대시보드를 클라우드 Power BI로 전환하기 위한 데이터 기반을 제공해야 했습니다.", en: "Needed to provide the data foundation for transitioning on-premises analytics and BI dashboards to cloud-based Power BI."}
        ]},
        {heading: {ko: "역할", en: "Role"}, items: [
          {ko: "분석가·마케터 요구사항을 확인하고 Airflow 기반 수동 분석·전처리 자동화 파이프라인을 개발·운영했습니다.", en: "Gathered analyst / marketer requirements and developed and operated Airflow pipelines automating manual analysis and preprocessing."},
          {ko: "Presto 리포트 생성 쿼리를 분석하여 PySpark로 마이그레이션하고 비즈니스 로직을 최적화했습니다.", en: "Analyzed Presto report-generation queries, migrated them to PySpark, and optimized business logic."}
        ]},
        {heading: {ko: "구현", en: "Implementation"}, items: [
          {ko: "BI 리포트용 데이터 마트 생성, 기존 쿼리 실행, 재적재 및 데이터 정합성 체크를 파이프라인으로 구현했습니다.", en: "Implemented pipelines for BI-report mart generation, existing query execution, data reloads, and consistency checks."}
        ]},
        {heading: {ko: "성과", en: "Outcome"}, items: [
          {ko: "쿼리 최적화로 테이블당 약 5~10% 수행시간을 단축하고 수동·미관리 업무를 파이프라인화하여 플랫폼 관리 효율을 높였습니다.", en: "Reduced query runtime by approximately 5–10% per table and improved platform management by converting manual, unmanaged work into pipelines."}
        ]}
      ],
      source: {kind: "both", label: {ko: "이력서 p. 3 · 기존 Data Coverage 상세", en: "Resume p. 3 · Existing Data Coverage details"}, pages: [3], note: {ko: "Presto는 기존 쿼리 환경, Power BI는 전환 대상 BI 도구입니다. 담당 범위는 데이터 파이프라인과 로직 최적화입니다.", en: "Presto is the legacy query environment and Power BI the target BI tool. Responsibilities cover data pipelines and logic optimization."}},
      stack: [
        {tech: "airflow", kind: "implemented", role: {ko: "분석·전처리 자동화", en: "Analysis and preprocessing automation"}, evidence: {ko: "Airflow 수동 분석·전처리 자동화 파이프라인 개발·운영을 명시합니다.", en: "Explicitly describes development and operation of Airflow pipelines automating manual analysis and preprocessing."}, source: "PDF p. 3"},
        {tech: "spark", kind: "implemented", role: {ko: "이전 후 마트 처리", en: "Target mart processing"}, evidence: {ko: "Apache Spark 역할로 Presto 쿼리 분석과 PySpark 마이그레이션을 명시합니다.", en: "The Apache Spark role explicitly includes Presto query analysis and PySpark migration."}, source: "PDF p. 3"},
        {tech: "pyspark", kind: "implemented", role: {ko: "리포트 로직 이전·최적화", en: "Report-logic migration and optimization"}, evidence: {ko: "Presto 리포트 쿼리를 PySpark로 마이그레이션했습니다.", en: "Migrated Presto report queries to PySpark."}, source: "PDF p. 3"},
        {tech: "sql", kind: "implemented", role: {ko: "기존 쿼리 분석·비즈니스 로직 최적화", en: "Legacy-query analysis and business-logic optimization"}, evidence: {ko: "데이터 마트 생성 쿼리를 분석하고 로직을 최적화해 수행시간을 줄였습니다.", en: "Analyzed mart-generation queries and optimized their logic to reduce runtime."}, source: "PDF p. 3"},
        {tech: "presto", kind: "context", role: {ko: "분석·이전 대상 기존 쿼리 엔진", en: "Legacy query engine analyzed for migration"}, evidence: {ko: "Presto 기반 리포트 쿼리를 분석하여 PySpark로 이전했다고 명시합니다.", en: "Explicitly describes analyzing Presto-based report queries and migrating them to PySpark."}, source: "PDF p. 3"},
        {tech: "powerbi", kind: "context", role: {ko: "전환 대상 클라우드 BI", en: "Target cloud BI platform"}, evidence: {ko: "Power BI 전환을 위한 데이터 파이프라인 구축이 프로젝트 목표로 명시됩니다.", en: "Building data pipelines to support a Power BI transition is the stated project goal."}, source: "PDF p. 3"}
      ],
      flows: [
        {from: "presto", to: "pyspark", label: {ko: "리포트 쿼리 로직 이전", en: "Report-query logic migration"}, kind: "migration", evidence: {ko: "PDF p. 3에 Presto 리포트 쿼리 분석 및 PySpark 마이그레이션을 명시합니다.", en: "Resume p. 3 explicitly describes Presto report-query analysis and migration to PySpark."}}
      ]
    },
    {
      id: "p6", company: "bespin",
      title: {ko: "JOBIA — 데이터 & AI 플랫폼", en: "JOBIA — Data & AI Platform"},
      shortTitle: {ko: "JOBIA 플랫폼", en: "JOBIA Platform"},
      period: {ko: "2021.11 — 2022.06", en: "Nov 2021 — Jun 2022"}, start: "2021-11",
      summary: {ko: "베스핀글로벌에서 잡코리아의 AWS 네이티브 데이터·AI 플랫폼을 구축했습니다. 온프레미스 MSSQL SSIS 웨어하우스·마트를 Redshift + S3로 이전하고 SAP, AppsFlyer, GA360 외부 데이터를 Glue Catalog·Athena 분석 환경으로 통합했습니다.", en: "Built JobKorea's AWS-native data and AI platform at Bespin Global. Migrated on-premises MSSQL SSIS warehouses / marts to Redshift + S3 and integrated SAP, AppsFlyer, and GA360 data into a Glue Catalog / Athena analytics environment."},
      impact: {ko: "기존 MSSQL SSIS 대비 파이프라인 수행시간 15% 이상 단축", en: "Over 15% shorter pipeline runtime versus legacy MSSQL SSIS"},
      sections: [
        {heading: {ko: "문제 · 목표", en: "Problem & Goal"}, items: [
          {ko: "온프레미스 웨어하우스·마트를 퍼블릭 클라우드로 이전하고 분산된 외부 데이터를 S3 데이터레이크에 통합해야 했습니다.", en: "Needed to migrate on-premises warehouses / marts to public cloud and consolidate distributed external data into an S3 lake."},
          {ko: "직접 조회할 수 없는 Azure 기반 SAP, 도착 시점이 불명확한 MMP 데이터, BigQuery의 GA360 데이터에 맞는 서로 다른 연동이 필요했습니다.", en: "Distinct integrations were needed for Azure-hosted SAP that could not be queried directly, MMP data with unpredictable arrival times, and GA360 data in BigQuery."}
        ]},
        {heading: {ko: "역할", en: "Role"}, items: [
          {ko: "Step Functions + Glue 기반 Spark ETL을 개발하고 배치 파이프라인 가이드를 배포했으며 PoC 과정에서 고객사 팀을 교육했습니다.", en: "Developed Spark ETL with Step Functions + Glue, distributed batch-pipeline guides, and trained client teams during the PoC."},
          {ko: "외부 데이터 연동을 주로 담당하고 Redshift의 PostgreSQL 기반 웨어하우스·마트 로직과 Athena 분석 환경을 구성했습니다.", en: "Primarily owned external-data integration, wrote PostgreSQL-based warehouse / mart logic in Redshift, and configured the Athena analytics environment."}
        ]},
        {heading: {ko: "구현", en: "Implementation"}, items: [
          {ko: "Azure 기반 SAP 데이터를 플러그인과 AWS Transfer Family(SFTP)로 연동해 S3에 적재한 뒤 배치 ETL로 처리했습니다.", en: "Integrated Azure-hosted SAP through a plugin and AWS Transfer Family (SFTP), loaded data into S3, and processed it with batch ETL."},
          {ko: "AppsFlyer MMP 데이터의 S3 파일 이벤트를 EventBridge에서 받아 Lambda를 트리거하는 실시간 Micro ETL을 구현했습니다.", en: "Implemented real-time micro-ETL for AppsFlyer MMP data using S3 file events routed through EventBridge to trigger Lambda."},
          {ko: "GA360에서 BigQuery에 적재된 데이터를 AWS Glue BigQuery Connector로 읽고 Glue의 Spark 처리로 S3에 적재했습니다.", en: "Read GA360 data already loaded into BigQuery through the AWS Glue BigQuery Connector, then processed it with Spark in Glue and loaded it into S3."},
          {ko: "Glue Catalog 테이블·파티션을 구성하고 마케터·분석가가 Athena에서 데이터를 탐색하는 ad-hoc 환경을 제공했습니다.", en: "Configured Glue Catalog tables and partitions and provided an Athena ad-hoc environment for marketers and analysts to explore data."}
        ]},
        {heading: {ko: "성과", en: "Outcome"}, items: [
          {ko: "기존 온프레미스 MSSQL SSIS 파이프라인 대비 수행시간을 15% 이상 단축했습니다.", en: "Reduced pipeline runtime by over 15% compared with the legacy on-premises MSSQL SSIS pipelines."},
          {ko: "GA·SAP·MMP를 단일 데이터레이크로 통합하고 Glue Catalog 테이블·파티션 자동 구성과 Athena로 분석가 셀프서비스 환경을 제공했습니다.", en: "Consolidated GA, SAP, and MMP data into one lake and provided analyst self-service through automated Glue Catalog table / partition setup and Athena."}
        ]}
      ],
      source: {kind: "both", label: {ko: "이력서 p. 4–5 · 기존 JOBIA 상세", en: "Resume pp. 4–5 · Existing JOBIA details"}, pages: [4, 5], note: {ko: "외부 데이터 원천·기존 시스템과 직접 구현한 AWS 처리 계층을 구분합니다.", en: "External data sources and legacy systems are distinguished from the implemented AWS processing layer."}},
      stack: [
        {tech: "aws", kind: "implemented", role: {ko: "클라우드 데이터 플랫폼", en: "Cloud data platform"}, evidence: {ko: "AWS S3 기반 데이터레이크와 퍼블릭 클라우드 마이그레이션을 명시합니다.", en: "Explicitly describes an AWS S3 lake and public-cloud migration."}, source: "PDF p. 4–5"},
        {tech: "s3", kind: "implemented", role: {ko: "통합 데이터레이크", en: "Integrated data lake"}, evidence: {ko: "SAP·MMP·GA360 데이터를 S3에 통합 적재했습니다.", en: "Consolidated SAP, MMP, and GA360 data into S3."}, source: "PDF p. 4–5"},
        {tech: "redshift", kind: "implemented", role: {ko: "웨어하우스·마트 로직", en: "Warehouse and mart logic"}, evidence: {ko: "Amazon Redshift의 PostgreSQL 기반 웨어하우스·마트 로직 작성을 명시합니다.", en: "Explicitly describes writing PostgreSQL-based warehouse / mart logic in Amazon Redshift."}, source: "PDF p. 4"},
        {tech: "sql", kind: "implemented", role: {ko: "Redshift SQL 로직", en: "Redshift SQL logic"}, evidence: {ko: "Redshift에서 PostgreSQL 기반 데이터 웨어하우스·마트 로직을 작성했습니다.", en: "Wrote PostgreSQL-based data-warehouse and mart logic in Redshift."}, source: "PDF p. 4"},
        {tech: "stepfunctions", kind: "implemented", role: {ko: "배치 워크플로우", en: "Batch workflows"}, evidence: {ko: "Step Functions 워크플로우 채택 PoC·개발 가이드·고객 교육과 ETL 개발을 수행했습니다.", en: "Worked on the Step Functions adoption PoC, development guides, client training, and ETL development."}, source: "PDF p. 4"},
        {tech: "glue", kind: "implemented", role: {ko: "Spark ETL 및 외부 데이터 적재", en: "Spark ETL and external-data loading"}, evidence: {ko: "Glue 기반 Spark ETL과 BigQuery 데이터의 S3 적재를 명시합니다.", en: "Explicitly describes Spark ETL on Glue and loading BigQuery data into S3."}, source: "PDF p. 4–5"},
        {tech: "spark", kind: "implemented", role: {ko: "분산 배치 ETL", en: "Distributed batch ETL"}, evidence: {ko: "Apache Spark 기반 ETL 파이프라인 개발·가이드를 명시합니다.", en: "Explicitly describes Apache Spark ETL pipeline development and guidance."}, source: "PDF p. 4–5"},
        {tech: "lambda", kind: "implemented", role: {ko: "이벤트 기반 Micro ETL", en: "Event-driven micro-ETL"}, evidence: {ko: "S3 이벤트를 기반으로 EventBridge가 Lambda를 트리거하도록 구현했습니다.", en: "Implemented EventBridge-triggered Lambda processing based on S3 events."}, source: "PDF p. 5"},
        {tech: "eventbridge", kind: "implemented", role: {ko: "S3 이벤트의 Lambda 트리거", en: "Lambda triggers from S3 events"}, evidence: {ko: "AppsFlyer 데이터의 S3 파일 이벤트를 EventBridge로 받아 Lambda를 트리거했습니다.", en: "Used EventBridge to receive S3 file events for AppsFlyer data and trigger Lambda."}, source: "PDF p. 5"},
        {tech: "athena", kind: "implemented", role: {ko: "셀프서비스 ad-hoc 분석", en: "Self-service ad-hoc analytics"}, evidence: {ko: "Glue Catalog 연동 Athena 분석 환경을 제공했습니다.", en: "Provided an Athena analytics environment integrated with Glue Catalog."}, source: "PDF p. 4–5"},
        {tech: "gluecatalog", kind: "implemented", role: {ko: "테이블·파티션 구성", en: "Table and partition configuration"}, evidence: {ko: "Glue Catalog 테이블 생성·파티션 구성 후 Athena 탐색 환경을 제공했습니다.", en: "Created Glue Catalog tables and partitions for Athena-based exploration."}, source: "PDF p. 5"},
        {tech: "transfer-family", kind: "implemented", role: {ko: "SAP 데이터 파일 수신", en: "SAP data-file ingestion"}, evidence: {ko: "Transfer Family와 SAP 플러그인을 연동하여 S3에 데이터를 적재했습니다.", en: "Integrated Transfer Family with an SAP plugin to load data into S3."}, source: "PDF p. 5"},
        {tech: "sftp", kind: "implemented", role: {ko: "SAP 파일 전송 프로토콜 연동", en: "SAP file-transfer protocol integration"}, evidence: {ko: "AWS Transfer Family를 SFTP 기반 서비스로 명시하며 SAP 적재에 사용했습니다.", en: "Explicitly identifies AWS Transfer Family as the SFTP-based service used for SAP ingestion."}, source: "PDF p. 5"},
        {tech: "bigquery-connector", kind: "implemented", role: {ko: "Glue의 BigQuery 데이터 읽기", en: "Reading BigQuery data into Glue"}, evidence: {ko: "AWS Glue BigQuery Connector를 통한 GA360 데이터 연동을 명시합니다.", en: "Explicitly names the AWS Glue BigQuery Connector for GA360 data integration."}, source: "PDF p. 5"},
        {tech: "bigquery", kind: "context", role: {ko: "GA360 데이터 원천 저장소", en: "Upstream GA360 data store"}, evidence: {ko: "GA360에서 BigQuery에 적재된 데이터를 Glue가 가져오는 원천으로 명시합니다.", en: "Explicitly identifies BigQuery as the upstream store holding GA360 data consumed by Glue."}, source: "PDF p. 5"},
        {tech: "ga360", kind: "context", role: {ko: "외부 분석 데이터 원천", en: "External analytics-data source"}, evidence: {ko: "GA360→BigQuery 적재 후 Glue에서 처리한다고 설명합니다.", en: "Describes GA360 data being loaded into BigQuery before processing in Glue."}, source: "PDF p. 5"},
        {tech: "sap", kind: "context", role: {ko: "직접 조회 불가능한 외부 시스템", en: "External system not directly queryable"}, evidence: {ko: "직접 쿼리할 수 없는 Azure 기반 SAP을 플러그인과 SFTP로 연동했습니다.", en: "Integrated Azure-hosted SAP, which could not be directly queried, using a plugin and SFTP."}, source: "PDF p. 5"},
        {tech: "azure", kind: "context", role: {ko: "원천 SAP의 호스팅 환경", en: "Hosting environment of source SAP"}, evidence: {ko: "SAP이 MS Azure 기반이라고 명시하며 Azure 인프라 구현은 서술하지 않습니다.", en: "Explicitly says SAP was hosted on MS Azure; no Azure infrastructure implementation is described."}, source: "PDF p. 5"},
        {tech: "appsflyer", kind: "context", role: {ko: "도착 시점이 불규칙한 MMP 데이터 원천", en: "MMP data source with unpredictable arrival"}, evidence: {ko: "MMP(AppsFlyer) 데이터를 S3 이벤트 기반으로 처리했습니다.", en: "Processed MMP (AppsFlyer) data through S3-event-based ingestion."}, source: "PDF p. 5"},
        {tech: "mssql", kind: "context", role: {ko: "이전 전 온프레미스 웨어하우스", en: "Legacy on-premises warehouse"}, evidence: {ko: "기존 MSSQL SSIS 웨어하우스·마트 파이프라인을 마이그레이션했습니다.", en: "Migrated the legacy MSSQL SSIS warehouse / mart pipelines."}, source: "PDF p. 4"},
        {tech: "ssis", kind: "context", role: {ko: "이전 전 ETL 기준 환경", en: "Legacy ETL baseline"}, evidence: {ko: "15% 이상 수행시간 단축의 비교 대상은 기존 MSSQL SSIS 파이프라인입니다.", en: "The baseline for the over-15% runtime reduction is the prior MSSQL SSIS pipeline."}, source: "PDF p. 4"}
      ],
      flows: [
        {from: "mssql", to: "redshift", label: {ko: "웨어하우스·마트 마이그레이션", en: "Warehouse / mart migration"}, kind: "migration", evidence: {ko: "기존 p6 상세는 MSSQL SSIS 웨어하우스·마트를 Redshift + S3로 이전했다고 명시합니다.", en: "Existing p6 details explicitly describe moving MSSQL SSIS warehouses / marts to Redshift + S3."}},
        {from: "sap", to: "transfer-family", label: {ko: "플러그인·SFTP 연동", en: "Plugin / SFTP integration"}, kind: "flow", evidence: {ko: "PDF p. 5는 SAP 플러그인과 AWS Transfer Family(SFTP) 연동을 명시합니다.", en: "Resume p. 5 explicitly describes the SAP plugin and AWS Transfer Family (SFTP) integration."}},
        {from: "transfer-family", to: "s3", label: {ko: "SAP 파일 적재", en: "SAP file loading"}, kind: "flow", evidence: {ko: "PDF p. 5는 Transfer Family를 통해 SAP 데이터를 S3에 적재한 뒤 배치 처리했다고 설명합니다.", en: "Resume p. 5 describes loading SAP data into S3 through Transfer Family before batch processing."}},
        {from: "appsflyer", to: "s3", label: {ko: "MMP 파일 수집", en: "MMP file ingestion"}, kind: "flow", evidence: {ko: "PDF p. 5는 AppsFlyer 데이터의 S3 파일 이벤트를 처리 시작점으로 명시합니다.", en: "Resume p. 5 identifies S3 file events for AppsFlyer data as the processing trigger."}},
        {from: "s3", to: "eventbridge", label: {ko: "파일 도착 이벤트", en: "File-arrival event"}, kind: "flow", evidence: {ko: "PDF p. 5의 S3 파일 이벤트 → EventBridge 경로입니다.", en: "The S3 file event → EventBridge path is explicit on resume p. 5."}},
        {from: "eventbridge", to: "lambda", label: {ko: "Micro ETL 트리거", en: "Micro-ETL trigger"}, kind: "flow", evidence: {ko: "PDF p. 5에 EventBridge에서 Lambda를 트리거한다고 명시합니다.", en: "Resume p. 5 explicitly says EventBridge triggers Lambda."}},
        {from: "ga360", to: "bigquery", label: {ko: "GA360 원천 데이터 적재", en: "Upstream GA360 data loading"}, kind: "flow", evidence: {ko: "PDF p. 5에 GA360에서 BigQuery 적재 후 Glue 처리 순서를 명시합니다.", en: "Resume p. 5 explicitly states GA360 data is loaded into BigQuery before Glue processing."}},
        {from: "bigquery", to: "glue", label: {ko: "BigQuery Connector로 읽기", en: "Read through BigQuery Connector"}, kind: "flow", evidence: {ko: "PDF p. 5의 AWS Glue BigQuery Connector를 통한 BigQuery 데이터 연동입니다.", en: "Resume p. 5 describes reading BigQuery data through the AWS Glue BigQuery Connector."}},
        {from: "glue", to: "s3", label: {ko: "Spark 처리 후 적재", en: "Load after Spark processing"}, kind: "flow", evidence: {ko: "PDF p. 5에 Glue에서 Spark로 S3 적재를 명시합니다.", en: "Resume p. 5 explicitly describes Spark processing in Glue followed by S3 loading."}},
        {from: "stepfunctions", to: "glue", label: {ko: "배치 ETL 워크플로우", en: "Batch ETL workflow"}, kind: "integration", evidence: {ko: "PDF p. 4와 기존 p6 상세는 Step Functions + Glue 기반 Spark ETL 워크플로우를 명시합니다.", en: "Resume p. 4 and existing p6 details explicitly describe Step Functions + Glue Spark ETL workflows."}},
        {from: "athena", to: "gluecatalog", label: {ko: "카탈로그 연동 분석", en: "Catalog-backed analytics"}, kind: "integration", evidence: {ko: "PDF p. 4–5에 Athena와 Glue Catalog를 연동한 ad-hoc 분석 환경을 명시합니다.", en: "Resume pp. 4–5 explicitly describe Athena ad-hoc analytics integrated with Glue Catalog."}}
      ]
    },
    {
      id: "p-migration", company: "jk",
      title: {ko: "데이터레이크 아키텍처 개선 — Databricks 마이그레이션", en: "Data Lake Architecture — Databricks Migration"},
      shortTitle: {ko: "EMR → Databricks", en: "EMR → Databricks"},
      period: {ko: "2023.03 — 2023.07", en: "Mar 2023 — Jul 2023"}, start: "2023-03",
      summary: {ko: "AWS EMR 데이터레이크의 서비스·프로파일 파이프라인을 Databricks Delta Lake·Unity Catalog로 이전했습니다. All-Purpose 클러스터를 재사용하는 Airflow REST API 오퍼레이터를 개발하고 Hive Metastore를 연결해 데이터 정합성 검증 환경을 개선했습니다.", en: "Migrated service and profile pipelines from an AWS EMR lake to Databricks Delta Lake and Unity Catalog. Built an Airflow REST API operator that reused All-Purpose clusters and connected Hive Metastore to improve data-consistency validation."},
      impact: {ko: "DAG 수행시간 평균 5–20% 단축 · 태스크당 3–5분 자원 할당 대기 제거", en: "5–20% shorter average DAG runtime · Removed 3–5 minutes of provisioning per task"},
      sections: [
        {heading: {ko: "문제 · 목표", en: "Problem & Goal"}, items: [
          {ko: "EMR에서 실행하던 Spark 파일을 Databricks로 이전할 때 당시 Job Compute 경로는 별도 Workflow·Job 생성과 변경 시 이중 작업을 요구했습니다.", en: "When moving Spark files from EMR to Databricks, the Job Compute path at the time required separate Workflow / Job creation and duplicate work for changes."},
          {ko: "기존 Spark 파일을 Airflow에서 직접 실행하는 All-Purpose 방식은 생성·재사용·종료 API를 개별 호출해야 해 DAG Task가 복잡해졌습니다.", en: "Running existing Spark files directly from Airflow with All-Purpose clusters required separate creation, reuse, and termination API calls, increasing DAG task complexity."},
          {ko: "마이그레이션 검증 시 EMR Hue와 Databricks Notebook에서 각각 추출·비교하는 수작업이 있었습니다.", en: "Migration validation required manual extraction and comparison across EMR Hue and Databricks Notebooks."}
        ]},
        {heading: {ko: "역할", en: "Role"}, items: [
          {ko: "Databricks REST API 기반 Airflow 커스텀 오퍼레이터를 직접 설계·개발했습니다.", en: "Directly designed and developed an Airflow custom operator based on the Databricks REST API."},
          {ko: "프로파일·모델에서 사용하던 PySpark·SparkSQL 로직을 최적화하고 유관부서와 데이터 정합성을 상세 검증했습니다.", en: "Optimized PySpark / SparkSQL logic used by profiles and models and worked with related teams on detailed data-consistency validation."}
        ]},
        {heading: {ko: "구현", en: "Implementation"}, items: [
          {ko: "하나의 오퍼레이터로 DAG 내 All-Purpose 클러스터 생성·재사용·실행 후 삭제를 관리하고, 운영 담당자 요구사항에 맞춰 태깅과 비용 추적 기능을 포함했습니다.", en: "Used one operator to manage All-Purpose cluster creation, reuse, and deletion after execution within a DAG, including tagging and cost tracking requested by operations staff."},
          {ko: "EMR의 Hive Metastore를 Databricks에 연결하여 Databricks Notebook 한 환경에서 기존 Hive 데이터와 Unity Catalog 데이터를 함께 조회·비교하도록 제안·구현했습니다.", en: "Proposed and implemented connecting EMR's Hive Metastore to Databricks so legacy Hive data and Unity Catalog data could be queried and compared within one Databricks Notebook environment."}
        ]},
        {heading: {ko: "성과", en: "Outcome"}, items: [
          {ko: "태스크당 3~5분의 자원 할당 시간을 제거하고 DAG별 평균 수행시간을 5~20% 단축했으며 DAG Task 복잡도를 낮췄습니다.", en: "Removed 3–5 minutes of resource-allocation overhead per task, shortened average DAG runtimes by 5–20%, and reduced DAG task complexity."},
          {ko: "Databricks Notebook 한 곳에서 기존 데이터와 이전한 데이터를 비교할 수 있게 해 정합성 검증 시간을 줄였습니다. 단축률 수치는 별도로 기록되어 있지 않습니다.", en: "Enabled comparison of legacy and migrated data in one Databricks Notebook, reducing time spent on consistency checks. No separate validation-speed metric is recorded."}
        ]},
        {heading: {ko: "후속 계획 (미구현)", en: "Planned Follow-up (Not Implemented)"}, items: [
          {ko: "런칭 후 OOM 등 장애에 대응하기 위해 Auto Scaling 적용을 계획했습니다. 구현 완료 여부는 확인되지 않았습니다.", en: "Planned Auto Scaling to address post-launch failures such as OOM. Implementation has not been confirmed."}
        ]}
      ],
      source: {kind: "both", label: {ko: "이력서 p. 2–3 · 기존 잡코리아 경력", en: "Resume pp. 2–3 · Existing JobKorea career"}, pages: [2, 3], note: {ko: "All-Purpose 클러스터 재사용에 따른 런타임 개선 프로젝트. Auto Scaling은 후속 계획으로 구분합니다.", en: "Runtime improvement through All-Purpose cluster reuse. Auto Scaling is classified as planned follow-up."}},
      stack: [
        {tech: "aws", kind: "implemented", role: {ko: "Databricks 마이그레이션 기반", en: "Databricks migration foundation"}, evidence: {ko: "AWS 기반 Databricks 마이그레이션을 프로젝트 요약에 명시합니다.", en: "The project summary explicitly describes an AWS-based Databricks migration."}, source: "PDF p. 2–3"},
        {tech: "emr", kind: "context", role: {ko: "이전 전 데이터레이크", en: "Legacy data lake"}, evidence: {ko: "기존 AWS EMR의 서비스·프로파일 파이프라인이 이전 대상입니다.", en: "The migration sources are service and profile pipelines on the existing AWS EMR platform."}, source: "PDF p. 2–3"},
        {tech: "databricks", kind: "implemented", role: {ko: "이전 후 분석·서비스 플랫폼", en: "Target analytics and service platform"}, evidence: {ko: "Databricks로 서비스·프로파일 파이프라인을 마이그레이션했습니다.", en: "Migrated service and profile pipelines to Databricks."}, source: "PDF p. 2–3"},
        {tech: "deltalake", kind: "implemented", role: {ko: "도입 대상 데이터레이크 저장 계층", en: "Adopted lake storage layer"}, evidence: {ko: "Databricks Delta Lake 도입을 위한 마이그레이션을 명시합니다.", en: "Explicitly describes migration to adopt Databricks Delta Lake."}, source: "PDF p. 2"},
        {tech: "unitycatalog", kind: "implemented", role: {ko: "카탈로그 도입·신규 데이터 검증", en: "Catalog adoption and target-data validation"}, evidence: {ko: "Unity Catalog 도입과 Hive 데이터·Unity Catalog 데이터 동시 조회 검증을 명시합니다.", en: "Explicitly describes Unity Catalog adoption and validation comparing Hive and Unity Catalog data."}, source: "PDF p. 2–3"},
        {tech: "airflow", kind: "implemented", role: {ko: "클러스터 재사용 커스텀 오퍼레이터", en: "Cluster-reuse custom operator"}, evidence: {ko: "DAG 내 클러스터 생성·재사용·삭제를 수행하는 Airflow 오퍼레이터를 개발했습니다.", en: "Developed an Airflow operator for cluster creation, reuse, and deletion within a DAG."}, source: "PDF p. 2–3"},
        {tech: "rest-api", kind: "implemented", role: {ko: "클러스터 수명주기 API 연동", en: "Cluster-lifecycle API integration"}, evidence: {ko: "Databricks REST API 기반 커스텀 오퍼레이터를 명시합니다.", en: "Explicitly names a Databricks REST API-based custom operator."}, source: "PDF p. 2–3"},
        {tech: "all-purpose-compute", kind: "implemented", role: {ko: "DAG 내 생성·재사용·종료", en: "Creation, reuse, and termination within DAGs"}, evidence: {ko: "All-Purpose 클러스터를 하나의 오퍼레이터로 생성·재사용·삭제하도록 구현했습니다.", en: "Implemented All-Purpose cluster creation, reuse, and deletion through one operator."}, source: "PDF p. 3"},
        {tech: "job-compute", kind: "context", role: {ko: "당시 이중 개발 부담이 있던 대안", en: "Alternative with duplicate-development overhead at the time"}, evidence: {ko: "당시 Job Compute는 별도 Workflow·Job 생성이 필요해 이 프로젝트에서는 All-Purpose 경로를 사용했다고 설명합니다.", en: "The resume explains that Job Compute then required separate Workflow / Job creation, so this project used All-Purpose clusters."}, source: "PDF p. 2–3"},
        {tech: "spark", kind: "implemented", role: {ko: "기존 Spark 파일 이전·로직 최적화", en: "Spark-file migration and logic optimization"}, evidence: {ko: "EMR Spark Job 이전과 기존 프로파일·모델의 Spark 로직 최적화를 명시합니다.", en: "Explicitly describes migrating EMR Spark jobs and optimizing Spark logic for existing profiles / models."}, source: "PDF p. 2–3"},
        {tech: "pyspark", kind: "implemented", role: {ko: "프로파일·모델 로직 최적화", en: "Profile / model logic optimization"}, evidence: {ko: "기존 프로파일·모델의 PySpark 로직 최적화를 주요 역할로 명시합니다.", en: "The role explicitly includes optimizing PySpark logic in existing profiles / models."}, source: "PDF p. 2"},
        {tech: "sparksql", kind: "implemented", role: {ko: "Spark SQL 로직 최적화", en: "Spark SQL logic optimization"}, evidence: {ko: "기존 프로파일·모델의 SparkSQL 로직 최적화를 명시합니다.", en: "Explicitly describes optimizing SparkSQL logic in existing profiles / models."}, source: "PDF p. 2"},
        {tech: "hive-metastore", kind: "implemented", role: {ko: "기존 EMR 메타스토어의 Databricks 연결", en: "Connecting the legacy EMR metastore to Databricks"}, evidence: {ko: "EMR에서 사용하던 Hive Metastore를 Databricks에 연결하도록 제안·구현했습니다.", en: "Proposed and implemented connecting the Hive Metastore used by EMR to Databricks."}, source: "PDF p. 3"},
        {tech: "hue", kind: "context", role: {ko: "이전 전 데이터 추출·검증 화면", en: "Legacy extraction / validation interface"}, evidence: {ko: "EMR Hue와 Databricks Notebook에서 별도 추출·비교하던 과정을 개선했다고 명시합니다.", en: "Describes improving separate extraction / comparison workflows across EMR Hue and Databricks Notebooks."}, source: "PDF p. 3"},
        {tech: "databricks-notebooks", kind: "implemented", role: {ko: "통합 정합성 검증 환경", en: "Unified consistency-validation environment"}, evidence: {ko: "Databricks Notebook에서 Hive와 Unity Catalog 데이터를 함께 비교하도록 구성했습니다.", en: "Configured Databricks Notebooks to compare Hive and Unity Catalog data in one environment."}, source: "PDF p. 3"},
        {tech: "autoscaling", kind: "planned", role: {ko: "OOM 대응 후속 고도화", en: "Planned OOM-response enhancement"}, evidence: {ko: "런칭 이후 Auto Scaling 적용을 위한 후속 작업을 준비한다고 서술하며 완료했다고 하지 않습니다.", en: "Describes preparing post-launch work to add Auto Scaling, not completing it."}, source: "PDF p. 3"}
      ],
      flows: [
        {from: "emr", to: "databricks", label: {ko: "서비스·프로파일 파이프라인 이전", en: "Service / profile pipeline migration"}, kind: "migration", evidence: {ko: "PDF p. 2–3에 AWS EMR 기반 플랫폼에서 Databricks로 파이프라인 마이그레이션을 명시합니다.", en: "Resume pp. 2–3 explicitly describe migrating pipelines from the AWS EMR platform to Databricks."}},
        {from: "airflow", to: "rest-api", label: {ko: "오퍼레이터의 Databricks API 호출", en: "Databricks API calls from the operator"}, kind: "integration", evidence: {ko: "PDF p. 2–3에 Databricks REST API 기반 Airflow 커스텀 오퍼레이터를 명시합니다.", en: "Resume pp. 2–3 explicitly name the Databricks REST API-based Airflow custom operator."}},
        {from: "rest-api", to: "all-purpose-compute", label: {ko: "클러스터 생성·재사용·삭제", en: "Cluster creation, reuse, and deletion"}, kind: "integration", evidence: {ko: "PDF p. 3에 API로 All-Purpose 클러스터 생성·재사용·종료를 관리하는 구현을 명시합니다.", en: "Resume p. 3 explicitly describes API-based All-Purpose cluster creation, reuse, and termination."}},
        {from: "hive-metastore", to: "databricks", label: {ko: "기존 Hive 메타스토어 연결", en: "Legacy Hive Metastore connection"}, kind: "integration", evidence: {ko: "PDF p. 3에 EMR Hive Metastore를 Databricks에 연결한 제안·구현을 명시합니다.", en: "Resume p. 3 explicitly describes proposing and implementing the EMR Hive Metastore connection to Databricks."}},
        {from: "databricks-notebooks", to: "unitycatalog", label: {ko: "신규 카탈로그 데이터 조회·검증", en: "Query and validate target-catalog data"}, kind: "integration", evidence: {ko: "PDF p. 3은 Notebook에서 Hive와 Unity Catalog 데이터를 함께 조회·비교한다고 명시합니다.", en: "Resume p. 3 explicitly describes querying and comparing Hive and Unity Catalog data from the notebook."}}
      ]
    },
    {
      id: "p-green2", company: "intern",
      title: {ko: "그린쉘터 II — 미세먼지·폭염 대응 측정망", en: "Green Shelter II — Air-Quality & Heat-Response Sensor Network"},
      shortTitle: {ko: "그린쉘터 II", en: "Green Shelter II"},
      period: {ko: "2020.04 — 2020.10", en: "Apr 2020 — Oct 2020"}, start: "2020-04",
      summary: {ko: "국민대학교 산학협력단에서 산림청 국립산림과학원의 그린쉘터 최적 이용망 연구에 참여했습니다. Raspberry Pi 미세먼지 측정기를 제작하고 교내 시범 측정망·마이크로 배치 수집 파이프라인과 분석 환경을 구축했습니다.", en: "Joined the National Institute of Forest Science's Green Shelter research through Kookmin University's industry-academic cooperation foundation. Built Raspberry Pi fine-dust sensors, a pilot campus network, micro-batch ingestion, and a research analysis environment."},
      impact: {ko: "Raspberry Pi 측정망 구축 · 신규 관측 데이터 수집·통계·시각화", en: "Built a Raspberry Pi sensor network · Collected, summarized, and visualized new observations"},
      sections: [
        {heading: {ko: "문제 · 목표", en: "Problem & Goal"}, items: [
          {ko: "공공데이터 외에도 원하는 지점의 미세먼지·기상 데이터를 직접 확보하고 기존 자료와 결합할 필요가 있었습니다.", en: "Needed to obtain fine-dust and weather observations at chosen locations beyond available public data and combine them with existing datasets."},
          {ko: "연구과제 '미세먼지와 폭염 대응 그린쉘터 최적 이용망 분석 기술 개발2'의 측정·분석 기반을 제공했습니다.", en: "Provided measurement and analysis infrastructure for the project on optimal Green Shelter networks responding to fine dust and heat waves, phase II."}
        ]},
        {heading: {ko: "역할", en: "Role"}, items: [
          {ko: "국민대학교 산학협력단 연구원으로 R·Python을 활용한 전국 미세먼지·기상청 관측자료 전처리와 산림청 미세먼지 측정넷 분석을 담당했습니다.", en: "As a researcher at Kookmin University's cooperation foundation, used R and Python to preprocess national fine-dust / weather observations and analyze the Korea Forest Service's fine-dust monitoring network."},
          {ko: "Ubuntu·JupyterLab 분석 환경과 MySQL 데이터베이스를 구축하고 R로 연구대상지 회복력과 기상요인의 영향을 분석했습니다.", en: "Built an Ubuntu / JupyterLab analysis environment and MySQL database, and used R to analyze site resilience and the effects of weather factors."}
        ]},
        {heading: {ko: "구현", en: "Implementation"}, items: [
          {ko: "Linux·Python 임베디드 프로그래밍으로 휴대용 Raspberry Pi 미세먼지 측정기를 개발·제작하고 국민대학교 교내에 시범 측정망을 구축했습니다.", en: "Developed and assembled portable Raspberry Pi fine-dust sensors through Linux / Python embedded programming and deployed a pilot campus measurement network."},
          {ko: "각 기기 데이터를 처리하는 마이크로 배치 파이프라인으로 관측값을 수집·통합하고 통계와 시각화를 제공했습니다.", en: "Collected and integrated device observations through micro-batch pipelines and produced statistics and visualizations."}
        ]},
        {heading: {ko: "성과", en: "Outcome"}, items: [
          {ko: "공공자료에 없는 지점의 관측값을 직접 수집하고, 실시간 측정 결과와 시각화 자료를 연구에 제공했습니다.", en: "Collected observations at locations not covered by public datasets and provided real-time measurements and visualizations for the research."}
        ]}
      ],
      source: {kind: "both", label: {ko: "이력서 p. 5 · 기존 연구 경력", en: "Resume p. 5 · Existing research career"}, pages: [5], note: {ko: "교내 시범 측정망·연구 환경 구축 범위. 기상청 AWS는 Automated Weather System 관측자료입니다.", en: "Scope covers a pilot campus sensor network and research infrastructure. Weather-agency AWS means Automated Weather System observations."}},
      stack: [
        {tech: "python", kind: "implemented", role: {ko: "자료 전처리·센서 개발", en: "Preprocessing and sensor development"}, evidence: {ko: "R & Python 자료 전처리와 Linux & Python Raspberry Pi 측정기 개발을 명시합니다.", en: "Explicitly names R & Python preprocessing and Linux & Python development of Raspberry Pi sensors."}, source: "PDF p. 5"},
        {tech: "r", kind: "implemented", role: {ko: "미세먼지·회복력·기상요인 분석", en: "Fine-dust, resilience, and weather-factor analysis"}, evidence: {ko: "R로 연구대상지 회복력과 기상요인 영향을 분석했다고 명시합니다.", en: "Explicitly describes using R to analyze site resilience and weather-factor effects."}, source: "PDF p. 5"},
        {tech: "raspberrypi", kind: "implemented", role: {ko: "휴대용 측정기·교내 측정망", en: "Portable sensors and campus network"}, evidence: {ko: "Raspberry Pi 기반 소형 측정기를 개발·제작하여 교내 측정망을 구축했습니다.", en: "Developed and assembled compact Raspberry Pi sensors and built a campus measurement network."}, source: "PDF p. 5"},
        {tech: "linux", kind: "implemented", role: {ko: "센서 개발·분석 서버 환경", en: "Sensor development and analysis-server environment"}, evidence: {ko: "Linux & Python 센서 개발 및 Linux & MySQL 분석 환경 구축을 명시합니다.", en: "Explicitly names Linux & Python sensor development and Linux & MySQL environment construction."}, source: "PDF p. 5"},
        {tech: "ubuntu", kind: "implemented", role: {ko: "분석 환경 운영체제", en: "Analysis environment operating system"}, evidence: {ko: "Ubuntu 기반 JupyterLab 분석 환경을 구축했습니다.", en: "Built an Ubuntu-based JupyterLab analysis environment."}, source: "PDF p. 5"},
        {tech: "jupyterlab", kind: "implemented", role: {ko: "연구 분석 환경", en: "Research analysis environment"}, evidence: {ko: "Jupyter Lab 분석 환경 구축을 주요 역할로 명시합니다.", en: "The role explicitly includes building a JupyterLab analysis environment."}, source: "PDF p. 5"},
        {tech: "mysql", kind: "implemented", role: {ko: "연구 데이터베이스", en: "Research database"}, evidence: {ko: "Linux & MySQL로 프로젝트 활용 데이터 DB를 구축했습니다.", en: "Built the project database with Linux & MySQL."}, source: "PDF p. 5"},
        {tech: "weather-aws", kind: "context", role: {ko: "기상 관측자료 원천", en: "Weather-observation source"}, evidence: {ko: "기상청 AWS 측정자료 전처리를 명시하며 p. 6에서 AWS를 Automated Weather System으로 풀이합니다.", en: "Explicitly describes preprocessing weather-agency AWS measurements; p. 6 expands AWS as Automated Weather System."}, source: "PDF p. 5–6"}
      ],
      flows: [
        {from: "weather-aws", to: "python", label: {ko: "기상자료 전처리", en: "Weather-data preprocessing"}, kind: "flow", evidence: {ko: "PDF p. 5에 R & Python으로 기상청 AWS 측정자료를 전처리했다고 명시합니다.", en: "Resume p. 5 explicitly describes preprocessing weather-agency AWS measurements with R & Python."}},
        {from: "weather-aws", to: "r", label: {ko: "기상자료 전처리·분석", en: "Weather-data preprocessing and analysis"}, kind: "flow", evidence: {ko: "PDF p. 5에 R & Python 관측자료 전처리와 R 기반 기상요인 분석을 명시합니다.", en: "Resume p. 5 explicitly describes R & Python observation preprocessing and R-based weather-factor analysis."}}
      ]
    },
    {
      id: "p-bio", company: "intern",
      title: {ko: "Bio+ City — 회복력 분석·알고리즘 최적화", en: "Bio+ City — Resilience Analysis & Algorithm Optimization"},
      shortTitle: {ko: "Bio+ City", en: "Bio+ City"},
      period: {ko: "2019.04 — 2019.12", en: "Apr 2019 — Dec 2019"}, start: "2019-04",
      summary: {ko: "단국대학교 산학협력단에서 한국환경산업기술원의 Bio+ City 회복력 향상 연구를 지원했습니다. 미세먼지·기상·토지피복 데이터를 결합해 연구 결과를 검증하고 회복시간 알고리즘과 분석 환경을 개선했습니다.", en: "Supported the Korea Environmental Industry & Technology Institute's Bio+ City resilience research at Dankook University's cooperation foundation. Combined fine-dust, weather, and land-cover data to validate research results and improve recovery-time algorithms and analysis infrastructure."},
      impact: {ko: "회복시간 분석 수행시간 50% 이상 단축 · ICLEE 2019 포스터 공동 발표", en: "Over 50% shorter recovery-time analysis · Co-presented an ICLEE 2019 poster"},
      sections: [
        {heading: {ko: "문제 · 목표", en: "Problem & Goal"}, items: [
          {ko: "위탁 연구 수행사의 결과물을 검증하고 통계를 작성하기 위해 일관된 데이터·분석 환경이 필요했습니다.", en: "Needed consistent datasets and an analysis environment to validate contractor research outputs and produce statistics."},
          {ko: "반복 데이터 갱신을 자동화하고 미세먼지 회복시간 산출 알고리즘의 분석 속도를 개선해야 했습니다.", en: "Needed to automate repetitive data updates and improve the speed of fine-dust recovery-time calculations."}
        ]},
        {heading: {ko: "역할", en: "Role"}, items: [
          {ko: "단국대학교 산학협력단 연구원으로 R·Python을 활용해 수원시 미세먼지·기상청 관측자료를 전처리했습니다.", en: "As a researcher at Dankook University's cooperation foundation, used R and Python to preprocess Suwon fine-dust and weather-agency observations."},
          {ko: "수원시 행정구별 회복력과 기상요인·토지피복의 영향을 분석하고 통계 대시보드를 작성했습니다.", en: "Analyzed resilience by Suwon administrative district and the effects of weather and land cover, and produced statistical dashboards."},
          {ko: "Ubuntu 기반 JupyterLab 서버, MySQL 데이터베이스 서버와 연구 데이터 스키마를 구축·설계했습니다.", en: "Built Ubuntu-based JupyterLab and MySQL servers and designed the research-data schema."}
        ]},
        {heading: {ko: "구현", en: "Implementation"}, items: [
          {ko: "앞선 연구에서 구축한 환경·데이터에 토지피복도 등 다양한 자료를 결합하고 공공데이터 API로 주기적 데이터 갱신을 자동화했습니다.", en: "Combined land-cover maps and other datasets with the prior research environment / data, and automated periodic refreshes through public-data APIs."},
          {ko: "기존 분석 알고리즘을 코드로 구현하고 성능을 비교·최적화하여 유사 연구에서 재사용 가능한 데이터·분석 환경을 제공했습니다.", en: "Implemented existing analytical algorithms in code, benchmarked and optimized them, and provided reusable data / analysis infrastructure for related research."}
        ]},
        {heading: {ko: "성과", en: "Outcome"}, items: [
          {ko: "미세먼지 회복시간 산출 알고리즘의 분석 수행시간을 50% 이상 단축하고 반복 수작업을 줄였습니다.", en: "Reduced analysis runtime for the fine-dust recovery-time algorithm by over 50% and reduced repetitive manual work."},
          {ko: "허영대·강완모 공동 연구 결과 'PM 2.5 DISTRIBUTION TREND IN AN URBAN AREA'를 ICLEE 2019 포스터 세션에서 발표했습니다.", en: "Presented the joint research by Youngdae Heo and Wanmo Kang, 'PM 2.5 DISTRIBUTION TREND IN AN URBAN AREA,' in the ICLEE 2019 poster session."}
        ]}
      ],
      source: {kind: "both", label: {ko: "이력서 p. 6 · 기존 연구 경력", en: "Resume p. 6 · Existing research career"}, pages: [6], note: {ko: "관측자료 전처리·회복력 분석·연구 환경 구축 및 ICLEE 2019 포스터 발표 범위입니다.", en: "Scope covers observation preprocessing, resilience analysis, research infrastructure, and an ICLEE 2019 poster presentation."}},
      stack: [
        {tech: "python", kind: "implemented", role: {ko: "관측자료 전처리·분석", en: "Observation preprocessing and analysis"}, evidence: {ko: "주요 역할에 R & Python 기반 미세먼지·기상자료 전처리와 회복력 분석을 명시합니다.", en: "The role explicitly names R & Python preprocessing of fine-dust / weather data and resilience analysis."}, source: "PDF p. 6"},
        {tech: "r", kind: "implemented", role: {ko: "회복력·기상·토지피복 통계", en: "Resilience, weather, and land-cover statistics"}, evidence: {ko: "R & Python으로 행정구별 회복력과 기상·토지피복 영향을 분석했습니다.", en: "Used R & Python to analyze district-level resilience and weather / land-cover effects."}, source: "PDF p. 6"},
        {tech: "linux", kind: "implemented", role: {ko: "연구 서버 구축", en: "Research-server setup"}, evidence: {ko: "Linux & MySQL 기반 서버와 스키마 구축을 명시합니다.", en: "Explicitly describes Linux & MySQL server and schema setup."}, source: "PDF p. 6"},
        {tech: "ubuntu", kind: "implemented", role: {ko: "분석 서버 운영체제", en: "Analysis-server operating system"}, evidence: {ko: "Ubuntu 기반 JupyterLab 서버를 구축했습니다.", en: "Built an Ubuntu-based JupyterLab server."}, source: "PDF p. 6"},
        {tech: "jupyterlab", kind: "implemented", role: {ko: "재사용 가능한 분석 환경", en: "Reusable analysis environment"}, evidence: {ko: "Jupyter Lab 서버 구축과 유사 업무에서 활용 가능한 분석 환경 제공을 명시합니다.", en: "Explicitly describes JupyterLab server setup and analysis infrastructure reusable for related work."}, source: "PDF p. 6"},
        {tech: "mysql", kind: "implemented", role: {ko: "연구 DB·스키마 설계", en: "Research database and schema design"}, evidence: {ko: "연구자료 저장용 데이터베이스 서버 구축 및 스키마 설계를 명시합니다.", en: "Explicitly describes a database server and schema for research-data storage."}, source: "PDF p. 6"},
        {tech: "public-data-api", kind: "implemented", role: {ko: "주기적 갱신 자동화 연동", en: "Automated periodic-refresh integration"}, evidence: {ko: "공공데이터 API 등을 통해 주기적으로 데이터 갱신을 자동화했습니다.", en: "Automated periodic data updates through public-data APIs."}, source: "PDF p. 6"},
        {tech: "weather-aws", kind: "context", role: {ko: "수원시 기상 관측자료 원천", en: "Suwon weather-observation source"}, evidence: {ko: "수원시 미세먼지와 기상청 AWS 측정자료 전처리를 명시합니다.", en: "Explicitly describes preprocessing Suwon fine-dust and weather-agency AWS measurements."}, source: "PDF p. 6"}
      ],
      flows: [
        {from: "weather-aws", to: "python", label: {ko: "관측자료 전처리", en: "Observation preprocessing"}, kind: "flow", evidence: {ko: "PDF p. 6에 R & Python을 사용한 기상청 AWS 자료 전처리를 명시합니다.", en: "Resume p. 6 explicitly names R & Python preprocessing of weather-agency AWS data."}},
        {from: "weather-aws", to: "r", label: {ko: "기상자료·회복력 분석", en: "Weather-data and resilience analysis"}, kind: "flow", evidence: {ko: "PDF p. 6에 R & Python 기상자료 전처리와 기상요인에 따른 회복력 분석을 명시합니다.", en: "Resume p. 6 explicitly describes R & Python weather preprocessing and analysis of weather-related resilience effects."}}
      ]
    },
    {
      id: "p-green1", company: "intern",
      title: {ko: "그린쉘터 I — 공공 환경데이터 분석 기반", en: "Green Shelter I — Public Environmental Data Analytics"},
      shortTitle: {ko: "그린쉘터 I", en: "Green Shelter I"},
      period: {ko: "2019.03 — 2019.10", en: "Mar 2019 — Oct 2019"}, start: "2019-03",
      summary: {ko: "청주대학교 산학협력단에서 산림청 국립산림과학원 도시숲연구센터의 그린쉘터 최적 입지 연구를 지원했습니다. AirKorea·기상청 자료를 통합하고 Ubuntu·MySQL·Jupyter Notebook 환경과 R 회복시간 분석을 구축했습니다.", en: "Supported optimal Green Shelter location research for the National Institute of Forest Science's Urban Forest Research Center at Cheongju University's cooperation foundation. Integrated AirKorea / weather-agency data and built Ubuntu, MySQL, Jupyter Notebook, and R-based recovery-time analysis infrastructure."},
      impact: {ko: "기존 Excel·SPSS 대비 분석 소요시간 약 20% 단축", en: "Approximately 20% shorter analysis time versus prior Excel / SPSS workflows"},
      sections: [
        {heading: {ko: "문제 · 목표", en: "Problem & Goal"}, items: [
          {ko: "전국 미세먼지와 기상 요소의 상관관계를 분석하여 도시 폭염쉼터의 최적 위치 선정 방법론을 연구했습니다.", en: "Studied relationships between nationwide fine-dust and weather variables to support a methodology for locating urban heat shelters."},
          {ko: "비공학계열 연구진이 분산된 자료와 Excel·SPSS에 의존하던 환경에서 더 큰 데이터를 일관되게 분석할 수 있도록 해야 했습니다.", en: "Researchers outside engineering needed a consistent way to analyze larger datasets instead of relying on scattered files and Excel / SPSS workflows."}
        ]},
        {heading: {ko: "역할", en: "Role"}, items: [
          {ko: "청주대학교 산학협력단 연구원으로 구성원 요구사항을 확인하고 데이터베이스·분석 환경을 설계·구축·교육·운영했습니다.", en: "As a researcher at Cheongju University's cooperation foundation, gathered team requirements and designed, built, taught, and operated database / analysis infrastructure."},
          {ko: "Python으로 AirKorea 미세먼지·기상청 AWS 자료를 수집·전처리하고 R로 측정소·지역별 분석과 회복시간 알고리즘을 개발했습니다.", en: "Used Python to collect and preprocess AirKorea fine-dust and weather-agency AWS data, and R for station / regional analysis and recovery-time algorithm development."}
        ]},
        {heading: {ko: "구현", en: "Implementation"}, items: [
          {ko: "Ubuntu Linux 기반 MySQL 데이터베이스 서버와 스키마를 구축하여 분산된 데이터를 RDB로 일원화했습니다.", en: "Built an Ubuntu Linux-based MySQL server and schema to consolidate scattered datasets into a relational database."},
          {ko: "Jupyter Notebook 분석 환경을 제공·교육하고 기상자료를 결합한 통계와 대시보드를 작성했습니다.", en: "Provided and taught a Jupyter Notebook analysis environment and produced statistics and dashboards combining weather data."}
        ]},
        {heading: {ko: "성과", en: "Outcome"}, items: [
          {ko: "데이터 사일로를 줄이고 더 큰 자료를 처리할 수 있도록 지원했으며 기존 Excel·SPSS 대비 분석 소요시간을 약 20% 단축했습니다.", en: "Reduced data silos, enabled analysis of larger datasets, and shortened analysis time by approximately 20% compared with Excel / SPSS."}
        ]}
      ],
      source: {kind: "both", label: {ko: "이력서 p. 6–7 · 기존 연구 경력", en: "Resume pp. 6–7 · Existing research career"}, pages: [6, 7], note: {ko: "Jupyter Notebook 기반 분석 환경·연구 지원 범위. 분석 소요시간은 기존 Excel·SPSS 대비 약 20% 감소했습니다.", en: "Scope covers Jupyter Notebook-based analysis infrastructure and research support, with approximately 20% less analysis time than prior Excel / SPSS workflows."}},
      stack: [
        {tech: "python", kind: "implemented", role: {ko: "공공 환경자료 수집·전처리", en: "Public environmental-data collection and preprocessing"}, evidence: {ko: "Python으로 AirKorea 미세먼지와 기상청 AWS 기상자료를 수집·전처리했습니다.", en: "Used Python to collect and preprocess AirKorea fine-dust and weather-agency AWS observations."}, source: "PDF p. 6"},
        {tech: "r", kind: "implemented", role: {ko: "회복시간 알고리즘·통계", en: "Recovery-time algorithms and statistics"}, evidence: {ko: "R 기반 미세먼지 분석·회복시간 알고리즘 개발과 기상자료 결합 통계 작성을 명시합니다.", en: "Explicitly describes R-based fine-dust analysis, recovery-time algorithm development, and statistics combining weather data."}, source: "PDF p. 7"},
        {tech: "linux", kind: "implemented", role: {ko: "DB·분석 서버 환경", en: "Database and analysis-server environment"}, evidence: {ko: "Ubuntu Linux 기반 분석 환경과 데이터베이스 서버를 구축했습니다.", en: "Built an Ubuntu Linux-based analysis environment and database server."}, source: "PDF p. 7"},
        {tech: "ubuntu", kind: "implemented", role: {ko: "분석 서버 운영체제", en: "Analysis-server operating system"}, evidence: {ko: "Ubuntu Linux 기반 Jupyter Notebook 환경을 명시합니다.", en: "Explicitly names an Ubuntu Linux-based Jupyter Notebook environment."}, source: "PDF p. 7"},
        {tech: "mysql", kind: "implemented", role: {ko: "통합 RDB·스키마", en: "Consolidated relational database and schema"}, evidence: {ko: "Linux & MySQL 데이터베이스 서버와 스키마 작성, RDB 기반 데이터 일원화를 명시합니다.", en: "Explicitly describes Linux & MySQL server / schema creation and relational-data consolidation."}, source: "PDF p. 7"},
        {tech: "jupyter-notebook", kind: "implemented", role: {ko: "분석 환경 제공·교육·운영", en: "Analysis environment delivery, training, and operation"}, evidence: {ko: "Jupyter Notebook 기반 분석 환경을 교육하고 운영했습니다.", en: "Taught and operated the Jupyter Notebook analysis environment."}, source: "PDF p. 6–7"},
        {tech: "airkorea", kind: "context", role: {ko: "전국 미세먼지 데이터 원천", en: "Nationwide fine-dust data source"}, evidence: {ko: "AirKorea에서 제공되는 전국 미세먼지 자료를 수집·분석했습니다.", en: "Collected and analyzed nationwide fine-dust data provided by AirKorea."}, source: "PDF p. 6"},
        {tech: "weather-aws", kind: "context", role: {ko: "기상청 관측자료 원천", en: "Weather-agency observation source"}, evidence: {ko: "기상청 AWS를 Automated Weather System으로 명시합니다.", en: "Explicitly expands weather-agency AWS as Automated Weather System."}, source: "PDF p. 6"},
        {tech: "spss", kind: "context", role: {ko: "이전 전 분석 도구·비교 기준", en: "Prior analysis tool and performance baseline"}, evidence: {ko: "기존 SPSS 분석환경 대비 새 환경의 시간 단축을 명시하며 SPSS 구현 담당으로 서술하지 않습니다.", en: "The new environment's time savings are compared with prior SPSS workflows; SPSS implementation is not claimed."}, source: "PDF p. 6–7"},
        {tech: "excel", kind: "context", role: {ko: "이전 전 파일 기반 분석", en: "Prior file-based analysis"}, evidence: {ko: "기존 Excel·SPSS 업무보다 약 20% 분석시간을 단축했다고 설명합니다.", en: "Describes approximately 20% shorter analysis time than prior Excel / SPSS work."}, source: "PDF p. 7"}
      ],
      flows: [
        {from: "airkorea", to: "python", label: {ko: "미세먼지 자료 수집·전처리", en: "Fine-dust data collection and preprocessing"}, kind: "flow", evidence: {ko: "PDF p. 6에 Python을 사용한 AirKorea 자료 수집·전처리를 명시합니다.", en: "Resume p. 6 explicitly describes using Python to collect and preprocess AirKorea data."}},
        {from: "weather-aws", to: "python", label: {ko: "기상 관측자료 수집·전처리", en: "Weather-observation collection and preprocessing"}, kind: "flow", evidence: {ko: "PDF p. 6에 Python을 사용한 기상청 AWS 자료 수집·전처리를 명시합니다.", en: "Resume p. 6 explicitly describes using Python to collect and preprocess weather-agency AWS data."}},
        {from: "spss", to: "jupyter-notebook", label: {ko: "분석 환경 전환", en: "Analysis environment transition"}, kind: "migration", evidence: {ko: "PDF p. 6–7은 기존 SPSS 분석환경을 Jupyter Notebook 기반으로 전환해 개선했다고 설명합니다.", en: "Resume pp. 6–7 describe improving the prior SPSS analysis environment through Jupyter Notebook-based work."}},
        {from: "excel", to: "jupyter-notebook", label: {ko: "파일 기반 수동 분석 대체", en: "Replacement of file-based manual analysis"}, kind: "migration", evidence: {ko: "PDF p. 7은 기존 Excel·SPSS 대신 Jupyter Notebook 환경을 제공·교육하여 업무시간을 단축했다고 설명합니다.", en: "Resume p. 7 describes reducing work time by providing and teaching a Jupyter Notebook environment instead of prior Excel / SPSS workflows."}}
      ]
    },
    {
      id: "p-survey", company: "education",
      title: {ko: "SurveyChat — 대화형 설문·응답 분석 캡스톤", en: "SurveyChat — Conversational Survey & Response Analysis Capstone"},
      shortTitle: {ko: "SurveyChat", en: "SurveyChat"},
      period: {ko: "학부 캡스톤 (연도 미기재)", en: "Undergraduate capstone (year not stated)"}, start: null,
      summary: {ko: "카카오톡 챗봇으로 주관식 서술형 설문을 받고 NLP로 응답을 분류·분석·시각화하는 학부 캡스톤입니다. 형태소 분석·비지도 분류, 중복 분석을 방지하는 MongoDB 저장과 Django·Bootstrap 설문 관리 웹을 구현했습니다.", en: "An undergraduate capstone collecting free-text survey responses through a KakaoTalk chatbot and classifying, analyzing, and visualizing them with NLP. Implemented morphological analysis, unsupervised classification, MongoDB storage to avoid repeated analysis, and a Django / Bootstrap survey-management web application."},
      impact: {ko: "주관식 챗봇 설문 → NLP 분류·시각화 → 관리 대시보드", en: "Free-text chatbot surveys → NLP classification / visualization → Management dashboard"},
      sections: [
        {heading: {ko: "문제 · 목표", en: "Problem & Goal"}, items: [
          {ko: "기존 객관식 선택형 챗봇 설문 대신 주관식 서술형 응답을 대화로 수집하고 답변을 분류·분석해 대시보드로 제공하고자 했습니다.", en: "Aimed to replace fixed-choice chatbot surveys with conversational free-text responses, then classify and analyze answers in a dashboard."}
        ]},
        {heading: {ko: "역할", en: "Role"}, items: [
          {ko: "청주대학교 컴퓨터정보공학 학부 캡스톤으로 응답의 형태소 분석·분류·저장과 설문 생성·관리·결과 조회 환경을 구현했습니다.", en: "For the Cheongju University Computer Information Engineering capstone, implemented response morphology / classification / storage and interfaces to create, manage, and review surveys."}
        ]},
        {heading: {ko: "구현", en: "Implementation"}, items: [
          {ko: "KoNLPy·Pandas로 응답을 형태소 분석·분류하고 MongoDB에 저장해 중복 분석을 방지했습니다.", en: "Used KoNLPy and Pandas for response morphological analysis / classification and stored results in MongoDB to prevent repeated analysis."},
          {ko: "분석된 형태소 집합을 scikit-learn·NumPy로 비지도 분류하고 Seaborn으로 시각화했습니다.", en: "Applied unsupervised classification to analyzed morpheme sets with scikit-learn and NumPy and visualized them with Seaborn."},
          {ko: "Django·Bootstrap으로 카카오톡 챗봇(플러스친구) API와 데이터를 주고받는 경량 API 서버와 설문 생성·관리·결과 조회 웹 서버를 구축했습니다.", en: "Built a lightweight API server exchanging data with the KakaoTalk chatbot (Plus Friend) API and a survey-creation / management / results web application with Django and Bootstrap."}
        ]},
        {heading: {ko: "성과", en: "Outcome"}, items: [
          {ko: "카카오톡으로 주관식 응답을 수집하고, NLP로 분류한 결과를 설문 관리 대시보드에서 조회할 수 있도록 구현했습니다.", en: "Implemented free-text survey collection through KakaoTalk and made the NLP classification results available in a survey-management dashboard."}
        ]}
      ],
      source: {kind: "both", label: {ko: "이력서 p. 7 · 기존 학력 설명", en: "Resume p. 7 · Existing education description"}, pages: [7], note: {ko: "학부 캡스톤 프로젝트. 이력서에 프로젝트 연도는 기재되어 있지 않습니다.", en: "Undergraduate capstone project; its year is not stated in the resume."}},
      stack: [
        {tech: "konlpy", kind: "implemented", role: {ko: "응답 형태소 분석", en: "Response morphological analysis"}, evidence: {ko: "KoNLPy & Pandas & MongoDB로 답변 형태소 분석·분류·저장을 명시합니다.", en: "Explicitly names KoNLPy & Pandas & MongoDB for answer morphology, classification, and storage."}, source: "PDF p. 7"},
        {tech: "pandas", kind: "implemented", role: {ko: "응답 분석·분류 처리", en: "Response analysis and classification processing"}, evidence: {ko: "Pandas를 응답 형태소 분석·분류 구성에 명시합니다.", en: "Explicitly names Pandas in response morphology / classification processing."}, source: "PDF p. 7"},
        {tech: "mongodb", kind: "implemented", role: {ko: "분석 결과 NoSQL 저장", en: "NoSQL storage of analysis results"}, evidence: {ko: "MongoDB 저장으로 중복 분석을 방지했다고 명시합니다.", en: "Explicitly describes MongoDB storage to prevent duplicate analysis."}, source: "PDF p. 7"},
        {tech: "scikit-learn", kind: "implemented", role: {ko: "형태소 집합 비지도 분류", en: "Unsupervised classification of morpheme sets"}, evidence: {ko: "scikit-learn & NumPy & Seaborn을 이용한 비지도 분류·시각화를 명시합니다.", en: "Explicitly describes unsupervised classification / visualization with scikit-learn, NumPy, and Seaborn."}, source: "PDF p. 7"},
        {tech: "numpy", kind: "implemented", role: {ko: "비지도 분류 데이터 처리", en: "Data processing for unsupervised classification"}, evidence: {ko: "분석된 형태소 집합의 비지도 분류에 NumPy를 명시합니다.", en: "Explicitly names NumPy in unsupervised classification of analyzed morpheme sets."}, source: "PDF p. 7"},
        {tech: "seaborn", kind: "implemented", role: {ko: "응답 분석 시각화", en: "Response-analysis visualization"}, evidence: {ko: "형태소 집합 분류 결과의 시각화 도구로 Seaborn을 명시합니다.", en: "Explicitly names Seaborn for visualization of morpheme-set classification."}, source: "PDF p. 7"},
        {tech: "django", kind: "implemented", role: {ko: "경량 API·설문 관리 웹 서버", en: "Lightweight API and survey-management web server"}, evidence: {ko: "Django & Bootstrap 기반 API 서버와 설문 생성·관리·결과 조회 웹 서버를 구축했습니다.", en: "Built a Django & Bootstrap API server and a web server for survey creation, management, and results."}, source: "PDF p. 7"},
        {tech: "bootstrap", kind: "implemented", role: {ko: "설문 관리·결과 조회 웹 화면", en: "Survey-management and results web interface"}, evidence: {ko: "Django & Bootstrap으로 설문 웹 서버를 구축했다고 명시합니다.", en: "Explicitly describes building the survey web application with Django & Bootstrap."}, source: "PDF p. 7"},
        {tech: "kakao", kind: "implemented", role: {ko: "챗봇 API 데이터 송수신 연동", en: "Chatbot API data-exchange integration"}, evidence: {ko: "카카오톡 챗봇(플러스친구)으로 응답을 받고 API와 데이터를 주고받는 서버를 구현했습니다.", en: "Received responses through KakaoTalk chatbot (Plus Friend) and implemented a server exchanging data with its API."}, source: "PDF p. 7"}
      ],
      flows: [
        {from: "kakao", to: "django", label: {ko: "챗봇 응답 API 수신", en: "Receive chatbot responses through the API"}, kind: "integration", evidence: {ko: "PDF p. 7에 Django 기반 서버가 카카오톡 챗봇 API와 데이터를 주고받는다고 명시합니다.", en: "Resume p. 7 explicitly says the Django server exchanges data with the KakaoTalk chatbot API."}},
        {from: "django", to: "kakao", label: {ko: "챗봇 API 데이터 송신", en: "Send data to the chatbot API"}, kind: "integration", evidence: {ko: "PDF p. 7의 '데이터를 주고 받는' API 서버 설명에 근거합니다.", en: "Grounded in resume p. 7's explicit description of the API server sending and receiving data."}},
        {from: "konlpy", to: "mongodb", label: {ko: "형태소 분석·분류 결과 저장", en: "Store morphology / classification results"}, kind: "flow", evidence: {ko: "PDF p. 7에 KoNLPy·Pandas로 분석·분류한 응답을 MongoDB에 저장하여 중복 분석을 방지한다고 명시합니다.", en: "Resume p. 7 explicitly describes storing responses analyzed / classified with KoNLPy and Pandas in MongoDB to prevent duplicate analysis."}},
        {from: "konlpy", to: "scikit-learn", label: {ko: "분석된 형태소 집합 분류", en: "Classify analyzed morpheme sets"}, kind: "flow", evidence: {ko: "PDF p. 7은 형태소 분석 후 분석된 형태소 집합을 scikit-learn 등으로 비지도 분류한다고 설명합니다.", en: "Resume p. 7 describes morphological analysis followed by unsupervised classification of the analyzed morpheme sets using scikit-learn and related tools."}},
        {from: "scikit-learn", to: "seaborn", label: {ko: "비지도 분류 결과 시각화", en: "Visualize unsupervised classification"}, kind: "flow", evidence: {ko: "PDF p. 7은 scikit-learn·NumPy·Seaborn으로 형태소 집합을 비지도 분류하고 시각화한다고 설명합니다.", en: "Resume p. 7 describes unsupervised classification and visualization of morpheme sets with scikit-learn, NumPy, and Seaborn."}}
      ]
    }
  ]
};
