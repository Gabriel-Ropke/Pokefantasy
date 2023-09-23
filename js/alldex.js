import {
  allAbilities,
  allDrops,
  allMoves,
  allPokemon,
} from "./database/database.js";
import { db, ref } from "./database/firebase.js";
import {
  createAbility,
  createDrop,
  createMove,
  createPokemon,
  filterByName,
} from "./functionFilter.js";
if (localStorage.getItem("UserId")) {
  const userId = parseInt(localStorage.getItem("UserId"));
  const pokecardRef = ref(db, "users/" + userId + "/pokecard");
  if (pokecardRef) {
    console.log(pokecardRef);
  }
  const stylesRef = ref(db, "users/" + userId);
  const elementoHTML = document.getElementById("elementoAlvo");

  // Consulte o Firebase para obter os estilos
  estilosRef
    .once("value")
    .then((snapshot) => {
      const estilos = snapshot.val();
      console.log(estilos);
      // Verifique se há estilos no objeto recebido
      if (estilos) {
        // Aplique os estilos ao elemento HTML
        for (const propriedade in estilos) {
          elementoHTML.style[propriedade] = estilos[propriedade];
        }
      }
    })
    .catch((error) => {
      console.error("Erro ao buscar estilos do Firebase:", error);
    });
}

import { selectedPage } from "./importantConsts.js";
/* Switch Pages - Poké, Move, Drop & Ability */
export const abilitydex = document.querySelector("#abilitydex ul");
const selectionPages = document.querySelectorAll("#selection h2");
export const pokedex = document.getElementById("pokedex");
export const movedex = document.getElementById("movedex");
export const dropdex = document.getElementById("dropdex");
const abilityPage = document.getElementById("abilitydex");
const pokemonFilter = document.getElementById("pokedexFilter");
const movesFilter = document.getElementById("movedexFilter");
const dropsFilter = document.getElementById("dropdexFilter");
const abilitiesFilter = document.getElementById("abilitydexFilter");

function closePages() {
  pokedex.classList.add("inactive");
  movedex.classList.add("inactive");
  dropdex.classList.add("inactive");
  abilityPage.classList.add("inactive");
  pokemonFilter.classList.add("inactive");
  movesFilter.classList.add("inactive");
  dropsFilter.classList.add("inactive");
  abilitiesFilter.classList.add("inactive");
}
selectionPages.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("active");
    console.log(e.id);
    if (e.id == "pokemonPage") {
      closePages();
      pokedex.classList.remove("inactive");
      pokemonFilter.classList.remove("inactive");
    }
    if (e.id == "movePage") {
      closePages();
      movedex.classList.remove("inactive");
      movesFilter.classList.remove("inactive");
    }
    if (e.id == "dropPage") {
      closePages();
      dropdex.classList.remove("inactive");
      dropsFilter.classList.remove("inactive");
    }
    if (e.id == "abilityPage") {
      closePages();
      abilityPage.classList.remove("inactive");
      abilitiesFilter.classList.remove("inactive");
    }
    selectionPages.forEach((elm) => {
      if (elm.id == e.id) {
        elm.classList.add("active");
      } else {
        elm.classList.remove("active");
      }
    });
  });
});
if (selectedPage.pathname == "/pokedex.html") {
  const closeFilter = document.getElementById("closeFilter");
  const filterContainer = document.getElementById("filterContainer");
  closeFilter.onclick = () => {
    filterContainer.classList.toggle("inactive");
  };
  const searchGeneralByInput = document.querySelector(
    "div#generalSearchInput input"
  );
  const searchGeneralPlaceholder = document.querySelector(
    "div#generalSearchInput .placeholderSearch"
  );
  searchGeneralByInput.oninput = () => {
    filterByName(movedex, searchGeneralByInput, allMoves, createMove, "Moves");
    filterByName(
      pokedex,
      searchGeneralByInput,
      allPokemon,
      createPokemon,
      "Pokémon"
    );
    filterByName(dropdex, searchGeneralByInput, allDrops, createDrop, "Drops");
    filterByName(
      abilitydex,
      searchGeneralByInput,
      allAbilities,
      createAbility,
      "Abilities"
    );
  };
  searchGeneralByInput.addEventListener("focusout", () => {
    if (searchGeneralByInput.value.length >= 1) {
      searchGeneralPlaceholder.classList.add("minimize");
    } else {
      searchGeneralPlaceholder.classList.remove("minimize");
    }
  });
}
