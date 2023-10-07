import { Abilities } from "./alldex.js";
import { allAbilities } from "./database/database.js";
import { filterByName } from "./functions/functionFilter.js";
import { createAbility, createAll } from "./functions/functionCreatePokedex.js";
const AbilityInputName = document.querySelector("#abilityName");
createAll(allAbilities, createAbility, Abilities, true);
AbilityInputName.oninput = () => {
  filterByName(
    Abilities,
    AbilityInputName,
    allAbilities,
    createAbility,
    "Abilities",
    true
  );
};
