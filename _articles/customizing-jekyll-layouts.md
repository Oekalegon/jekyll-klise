---
layout: article
title: "Customizing Jekyll Layouts"
date: 2024-01-22 10:00:00 +0000
article_collection: "Jekyll Tutorial Series"
series_order: 2
published: true
tags: [jekyll, layouts, customization]
description: "Learn how to customize Jekyll layouts and templates"
---

# Customizing Jekyll Layouts

This is the second article in our Jekyll Tutorial Series, demonstrating how articles can be grouped into collections.

## Understanding Layouts

Jekyll uses layouts to wrap your content. Layouts are stored in the `_layouts` directory and can be referenced in your front matter.

## Creating a Custom Layout

To create a custom layout:

1. Create a new file in `_layouts/` directory
2. Use Liquid templating to define the structure
3. Reference it in your page or post front matter

## Example Layout Structure

```html
<!DOCTYPE html>
<html>
<head>
  <title>{{ page.title }}</title>
</head>
<body>
  {{ content }}
</body>
</html>
```

## Using Layouts

In your front matter, simply specify:

```yaml
---
layout: article
title: "My Article"
---
```

This article demonstrates how articles in the same collection are grouped together on the articles page.

