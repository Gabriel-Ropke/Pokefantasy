import { dropdex } from "./alldex.js";
import { allDrops } from "./database/database.js";
import {
  createAll,
  createDrop,
  filtDrop,
  filterByName,
  switchTextAndColor,
} from "./functionFilter.js";
/* Local Functions */
function resetDropFilter() {
  DropFilterCategoryPlaceholder.style = "";
  DropFilterCategoryPlaceholder.innerText = "Categorias";
  DropFilterPriceInput.value = 0;
  DropFilterPriceLabel.value = 0;
  DropFilterPriceContainer.classList.add("disabled");
  DropFilterResetButton.classList.add("disabled");
  filtDrop(DropFilterCategoryPlaceholder, DropFilterPriceInput);
}
/* Query Filter Elements */
const DropFilterResetButton = document.getElementById("dropReset");
const DropFilterNameInput = document.getElementById("dropName");
const DropFilterCategoryPlaceholder = document.querySelector(
  "#filtDropCatContainer span.placeholder"
);
const DropFilterPriceContainer = document.getElementById(
  "filtDropPriceContainer"
);
const DropFilterCategoriesContainer = document.getElementById("filtDropCat");
const AllDropFilterCategories = document.querySelectorAll("#filtDropCat li");
const DropFilterPriceInput = document.getElementById("filtDropPrice");
const DropFilterPriceLabel = document.getElementById("dropPriceValue");
/* Start Page */
createAll(allDrops, createDrop, dropdex, true);
/* Add Event Listener */
DropFilterNameInput.onclick = () => {
  resetDropFilter();
};
DropFilterNameInput.oninput = () => {
  filterByName(
    dropdex,
    DropFilterNameInput,
    allDrops,
    createDrop,
    "Drops",
    true
  );
};
DropFilterCategoryPlaceholder.addEventListener("click", () => {
  DropFilterCategoriesContainer.classList.toggle("closed");
});
AllDropFilterCategories.forEach((cat) => {
  cat.addEventListener("click", () => {
    DropFilterResetButton.classList.remove("disabled");
    DropFilterPriceContainer.classList.remove("disabled");
    DropFilterPriceLabel.value = 0;
    DropFilterPriceInput.value = 0;
    DropFilterPriceContainer.style.setProperty(
      "--drop-range-color",
      `rgba(var(--${cat.innerText.toLowerCase()}))`
    );
    filtDrop(cat, DropFilterPriceInput);
    switchTextAndColor(
      DropFilterCategoryPlaceholder,
      cat,
      DropFilterCategoriesContainer
    );
    DropFilterCategoryPlaceholder.style.background = `rgba(var(--${cat.innerText.toLowerCase()}))`;
  });
  cat.style.background = `rgba(var(--${cat.innerText.toLowerCase()}))`;
});
DropFilterPriceLabel.oninput = () => {
  if (DropFilterPriceLabel.value == "") {
    DropFilterPriceInput.value == 0;
  } else {
    DropFilterPriceInput.value = DropFilterPriceLabel.value;
  }
  filtDrop(DropFilterCategoryPlaceholder, DropFilterPriceInput);
};
DropFilterPriceInput.oninput = () => {
  DropFilterPriceLabel.value = DropFilterPriceInput.value;
  filtDrop(DropFilterCategoryPlaceholder, DropFilterPriceInput);
};
DropFilterResetButton.addEventListener("click", () => {
  resetDropFilter();
});
