import { allAbilities, allPokemon } from "./database/database.js";
console.log(allPokemon);

const URLInfo = new URLSearchParams(window.location.search);
const selectedAbility = allAbilities.find(
  (e) => e.name == URLInfo.get("ability")
);
document.body.style.setProperty(
  "--principal-color",
  `rgba(var(--${selectedAbility.type}))`
);
console.log(selectedAbility);
const abilityName = document.querySelector("#abilityName");
const abilityDescription = document.querySelector("#abilityDescription");

abilityName.innerText = selectedAbility.name;
abilityDescription.innerText = selectedAbility.description;

const abilityListTitle = document.querySelector("#abilityListTitle span");
abilityListTitle.innerText = selectedAbility.name;
const abilityList = document.querySelector("#abilityList");
allPokemon.forEach((e) => {
  const correctPokemon = e.abilities.find(
    (sear) => sear == selectedAbility.name
  );
  if (correctPokemon) {
    let newPokemon = document.createElement("li");
    let newHref = document.createElement("a");
    let newImg = document.createElement("img");
    let newName = document.createElement("span");
    abilityList.appendChild(newPokemon);
    newPokemon.appendChild(newHref);
    newHref.appendChild(newImg);
    newHref.appendChild(newName);
    newPokemon.style.background = `rgba(var(--${e.types[0]}))`;
    newHref.href = `pokemon.html?id=${e.numberDex}`;
    newImg.src = e.sprite;
    newName.innerText = e.name;
  }
});
