# 블로그 글 작성 가이드

이 폴더에 Markdown 파일을 올리면 `scripts/build-blog.mjs`가 `blog/<slug>/index.html`로 렌더링하고, 목록(`blog/data/posts.js`)과 RSS(`blog/feed.xml`)에 자동으로 포함합니다. `main`에 push하면 GitHub Actions(`.github/workflows/blog-sync.yml`)가 빌드와 커밋까지 처리하므로 로컬에서 빌드할 필요는 없습니다.

## 파일 이름

```
YYYY-MM-DD-slug.md     예) 2026-10-08-redshift-datashare-notes.md
```

- 날짜 접두사는 `date`를 생략했을 때 발행일로 쓰입니다.
- 접두사를 뺀 나머지가 URL slug가 됩니다. 한글도 가능하지만 공유하기 쉬운 영문 slug를 권장합니다.
- `_`로 시작하는 파일과 `README.md`는 무시됩니다.

## Front matter

```markdown
---
title: Redshift Datashare 운영 메모
date: 2026-10-08
tags: [Redshift, AWS, 운영]
description: 목록과 OG 태그에 쓰이는 한두 문장 요약 (생략하면 본문 앞부분을 사용)
thumbnail: https://example.com/cover.png   # 선택
series: Redshift 운영                      # 선택
slug: redshift-datashare-notes             # 선택, 파일명 대신 사용
lang: ko                                   # ko(기본) | en
draft: false                               # true면 빌드에서 제외
updated: 2026-10-09                        # 선택
---

본문은 GitHub Flavored Markdown으로 작성합니다.
```

- `title`을 생략하면 본문의 첫 `# 제목`을 사용하고, 그 줄은 본문에서 제거합니다.
- 코드 블록은 ```` ```python ```` 처럼 언어를 적으면 highlight.js로 하이라이트됩니다.
- 이미지는 외부 URL 또는 저장소 안의 경로(`/assets/...`)를 모두 사용할 수 있습니다.
- `<script>`, 인라인 이벤트 핸들러는 빌드 시 제거되고 YouTube 외의 `<iframe>`도 제거됩니다.

## 로컬 미리보기

```bash
npm ci
npm run blog:build          # velog 동기화 + 전체 빌드
npm run blog:build:offline  # 네트워크 없이 캐시(blog/data/velog.json)로 빌드
python3 -m http.server 8080 # http://localhost:8080/blog/
```
