---
title: 블로그를 포트폴리오 사이트에 합쳤습니다
date: 2026-10-08
tags: [블로그, GitHub Pages, 자동화]
description: velog 글을 자동으로 동기화하고, 이 저장소에 Markdown을 올리면 바로 글이 되는 구조를 정리했습니다.
---

이력서·포트폴리오 사이트에 블로그를 붙였습니다. 별도 서버나 빌드 프레임워크 없이, 기존 사이트와 같은 정적 파일 구조를 유지하면서 두 가지 글 소스를 한 목록으로 모읍니다.

## 어떻게 동작하나

1. **velog 동기화** — `scripts/build-blog.mjs`가 velog GraphQL API에서 [@graphy-young](https://velog.io/@graphy-young/) 글 목록과 Markdown 본문을 가져와 `blog/data/velog.json`에 캐시합니다. API가 실패하면 RSS, 그마저 실패하면 기존 캐시를 사용합니다.
2. **사이트 전용 글** — `blog/_posts/*.md`에 Front matter를 붙여 올리면 같은 파이프라인으로 렌더링됩니다.
3. **생성물** — 글마다 `blog/<slug>/index.html`을 만들고, 목록 데이터(`posts.js`), RSS(`feed.xml`), 사이트맵을 함께 갱신합니다.
4. **GitHub Actions** — 매일 한 번, 그리고 `blog/_posts/`가 바뀔 때마다 빌드해서 변경분만 커밋합니다.

## 글을 올리는 방법

```bash
cat > blog/_posts/2026-10-20-redshift-datashare.md <<'MD'
---
title: Redshift Datashare 운영 메모
date: 2026-10-20
tags: [Redshift, AWS]
---

본문...
MD
git add blog/_posts && git commit -m "post: Redshift Datashare 운영 메모" && git push
```

push 후 1~2분이면 `https://taylorheo.github.io/blog/redshift-datashare/`에서 볼 수 있습니다.

> velog 원문은 그대로 velog에 남고, 이 사이트의 사본에는 `canonical` 링크가 velog를 가리키므로 검색엔진 중복 페널티를 피할 수 있습니다.

| 소스 | 출처 표시 | 원문 링크 |
| --- | --- | --- |
| velog | `velog` 배지 | 글 하단에 표시 |
| 이 사이트 | `이 사이트` 배지 | 자기 자신 |
