const moveset = document.getElementById("moveset");
const movesetClose = document.querySelector("#moveset p");
const moves = document.querySelectorAll("#moveset ul li");
const move = document.getElementById("move");
const moveClose = document.querySelector("#move b");
const infoContainer = document.getElementById("infos");
movesetClose.addEventListener("click", () => {
  moveset.classList.toggle("closed");
  if (
    moveset.classList.contains("closed") == false &&
    window.innerWidth <= 320
  ) {
    infoContainer.classList.add("closed");
  } else {
    infoContainer.classList.remove("closed");
  }
});
moves.forEach((e) => {
  e.addEventListener("click", () => {
    move.classList.remove("closed");
  });
});
if (window.innerWidth <= 320) {
  moveset.classList.add("closed");
}
moveClose.addEventListener("click", () => {
  move.classList.toggle("closed");
  localStorage.setItem("moveView", closed);
});
const evolutionListener = document.querySelectorAll("#evolutionary img");
evolutionListener.forEach((e) => {
  e.addEventListener("click", () => {
    localStorage.setItem("selectedPokemon", e.id);
  });
});
const drops = document.querySelectorAll("#drops ul li");
drops.forEach((e) => {
  e.addEventListener("click", () => {
    localStorage.setItem("selectedDrop", e.innerText);
  });
});
const abilities = document.querySelectorAll(".pseudo-list ul li .abilities a");
abilities.forEach((e) => {
  e.addEventListener("click", () => {
    localStorage.setItem("selectedAbility", e.innerText);
  });
});
