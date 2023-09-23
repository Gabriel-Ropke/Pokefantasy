import { abilitydex } from "./alldex.js";
import { allAbilities } from "./database/database.js";
import { createAbility, createAll, filterByName } from "./functionFilter.js";
const AbilityInputName = document.querySelector("#abilityName");
createAll(allAbilities, createAbility, abilitydex, true);
AbilityInputName.oninput = () => {
  filterByName(
    abilitydex,
    AbilityInputName,
    allAbilities,
    createAbility,
    "Abilities",
    true
  );
};
