/* Tema persistente y datos opcionales de YouTube Data API v3.
   Introduce una clave API restringida en YOUTUBE_API_KEY para estadísticas y miniaturas. */
(function(){
'use strict';
var root=document.documentElement,toggle=document.getElementById('theme-toggle');
var icon=toggle&&toggle.querySelector('.theme-icon'),label=toggle&&toggle.querySelector('.theme-label');
var qrToggle=document.getElementById('qr-toggle'),qrFooter=document.getElementById('qr-footer');
function setQrVisible(show){
 if(!qrToggle||!qrFooter)return;
 qrFooter.hidden=!show;
 qrToggle.setAttribute('aria-expanded',String(show));
 qrToggle.setAttribute('aria-label',show?'Ocultar código QR':'Mostrar código QR');
 qrToggle.setAttribute('title',show?'Ocultar código QR':'Mostrar código QR');
 qrToggle.innerHTML='<span class="fa '+(show?'fa-times':'fa-qrcode')+'" aria-hidden="true"></span>';
 if(show)qrFooter.scrollIntoView({behavior:'smooth',block:'end'});
}
if(qrToggle&&qrFooter){qrToggle.addEventListener('click',function(){setQrVisible(qrFooter.hidden)});}
var qrClose=document.getElementById('qr-close');if(qrClose)qrClose.addEventListener('click',function(){setQrVisible(false);qrToggle&&qrToggle.focus();});
var searchToggle=document.getElementById('sidebar'),searchLinks=document.getElementById('search-links');
if(searchToggle&&searchLinks){searchToggle.addEventListener('click',function(){
 var show=searchLinks.hidden;searchLinks.hidden=!show;
 searchToggle.setAttribute('aria-expanded',String(show));
 searchToggle.setAttribute('aria-label',show?'Ocultar enlaces':'Mostrar enlaces');
 searchToggle.setAttribute('title',show?'Ocultar enlaces':'Mostrar enlaces');
 searchToggle.innerHTML='<span class="fa '+(show?'fa-times':'fa-search')+'" aria-hidden="true"></span>';
 if(show){searchLinks.classList.remove('is-opening');void searchLinks.offsetWidth;searchLinks.classList.add('is-opening');}
});}

if(searchLinks){
 searchLinks.addEventListener('click',function(event){
  var link=event.target.closest('a');
  if(!link)return;
  if(link.textContent.trim()==='Cerrar'){
   event.preventDefault();
   searchLinks.hidden=true;
   if(searchToggle){searchToggle.setAttribute('aria-expanded','false');searchToggle.innerHTML='<span class="fa fa-search" aria-hidden="true"></span>';}
   return;
  }
  searchLinks.hidden=true;
  if(searchToggle){searchToggle.setAttribute('aria-expanded','false');searchToggle.innerHTML='<span class="fa fa-search" aria-hidden="true"></span>';}
 });
}
function applyTheme(theme){
 var dark=theme==='dark';root.setAttribute('data-theme',dark?'dark':'light');
 if(toggle){toggle.setAttribute('aria-pressed',String(dark));toggle.setAttribute('aria-label',dark?'Cambiar a modo claro':'Cambiar a modo oscuro');}
 if(icon)icon.textContent=dark?'☀️':'🌙';if(label)label.textContent=dark?'Modo claro':'Modo oscuro';
}
var saved=null;try{saved=localStorage.getItem('cliconline-theme')}catch(e){}
applyTheme(saved||(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
if(toggle)toggle.addEventListener('click',function(){var next=root.getAttribute('data-theme')==='dark'?'light':'dark';applyTheme(next);try{localStorage.setItem('cliconline-theme',next)}catch(e){}});
var API_KEY='PEGA_AQUI_TU_API_KEY',CHANNEL_ID='UC5nley-NIFYYC9wFaRLxhCg';
var subs=document.getElementById('youtube-subscribers'),count=document.getElementById('youtube-videos-count');
var status=document.getElementById('youtube-status'),videos=document.getElementById('youtube-videos');
function compact(v){return new Intl.NumberFormat('es-EC',{notation:'compact',maximumFractionDigits:1}).format(Number(v||0))}
function esc(v){return String(v||'').replace(/[&<>"']/g,function(c){return({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]})}
async function loadChannel(){
 if(!API_KEY||API_KEY==='PEGA_AQUI_TU_API_KEY')return;
 try{
  var base='https://www.googleapis.com/youtube/v3/';
  var r=await fetch(base+'channels?part=statistics,contentDetails&id='+CHANNEL_ID+'&key='+encodeURIComponent(API_KEY));
  if(!r.ok)throw Error('Error consultando estadísticas');var d=await r.json(),ch=d.items&&d.items[0];
  if(!ch)throw Error('No se encontró el canal. Revisa CHANNEL_ID.');
  subs.textContent=ch.statistics.hiddenSubscriberCount?'Oculto':compact(ch.statistics.subscriberCount);
  count.textContent=compact(ch.statistics.videoCount);
  status.textContent='Estadísticas del canal. YouTube puede aplicar retrasos o redondeos al número de suscriptores.';
  var p=await fetch(base+'playlistItems?part=snippet,contentDetails&maxResults=6&playlistId='+encodeURIComponent(ch.contentDetails.relatedPlaylists.uploads)+'&key='+encodeURIComponent(API_KEY));
  if(!p.ok)throw Error('Error cargando videos');var pd=await p.json();
  var items=(pd.items||[]).filter(function(x){return x.contentDetails&&x.contentDetails.videoId});
  if(items.length)videos.innerHTML='<div class="youtube-video-grid">'+items.map(function(x){
   var id=x.contentDetails.videoId,title=esc(x.snippet&&x.snippet.title||'Video de Cliconline Studios');
   var t=x.snippet&&x.snippet.thumbnails,img=t&&((t.medium&&t.medium.url)||(t.default&&t.default.url));
   return '<a class="youtube-video-card" href="https://www.youtube.com/watch?v='+encodeURIComponent(id)+'" target="_blank" rel="noopener noreferrer"><img loading="lazy" src="'+esc(img||('https://i.ytimg.com/vi/'+encodeURIComponent(id)+'/mqdefault.jpg'))+'" alt=""><span>'+title+'</span></a>';
  }).join('')+'</div>';
 }catch(e){status.textContent='No se pudieron actualizar las estadísticas. Visita el canal directamente en YouTube.';console.warn('[Cliconline YouTube]',e)}
}
loadChannel();if(API_KEY&&API_KEY!=='PEGA_AQUI_TU_API_KEY')window.setInterval(loadChannel,30*60*1000);
})();
