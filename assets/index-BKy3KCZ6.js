(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
<div class="p-12 text-center">
  <h1 class="text-xl">カウンター</h1>
  <p id="count" class="mx-8">0</p>
  <button id="pbtn" class="border border-black rounded">＋</button>
  <button id="mbtn" class="border border-black rounded">－</button>
  <button id="reset" class="border border-black rounded">リセット</button>
  </div>
`;var e=document.querySelector(`#count`),t=document.querySelector(`#pbtn`),n=document.querySelector(`#mbtn`),r=document.querySelector(`#reset`),i=0;t.addEventListener(`click`,()=>{i+=1,i<0&&e.classList.add(`text-red-500`),i>=0&&e.classList.remove(`text-red-500`),e.textContent=i}),n.addEventListener(`click`,()=>{--i,i<0&&e.classList.add(`text-red-500`),e.textContent=i}),r.addEventListener(`click`,()=>{i=0,i<0&&e.classList.add(`text-red-500`),i>=0&&e.classList.remove(`text-red-500`),e.textContent=i});