import{i as n,S as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",m="43953173-48a4f3f757f38a8504babc00c",f=(o="happy")=>{const s=new URLSearchParams({key:m,q:o,per_page:21,image_type:"photo",safesearch:!0,orientation:"horizontal"});return fetch(`${u}?${s}`).then(t=>{if(!t.ok)throw new Error(`Error ${t.status}: ${t.statusText}`);return t.json()})},y=o=>o.map(({largeImageURL:s,webformatURL:t,tags:i,likes:e,views:r,comments:a,downloads:g})=>`
        <div class="col">
          <div class="card shadow-sm">
            <a href="${s}" class="gallery-link">
              <img src="${t}" alt="${i}" class="gallery-img img-fluid" />
            </a>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                
                <small class="text-body-secondary">Likes ${e}</small>
                <small class="text-body-secondary">Views ${r}</small>
                <small class="text-body-secondary">Comments ${a}</small>
              </div>
            </div>
          </div>
        </div>`).join(""),c=document.querySelector(".js-gallery"),h=document.querySelector(".js-search-form"),l=document.querySelector(".js-loader");function p(o){o.preventDefault();const s=o.target.elements.searchKeyword.value.trim();if(s===""){c.innerHTML="",o.target.reset(),n.show({message:"Input field cannot be empty",position:"center",timeout:2e3,color:"red"});return}c.innerHTML="",l.classList.remove("is-hidden"),f(s).then(t=>{t.hits.length===0&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",timeout:2e3,color:"red"}),c.innerHTML=y(t.hits),new d(".card a")}).catch(t=>console.log(t)).finally(()=>{o.target.reset(),l.classList.add("is-hidden")})}h.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
