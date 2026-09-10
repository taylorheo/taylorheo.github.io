# Youngdae Heo · Data Engineering Portfolio

한영 이력서와 프로젝트 상세, 기술 활용 관계를 보여주는 GitHub Pages 정적 사이트입니다. 별도 빌드나 API 키, 데이터베이스 없이 실행됩니다.

## 구조

- `index.html`: 소개, 회사별 경력, 학력, 연락처와 페이지 골격.
- `portfolio-data.js`: 프로젝트, 기술, 소속과 연결 근거를 보관하는 단일 데이터 원본.
- `app.js`: 프로젝트 검색, 필터, 카드, 관계도, 상세 모달.
- `i18n.js`: 정적 문구의 한국어/영어 번역. 동적 프로젝트 콘텐츠는 데이터 파일의 번역을 사용합니다.
- `style.css`, `base.css`, `explorer.css`: 페이지 디자인과 프로젝트 탐색기 스타일.
- `tests/`: 데이터 무결성과 핵심 정적 구조 검사.

## 프로젝트 추가

`portfolio-data.js`의 `projects`에 다음 필드를 추가합니다. 신규 기술은 `technologies`에 먼저 등록하고, 이미 등록된 기술은 같은 ID를 재사용합니다.

```js
{
  id: "project-id",
  company: "company-id",
  title: { ko: "프로젝트 제목", en: "Project title" },
  shortTitle: { ko: "짧은 제목", en: "Short title" },
  period: { ko: "2026.01 ~ 2026.04", en: "Jan–Apr 2026" },
  start: "2026-01",
  summary: { ko: "배경과 목표", en: "Context and objective" },
  impact: { ko: "범위가 명시된 성과", en: "Outcome with a clear scope" },
  sections: [
    { heading: { ko: "구현", en: "Implementation" },
      items: [{ ko: "구현 내용", en: "Implementation detail" }] }
  ],
  source: {
    kind: "existing",
    label: { ko: "작성 근거", en: "Evidence record" },
    pages: [],
    note: { ko: "정보의 범위", en: "Scope of the information" }
  },
  stack: [
    {
      tech: "airflow",
      kind: "implemented",
      role: { ko: "이 프로젝트에서의 역할", en: "Role in this project" },
      evidence: { ko: "연결을 뒷받침하는 설명", en: "Supporting evidence" },
      source: "Project implementation notes"
    }
  ],
  flows: []
}
```

날짜가 확인되지 않으면 `start: null`과 날짜 미기재 문구를 사용합니다. 현재 재직 정보는 오래된 이력서로 덮어쓰지 않습니다.

## 연결 의미

- `implemented`: 직접 구현하거나 운영한 내용.
- `context`: 기존 시스템, 외부 데이터 원천, 연동 대상 등 프로젝트 맥락. 직접 구축했다는 의미가 아닙니다.
- `poc`: 도입 검증 단계. 프로덕션 도입과 구분합니다.
- `planned`: 후속 계획. 완료 성과로 세지 않습니다.

프로젝트 및 기술 관계도의 선은 기술 활용 관계입니다. 기술 간 공동 출현 막대는 동일 프로젝트에 기록된 횟수이며 숙련도, 인과관계, 데이터 이동량을 나타내지 않습니다.

실제 흐름은 `flows`에 별도로 기록합니다. 원문에 명시된 연결만 추가하고 `from`과 `to`의 기술이 해당 프로젝트의 `stack`에도 존재하는지 확인합니다. 관계 유형은 `flow`, `migration`, `integration` 중 하나입니다.

## 검사와 배포

```sh
npm run check
npm test
```

Node.js 22 기준이며 외부 패키지 설치는 필요하지 않습니다. Pull Request와 `main` push 시 동일한 정적·데이터 검사를 GitHub Actions에서 실행하도록 구성했습니다.

GitHub Pages는 저장소의 `main` 브랜치 루트를 사용합니다. 브라우저 검증 시 HTTP 정적 서버에서 열고, 한영 전환, 테마, 검색 및 빈 결과, 기술 관계도, 모바일 메뉴, 모달의 Escape/Tab 동작을 점검합니다.

## 콘텐츠와 개인정보

프로젝트 근거는 첨부 이력서와 기존 공개 사이트의 상세 설명입니다. 이력서 원본 PDF, 주소, 전화번호, 인증 정보는 이 저장소에 포함하지 않습니다. 신규 내부 운영 자료를 추가하기 전 공개 가능 범위를 확인해야 합니다.
