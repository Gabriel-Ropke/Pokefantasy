import { pokedex } from "./alldex.js";
import { allAbilities, allPokemon, allWeakness } from "./database/database.js";
import {
  createPokemon,
  switchTextAndColor,
  filtPokemon,
  createAll,
  filterByName,
  createAlertMessage,
} from "./functionFilter.js";
let PokedexIsShiny = false;
/* Local Function */
function resetPokemonFilter() {
  pokedex.innerHTML = "";
  createAll(allPokemon, createPokemon, pokedex, true);
  PokemonFilterStagesPlaceholder.innerText = "Estágio";
  PokemonFilterStagesPlaceholder.style = "";
  PokemonFilterTypesPlaceholder.innerText = "Tipos";
  PokemonFilterTypesPlaceholder.style = "";
  PokemonFilterAbilityPlaceholder.innerText = "Abilities";
  PokemonFilterAbilityPlaceholder.style = "";
  PokemonFilterAbilityInput.style = "";
  PokemonFilterResetButton.classList.add("disabled");
  PokemonFilterTypesContainer.classList.add("closed");
  PokemonFilterStagesContainer.classList.add("closed");
}
/* Start Page */
createAll(allPokemon, createPokemon, pokedex, true);
/* Query Filter Pokedéx  */
const PokemonFilterShinyIcon = document.querySelector("svg.pokemonShiny");
const PokemonFilterResetButton = document.getElementById("pokeReset");
const PokemonFilterNameInput = document.getElementById("pokeName");
const PokemonFilterTypesContainer = document.getElementById("filtTypes");
const PokemonFilterStagesContainer = document.getElementById("filtStages");
const PokemonFilterTypesPlaceholder = document.querySelector(
  "#filtPokeTypeContainer span.placeholder"
);
const PokemonFilterStagesPlaceholder = document.querySelector(
  "#filtPokeStageContainer span.placeholder"
);
const PokemonFilterAbilityPlaceholder = document.querySelector(
  "#filtPokeAbilityContainer .placeholderInputText"
);
const PokemonFilterAbilityInput = document.querySelector(
  "#filtPokeAbilityContainer input"
);
const PokemonFilterAbilitiesContainer =
  document.getElementById("filtPokeAbility");
const PokemonFilterAllStages = document.querySelectorAll("#filtStages li");
if (eval(localStorage.getItem("pokedexIsShiny")) == true) {
  PokemonFilterShinyIcon.classList.add("active");
}
PokemonFilterShinyIcon.onclick = () => {
  PokemonFilterShinyIcon.classList.toggle("active");
  pokedex.innerHTML = "";
  if (PokedexIsShiny == true) {
    PokedexIsShiny = false;
  } else {
    PokedexIsShiny = true;
  }
  localStorage.setItem("pokedexIsShiny", PokedexIsShiny);
  createAll(allPokemon, createPokemon, pokedex, true);
};
function abilityLengthChecker(searchLength, abilities) {
  if (searchLength < 1) {
    createAlertMessage(
      `Não existem Habilidades com o nome <span style='color: red'>${PokemonFilterAbilityInput.value}</span>`,
      PokemonFilterAbilitiesContainer,
      "rgba(255, 0, 0)"
    );
    PokemonFilterAbilitiesContainer.classList.add("nothing");
  } else if (searchLength == 1) {
    abilities.classList.remove("nothing");
    PokemonFilterAbilitiesContainer.classList.add("onlyOne");
  } else {
    abilities.classList.remove("nothing");
    abilities.classList.remove("onlyOne");
  }
}
PokemonFilterNameInput.addEventListener("click", () => {
  resetPokemonFilter();
});
PokemonFilterNameInput.oninput = () => {
  filterByName(
    pokedex,
    PokemonFilterNameInput,
    allPokemon,
    createPokemon,
    "Pokémon",
    true
  );
};
PokemonFilterAbilityInput.oninput = () => {
  PokemonFilterAbilitiesContainer.innerHTML = "";
  let actualLength = PokemonFilterAbilityInput.value.length;
  if (actualLength < 1) {
    PokemonFilterAbilitiesContainer.classList.add("closed");
  } else if (actualLength >= 1) {
    PokemonFilterAbilitiesContainer.classList.remove("closed");
  }
  let searchAbility = allAbilities.filter((ability) =>
    ability.name
      .toLowerCase()
      .includes(PokemonFilterAbilityInput.value.toLowerCase())
  );
  abilityLengthChecker(searchAbility.length, PokemonFilterAbilitiesContainer);
  searchAbility.forEach((e) => {
    let liAbility = document.createElement("li");
    liAbility.innerText = e.name;
    liAbility.style.background = `rgba(var(--${e.type.toLowerCase()}))`;
    PokemonFilterAbilitiesContainer.appendChild(liAbility);
    PokemonFilterAbilityInput.addEventListener("click", () => {
      if (PokemonFilterAbilityPlaceholder.innerText != "Abilities") {
        PokemonFilterAbilityPlaceholder.innerText = "Abilities";
        PokemonFilterAbilityPlaceholder.style = "";
        PokemonFilterAbilityInput.style = "";
      }
    });
    liAbility.addEventListener("click", () => {
      PokemonFilterAbilityPlaceholder.innerText = liAbility.innerText;
      PokemonFilterAbilityPlaceholder.style.color = "white";
      PokemonFilterAbilityInput.style.background = liAbility.style.background;
      PokemonFilterAbilityInput.style.border = "none";
      PokemonFilterAbilitiesContainer.classList.add("closed");
      filtPokemon(
        PokemonFilterStagesPlaceholder,
        PokemonFilterTypesPlaceholder,
        liAbility,
        pokedex,
        true
      );
      PokemonFilterResetButton.classList.remove("disabled");
    });
  });
};
function abilityRemoveAll() {
  PokemonFilterAbilitiesContainer.classList.remove("nothing");
  PokemonFilterAbilitiesContainer.classList.remove("onlyOne");
  PokemonFilterAbilitiesContainer.classList.remove("closed");
}
PokemonFilterAbilityInput.addEventListener("focusout", () => {
  abilityRemoveAll();
  PokemonFilterAbilitiesContainer.classList.add("closed");
  PokemonFilterAbilityInput.value = "";
  filtPokemon(
    PokemonFilterStagesPlaceholder,
    PokemonFilterTypesPlaceholder,
    PokemonFilterAbilityPlaceholder,
    pokedex,
    true
  );
});
/* create Filter Types li's */
allWeakness.forEach((thisType) => {
  let liFiltType = document.createElement("li");
  liFiltType.innerText = thisType.name;
  liFiltType.style.background = `rgba(var(--${thisType.name}))`;
  PokemonFilterTypesContainer.appendChild(liFiltType);
});
const allTypes = document.querySelectorAll("#filtTypes li");

PokemonFilterTypesPlaceholder.addEventListener("click", () => {
  PokemonFilterTypesContainer.classList.toggle("closed");
  if (!PokemonFilterStagesContainer.classList.contains("closed")) {
    PokemonFilterStagesContainer.classList.add("closed");
  }
});

PokemonFilterStagesPlaceholder.addEventListener("click", () => {
  PokemonFilterStagesContainer.classList.toggle("closed");
  if (!PokemonFilterTypesContainer.classList.contains("closed")) {
    PokemonFilterTypesContainer.classList.add("closed");
  }
});
/* addEvent Listener in AllFilt li's */
PokemonFilterAllStages.forEach((stages) => {
  stages.addEventListener("click", () => {
    switchTextAndColor(
      PokemonFilterStagesPlaceholder,
      stages,
      PokemonFilterStagesContainer
    );
    PokemonFilterStagesPlaceholder.setAttribute(
      "data-stage",
      stages.dataset.stage
    );
    filtPokemon(
      stages,
      PokemonFilterTypesPlaceholder,
      PokemonFilterAbilityPlaceholder,
      pokedex,
      true
    );
    PokemonFilterStagesPlaceholder.style.background = "rgba(var(--grass))";
    PokemonFilterResetButton.classList.remove("disabled");
  });
});
PokemonFilterResetButton.addEventListener("click", () => {
  resetPokemonFilter();
});
allTypes.forEach((types) => {
  types.addEventListener("click", () => {
    switchTextAndColor(
      PokemonFilterTypesPlaceholder,
      types,
      PokemonFilterTypesContainer
    );
    filtPokemon(
      PokemonFilterStagesPlaceholder,
      types,
      PokemonFilterAbilityPlaceholder,
      pokedex,
      true
    );
    PokemonFilterTypesPlaceholder.style.background = `rgba(var(--${types.innerText.toLowerCase()}))`;
    PokemonFilterResetButton.classList.remove("disabled");
  });
});
