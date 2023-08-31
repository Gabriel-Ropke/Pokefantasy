import { pokedex } from "./alldex.js";
import { allAbilities, allPokemon, allWeakness } from "./database/database.js";
import {
  createPokemon,
  switchTextAndColor,
  filtPokemon,
  createAll,
  filterByNameTimeOut,
  filterByName,
  createSpanAviso,
} from "./functionFilter.js";
let pokedexIsShiny = false;
/* Local Function */
function resetPokemonFilter() {
  pokedex.innerHTML = "";
  createAll(allPokemon, createPokemon, pokedex, true);
  stagesPlaceholder.innerText = "Estágio";
  stagesPlaceholder.style = "";
  typesPlaceholder.innerText = "Tipos";
  typesPlaceholder.style = "";
  abilityPlaceholder.innerText = "Abilities";
  abilityPlaceholder.style = "";
  abilityInput.style = "";
  pokemonReset.classList.add("disabled");
  typesContainer.classList.add("closed");
  stagesContainer.classList.add("closed");
}
/* Start Page */
createAll(allPokemon, createPokemon, pokedex, true);
/* Query Filter Pokedéx  */
const pokemonShinyIcon = document.querySelector("svg.pokemonShiny");
const pokemonReset = document.getElementById("pokeReset");
const pokemonInputName = document.getElementById("pokeName");
const typesContainer = document.getElementById("filtTypes");
const stagesContainer = document.getElementById("filtStages");
const typesPlaceholder = document.querySelector(
  "#filtPokeTypeContainer span.placeholder"
);
const stagesPlaceholder = document.querySelector(
  "#filtPokeStageContainer span.placeholder"
);
const abilityPlaceholder = document.querySelector(
  "#filtPokeAbilityContainer .placeholderInputText"
);
const abilityInput = document.querySelector("#filtPokeAbilityContainer input");
const abilitiesContainer = document.getElementById("filtPokeAbility");
const allStages = document.querySelectorAll("#filtStages li");
if (eval(localStorage.getItem("pokedexIsShiny")) == true) {
  pokemonShinyIcon.classList.add("active");
}
pokemonShinyIcon.onclick = () => {
  pokemonShinyIcon.classList.toggle("active");
  pokedex.innerHTML = "";
  if (pokedexIsShiny == true) {
    pokedexIsShiny = false;
  } else {
    pokedexIsShiny = true;
  }
  localStorage.setItem("pokedexIsShiny", pokedexIsShiny);
  createAll(allPokemon, createPokemon, pokedex, true);
};
function abilityLengthChecker(searchLength, abilities) {
  if (searchLength < 1) {
    createSpanAviso(
      `Não existem Habilidades com o nome <span style='color: red'>${abilityInput.value}</span>`,
      abilitiesContainer,
      "rgba(255, 0, 0)"
    );
    abilitiesContainer.classList.add("nothing");
  } else if (searchLength == 1) {
    abilities.classList.remove("nothing");
    abilitiesContainer.classList.add("onlyOne");
  } else {
    abilities.classList.remove("nothing");
    abilities.classList.remove("onlyOne");
  }
}
pokemonInputName.addEventListener("click", () => {
  resetPokemonFilter();
});
pokemonInputName.oninput = () => {
  filterByName(
    pokedex,
    pokemonInputName,
    allPokemon,
    createPokemon,
    "Pokémon",
    true
  );
};
pokemonInputName.addEventListener("focusout", () => {
  filterByNameTimeOut(
    pokedex,
    pokemonInputName,
    allPokemon,
    createPokemon,
    true
  );
});
abilityInput.oninput = () => {
  abilitiesContainer.innerHTML = "";
  let actualLength = abilityInput.value.length;
  if (actualLength < 1) {
    abilitiesContainer.classList.add("closed");
  } else if (actualLength >= 1) {
    abilitiesContainer.classList.remove("closed");
  }
  let searchAbility = allAbilities.filter((ability) =>
    ability.name.toLowerCase().includes(abilityInput.value.toLowerCase())
  );
  abilityLengthChecker(searchAbility.length, abilitiesContainer);
  searchAbility.forEach((e) => {
    let liAbility = document.createElement("li");
    liAbility.innerText = e.name;
    liAbility.style.background = `rgba(var(--${e.type.toLowerCase()}))`;
    abilitiesContainer.appendChild(liAbility);
    abilityInput.addEventListener("click", () => {
      if (abilityPlaceholder.innerText != "Abilities") {
        abilityPlaceholder.innerText = "Abilities";
        abilityPlaceholder.style = "";
        abilityInput.style = "";
      }
    });
    liAbility.addEventListener("click", () => {
      abilityPlaceholder.innerText = liAbility.innerText;
      abilityPlaceholder.style.color = "white";
      abilityInput.style.background = liAbility.style.background;
      abilityInput.style.border = "none";
      abilitiesContainer.classList.add("closed");
      filtPokemon(
        stagesPlaceholder,
        typesPlaceholder,
        liAbility,
        pokedex,
        true
      );
      pokemonReset.classList.remove("disabled");
    });
  });
};
function abilityRemoveAll() {
  abilitiesContainer.classList.remove("nothing");
  abilitiesContainer.classList.remove("onlyOne");
  abilitiesContainer.classList.remove("closed");
}
abilityInput.addEventListener("focusout", () => {
  abilityRemoveAll();
  abilitiesContainer.classList.add("closed");
  abilityInput.value = "";
  filtPokemon(
    stagesPlaceholder,
    typesPlaceholder,
    abilityPlaceholder,
    pokedex,
    true
  );
});
/* create Filter Types li's */
allWeakness.forEach((thisType) => {
  let liFiltType = document.createElement("li");
  liFiltType.innerText = thisType.name;
  liFiltType.style.background = `rgba(var(--${thisType.name}))`;
  typesContainer.appendChild(liFiltType);
});
const allTypes = document.querySelectorAll("#filtTypes li");

typesPlaceholder.addEventListener("click", () => {
  typesContainer.classList.toggle("closed");
  if (!stagesContainer.classList.contains("closed")) {
    stagesContainer.classList.add("closed");
  }
});

stagesPlaceholder.addEventListener("click", () => {
  stagesContainer.classList.toggle("closed");
  if (!typesContainer.classList.contains("closed")) {
    typesContainer.classList.add("closed");
  }
});
/* addEvent Listener in AllFilt li's */
allStages.forEach((stages) => {
  stages.addEventListener("click", () => {
    switchTextAndColor(stagesPlaceholder, stages, stagesContainer);
    stagesPlaceholder.setAttribute("data-stage", stages.dataset.stage);
    filtPokemon(stages, typesPlaceholder, abilityPlaceholder, pokedex, true);
    stagesPlaceholder.style.background = "rgba(var(--grass))";
    pokemonReset.classList.remove("disabled");
  });
});
pokemonReset.addEventListener("click", () => {
  resetPokemonFilter();
});
allTypes.forEach((types) => {
  types.addEventListener("click", () => {
    switchTextAndColor(typesPlaceholder, types, typesContainer);
    filtPokemon(stagesPlaceholder, types, abilityPlaceholder, pokedex, true);
    typesPlaceholder.style.background = `rgba(var(--${types.innerText.toLowerCase()}))`;
    pokemonReset.classList.remove("disabled");
  });
});
