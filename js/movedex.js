import { movedex } from "./alldex.js";
import { allMoves, allWeakness } from "./database/database.js";
import {
  createAll,
  createMove,
  filtMove,
  filterByName,
  switchTextAndColor,
} from "./functionFilter.js";
/* Local Functions */
function resetMoveFilter() {
  movedex.innerHTML = "";
  createAll(allMoves, createMove, movedex, true);
  MoveFilterPowerInput.value = 0;
  MoveFilterPowerLabel.value = 0;
  MoveFilterPowerLabel.innerText = "--";
  MoveFilterCategoryPlaceholder.innerText = "Categorias";
  MoveFilterCategoryPlaceholder.style = "";
  MoveFilterTypesPlaceholder.innerText = "Tipos";
  MoveFilterTypesPlaceholder.style = "";
  MoveFilterPowerContainer.style.setProperty(
    "--move-range-color",
    `rgba(var(--grass))`
  );
  MoveFilterResetButton.classList.add("disabled");
  MoveFilterTypesContainer.classList.add("closed");
  MoveFilterPowerContainer.classList.add("closed");
}
/* Start Page */
createAll(allMoves, createMove, movedex, true);
/* Query Filter Elements */
const MoveFilterNameInput = document.querySelector("#moveName");
const MoveFilterResetButton = document.getElementById("moveReset");
const MoveFilterTypesContainer = document.getElementById("filtMoveType");
const MoveFilterTypesPlaceholder = document.querySelector(
  "#filtMoveTypeContainer span.placeholder"
);
const MoveFilterPowerContainer = document.querySelector(
  "#filtMovePowerContainer"
);
let AllMoveFilterTypes = document.querySelectorAll("#filtMoveType li");
const MoveFilterCategoryContainer = document.getElementById("filtMoveCat");
const MoveFilterCategoryPlaceholder = document.querySelector(
  "#filtMoveCatContainer span.placeholder"
);
const AllMoveFilterCategories = document.querySelectorAll("#filtMoveCat li");
const MoveFilterPowerInput = document.getElementById("filtMovePower");
const MoveFilterPowerLabel = document.getElementById("movePowerValue");
MoveFilterNameInput.onclick = () => {
  resetMoveFilter();
};
MoveFilterNameInput.oninput = () => {
  filterByName(
    movedex,
    MoveFilterNameInput,
    allMoves,
    createMove,
    "Moves",
    true
  );
};
/* Create Move Type Filter li's */
allWeakness.forEach((thisType) => {
  let liFiltType = document.createElement("li");
  liFiltType.innerText = thisType.name;
  liFiltType.style.background = `rgba(var(--${thisType.name}))`;
  MoveFilterTypesContainer.appendChild(liFiltType);
  AllMoveFilterTypes = document.querySelectorAll("#filtMoveType li");
});
/* Placeholder */
MoveFilterTypesPlaceholder.addEventListener("click", () => {
  MoveFilterTypesContainer.classList.toggle("closed");
  if (!MoveFilterCategoryContainer.classList.contains("closed")) {
    MoveFilterCategoryContainer.classList.add("closed");
  }
});
MoveFilterCategoryPlaceholder.addEventListener("click", () => {
  MoveFilterCategoryContainer.classList.toggle("closed");
  if (!MoveFilterTypesContainer.classList.contains("closed")) {
    MoveFilterTypesContainer.classList.add("closed");
  }
});
/* Filter li's */
AllMoveFilterCategories.forEach((moveCat) => {
  moveCat.addEventListener("click", () => {
    filtMove(MoveFilterTypesPlaceholder, moveCat, MoveFilterPowerInput);
    switchTextAndColor(
      MoveFilterCategoryPlaceholder,
      moveCat,
      MoveFilterCategoryContainer
    );
    MoveFilterCategoryPlaceholder.style.background = "rgba(var(--grass))";
    MoveFilterResetButton.classList.remove("disabled");
  });
});
AllMoveFilterTypes.forEach((moveType) => {
  moveType.addEventListener("click", () => {
    MoveFilterPowerContainer.style.setProperty(
      "--move-range-color",
      `rgba(var(--${moveType.innerText.toLowerCase()}))`
    );
    filtMove(moveType, MoveFilterCategoryPlaceholder, MoveFilterPowerInput);
    switchTextAndColor(
      MoveFilterTypesPlaceholder,
      moveType,
      MoveFilterTypesContainer
    );
    MoveFilterTypesPlaceholder.style.background = `rgba(var(--${moveType.innerText.toLowerCase()}))`;
    MoveFilterResetButton.classList.remove("disabled");
  });
});
/* Input */
MoveFilterPowerInput.oninput = () => {
  MoveFilterPowerLabel.value = MoveFilterPowerInput.value;
  if (
    MoveFilterPowerInput.value == 0 &&
    MoveFilterTypesPlaceholder.innerText == "Tipos" &&
    MoveFilterCategoryPlaceholder.innerText == "Categorias"
  ) {
    MoveFilterResetButton.classList.add("disabled");
  }
  if (MoveFilterPowerInput.value > 1) {
    MoveFilterPowerLabel.innerText = MoveFilterPowerInput.value;
    MoveFilterResetButton.classList.remove("disabled");
  } else {
    MoveFilterPowerLabel.innerText = "--";
  }
  filtMove(
    MoveFilterTypesPlaceholder,
    MoveFilterCategoryPlaceholder,
    MoveFilterPowerInput
  );
};
MoveFilterResetButton.addEventListener("click", () => {
  resetMoveFilter();
});
