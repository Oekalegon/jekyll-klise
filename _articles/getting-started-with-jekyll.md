---
layout: article
title: "Getting Started with Jekyll"
date: 2024-01-15 10:00:00 +0000
article_collection: "Jekyll Tutorial Series"
series_order: 1
published: true
tags: [jekyll, tutorial, web development]
description: "Learn the basics of Jekyll static site generation"
---

# Getting Started with Jekyll

This is a test article to demonstrate the articles collection feature. Jekyll is a simple, blog-aware, static site generator perfect for personal, project, or organization sites.

## What is Jekyll?

Jekyll takes your content, renders Markdown and Liquid templates, and spits out a complete, static website ready to be served by Apache, Nginx or another web server.

## Key Features

- **Simple**: No more databases, comment moderation, or pesky updates—just your content.
- **Static**: Markdown (or Textile), Liquid, HTML & CSS go in. Static sites come out ready for deployment.
- **Blog-aware**: Permalinks, categories, pages, posts, and custom layouts are all first-class citizens here.

## Getting Started

To get started with Jekyll, you'll need to install Ruby and then install Jekyll:

```bash
gem install jekyll bundler
jekyll new my-site
cd my-site
bundle exec jekyll serve
```

This will start a local server at `http://localhost:4000` where you can preview your site.

## Next Steps

In the next article, we'll explore Jekyll's templating system and how to customize your site's layout.

