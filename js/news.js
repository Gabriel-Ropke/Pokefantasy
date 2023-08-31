import { allDrops, allDungeon, allPokemon } from "./database/database.js";
import { allNotices } from "./database/notices.js";
const URLInfo = new URLSearchParams(window.location.search);
const selectedNotice = allNotices.find((e) => e.id == URLInfo.get("id"));

const sectionNews = document.getElementById("news");

let divImgCont = document.createElement("div");
let imgNotice = document.createElement("img");
let h2Title = document.createElement("h2");
let pText = document.createElement("p");
sectionNews.appendChild(divImgCont);
divImgCont.appendChild(imgNotice);
divImgCont.appendChild(h2Title);
sectionNews.appendChild(pText);
divImgCont.id = "imageContainer";
pText.classList.add("text");
imgNotice.src = selectedNotice.source;
h2Title.innerText = selectedNotice.title;
pText.innerHTML = selectedNotice.text;

const allNoticeTypes = document.querySelectorAll("p.text span.noticeType");
if (allNoticeTypes) {
  allNoticeTypes.forEach((e) => {
    console.log(e.innerText);
    e.style.background = `rgb(var(--${e.innerText.toLowerCase()}))`;
  });
}
const allNoticePokemon = document.querySelectorAll("p.text a.noticePokemon");
if (allNoticePokemon) {
  console.log(allPokemon);
  allNoticePokemon.forEach((e) => {
    const thisPokemon = allPokemon.find(
      (sear) => sear.name.toLowerCase() == e.innerText.toLowerCase()
    );
    console.log(thisPokemon);
    e.style.color = `rgb(var(--${thisPokemon.types[0].toLowerCase()}))`;
    e.href = `pokemon.html?id=${thisPokemon.numberDex}`;
    e.innerText = e.innerText + "*";
  });
}
const allNoticeDungeon = document.querySelectorAll("p.text a.noticeDungeon");
console.log(allNoticeDungeon);
if (allNoticeDungeon) {
  allNoticeDungeon.forEach((e) => {
    console.log(e.innerText);
    console.log(allDungeon);
    const thisDungeon = allDungeon.find(
      (sear) => sear.name.toLowerCase() == e.innerText.toLowerCase()
    );
    console.log(thisDungeon);
    e.style.color = `rgb(var(--${thisDungeon.types[0]}))`;
    e.href = `dungeons.html?name=${thisDungeon.name}`;
    e.innerText = e.innerText + "*";
  });
}
const allNoticeDrop = document.querySelectorAll("p.text a.noticeDrop");
if (allNoticeDrop) {
  console.log(allNoticeDrop);
  allNoticeDrop.forEach((e) => {
    console.log(e.innerText);
    const thisDrop = allDrops.find(
      (sear) => sear.name.toLowerCase() == e.innerText.toLowerCase()
    );
    console.log(thisDrop);
    e.style.color = `rgb(var(--${thisDrop.Rarity.toLowerCase()}))`;
    e.href = `drop.html?drop=${thisDrop.name}`;
    e.innerText = e.innerText + "*";
  });
}
