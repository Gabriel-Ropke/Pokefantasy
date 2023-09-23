import { abilitydex, dropdex, movedex, pokedex } from "./alldex.js";
import {
  allAbilities,
  allDrops,
  allMoves,
  allPokemon,
  allWeakness,
} from "./database/database.js";
import { db, get, ref } from "./database/firebase.js";
import { RandomTypeColor } from "./importantConsts.js";
/* For All */
export function createAlertMessage(text, append) {
  let AlertMessage = document.createElement("span");
  AlertMessage.innerHTML = text;
  AlertMessage.classList.add("aviso");
  append.appendChild(AlertMessage);
}
export function createAll(database, createFunction, append, linkIsTrue) {
  for (let i = 0; i < database.length; i++) {
    createFunction(database[i], append, linkIsTrue);
  }
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
const userRef = ref(
  db,
  "users/" + parseInt(localStorage.getItem("activeUser"))
);
const snapshot = await get(userRef);
const UserData = snapshot.val();
/* Pokémon Function */
export function createPokemon(thisPokemon, Append, linkIsTrue) {
  let PokeCard = document.createElement("article");
  let PokeLink = document.createElement("a");
  let PokeName = document.createElement("span");
  let PokeNumber = document.createElement("span");
  let PokeImageContainer = document.createElement("div");
  let PokeImage = document.createElement("img");
  let PokeTypes = document.createElement("div");
  if (linkIsTrue == true) {
    PokeLink.href = `pokemon.html?id=${thisPokemon.numberDex}`;
  }
  PokeName.dataset.name = "pokecard-name";
  PokeNumber.dataset.name = "pokecard-number";
  PokeImageContainer.dataset.name = "pokecard-image";
  PokeCard.dataset.name = "pokecard";
  PokeTypes.dataset.name = "pokecard-bottom";

  PokeCard.appendChild(PokeLink);
  PokeLink.appendChild(PokeImageContainer);
  PokeLink.appendChild(PokeTypes);
  PokeLink.appendChild(PokeName);
  PokeLink.appendChild(PokeNumber);
  Append.appendChild(PokeCard);
  PokeCard.classList.add("poke-card");
  PokeName.classList.add("name");
  PokeNumber.classList.add("number");
  PokeTypes.classList.add("bottom");
  PokeImageContainer.classList.add("image");
  PokeImageContainer.append(PokeImage);
  PokeCard.style.background = `rgba(var(--${thisPokemon.types[0]}))`;
  PokeName.innerText = thisPokemon.name;
  PokeNumber.innerText = `#${thisPokemon.numberDex}`;
  if (UserData.isShiny == false) {
    PokeImage.src = thisPokemon.animated;
  } else {
    PokeImage.src = thisPokemon.shinyAnimated;
  }

  for (let type = 0; type < thisPokemon.types.length; type++) {
    let NewType = document.createElement("span");
    NewType.classList.add("type");
    NewType.innerText = thisPokemon.types[type];
    NewType.style.background = `rgba(var(--${thisPokemon.types[type]}))`;
    PokeTypes.appendChild(NewType);
  }
  actualizeEditions(UserData.pokecard);
}
async function actualizeEditions(data) {
  if (data) {
    // Itera por todas as propriedades do objeto "pokecard"
    for (const [nomePropriedade, valorPropriedade] of Object.entries(data)) {
      for (const [nomeValor, valorValor] of Object.entries(valorPropriedade)) {
        const elementoComDataName = document.querySelectorAll(
          `[data-name="${nomePropriedade}"]`
        );
        if (elementoComDataName) {
          for (let i = 0; i < elementoComDataName.length; i++) {
            elementoComDataName[i].style[nomeValor] = valorValor;
          }
        }
      }
    }
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
    pokedex.innerHTML = "";
    createAll(allPokemon, createPokemon, dex, linkIsTrue);
  } else {
    pokedex.innerHTML = "";
    let FilteredPokemon = allPokemon.filter((pokemon) =>
      eval(ActualPokemonFilter)
    );
    if (FilteredPokemon.length < 1) {
      createAlertMessage(
        `Não existem Pokémon com as seguintes características: ${ActualPokemonCharacteristics}`,
        pokedex
      );
    }
    FilteredPokemon.forEach((newPokemon) => {
      createPokemon(newPokemon, pokedex, true);
    });
    ActualPokemonFilter = "";
    ActualPokemonCharacteristics = "";
  }
}
/* Move Function */
export function createMove(thisMove, Append, linkIsTrue) {
  let MoveCard = document.createElement("article");
  let MoveLink = document.createElement("a");
  let MoveName = document.createElement("span");
  let MoveType = document.createElement("span");
  let MoveImageContainer = document.createElement("div");
  let MoveImage = document.createElement("img");
  let MoveBottom = document.createElement("div");
  let MoveCategory = document.createElement("img");
  let MovePower = document.createElement("span");
  Append.appendChild(MoveCard);
  if (linkIsTrue == true) {
    MoveLink.href = `move.html?move=${thisMove.name}`;
  }
  MoveCard.dataset.name = "movecard";
  MoveName.dataset.name = "movecard-name";
  MoveType.dataset.name = "movecard-type";
  MoveImageContainer.dataset.name = "movecard-image";
  MoveBottom.dataset.name = "movecard-bottom";
  MoveCard.appendChild(MoveLink);
  MoveLink.appendChild(MoveImageContainer);
  MoveLink.appendChild(MoveBottom);
  MoveLink.appendChild(MoveName);
  MoveLink.appendChild(MoveType);
  MoveLink.appendChild(MoveImageContainer);
  MoveImageContainer.append(MoveImage);
  MoveBottom.appendChild(MoveCategory);
  MoveBottom.appendChild(MovePower);
  MoveCard.classList.add("move-card");
  MoveName.classList.add("name");
  MoveType.classList.add("type");
  MoveImageContainer.classList.add("image");
  MoveBottom.classList.add("bottom");
  MoveType.style.color = `rgba(var(--${thisMove.type}))`;
  MovePower.innerText = `power: ${thisMove.attributes[0]}`;
  MovePower.style.color = `rgba(var(--${thisMove.type}))`;
  MoveCategory.src = thisMove.categorySource;
  MoveCard.style.background = `rgba(var(--${thisMove.type}))`;
  MoveName.innerText = thisMove.name;
  MoveType.innerText = `${thisMove.type}`;
  MoveImage.src = thisMove.moveSource;
  actualizeEditions(UserData.movecard);
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
  movedex.innerHTML = "";
  let FilteredMoves = allMoves.filter((move) => eval(ActualMoveFilter));
  if (FilteredMoves.length < 1) {
    createAlertMessage(
      `Não existem Moves ${ActualMoveCharacteristics}`,
      movedex
    );
  }
  for (let i = 0; i < FilteredMoves.length; i++) {
    createMove(FilteredMoves[i], movedex, true);
  }
  ActualMoveFilter = "";
  ActualMoveCharacteristics = "";
}
/* Drops Function */
export function createDrop(drop, Append, linkIsTrue) {
  let DropCard = document.createElement("article");
  let DropLink = document.createElement("a");
  let DropName = document.createElement("span");
  let DropValue = document.createElement("span");
  let DropImageContainer = document.createElement("div");
  let DropImage = document.createElement("img");
  Append.appendChild(DropCard);
  if (linkIsTrue == true) {
    DropLink.href = `drop.html?drop=${drop.name}`;
  }
  DropCard.dataset.name = "dropcard";
  DropName.dataset.name = "dropcard-name";
  DropValue.dataset.name = "dropcard-value";
  DropImageContainer.dataset.name = "dropcard-image";
  DropCard.appendChild(DropLink);
  DropLink.appendChild(DropImageContainer);
  DropLink.appendChild(DropName);
  DropLink.appendChild(DropValue);
  DropImageContainer.append(DropImage);
  DropCard.classList.add("drop-card");
  DropName.classList.add("name");
  DropValue.classList.add("number");
  DropImageContainer.classList.add("image");
  DropCard.style.background = `rgba(var(--${drop.Rarity.toLowerCase()}))`;
  DropName.innerText = drop.name;
  DropValue.innerText = `$${drop.Value}`;
  DropImage.src = drop.sprite;
  actualizeEditions(UserData.dropcard);
}
// Drops não tem Characteristics pois é impossível encontrar 0
let ActualDropFilter = "";
export function updateDropFilter(actualFilter, newCondition) {
  if (actualFilter == "") {
    ActualDropFilter = "drop." + newCondition;
  } else {
    ActualDropFilter = actualFilter + " && drop." + newCondition;
  }
  return ActualDropFilter;
}
export function filtDrop(category, price) {
  dropdex.innerHTML = "";
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
    createDrop(FilteredDrop[i], dropdex, true);
  }
  ActualDropFilter = "";
}
export function switchTextAndColor(placeholder, attribute, filtAttribute) {
  filtAttribute.classList.toggle("closed");
  placeholder.innerText = attribute.innerText;
  placeholder.style.border = "none";
  placeholder.style.color = "white";
}
export function createAbility(ability, Append, linkIsTrue) {
  let AbilityRow = document.createElement("li");
  let AbilityLink = document.createElement("a");
  let AbilityName = document.createElement("span");
  let AbilityDescription = document.createElement("p");
  Append.appendChild(AbilityRow);
  if (linkIsTrue == true) {
    AbilityLink.href = `ability.html?ability=${ability.name}`;
  }
  AbilityRow.appendChild(AbilityLink);
  AbilityLink.append(AbilityName);
  AbilityLink.appendChild(AbilityDescription);
  AbilityRow.classList.add("abilityrow");
  AbilityName.classList.add("name");
  AbilityDescription.classList.add("description");
  AbilityRow.style.background = `rgba(var(--${ability.type}))`;
  AbilityName.innerText = ability.name;
  AbilityDescription.innerText = ability.description;
  actualizeEditions(UserData.abilityrow);
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
