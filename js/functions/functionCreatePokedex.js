import { userRef } from "../database/fiebaseconsts.js";
import { get } from "../database/firebase.js";
const snapshot = await get(userRef);
const UserData = snapshot.val();

export function createAll(database, createFunction, append, linkIsTrue) {
  let containerWidth = append.offsetWidth;
  let NumberOfColumns = Math.floor(containerWidth / 250);
  if (database.length < NumberOfColumns * 5) {
    for (let i = 0; i < database.length; i++) {
      createFunction(database[i], append, linkIsTrue);
    }
  } else {
    console.log("ue");
    for (let i = 0; i < NumberOfColumns * 5; i++) {
      createFunction(database[i], append, linkIsTrue);
    }
    let showMoreButton = document.createElement("button");
    showMoreButton.classList.add("showMoreButton");
    showMoreButton.innerText = "Show More";
    showMoreButton.style.gridColumn = `span ${NumberOfColumns}`;
    showMoreButton.onclick = () => {
      append.removeChild(showMoreButton);
      if (
        !createMore({
          database,
          createFunction,
          append,
          linkIsTrue,
          indexValue: append.children.length,
          columns: NumberOfColumns,
        })
      ) {
        append.appendChild(showMoreButton);
      }
    };
    append.appendChild(showMoreButton);
  }
}

export function createMore({
  database,
  createFunction,
  append,
  linkIsTrue,
  indexValue,
  columns,
}) {
  for (let i = indexValue; i < indexValue + columns * 5; i++) {
    if (i < database.length) {
      createFunction(database[i], append, linkIsTrue);
    } else {
      return false;
    }
  }
  return true;
}
/* Pokemon */
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
