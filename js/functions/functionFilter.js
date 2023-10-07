import { Abilities, Drops, Moves, Pokedex } from "../alldex.js";
import {
  allAbilities,
  allDrops,
  allMoves,
  allPokemon,
  allWeakness,
} from "../database/database.js";
import { db, get, ref } from "../database/firebase.js";
import { RandomTypeColor } from "../importantConsts.js";
import {
  createAbility,
  createDrop,
  createMove,
  createPokemon,
} from "./functionCreatePokedex.js";
/* For All */
export function createAlertMessage(text, append) {
  let AlertMessage = document.createElement("span");
  AlertMessage.innerHTML = text;
  AlertMessage.classList.add("aviso");
  append.appendChild(AlertMessage);
}
export function filterByName(
  dex,
  input,
  database,
  createFunction,
  object,
  linkIsTrue
) {
  dex.innerHTML = "";
  let FilteredByName = database.filter((item) =>
    item.name.toLowerCase().includes(input.value.toLowerCase())
  );
  FilteredByName.forEach((e) => {
    createFunction(e, dex, linkIsTrue);
  });
  if (FilteredByName.length < 1) {
    createAlertMessage(
      `Não existem ${object} com o Nome: <span style='color: rgba(var(--${RandomTypeColor}))'>${input.value}</span>`,
      dex
    );
  }
}
let ActualPokemonFilter = "";
let ActualPokemonCharacteristics = "";
export function updatePokemonFilter(actualFilter, newCondition) {
  if (ActualPokemonFilter == "") {
    ActualPokemonFilter = "pokemon." + newCondition;
  } else {
    ActualPokemonFilter = actualFilter + " && pokemon." + newCondition;
  }
  return ActualPokemonFilter;
}
export function updatePokemonCharacteristics(newCharacteristic) {
  ActualPokemonCharacteristics =
    ActualPokemonCharacteristics + "</br>" + newCharacteristic;
  return ActualPokemonCharacteristics;
}
export function filtPokemon(stage, type, ability, dex, linkIsTrue) {
  if (stage.innerText != "Estágio") {
    const PokeStage = stage.dataset.stage;
    const PokeFilterByStage = `evolutionary.length > ${PokeStage} && pokemon.evolutionary[${PokeStage}].toLowerCase() == pokemon.name.toLowerCase()`;
    updatePokemonFilter(ActualPokemonFilter, PokeFilterByStage);
    const StageCharacteristics = `Estágio: <span style='color: rgba(var(--principal-color))'>${stage.innerText}</span>`;
    updatePokemonCharacteristics(StageCharacteristics);
  }
  if (type.innerText != "Tipos") {
    const PokeType = type.innerText.toLowerCase();
    const PokeFilterByType = `types.includes("${PokeType}")`;
    updatePokemonFilter(ActualPokemonFilter, PokeFilterByType);
    const TypeCharacteristics = `Tipo: <span style='color: rgba(var(--${type.innerText.toLowerCase()}))'>${
      type.innerText
    }</span>`;
    updatePokemonCharacteristics(TypeCharacteristics);
  }
  if (ability.innerText != "Abilities") {
    const PokeAbility = ability.innerText.toLowerCase();
    const PokeFilterByAbility = `abilities.includes("${PokeAbility}")`;
    updatePokemonFilter(ActualPokemonFilter, PokeFilterByAbility);
    let Abilities = allAbilities.find(
      (ability) => ability.name.toLowerCase() == PokeAbility
    );
    const AbilityCharacteristics = `Habilidade: <span style='color: rgba(var(--${Abilities.type}))'>${ability.innerText}</span>`;
    updatePokemonCharacteristics(AbilityCharacteristics);
  }
  if (
    stage.innerText == "Estágio" &&
    type.innerText == "Tipos" &&
    ability.innerText == "Abilities"
  ) {
    Pokedex.innerHTML = "";
    createAll(allPokemon, createPokemon, dex, linkIsTrue);
  } else {
    Pokedex.innerHTML = "";
    let FilteredPokemon = allPokemon.filter((pokemon) =>
      eval(ActualPokemonFilter)
    );
    if (FilteredPokemon.length < 1) {
      createAlertMessage(
        `Não existem Pokémon com as seguintes características: ${ActualPokemonCharacteristics}`,
        Pokedex
      );
    }
    FilteredPokemon.forEach((newPokemon) => {
      createPokemon(newPokemon, Pokedex, true);
    });
    ActualPokemonFilter = "";
    ActualPokemonCharacteristics = "";
  }
}
let ActualMoveFilter = "";
let ActualMoveCharacteristics = "";
export function updateMoveFilter(actualFilter, newCondition) {
  if (ActualMoveFilter == "") {
    ActualMoveFilter = "move." + newCondition;
  } else {
    ActualMoveFilter = actualFilter + " && move." + newCondition;
  }
}
export function updateMoveCharacteristics(newCharacteristic) {
  if (ActualMoveCharacteristics == "") {
    ActualMoveCharacteristics = newCharacteristic;
  } else {
    ActualMoveCharacteristics =
      ActualMoveCharacteristics + " " + newCharacteristic;
  }
}
export function filtMove(type, category, power) {
  if (type.innerText.toLowerCase() != "tipos") {
    const MoveType = type.innerText.toLowerCase();
    const MoveFilterByType = `type.toLowerCase() == "${MoveType}"`;
    updateMoveFilter(ActualMoveFilter, MoveFilterByType);
    const TypeCharacteristics = `do tipo <span style='color: rgba(var(--${MoveType}))'>${MoveType}</span>`;
    updateMoveCharacteristics(TypeCharacteristics);
  }
  if (category.innerText.toLowerCase() != "categorias") {
    const MoveCategory = category.innerText.toLowerCase();
    const MoveFilterByCategory = `category.toLowerCase() == "${MoveCategory}"`;
    updateMoveFilter(ActualMoveFilter, MoveFilterByCategory);
    let catCharacteristics = `da categoria <span style='color: rgba(var(--principal-color))'>${MoveCategory}</span>`;
    updateMoveCharacteristics(catCharacteristics);
  }
  if (power.value > 0) {
    const MovePower = power.value;
    const MoveFilterByPower = `attributes[0] >= ${MovePower}`;
    updateMoveFilter(ActualMoveFilter, MoveFilterByPower);
    const PowerCharacteristics = `com Base Power de <span style='color: rgba(var(--principal-color))'>${MovePower}</span>`;
    updateMoveCharacteristics(PowerCharacteristics);
  }
  if (power.value == 0) {
    const Exception = `attributes[0] >= "--"`;
    updateMoveFilter(ActualMoveFilter, Exception);
    const exceptionCharacteristics = `com Base Power de <span style='color: rgba(var(--principal-color))'>--</span>`;
    updateMoveCharacteristics(exceptionCharacteristics);
  }
  Moves.innerHTML = "";
  let FilteredMoves = allMoves.filter((move) => eval(ActualMoveFilter));
  if (FilteredMoves.length < 1) {
    createAlertMessage(`Não existem Moves ${ActualMoveCharacteristics}`, Moves);
  }
  for (let i = 0; i < FilteredMoves.length; i++) {
    createMove(FilteredMoves[i], Moves, true);
  }
  ActualMoveFilter = "";
  ActualMoveCharacteristics = "";
}
// Drops não tem Characteristics pois é impossível encontrar 0
let ActualDropFilter = "";
export function updateFilterString({ actualFilter, newCondition, String }) {
  if (actualFilter == "") {
    ActualDropFilter = String + newCondition;
  } else {
    ActualDropFilter = actualFilter + ` && ${String}` + newCondition;
  }
  return ActualDropFilter;
}
export function updateDropFilter(actualFilter, newCondition) {
  if (actualFilter == "") {
    ActualDropFilter = "drop." + newCondition;
  } else {
    ActualDropFilter = actualFilter + " && drop." + newCondition;
  }
  return ActualDropFilter;
}
export function filtDrop(category, price) {
  Drops.innerHTML = "";
  if (category.innerText != "Categorias") {
    const DropCategory = category.innerText.toLowerCase();
    const DropFilterByCategory = `Rarity.toLowerCase() == "${DropCategory}"`;
    updateDropFilter(ActualDropFilter, DropFilterByCategory);
  }
  const DropPrice = `Value >= ${price.value}`;
  updateDropFilter(ActualDropFilter, DropPrice);
  let FilteredDrop = allDrops.filter((drop) => eval(ActualDropFilter));
  const MaxValue = FilteredDrop[FilteredDrop.length - 1].Value;
  price.max = MaxValue;
  for (let i = 0; i < FilteredDrop.length; i++) {
    createDrop(FilteredDrop[i], Drops, true);
  }
  ActualDropFilter = "";
}
export function switchTextAndColor(placeholder, attribute, filtAttribute) {
  filtAttribute.classList.toggle("closed");
  placeholder.innerText = attribute.innerText;
  placeholder.style.border = "none";
  placeholder.style.color = "white";
}
let ActualFiltAbility = "";
export function updateFiltAbility(actualFilt, newCondition) {
  if (ActualFiltAbility == "") {
    ActualFiltAbility = "ability." + newCondition;
  } else {
    ActualFiltAbility = actualFilt + "&& ability." + newCondition;
  }
  return ActualFiltAbility;
}
