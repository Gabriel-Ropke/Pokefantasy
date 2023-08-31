import { allPokemon } from "./database/database.js";
import { allNotices } from "./database/notices.js";
const sectionHome = document.getElementById("home");
const idWrapper = document.createElement("div");
for (let i = 0; i < allNotices.length; i++) {
  let articleNotice = document.createElement("article");
  let aHref = document.createElement("a");
  let img = document.createElement("img");
  let spanNotice = document.createElement("span");
  let h2Title = document.createElement("h2");
  let pText = document.createElement("p");
  if (i == 0) {
    sectionHome.appendChild(articleNotice);
    sectionHome.appendChild(idWrapper);
    articleNotice.id = "principal";
  }
  if (i > 0) {
    idWrapper.appendChild(articleNotice);
  }
  articleNotice.appendChild(aHref);
  aHref.appendChild(img);
  aHref.appendChild(spanNotice);
  spanNotice.appendChild(h2Title);
  spanNotice.appendChild(pText);
  aHref.href = `news.html?id=${allNotices[i].id}`;
  idWrapper.id = "wrapper";
  img.src = allNotices[i].source;
  h2Title.innerText = allNotices[i].title;
  pText.innerHTML = allNotices[i].demo;
}
/* Create Carousel */
const pokemonCarousel = document.getElementById("pokemonCarousel");
for (let i = 0; i < 9; i++) {
  let liPokemon = document.createElement("li");
  let aHref = document.createElement("a");
  let divImage = document.createElement("div");
  let imgPokemon = document.createElement("img");
  let spanBgNumber = document.createElement("span");
  let divInfo = document.createElement("div");
  let h5NameDex = document.createElement("h5");
  let spanName = document.createElement("span");
  let spanNumber = document.createElement("span");
  let spanTypes = document.createElement("span");
  pokemonCarousel.appendChild(liPokemon);
  liPokemon.appendChild(aHref);
  aHref.appendChild(divImage);
  divImage.appendChild(imgPokemon);
  divImage.appendChild(spanBgNumber);
  aHref.appendChild(divInfo);
  divInfo.appendChild(h5NameDex);
  h5NameDex.appendChild(spanName);
  h5NameDex.appendChild(spanNumber);
  divInfo.appendChild(spanTypes);
  liPokemon.classList.add("pokemon");
  divImage.classList.add("image");
  divInfo.classList.add("info");
  spanNumber.classList.add("number");
  spanTypes.classList.add("types");
  aHref.href = `pokemon.html?id=${allPokemon[i].numberDex}`;
  imgPokemon.src = allPokemon[i].shinySprite;
  spanBgNumber.innerText = allPokemon[i].numberDex;
  spanName.innerText = allPokemon[i].name;
  spanNumber.innerText = allPokemon[i].numberDex;
  for (let t = 0; t < allPokemon[i].types.length; t++) {
    let pType = document.createElement("p");
    spanTypes.appendChild(pType);
    pType.innerText = allPokemon[i].types[t];
    pType.style.background = `rgba(var(--${allPokemon[i].types[t]}))`;
  }
}

var pokemon = document.querySelectorAll(".pokemon");
const carouselPrev = document.querySelector("#carouselWrapper .nav-btn.prev");
const carouselNext = document.querySelector("#carouselWrapper .nav-btn.next");

carouselPrev.addEventListener("click", () => {
  pokemonCarousel.insertBefore(pokemon[pokemon.length - 1], pokemon[0]);
  pokemon = document.querySelectorAll(".pokemon");
});
carouselNext.addEventListener("click", () => {
  pokemonCarousel.appendChild(pokemon[0]);
  pokemon = document.querySelectorAll(".pokemon");
});
if (window.innerWidth <= 500) {
  setInterval(() => {
    pokemonCarousel.appendChild(pokemon[0]);
    pokemon = document.querySelectorAll(".pokemon");
  }, 3000);
}
