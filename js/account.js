import { allPokemon, allWeakness } from "./database/database.js";
let pokemonIsShiny = false;
let favoritePokemon;
let sprite;
let shinySprite;
const pokemonShinyIcon = document.querySelector("svg.pokemonShiny");
if (localStorage.getItem("isShiny")) {
  pokemonIsShiny = eval(localStorage.getItem("isShiny"));
  if (pokemonIsShiny == true) {
    pokemonShinyIcon.classList.add("active");
  }
} else {
  pokemonIsShiny = false;
}
/* Input Name & Password */
const inputName = document.querySelector("input#name");
const editNameIcon = document.querySelector("svg.nameIcon");
const submitNameIcon = document.querySelector("svg.submitName");
const inputPassword = document.querySelector("input#password");
const editPasswordIcon = document.querySelector("svg.passwordIcon");
const submitPasswordIcon = document.querySelector("svg.submitPassword");
inputName.value = localStorage.getItem("name");
inputPassword.value = localStorage.getItem("password");
editNameIcon.addEventListener("click", () => {
  editInput(inputName, editNameIcon, submitNameIcon, false);
});
submitNameIcon.addEventListener("click", () => {
  editInput(inputName, editNameIcon, submitNameIcon, true);
  localStorage.setItem("name", inputName.value);
});
editPasswordIcon.addEventListener("click", () => {
  editInput(inputPassword, editPasswordIcon, submitPasswordIcon, false);
});
submitPasswordIcon.addEventListener("click", () => {
  editInput(inputPassword, editPasswordIcon, submitPasswordIcon, true);
  localStorage.setItem("password", inputPassword.value);
});
function editInput(input, iconEdit, iconSubmit, inputReadValue) {
  input.readOnly = inputReadValue;
  iconEdit.classList.toggle("active");
  iconSubmit.classList.toggle("active");
}
/* Pokémon Selector ( List and Span ) */
const pokemonSelector = document.querySelector("div#pokemonSelector");
const pokemonName = document.querySelector(
  "div#pokemonSelector span.pokemonName"
);
const pokemonNumber = document.querySelector(
  "div#pokemonSelector span.pokemonNumber"
);
const selectPokemonList = document.querySelector("div#selectPokemon ul");
pokemonSelector.onclick = () => {
  selectPokemonList.classList.toggle("active");
};
allPokemon.forEach((pokemon) => {
  const name = pokemon.name.toLowerCase();
  let li = document.createElement("li");
  let img = document.createElement("img");
  let spanName = document.createElement("span");
  let spanNumber = document.createElement("span");
  li.style.background = `rgba(var(--${pokemon.types[0].toLowerCase()}))`;
  img.src = pokemon.sprite;
  spanName.innerText = name;
  spanNumber.innerText = "#" + pokemon.numberDex;
  spanName.classList.add("pokemonName");
  spanNumber.classList.add("pokemonNumber");
  li.appendChild(img);
  li.appendChild(spanName);
  li.appendChild(spanNumber);
  selectPokemonList.appendChild(li);
  li.addEventListener("click", () => {
    localStorage.setItem("favoritePokemon", name);
    selectPokemonList.classList.remove("active");
    pokemonSelector.style.background = li.style.background;
    pokemonName.innerText = spanName.innerText;
    pokemonNumber.innerText = spanNumber.innerText;
    sprite = pokemon.animated;
    shinySprite = pokemon.shinyAnimated;
    if (pokemonIsShiny == true) {
      pokemonSprite.src = shinySprite;
    } else {
      pokemonSprite.src = sprite;
    }
    document.body.style.setProperty(
      "--favoritePokemon-color",
      li.style.background
    );
  });
});
/* Pokémon Sprite & Sprite Apresentation */
const pokemonSprite = document.querySelector("img.pokemonSprite");
if (localStorage.getItem("favoritePokemon")) {
  favoritePokemon = allPokemon.find(
    (pokemon) =>
      pokemon.name.toLowerCase() ==
      localStorage.getItem("favoritePokemon").toLocaleLowerCase()
  );
} else {
  favoritePokemon = allPokemon.find(
    (pokemon) => pokemon.name.toLowerCase() == "bulbasaur"
  );
}
let pokemonColor = `rgba(var(--${favoritePokemon.types[0].toLowerCase()}))`;
document.body.style.setProperty("--favoritePokemon-color", pokemonColor);
pokemonSelector.style.background = pokemonColor;
pokemonName.innerText = favoritePokemon.name;
pokemonNumber.innerText = "#" + favoritePokemon.numberDex;
console.log(pokemonIsShiny);
if (pokemonIsShiny == false) {
  pokemonSprite.src = favoritePokemon.animated;
} else {
  pokemonSprite.src = favoritePokemon.shinyAnimated;
}
console.log(pokemonIsShiny);
sprite = favoritePokemon.animated;
shinySprite = favoritePokemon.shinyAnimated;
pokemonShinyIcon.onclick = () => {
  pokemonShinyIcon.classList.toggle("active");
  if (pokemonIsShiny == true) {
    pokemonIsShiny = false;
    pokemonSprite.src = sprite;
  } else {
    pokemonIsShiny = true;
    pokemonSprite.src = shinySprite;
  }
  localStorage.setItem("isShiny", pokemonIsShiny);
};
/* Select Colors ( radios ) */
const inputRadioContainer = document.getElementById("inputRadios");
allWeakness.forEach((type) => {
  const color = type.name.toLowerCase();
  let div = document.createElement("div");
  let inputRadio = document.createElement("input");
  let label = document.createElement("label");
  div.classList.add("radioContainer");
  inputRadio.type = "radio";
  inputRadio.id = color;
  inputRadio.name = "changeColor";
  label.innerText = color;
  label.setAttribute("for", inputRadio.id);
  div.appendChild(inputRadio);
  div.appendChild(label);
  inputRadioContainer.appendChild(div);
  inputRadio.addEventListener("click", () => {
    document.body.style.setProperty(
      "--principal-color",
      `rgba(var(--${color}))`
    );
    localStorage.setItem("principalColor", `${color}`);
  });
  if (inputRadio.id == localStorage.getItem("principalColor")) {
    inputRadio.checked = true;
  }
  div.style.setProperty("--inputRadio-color", `rgba(var(--${color}))`);
});
