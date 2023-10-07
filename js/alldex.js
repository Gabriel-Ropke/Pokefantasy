import {
  allAbilities,
  allDrops,
  allMoves,
  allPokemon,
} from "./database/database.js";
import { userRef } from "./database/fiebaseconsts.js";
import { db, ref } from "./database/firebase.js";
import {
  createAbility,
  createDrop,
  createMove,
  createPokemon,
} from "./functions/functionCreatePokedex.js";
import { filterByName } from "./functions/functionFilter.js";
const URLInfo = new URLSearchParams(window.location.search);
const selectedDex = URLInfo.get("page");

/* Switch Pages - Poké, Move, Drop & Ability */
const SelectedPage = document.querySelector(`section#alldex #${selectedDex}`);
const SelectedFilter = document.querySelector(
  `article[data-page=${selectedDex}]`
);
SelectedPage.classList.add("active");
if (SelectedFilter) {
  SelectedFilter.classList.add("active");
} else {
  const filterContainer = document.querySelector("section#filterContainer");
  filterContainer.style.display = "none";
}
export const Abilities = document.querySelector("#abilities");
const selectionPages = document.querySelectorAll("#selection h2");
export const Pokedex = document.getElementById("pokedex");
export const Moves = document.getElementById("moves");
export const Drops = document.getElementById("drops");
const pokemonFilter = document.getElementById("pokedexFilter");
const movesFilter = document.getElementById("movedexFilter");
const dropsFilter = document.getElementById("dropdexFilter");
const abilitiesFilter = document.getElementById("abilitydexFilter");

function closePages() {
  Pokedex.classList.add("inactive");
  Moves.classList.add("inactive");
  Drops.classList.add("inactive");
  Abilities.classList.add("inactive");
  pokemonFilter.classList.add("inactive");
  movesFilter.classList.add("inactive");
  dropsFilter.classList.add("inactive");
  abilitiesFilter.classList.add("inactive");
}
const closeFilter = document.querySelector("span#closeFilter");
const filterContainer = document.querySelector("section#filterContainer");
closeFilter.onclick = () => {
  filterContainer.classList.toggle("active");
};
