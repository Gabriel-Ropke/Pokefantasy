import { allMoves, allPokemon } from "./database/database.js";

const URLInfo = new URLSearchParams(window.location.search);
const selectedMove = allMoves.find((e) => e.name == URLInfo.get("move"));
console.log(selectedMove);
document.body.style.setProperty(
  "--principal-color",
  `var(--${selectedMove.type})`
);
const moveTitle = document.querySelector("section#move h2");
const moveImg = document.querySelector("#infoList img");
const movePower = document.querySelector("#infoList .power");
const moveCategory = document.querySelector("#infoList .category");
const moveType = document.querySelector("#infoList .type");
const movePp = document.querySelector("#infoList .pp");
const moveAcc = document.querySelector("#infoList .accuracy");
const moveCd = document.querySelector("#infoList .cooldown");
moveTitle.innerText = selectedMove.name;
moveImg.src = selectedMove.moveSource;
movePower.innerText = selectedMove.attributes[0];
movePp.innerText = selectedMove.attributes[1];
moveAcc.innerText = selectedMove.attributes[2];
moveCd.innerText = selectedMove.attributes[3];
moveCategory.innerText = selectedMove.category;
moveType.innerText = selectedMove.type;

const description = document.querySelector("#moveDescription");
description.innerText = selectedMove.description;
const effects = document.querySelector("#effects");
effects.innerText = selectedMove.effects;
const dropListTitle = document.querySelector("#moveListTitle span");
dropListTitle.innerText = selectedMove.name;
const dropList = document.getElementById("moveList");
allPokemon.forEach((e) => {
  const correctPokemon = e.moves.find((sear) => sear.name == selectedMove.name);
  console.log(correctPokemon);
  if (correctPokemon) {
    let liPokemon = document.createElement("li");
    let aHref = document.createElement("a");
    let imgPokemon = document.createElement("img");
    let spanName = document.createElement("span");
    dropList.appendChild(liPokemon);
    liPokemon.appendChild(aHref);
    aHref.appendChild(imgPokemon);
    aHref.appendChild(spanName);
    liPokemon.style.background = `rgba(var(--${e.types[0]}))`;
    aHref.href = `pokemon.html?id=${e.numberDex}`;
    imgPokemon.src = e.sprite;
    spanName.innerText = e.name;
  }
});
