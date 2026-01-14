---
layout: page
title: Articles
title_no_dot: true
permalink: /articles/
---

{%- comment -%}
  Articles index:
  - Uses only the `articles` collection (not blog posts)
  - Groups by `article_collection` (preferred) or `series` as a fallback
  - Shows an "Uncollected" section for articles without either
{%- endcomment -%}

{%- assign all_articles = site.articles | default: empty -%}

{%- assign all_articles = all_articles | where_exp: "a", "a.published != false" -%}

{%- assign collection_names = "" | split: "" -%}
{%- for a in all_articles -%}
  {%- assign c = a.article_collection | default: a.series -%}
  {%- if c and c != "" -%}
    {%- assign collection_names = collection_names | push: c -%}
  {%- endif -%}
{%- endfor -%}
{%- assign collection_names = collection_names | uniq | sort -%}

{%- if all_articles.size == 0 -%}
<p>No articles found in the <code>articles</code> collection yet.</p>
{%- endif -%}

{%- if collection_names.size > 0 -%}
  {%- for c in collection_names -%}
<h2>{{ c }}</h2>

{%- assign in_collection = all_articles | where_exp: "a", "a.article_collection == c or a.series == c" -%}
{%- assign in_collection = in_collection | sort: "series_order" -%}

<ul>
  {%- for a in in_collection -%}
  <li><a href="{{ a.url | relative_url }}">{{ a.title | escape }}</a></li>
  {%- endfor -%}
</ul>

  {%- endfor -%}
{%- endif -%}

{%- assign uncollected = all_articles | where_exp: "a", "a.article_collection == nil and a.series == nil" -%}
{%- if uncollected.size > 0 -%}
<h2>Uncollected</h2>
<ul>
  {%- for a in uncollected -%}
  <li><a href="{{ a.url | relative_url }}">{{ a.title | escape }}</a></li>
  {%- endfor -%}
</ul>
{%- endif -%}


