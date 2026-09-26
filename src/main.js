import './style.css';

document.querySelector('#app').innerHTML = `
<div class="p-12 text-center">
  <h1 class="text-xl">カウンター</h1>
  <p id="count" class="mx-8">0</p>
  <button id="pbtn" class="border border-black rounded">＋</button>
  <button id="mbtn" class="border border-black rounded">－</button>
  <button id="reset" class="border border-black rounded">リセット</button>
  </div>
`;

const countEl = document.querySelector('#count');
const pbtn = document.querySelector('#pbtn');
const mbtn = document.querySelector('#mbtn');
const reset = document.querySelector('#reset');
let count = 0;

pbtn.addEventListener('click', () => {
  count += 1;
  if(count<0){
  countEl.classList.add("text-red-500");
}
if(count>=0){
  countEl.classList.remove("text-red-500");
}
  countEl.textContent = count;
});

mbtn.addEventListener('click', () => {
  count -= 1;
  if(count<0){
  countEl.classList.add("text-red-500");
}
  countEl.textContent = count;
});

reset.addEventListener('click', () => {
  count = 0;
  if(count<0){
  countEl.classList.add("text-red-500");
}
if(count>=0){
  countEl.classList.remove("text-red-500");
}
  countEl.textContent = count;
});

