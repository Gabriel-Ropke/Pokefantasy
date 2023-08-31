import { abilitydex, dropdex, movedex, pokedex } from "./alldex.js";
import {
  allAbilities,
  allDrops,
  allMoves,
  allPokemon,
  allWeakness,
} from "./database/database.js";
import { RandomTypeColor } from "./importantConsts.js";
/* For All */
export function createSpanAviso(text, append) {
  let spanAviso = document.createElement("span");
  spanAviso.innerHTML = text;
  spanAviso.classList.add("aviso");
  append.appendChild(spanAviso);
}
export function createAll(database, createFunction, append, linkIsTrue) {
  database.forEach((e) => {
    createFunction(e, append, linkIsTrue);
  });
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
  let correctFilt = database.filter((item) =>
    item.name.toLowerCase().includes(input.value.toLowerCase())
  );
  correctFilt.forEach((e) => {
    createFunction(e, dex, linkIsTrue);
  });
  if (correctFilt.length < 1) {
    createSpanAviso(
      `Não existem ${object} com o Nome: <span style='color: rgba(var(--${RandomTypeColor}))'>${input.value}</span>`,
      dex
    );
  }
}
export function filterByNameTimeOut(
  dex,
  input,
  database,
  createFunction,
  linkIsTrue
) {
  setTimeout(() => {
    dex.innerHTML = "";
    input.value = "";
    createAll(database, createFunction, dex, linkIsTrue);
  }, 750);
}
/* Pokémon Function */
export function createPokemon(thisPokemon, Append, linkIsTrue) {
  let pokeCard = document.createElement("article");
  let pokeHref = document.createElement("a");
  let name = document.createElement("span");
  let number = document.createElement("span");
  let containerImg = document.createElement("div");
  let pokeImg = document.createElement("img");
  let types = document.createElement("div");
  if (linkIsTrue == true) {
    pokeHref.href = `pokemon.html?id=${thisPokemon.numberDex}`;
  }
  name.dataset.name = "pokecard-name";
  number.dataset.name = "pokecard-number";
  pokeCard.dataset.name = "pokecard";
  types.dataset.name = "pokecard-bottom";

  pokeCard.appendChild(pokeHref);
  pokeHref.appendChild(containerImg);
  pokeHref.appendChild(types);
  pokeHref.appendChild(name);
  pokeHref.appendChild(number);
  Append.appendChild(pokeCard);
  pokeCard.classList.add("poke-card");
  name.classList.add("name");
  number.classList.add("number");
  types.classList.add("bottom");
  containerImg.classList.add("image");
  containerImg.append(pokeImg);
  pokeCard.dataset.cardType = "pokeCard";
  pokeCard.style.background = `rgba(var(--${thisPokemon.types[0]}))`;
  name.innerText = thisPokemon.name;
  number.innerText = `#${thisPokemon.numberDex}`;
  if (localStorage.getItem("pokedexIsShiny")) {
    if (eval(localStorage.getItem("pokedexIsShiny")) == false) {
      pokeImg.src = thisPokemon.animated;
    } else {
      pokeImg.src = thisPokemon.shinyAnimated;
    }
  }

  for (let type = 0; type < thisPokemon.types.length; type++) {
    let spanType = document.createElement("span");
    spanType.classList.add("type");
    spanType.innerText = thisPokemon.types[type];
    spanType.style.background = `rgba(var(--${thisPokemon.types[type]}))`;
    types.appendChild(spanType);
  }
}
let actualPokemonFilter = "";
let actualCharacteristics = "";
export function updatePokemonFilter(actualFilter, newCondition) {
  if (actualPokemonFilter == "") {
    actualPokemonFilter = "pokemon." + newCondition;
  } else {
    actualPokemonFilter = actualFilter + " && pokemon." + newCondition;
  }
  return actualPokemonFilter;
}
export function updatePokemonCharacteristics(newCharacteristic) {
  actualCharacteristics = actualCharacteristics + "</br>" + newCharacteristic;
  console.log(actualCharacteristics);
  return actualCharacteristics;
}
export function filtPokemon(stage, type, ability, dex, linkIsTrue) {
  if (stage.innerText != "Estágio") {
    const stagePokemon = stage.dataset.stage;
    const pokemonStage = `evolutionary.length > ${stage.dataset.stage} && pokemon.evolutionary[${stagePokemon}].toLowerCase() == pokemon.name.toLowerCase()`;
    updatePokemonFilter(actualPokemonFilter, pokemonStage);
    const stageCharacteristics = `Estágio: <span style='color: rgba(var(--grass))'>${stage.innerText}</span>`;
    updatePokemonCharacteristics(stageCharacteristics);
  }
  if (type.innerText != "Tipos") {
    const typePokemon = type.innerText.toLowerCase();
    const pokemonType = `types.includes("${typePokemon}")`;
    updatePokemonFilter(actualPokemonFilter, pokemonType);
    const typeCharacteristics = `Tipo: <span style='color: rgba(var(--${type.innerText.toLowerCase()}))'>${
      type.innerText
    }</span>`;
    updatePokemonCharacteristics(typeCharacteristics);
  }
  if (ability.innerText != "Abilities") {
    let color = allAbilities.find(
      (search) => search.name.toLowerCase() == ability.innerText.toLowerCase()
    );
    const abilityPokemon = ability.innerText.toLowerCase();
    const pokemonAbility = `abilities.includes("${abilityPokemon}")`;
    updatePokemonFilter(actualPokemonFilter, pokemonAbility);
    const abilityCharacteristics = `Habilidade: <span style='color: rgba(var(--${color.type}))'>${ability.innerText}</span>`;
    updatePokemonCharacteristics(abilityCharacteristics);
  }
  if (
    stage.innerText == "Estágio" &&
    type.innerText == "Tipos" &&
    ability.innerText == "Abilities"
  ) {
    pokedex.innerHTML = "";
    createAll(allPokemon, createPokemon, dex, linkIsTrue);
  } else {
    pokedex.innerHTML = "";
    let correctPokemon = allPokemon.filter((pokemon) =>
      eval(actualPokemonFilter)
    );
    if (correctPokemon.length < 1) {
      console.log(actualCharacteristics);
      let spanAviso = document.createElement("span");
      spanAviso.innerHTML = `Não existem Pokémon com as seguintes características: ${actualCharacteristics}`;
      spanAviso.classList.add("aviso");
      pokedex.appendChild(spanAviso);
    }
    correctPokemon.forEach((newPokemon) => {
      createPokemon(newPokemon, pokedex, true);
    });
    actualPokemonFilter = "";
    actualCharacteristics = "";
  }
}
/* Move Function */
export function createMove(thisMove, Append, linkIsTrue) {
  let moveCard = document.createElement("article");
  let moveHref = document.createElement("a");
  let name = document.createElement("span");
  let type = document.createElement("span");
  let containerImg = document.createElement("div");
  let pokeImg = document.createElement("img");
  let infos = document.createElement("div");
  let category = document.createElement("img");
  let power = document.createElement("span");
  Append.appendChild(moveCard);
  if (linkIsTrue == true) {
    moveCard.appendChild(pokeHref);
    moveHref.appendChild(containerImg);
    moveHref.appendChild(infos);
  } else {
    moveCard.appendChild(containerImg);
    moveCard.appendChild(infos);
  }
  moveCard.classList.add("move-card");
  name.classList.add("name");
  type.classList.add("type");
  containerImg.classList.add("image");
  infos.classList.add("bottom");
  moveCard.appendChild(name);
  moveCard.appendChild(type);
  moveCard.appendChild(containerImg);
  containerImg.append(pokeImg);
  moveCard.appendChild(infos);
  infos.appendChild(category);
  infos.appendChild(power);
  type.style.color = `rgba(var(--${thisMove.type}))`;
  power.innerText = `power: ${thisMove.attributes[0]}`;
  power.style.color = `rgba(var(--${thisMove.type}))`;
  category.src = thisMove.categorySource;
  moveCard.style.background = `rgba(var(--${thisMove.type}))`;
  moveHref.href = `move.html?move=${thisMove.name}`;
  name.innerText = thisMove.name;
  type.innerText = `${thisMove.type}`;
  pokeImg.src = thisMove.moveSource;
  console.log("queijo");
}
let actualMoveFilter = "";
let actualMoveCharacteristics = "";
export function updateMoveFilter(actualFilter, newCondition) {
  if (actualMoveFilter == "") {
    actualMoveFilter = "move." + newCondition;
  } else {
    actualMoveFilter = actualFilter + " && move." + newCondition;
  }
}
export function updateMoveCharacteristics(newCharacteristic) {
  if (actualMoveCharacteristics == "") {
    actualMoveCharacteristics = newCharacteristic;
  } else {
    actualMoveCharacteristics =
      actualMoveCharacteristics + " " + newCharacteristic;
  }
}
export function filtMove(type, category, power) {
  if (type.innerText.toLowerCase() != "tipos") {
    const typeMove = type.innerText.toLowerCase();
    const moveType = `type.toLowerCase() == "${typeMove}"`;
    updateMoveFilter(actualMoveFilter, moveType);
    let typeCharacteristics = `do tipo <span style='color: rgba(var(--${typeMove}))'>${typeMove}</span>`;
    updateMoveCharacteristics(typeCharacteristics);
  }
  if (category.innerText.toLowerCase() != "categorias") {
    const catMove = category.innerText.toLowerCase();
    const moveCat = `category.toLowerCase() == "${catMove}"`;
    updateMoveFilter(actualMoveFilter, moveCat);
    let catCharacteristics = `da categoria <span style='color: rgba(var(--grass))'>${catMove}</span>`;
    updateMoveCharacteristics(catCharacteristics);
  }
  if (power.value > 0) {
    const powerMove = power.value;
    const movePower = `attributes[0] >= ${powerMove}`;
    updateMoveFilter(actualMoveFilter, movePower);
    let powerCharacteristics = `com Base Power de <span style='color: rgba(var(--grass))'>${powerMove}</span>`;
    updateMoveCharacteristics(powerCharacteristics);
  }
  if (power.value == 0) {
    let exception = `attributes[0] >= "--"`;
    updateMoveFilter(actualMoveFilter, exception);
    let exceptionCharacteristics = `com Base Power de <span style='color: rgba(var(--grass))'>--</span>`;
    updateMoveCharacteristics(exceptionCharacteristics);
  }
  movedex.innerHTML = "";
  let correctMove = allMoves.filter((move) => eval(actualMoveFilter));
  if (correctMove.length < 1) {
    let spanAviso = document.createElement("span");
    spanAviso.innerHTML = `Não existem Moves ${actualMoveCharacteristics}`;
    spanAviso.classList.add("aviso");
    movedex.appendChild(spanAviso);
  }
  correctMove.forEach((move) => {
    createMove(move);
  });
  actualMoveFilter = "";
  actualMoveCharacteristics = "";
}
/* Drops Function */
export function createDrop(drop, Append, linkIsTrue) {
  let articleCard = document.createElement("article");
  let aHref = document.createElement("a");
  let spanName = document.createElement("span");
  let spanValue = document.createElement("span");
  let divContainerImg = document.createElement("div");
  let imgDrop = document.createElement("img");
  Append.appendChild(articleCard);
  if (linkIsTrue == true) {
    articleCard.appendChild(aHref);
    aHref.appendChild(divContainerImg);
    aHref.href = `drop.html?drop=${drop.name}`;
  } else {
    articleCard.appendChild(divContainerImg);
  }
  articleCard.classList.add("drop-card");
  spanName.classList.add("name");
  spanValue.classList.add("number");
  divContainerImg.classList.add("image");
  articleCard.appendChild(spanName);
  articleCard.appendChild(spanValue);
  divContainerImg.append(imgDrop);
  articleCard.style.background = `rgba(var(--${drop.Rarity.toLowerCase()}))`;
  spanName.innerText = drop.name;
  spanValue.innerText = `$${drop.Value}`;
  imgDrop.src = drop.sprite;
}
// Drops não tem Characteristics pois é impossível encontrar 0
let actualDropFilter = "";
export function updateDropFilter(actualFilter, newCondition) {
  if (actualFilter == "") {
    actualDropFilter = "drop." + newCondition;
  } else {
    actualDropFilter = actualFilter + " && drop." + newCondition;
  }
  return actualDropFilter;
}
export function filtDrop(category, price) {
  dropdex.innerHTML = "";
  if (category.innerText != "Categorias") {
    const categoryDrop = category.innerText.toLowerCase();
    const dropCategory = `Rarity.toLowerCase() == "${categoryDrop}"`;
    updateDropFilter(actualDropFilter, dropCategory);
  }
  const PRICEDROP = `Value >= ${price.value}`;
  updateDropFilter(actualDropFilter, PRICEDROP);
  let correctDrop = allDrops.filter((drop) => eval(actualDropFilter));
  const MAXVALUE = correctDrop[correctDrop.length - 1].Value;
  price.max = MAXVALUE;
  correctDrop.forEach((e) => {
    createDrop(e);
  });
  actualDropFilter = "";
}
export function switchTextAndColor(placeholder, attribute, filtAttribute) {
  filtAttribute.classList.toggle("closed");
  placeholder.innerText = attribute.innerText;
  placeholder.style.border = "none";
  placeholder.style.color = "white";
}
export function createAbility(ability, Append, linkIsTrue) {
  let li = document.createElement("li");
  let aHref = document.createElement("a");
  let spanName = document.createElement("span");
  let pDesc = document.createElement("p");
  Append.appendChild(li);
  if (linkIsTrue == true) {
    li.appendChild(aHref);
    aHref.append(spanName);
    aHref.appendChild(pDesc);
    aHref.href = `ability.html?ability=${ability.name}`;
  } else {
    li.append(spanName);
    li.appendChild(pDesc);
  }
  li.classList.add("abilityrow");
  spanName.classList.add("name");
  pDesc.classList.add("description");
  li.style.background = `rgba(var(--${ability.type}))`;
  spanName.innerText = ability.name;
  pDesc.innerText = ability.description;
}
let actualFiltAbility = "";
export function updateFiltAbility(actualFilt, newCondition) {
  if (actualFiltAbility == "") {
    actualFiltAbility = "ability." + newCondition;
  } else {
    actualFiltAbility = actualFilt + "&& ability." + newCondition;
  }
  return actualFiltAbility;
}
