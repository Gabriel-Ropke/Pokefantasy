import { Moves } from "./alldex.js";
import { allMoves, allWeakness } from "./database/database.js";
import {
  filtMove,
  filterByName,
  switchTextAndColor,
} from "./functions/functionFilter.js";
import { createAll, createMove } from "./functions/functionCreatePokedex.js";
/* Local Functions */
async function resetMoveFilter() {
  Moves.innerHTML = "";
  createAll(allMoves, createMove, Moves, true);
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
if (Moves.classList.contains("active")) {
  createAll(allMoves, createMove, Moves, true);
}

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
  filterByName(Moves, MoveFilterNameInput, allMoves, createMove, "Moves", true);
};
/* Create Move Type Filter li's */
for (let i = 0; i < allWeakness.length; i++) {
  let liFiltType = document.createElement("li");
  liFiltType.innerText = allWeakness[i].name;
  liFiltType.style.background = `rgba(var(--${allWeakness[i].name}))`;
  MoveFilterTypesContainer.appendChild(liFiltType);
  AllMoveFilterTypes = document.querySelectorAll("#filtMoveType li");
}
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
for (let i = 0; i < AllMoveFilterCategories.length; i++) {
  AllMoveFilterCategories[i].addEventListener("click", () => {
    filtMove(
      MoveFilterTypesPlaceholder,
      AllMoveFilterCategories[i],
      MoveFilterPowerInput
    );
    switchTextAndColor(
      MoveFilterCategoryPlaceholder,
      AllMoveFilterCategories[i],
      MoveFilterCategoryContainer
    );
    MoveFilterCategoryPlaceholder.style.background = "rgba(var(--grass))";
    MoveFilterResetButton.classList.remove("disabled");
  });
}
for (let i = 0; i < AllMoveFilterTypes.length; i++) {
  AllMoveFilterTypes[i].addEventListener("click", () => {
    MoveFilterPowerContainer.style.setProperty(
      "--move-range-color",
      `rgba(var(--${AllMoveFilterTypes[i].innerText.toLowerCase()}))`
    );
    filtMove(
      AllMoveFilterTypes[i],
      MoveFilterCategoryPlaceholder,
      MoveFilterPowerInput
    );
    switchTextAndColor(
      MoveFilterTypesPlaceholder,
      AllMoveFilterTypes[i],
      MoveFilterTypesContainer
    );
    MoveFilterTypesPlaceholder.style.background = `rgba(var(--${AllMoveFilterTypes[
      i
    ].innerText.toLowerCase()}))`;
    MoveFilterResetButton.classList.remove("disabled");
  });
}
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
