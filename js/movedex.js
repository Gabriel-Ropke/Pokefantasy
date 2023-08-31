import { movedex } from "./alldex.js";
import { allMoves, allWeakness } from "./database/database.js";
import {
  createAll,
  createMove,
  filtMove,
  filterByName,
  filterByNameTimeOut,
  switchTextAndColor,
} from "./functionFilter.js";
/* Local Functions */
function resetMoveFilter() {
  movedex.innerHTML = "";
  createAll(allMoves, createMove);
  moveInputPower.value = 0;
  moveInputPowerLabel.value = 0;
  moveInputPowerLabel.innerText = "--";
  cattegoryPlaceholder.innerText = "Categorias";
  cattegoryPlaceholder.style = "";
  typePlaceholder.innerText = "Tipos";
  typePlaceholder.style = "";
  powerContainer.style.setProperty("--move-range-color", `rgba(var(--grass))`);
  moveReset.classList.add("disabled");
  typeContainer.classList.add("closed");
  powerContainer.classList.add("closed");
}
/* Start Page */
createAll(allMoves, createMove);
/* Query Filter Elements */
const moveInputName = document.querySelector("#moveName");
const moveReset = document.getElementById("moveReset");
const typeContainer = document.getElementById("filtMoveType");
const typePlaceholder = document.querySelector(
  "#filtMoveTypeContainer span.placeholder"
);
const powerContainer = document.querySelector("#filtMovePowerContainer");
let allFiltMoveType = document.querySelectorAll("#filtMoveType li");
const categoryContainer = document.getElementById("filtMoveCat");
const cattegoryPlaceholder = document.querySelector(
  "#filtMoveCatContainer span.placeholder"
);
const allCategories = document.querySelectorAll("#filtMoveCat li");
const moveInputPower = document.getElementById("filtMovePower");
const moveInputPowerLabel = document.getElementById("movePowerValue");
moveInputName.onclick = () => {
  resetMoveFilter();
};
moveInputName.oninput = () => {
  filterByName(movedex, moveInputName, allMoves, createMove, "Moves");
};
moveInputName.addEventListener("focusout", () => {
  filterByNameTimeOut(movedex, moveInputName, allMoves, createMove);
});
/* Create Move Type Filter li's */
allWeakness.forEach((thisType) => {
  let liFiltType = document.createElement("li");
  liFiltType.innerText = thisType.name;
  liFiltType.style.background = `rgba(var(--${thisType.name}))`;
  typeContainer.appendChild(liFiltType);
  allFiltMoveType = document.querySelectorAll("#filtMoveType li");
});
/* Placeholder */
typePlaceholder.addEventListener("click", () => {
  typeContainer.classList.toggle("closed");
  if (!categoryContainer.classList.contains("closed")) {
    categoryContainer.classList.add("closed");
  }
});
cattegoryPlaceholder.addEventListener("click", () => {
  categoryContainer.classList.toggle("closed");
  if (!typeContainer.classList.contains("closed")) {
    typeContainer.classList.add("closed");
  }
});
/* Filter li's */
allCategories.forEach((moveCat) => {
  moveCat.addEventListener("click", () => {
    filtMove(typePlaceholder, moveCat, moveInputPower);
    switchTextAndColor(cattegoryPlaceholder, moveCat, categoryContainer);
    cattegoryPlaceholder.style.background = "rgba(var(--grass))";
    moveReset.classList.remove("disabled");
  });
});
allFiltMoveType.forEach((moveType) => {
  moveType.addEventListener("click", () => {
    powerContainer.style.setProperty(
      "--move-range-color",
      `rgba(var(--${moveType.innerText.toLowerCase()}))`
    );
    filtMove(moveType, cattegoryPlaceholder, moveInputPower);
    switchTextAndColor(typePlaceholder, moveType, typeContainer);
    typePlaceholder.style.background = `rgba(var(--${moveType.innerText.toLowerCase()}))`;
    moveReset.classList.remove("disabled");
  });
});
/* Input */
moveInputPower.oninput = () => {
  if (
    moveInputPower.value == 0 &&
    typePlaceholder.innerText == "Tipos" &&
    cattegoryPlaceholder.innerText == "Categorias"
  ) {
    moveReset.classList.add("disabled");
  }
  moveInputPowerLabel.value = moveInputPower.value;
  if (moveInputPower.value > 1) {
    moveInputPowerLabel.innerText = moveInputPower.value;
    moveReset.classList.remove("disabled");
  } else {
    moveInputPowerLabel.innerText = "--";
  }
  filtMove(typePlaceholder, cattegoryPlaceholder, moveInputPower);
};
moveReset.addEventListener("click", () => {
  resetMoveFilter();
});
