(function(){
  var q=document.getElementById('q');
  var chipsBox=document.getElementById('chips');
  var cardsBox=document.getElementById('cards');
  var count=document.getElementById('count');
  var empty=document.getElementById('empty');
  var loading=document.getElementById('loading');
  var links=[];
  var cat='すべて';

  function esc(s){
    return String(s==null?'':s).replace(/[&<>"']/g,function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }

  function renderChips(){
    var seen={};
    links.forEach(function(l){ if(l.category) seen[l.category]=true; });
    var cats=['すべて'].concat(Object.keys(seen).sort());
    chipsBox.innerHTML='';
    cats.forEach(function(c){
      var b=document.createElement('button');
      b.className='chip'+(c===cat?' is-active':'');
      b.textContent=c;
      b.addEventListener('click',function(){ cat=c; renderChips(); apply(); });
      chipsBox.appendChild(b);
    });
  }

  function renderCards(list){
    cardsBox.innerHTML=list.map(function(l){
      var tags=(l.tags||[]).map(function(t){ return '<span class="tag">#'+esc(t)+'</span>'; }).join(' ');
      return '<article class="card">'
        +'<div class="card-head"><span class="badge">'+esc(l.category)+'</span><time>'+esc(l.date)+'</time></div>'
        +'<h2 class="card-title"><a href="'+esc(l.url)+'" target="_blank" rel="noopener">'+esc(l.title)+'</a></h2>'
        +'<p class="card-note">'+esc(l.note)+'</p>'
        +'<p class="card-tags">'+tags+'</p>'
        +'</article>';
    }).join('');
  }

  function apply(){
    var word=(q.value||'').toLowerCase();
    var list=links.filter(function(l){
      var okCat=(cat==='すべて'||l.category===cat);
      var text=(l.title+' '+(l.note||'')+' '+(l.tags||[]).join(' ')).toLowerCase();
      return okCat && (!word || text.indexOf(word)>=0);
    });
    renderCards(list);
    count.textContent=list.length;
    empty.hidden=list.length!==0;
  }

  q.addEventListener('input',apply);

  fetch('data/links.json')
    .then(function(r){ return r.json(); })
    .then(function(data){
      links=data.slice().sort(function(a,b){ return a.date<b.date?1:(a.date>b.date?-1:0); });
      loading.hidden=true;
      renderChips();
      apply();
    })
    .catch(function(){
      loading.textContent='蔵書の読み込みに失敗しました 🌧️';
    });
})();
