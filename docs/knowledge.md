---
layout: default
title: "ナレッジ"
permalink: /knowledge/
script: knowledge.js
---

# ナレッジ

自分の言葉でまとめた知識の置き場です。リンク集（蔵書カード）が「どこにあるか」なら、こちらは「中身そのもの」。
調べたこと、検証したこと、自分のルールを、記事の形で貯めていきます。

<div class="controls">
  <input id="q" type="search" placeholder="🔍 タイトル・要約・タグで検索" autocomplete="off">
  <div class="chips" id="chips"></div>
</div>

<p class="count"><span id="count">…</span> 件</p>

<div class="cards" id="cards"></div>

<p id="empty" class="empty" hidden>見つかりませんでした 📭</p>
<p id="loading" class="empty">ナレッジを読み込み中… ☁️</p>
