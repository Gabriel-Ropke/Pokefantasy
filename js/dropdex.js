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
  placeDropCategory.style = "";
  placeDropCategory.innerText = "Categorias";
  dropPrice.value = 0;
  dropPriceValue.value = 0;
  dropPriceContainer.classList.add("disabled");
  dropReset.classList.add("disabled");
  filtDrop(placeDropCategory, dropPrice);
}
/* Query Filter Elements */
const dropReset = document.getElementById("dropReset");
const dropName = document.getElementById("dropName");
const placeDropCategory = document.querySelector(
  "#filtDropCatContainer span.placeholder"
);
const dropPriceContainer = document.getElementById("filtDropPriceContainer");
const dropCategory = document.getElementById("filtDropCat");
const allDropCategories = document.querySelectorAll("#filtDropCat li");
const dropPrice = document.getElementById("filtDropPrice");
const dropPriceValue = document.getElementById("dropPriceValue");
/* Start Page */
createAll(allDrops, createDrop);
/* Add Event Listener */
dropName.onclick = () => {
  resetDropFilter();
};
dropName.oninput = () => {
  filterByName(dropdex, dropName, allDrops, createDrop, "Drops");
};
dropName.addEventListener("focusout", () => {
  setTimeout(() => {
    dropdex.innerHTML = "";
    dropName.value = "";
    allDrops.forEach((e) => {
      createDrop(e);
    });
  }, 750);
});
placeDropCategory.addEventListener("click", () => {
  dropCategory.classList.toggle("closed");
});
allDropCategories.forEach((cat) => {
  cat.addEventListener("click", () => {
    dropReset.classList.remove("disabled");
    dropPriceContainer.classList.remove("disabled");
    dropPriceValue.value = 0;
    dropPrice.value = 0;
    dropPriceContainer.style.setProperty(
      "--drop-range-color",
      `rgba(var(--${cat.innerText.toLowerCase()}))`
    );
    filtDrop(cat, dropPrice);
    switchTextAndColor(placeDropCategory, cat, dropCategory);
    placeDropCategory.style.background = `rgba(var(--${cat.innerText.toLowerCase()}))`;
  });
  cat.style.background = `rgba(var(--${cat.innerText.toLowerCase()}))`;
});
dropPriceValue.oninput = () => {
  if (dropPriceValue.value == "") {
    dropPrice.value == 0;
  } else {
    dropPrice.value = dropPriceValue.value;
  }
  filtDrop(placeDropCategory, dropPrice);
};
dropPrice.oninput = () => {
  dropPriceValue.value = dropPrice.value;
  filtDrop(placeDropCategory, dropPrice);
};
dropReset.addEventListener("click", () => {
  resetDropFilter();
});
