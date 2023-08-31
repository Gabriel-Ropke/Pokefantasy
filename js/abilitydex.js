import { abilitydex } from "./alldex.js";
import { allAbilities } from "./database/database.js";
import {
  createAbility,
  createAll,
  filterByName,
  filterByNameTimeOut,
} from "./functionFilter.js";

const abilityInputName = document.querySelector("#abilityName");
createAll(allAbilities, createAbility);
abilityInputName.oninput = () => {
  filterByName(
    abilitydex,
    abilityInputName,
    allAbilities,
    createAbility,
    "Abilities"
  );
};
abilityInputName.addEventListener("focusout", () => {
  filterByNameTimeOut(
    abilitydex,
    abilityInputName,
    allAbilities,
    createAbility
  );
});
