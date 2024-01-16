import{S as L,a as b,i as m}from"./assets/vendor-c145bea9.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const S=document.querySelector(".form"),d=document.querySelector(".gallery"),p=document.querySelector(".text-input"),f=new L(".gallery a",{captionsData:"alt",captionDelay:250}),i=document.querySelector(".loader");i.style.display="none";const n=document.querySelector(".load-more");n.style.display="none";let l=1,y="";S.addEventListener("submit",async e=>{e.preventDefault(),y=p.value,d.innerHTML="",p.value="",i.style.display="block",n.style.display="none";try{const r=await g(y,l);if(r.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}const s=r.hits.reduce((t,o)=>t+h(o),"");d.innerHTML=s,f.refresh(),v(r.totalHits)}catch(r){c(r.toString())}});n.addEventListener("click",async()=>{l++,i.style.display="block",n.style.display="none";try{const e=await g(y,l);if(i.style.display="none",e.hits.length===0){c("Sorry, there are no more images for your search query.");return}const a=e.hits.reduce((r,s)=>r+h(s),"");d.innerHTML+=a,f.refresh(),v(e.totalHits),w()}catch(e){c(e.toString())}});async function g(e,a){const r=new URLSearchParams({key:"41830975-45ae189b655436176d8ec81bc",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:40}),s=await b.get(`https://pixabay.com/api/?${r}`);if(i.style.display="none",s.status!==200)throw new Error(s.status);return s.data}function h(e){return`<li>
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}">
      </a>
      <div class="info">
        <div class="image-info">
          <span>Likes</span>
          <span class="image-value">${e.likes}</span>
        </div>
        <div class="image-info">
          <span>Views</span>
          <span class="image-value">${e.views}</span>
        </div>
        <div class="image-info">
          <span>Comments</span>
          <span class="image-value">${e.comments}</span>
        </div>
        <div class="image-info">
          <span>Downloads</span>
          <span class="image-value">${e.downloads}</span>
        </div>
      </div>
    </li>`}function c(e){m.error({message:e,messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"})}function v(e){e>l*40?n.style.display="block":(n.style.display="none",m.info({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FAFAFB",backgroundColor:"#008CBA",position:"topRight"}))}function w(){const e=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
