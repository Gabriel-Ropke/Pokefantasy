import { allDrops, allPokemon } from "./database/database.js";
import { createSpanAviso } from "./functionFilter.js";

const URLInfo = new URLSearchParams(window.location.search);
const selectedDrop = allDrops.find((e) => e.name == URLInfo.get("drop"));

const dropTitle = document.querySelector("section#drop h2");
const dropImg = document.querySelector("#infoList img");
const dropValue = document.querySelector("#infoList .value");
const dropRarity = document.querySelector("#infoList .rarity");
const dropType = document.querySelector("#infoList .type");
dropTitle.innerText = selectedDrop.name;
dropImg.src = selectedDrop.sprite;
dropValue.innerText = `$${selectedDrop.Value}`;
dropRarity.innerText = selectedDrop.Rarity;
dropType.innerText = selectedDrop.type;
const description = document.querySelector("#dropDescription");
description.innerText = selectedDrop.description;
const dropListTitle = document.querySelector("#dropListTitle span");
dropListTitle.innerText = selectedDrop.name;
const dropList = document.getElementById("dropList");
document.body.style.setProperty(
  "--principal-color",
  `var(--${selectedDrop.Rarity.toLowerCase()})`
);
let correctPokemon = allPokemon.filter((sear) =>
  sear.drops.includes(selectedDrop.name.toLowerCase())
);
if (correctPokemon.length < 1) {
  createSpanAviso(`Não há Pokémon que dropam ${selectedDrop.name}`, dropList);
}
if (correctPokemon.length > 1) {
  correctPokemon.forEach((e) => {
    let newPokemon = document.createElement("li");
    let newHref = document.createElement("a");
    let newImg = document.createElement("img");
    let newName = document.createElement("span");
    dropList.appendChild(newPokemon);
    newPokemon.appendChild(newHref);
    newHref.appendChild(newImg);
    newHref.appendChild(newName);
    newPokemon.style.background = `rgba(var(--${e.types[0]}))`;
    newHref.href = `pokemon.html?id=${e.numberDex}`;
    newImg.src = e.sprite;
    newName.innerText = e.name;
  });
}
