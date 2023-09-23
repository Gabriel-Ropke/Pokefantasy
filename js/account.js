import { allPokemon, allWeakness } from "./database/database.js";
import { db, ref, set, update, get } from "./database/firebase.js";
const userRef = ref(db, "users/" + localStorage.getItem("activeUser"));
function getUser(callback) {
  get(userRef)
    .then((snapshot) => {
      const user = snapshot.val();
      callback(user);
    })
    .catch((error) => {
      console.error("Erro ao obter o usuário:", error);
    });
}
// Atualize apenas os campos especificados
function updateUserFavouriteColor(color) {
  update(userRef, {
    favouriteColor: color,
  })
    .then(() => {
      console.log("Usuário atualizado com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao atualizar o usuário:", error);
    });
}
function updateUserFavouritePokemonIsShiny(bool) {
  update(userRef, {
    isShiny: bool,
  })
    .then(() => {
      console.log("Usuário atualizado com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao atualizar o usuário:", error);
    });
}
function updateUserFavouritePokemon(pokemon) {
  update(userRef, {
    favouritePokemon: pokemon,
  })
    .then(() => {
      console.log("Usuário atualizado com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao atualizar o usuário:", error);
    });
}
function updateUserName(name) {
  update(userRef, {
    name: name,
  })
    .then(() => {
      console.log("Usuário atualizado com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao atualizar o usuário:", error);
    });
}
function updateUserPassword(password) {
  update(userRef, {
    password: password,
  })
    .then(() => {
      console.log("Usuário atualizado com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao atualizar o usuário:", error);
    });
}
let pokemonIsShiny;
let favoritePokemon;
let sprite;
let shinySprite;
const pokemonShinyIcon = document.querySelector("svg.pokemonShiny");

/* Input Name & Password */
const inputName = document.querySelector("input#name");
const editNameIcon = document.querySelector("svg.nameIcon");
const submitNameIcon = document.querySelector("svg.submitName");
const inputPassword = document.querySelector("input#password");
const editPasswordIcon = document.querySelector("svg.passwordIcon");
const submitPasswordIcon = document.querySelector("svg.submitPassword");
getUser((user) => {
  inputName.value = user.name;
  inputPassword.value = user.password;
  favoritePokemon = allPokemon.find(
    (pokemon) =>
      pokemon.name.toLowerCase() == user.favouritePokemon.toLowerCase()
  );
  pokemonIsShiny = user.isShiny;
  if (pokemonIsShiny == true) {
    pokemonShinyIcon.classList.add("active");
  }
  let pokemonColor = `rgba(var(--${favoritePokemon.types[0].toLowerCase()}))`;
  document.body.style.setProperty("--favoritePokemon-color", pokemonColor);
  pokemonName.innerText = favoritePokemon.name;
  pokemonNumber.innerText = "#" + favoritePokemon.numberDex;
  sprite = favoritePokemon.animated;
  shinySprite = favoritePokemon.shinyAnimated;
  pokemonSelector.style.background = pokemonColor;
  if (pokemonIsShiny == false) {
    pokemonSprite.src = favoritePokemon.animated;
  } else {
    pokemonSprite.src = favoritePokemon.shinyAnimated;
  }
});
editNameIcon.addEventListener("click", () => {
  editInput(inputName, editNameIcon, submitNameIcon, false);
});
submitNameIcon.addEventListener("click", () => {
  editInput(inputName, editNameIcon, submitNameIcon, true);
  updateUserName(inputName.value);
});
editPasswordIcon.addEventListener("click", () => {
  editInput(inputPassword, editPasswordIcon, submitPasswordIcon, false);
});
submitPasswordIcon.addEventListener("click", () => {
  editInput(inputPassword, editPasswordIcon, submitPasswordIcon, true);
  updateUserPassword(inputPassword.value);
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
    updateUserFavouritePokemon(name);
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
pokemonShinyIcon.onclick = () => {
  pokemonShinyIcon.classList.toggle("active");
  if (pokemonIsShiny == true) {
    pokemonIsShiny = false;
    pokemonSprite.src = sprite;
  } else {
    pokemonIsShiny = true;
    pokemonSprite.src = shinySprite;
  }
  updateUserFavouritePokemonIsShiny(pokemonIsShiny);
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
    updateUserFavouriteColor(color);
  });
  getUser((user) => {
    if (inputRadio.id == user.favouriteColor) {
      inputRadio.checked = true;
    }
  });
  div.style.setProperty("--inputRadio-color", `rgba(var(--${color}))`);
});
