# bart.verhaeghzn.nl

Bart’s Experiments, the personal site of Bart Verhaegh. Static, built with [Astro](https://astro.build).

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` writes the site to `dist/`. Point the host for `bart.verhaeghzn.nl` at that folder.

## Add a note

Create `src/content/blog/your-title.md`:

```md
---
title: A precise title
description: One sentence for the index and for link previews.
date: 2026-10-15
topics: [llm]
draft: false
---

The note itself, in Markdown.
```

`topics` is any of `llm`, `coding`, and `publications`. Set `draft: true` to keep a note out of the site, the RSS feed, and the sitemap until it is ready.
