---
layout: default
title: ""
script: filter.js
---

# 蔵書カード

ここは雲の上に浮かぶ図書館。気になったリンクを、カテゴリとひとことメモ付きでしまってあります。
探したい言葉を入れるか、カテゴリのボタンを押してください。

<div class="controls">
  <input id="q" type="search" placeholder="🔍 タイトル・メモ・タグで検索" autocomplete="off">
  <div class="chips" id="chips"></div>
</div>

<p class="count"><span id="count">…</span> 件</p>

<div class="cards" id="cards"></div>

<p id="empty" class="empty" hidden>見つかりませんでした 📭</p>
<p id="loading" class="empty">蔵書を読み込み中… ☁️</p>
