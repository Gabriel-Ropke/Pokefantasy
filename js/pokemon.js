import {
  allDrops,
  allDungeon,
  allMoveInfo,
  allMoves,
  allPokemon,
  allResps,
  allStats,
  allWeakness,
} from "./database/database.js";
const URLInfo = new URLSearchParams(window.location.search);
const selectedPokemon = allPokemon.find(
  (e) => Math.floor(e.numberDex) == URLInfo.get("id")
);
document.body.style.setProperty(
  "--pokemon-color",
  `var(--${selectedPokemon.types[0]})`
);
/* Moveset Appendchild */
const moveset = document.querySelector("#moveset ul");
selectedPokemon.moves.forEach((e) => {
  const search = allMoves.find(
    (sear) => sear.name.toLowerCase() == e.name.toLowerCase()
  );
  let liMove = document.createElement("li");
  let divCover = document.createElement("div");
  let spanName = document.createElement("span");
  let imgMove = document.createElement("img");
  moveset.appendChild(liMove);
  liMove.appendChild(imgMove);
  liMove.appendChild(spanName);
  liMove.appendChild(divCover);
  divCover.classList.add("cover");
  liMove.classList.add("move");
  spanName.classList.add("name");
  imgMove.style.borderColor = `rgba(var(--${search.type}))`;
  spanName.style.background = `rgba(var(--${search.type}))`;
  divCover.innerText = `Nvl. ${e.level}`;
  spanName.innerText = search.name;
  imgMove.src = search.moveSource;
});
/* moves Selector */
const moves = document.querySelectorAll("#moveset ul li");
const moveInfo = document.getElementById("moveInfo");
const moveName = document.getElementById("moveName");
const moveLevel = document.getElementById("moveLevel");
const moveAttributes = document.querySelector("#moveInfo ul");
const moveCategory = document.querySelector("#catType img");
const moveType = document.querySelector("#catType span");
const moveDescription = document.getElementById("description");
const moveEffects = document.getElementById("effects");
/* moves Appendchild */
moves.forEach((e) => {
  e.addEventListener("click", () => {
    const search = allMoves.find(
      (elm) => elm.name.toLowerCase() == e.children[1].innerHTML.toLowerCase()
    );
    console.log(e);
    console.log(search);
    const pokemon = selectedPokemon.moves.find(
      (level) =>
        level.name.toLowerCase() == e.children[1].innerHTML.toLowerCase()
    );
    console.log(pokemon);
    moveAttributes.innerHTML = "";
    moveCategory.src = search.categorySource;
    moveType.innerText = search.type;
    moveName.innerText = search.name;
    moveLevel.innerText = `Nvl. ${pokemon.level}`;
    moveDescription.innerText = search.description;
    moveEffects.innerText = search.effects;
    moveEffects.style.color = `rgba(var(--${search.type}))`;
    moveType.style.background = `rgba(var(--${search.type}))`;
    moveName.style.color = `rgba(var(--${search.type}))`;
    moveLevel.style.background = `rgba(var(--${search.type}))`;
    moveInfo.style.border = `4px solid rgba(var(--${search.type}))`;
    for (let i = 0; i < allMoveInfo.length; i++) {
      let liAttribute = document.createElement("li");
      let spanName = document.createElement("span");
      let spanNumber = document.createElement("span");
      moveAttributes.appendChild(liAttribute);
      liAttribute.appendChild(spanName);
      liAttribute.appendChild(spanNumber);
      spanName.innerText = allMoveInfo[i];
      spanNumber.innerText = search.attributes[i];
      spanNumber.style.color = `rgba(var(--${search.type}))`;
    }
  });
});
/* Top */
const principalTitle = document.querySelector("#top h1");
const previewPokemon = document.querySelector("#preview a");
const nextPokemon = document.querySelector("#next a");
const preview = allPokemon.find(
  (e) => e.numberDex == Math.floor(selectedPokemon.numberDex) - 1
);
const next = allPokemon.find(
  (e) => e.numberDex == Math.floor(selectedPokemon.numberDex) + 1
);
/*
if (Math.floor(selectedPokemon.numberDex) == 1) {
  nextPokemon.innerText = `${next.name} #${next.numberDex} `;
  nextPokemon.href = `pokemon.html?id=${next.numberDex}`;
} else if (Math.floor(selectedPokemon.numberDex) == allPokemon.length) {
  previewPokemon.innerText = `${preview.name} #${preview.numberDex} `;
  previewPokemon.href = `pokemon.html?id=${preview.numberDex}`;
} else {
  nextPokemon.innerText = `${next.name} #${next.numberDex} `;
  previewPokemon.innerText = `${preview.name} #${preview.numberDex} `;
  previewPokemon.href = `pokemon.html?id=${preview.numberDex}`;
  nextPokemon.href = `pokemon.html?id=${next.numberDex}`;
}
*/
principalTitle.innerText = selectedPokemon.name;

/* General Info */
const firstImg = document.querySelector("#pseudo-list img");
const species = document.querySelector(".species");
firstImg.src = selectedPokemon.sprite;
species.innerText = selectedPokemon.species;
const types = document.querySelector(".types");
const abilities = document.querySelector(".abilities");
const evYield = document.querySelector(".ev-yield");
selectedPokemon.types.forEach((e) => {
  let newType = document.createElement("p");
  newType.innerText = e;
  newType.style.background = `rgba(var(--${e}))`;
  types.appendChild(newType);
});
selectedPokemon.abilities.forEach((e) => {
  let newAbility = document.createElement("a");
  abilities.appendChild(newAbility);
  newAbility.innerText = e;
  console.log(e);
  newAbility.href = `ability.html?ability=${e}`;
});
selectedPokemon.evYield.forEach((e) => {
  let newEV = document.createElement("p");
  evYield.appendChild(newEV);
  newEV.innerText = e;
});
const catchRate = document.querySelector(".catch-rate");
const pokeWidth = document.querySelector(".width");
const pokeHeight = document.querySelector(".height");
catchRate.innerText = selectedPokemon.catchRate;
pokeWidth.innerText = selectedPokemon.width;
pokeHeight.innerText = selectedPokemon.height;
/* Weakness */
const weakness = document.querySelector("#weakness ul");
for (let i = 0; i < allWeakness.length; i++) {
  let liWeak = document.createElement("li");
  let spanName = document.createElement("span");
  let spanWeakness = document.createElement("span");
  weakness.appendChild(liWeak);
  liWeak.appendChild(spanName);
  liWeak.appendChild(spanWeakness);
  liWeak.classList.add("weak");
  spanName.classList.add("name");
  spanWeakness.classList.add("weakness");
  liWeak.style.background = `rgba(var(--${allWeakness[i].name}))`;
  spanName.innerText = allWeakness[i].name;
  const weak = allWeakness.find(
    (sear) => sear.name == selectedPokemon.types[0]
  );
  if (selectedPokemon.types.length > 1) {
    const weak2 = allWeakness.find(
      (sear) => sear.name == selectedPokemon.types[1]
    );
    let newType = weak.Weakness[i] * weak2.Weakness[i];
    spanWeakness.innerText = `${newType}x`;
  } else {
    spanWeakness.innerText = `${weak.Weakness[i]}x`;
  }
}

/* Alternative Forms & Evolutionary */
const normalForm = document.querySelector("#alternative .normal");
const shinyForm = document.querySelector("#alternative .shiny");
console.log(selectedPokemon);
normalForm.src = selectedPokemon.animated;
shinyForm.src = selectedPokemon.shinyAnimated;

const evolutionary = document.getElementById("evolutionary");
selectedPokemon.evolutionary.forEach((e) => {
  console.log(e);
  const evolution = allPokemon.find(
    (sear) => sear.name.toLowerCase() == e.toLowerCase()
  );
  console.log(evolution);
  let aHref = document.createElement("a");
  let spanLevel = document.createElement("span");
  let imgEvolution = document.createElement("img");
  evolutionary.appendChild(aHref);
  aHref.appendChild(imgEvolution);
  aHref.appendChild(spanLevel);
  aHref.href = `pokemon.html?id=${evolution.numberDex}`;
  imgEvolution.src = evolution.animated;
  spanLevel.innerText = evolution.evoMode;
});

/* Stats */
const stats = document.querySelector("#stats ul");

for (let i = 0; i < selectedPokemon.stats.length; i++) {
  let liStat = document.createElement("li");
  let spanName = document.createElement("span");
  let spanNumber = document.createElement("span");
  let barOut = document.createElement("div");
  let barIn = document.createElement("div");
  stats.appendChild(liStat);
  liStat.appendChild(spanName);
  liStat.appendChild(spanNumber);
  liStat.appendChild(barOut);
  barOut.appendChild(barIn);
  spanName.classList.add("name");
  barOut.classList.add("bar-out");
  barIn.classList.add("bar-in");
  spanName.innerText = allStats[i];
  spanNumber.innerText = selectedPokemon.stats[i];
  barIn.style.width = `${selectedPokemon.stats[i] / 1.5}%`;
}

/* Drops */
const dropList = document.querySelector("#drops ul");
selectedPokemon.drops.forEach((e) => {
  const searchDrops = allDrops.find((sear) => sear.name == e);
  let newDrop = document.createElement("li");
  let newDropHref = document.createElement("a");
  let newDropImg = document.createElement("img");
  let newDropName = document.createElement("span");
  dropList.appendChild(newDrop);
  newDrop.appendChild(newDropHref);
  newDropHref.appendChild(newDropImg);
  newDropHref.appendChild(newDropName);
  newDrop.style.background = `rgba(var(--${searchDrops.Rarity.toLowerCase()}))`;
  newDropName.innerText = searchDrops.name;
  newDropHref.href = `drop.html?drop=${searchDrops.name}`;
  newDropImg.src = searchDrops.sprite;
});
/* Resps */
const respawnList = document.getElementById("respawnList");
const dungeonList = document.getElementById("dungeonList");
function createNewRespLi(pokemon, list) {
  let newResp = document.createElement("li");
  let newRespName = document.createElement("span");
  let newRespLevel = document.createElement("span");
  list.appendChild(newResp);
  newResp.appendChild(newRespName);
  newResp.appendChild(newRespLevel);
  newResp.classList.add("route");
  newRespName.classList.add("name");
  newRespName.innerText = pokemon.name;
  newRespLevel.innerText = `Nvl ${pokemon.minlevel} ~ ${pokemon.maxlevel}`;
}
if (selectedPokemon.routes) {
  selectedPokemon.routes.forEach((resp) => {
    createNewRespLi(resp, respawnList);
  });
}

if (selectedPokemon.dungeon && selectedPokemon.dungeon.length > 0) {
  selectedPokemon.dungeon.forEach((dungeon) => {
    createNewRespLi(dungeon, dungeonList);
  });
} else {
  let alert = document.createElement("span");
  alert.innerText = "Este Pokémon não tem Dungeons.";
  alert.classList.add("alert");
  dungeonList.appendChild(alert);
  dungeonList.style.borderRight = "0px";
}

/* Selected Resp Info */
function createNewAppear(poke, selected) {
  let liResp = document.createElement("li");
  let aHref = document.createElement("a");
  let divAppear = document.createElement("div");
  let spanName = document.createElement("span");
  let imgAppear = document.createElement("img");
  let spanLevel = document.createElement("span");
  showRespDung.appendChild(liResp);
  liResp.appendChild(aHref);
  aHref.appendChild(divAppear);
  divAppear.appendChild(imgAppear);
  divAppear.appendChild(spanName);
  aHref.appendChild(spanLevel);
  spanName.classList.add("name");
  liResp.style.background = `rgba(var(--${poke.types[0]}))`;
  spanName.innerText = poke.name;
  aHref.href = `pokemon.html?id=${poke.numberDex}`;
  spanLevel.innerText = `Nvl. ${selected.minlevel} ~  ${selected.maxlevel}`;
  imgAppear.src = poke.sprite;
}
const title = document.querySelector("#respawn article .title a");
const respawn = document.querySelectorAll("#respawnList li");
const dungeon = document.querySelectorAll("#dungeonList li");
const showRespDung = document.querySelector("#showRespDung ul");
const switchRespDung = document.querySelectorAll("#switchRespDung span");
switchRespDung.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("selected");
    switchRespDung.forEach((elm) => {
      if (elm.innerHTML != e.innerHTML) {
        elm.classList.remove("selected");
      }
    });
    respawnList.classList.toggle("active");
    dungeonList.classList.toggle("active");
  });
});
if (window.innerWidth >= 730) {
  respawn.forEach((resp) => {
    resp.addEventListener("click", () => {
      showRespDung.innerHTML = "";
      resp.classList.add("selected");
      respawn.forEach((elm) => {
        if (elm.innerHTML != resp.innerHTML) {
          elm.classList.remove("selected");
        }
      });
      title.innerText = resp.firstChild.innerText;
      title.href = `respawn.html?name=${title.innerText}`;
      allPokemon.forEach((pokemon) => {
        const selectedRespawn = pokemon.routes.find(
          (r) => r.name.toLowerCase() == title.innerText.toLowerCase()
        );
        if (selectedRespawn) {
          createNewAppear(pokemon, selectedRespawn);
        }
      });
    });
  });
}
if (window.innerWidth >= 730) {
  dungeon.forEach((dung) => {
    console.log(dung);
    dung.addEventListener("click", () => {
      showRespDung.innerHTML = "";
      dung.classList.add("selected");
      dungeon.forEach((elm) => {
        if (elm.innerHTML != dung.innerHTML) {
          elm.classList.remove("selected");
        }
      });
      title.innerText = dung.firstChild.innerText;
      title.href = `dungeon.html?name=${title.innerText}`;
      allPokemon.forEach((pokemon) => {
        if (pokemon.dungeon) {
          const selectedDungeon = pokemon.dungeon.find(
            (d) => d.name.toLowerCase() == title.innerText.toLowerCase()
          );
          if (selectedDungeon) {
            createNewAppear(pokemon, selectedDungeon);
          }
        }
      });
    });
  });
}
