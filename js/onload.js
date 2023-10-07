const body = document.querySelector("body");

// Adicione a classe 'hidden' a todos os filhos do body
const children = body.children;
for (let i = 0; i < children.length; i++) {
  children[i].classList.add("hidden");
}
let section = document.createElement("section");
let div = document.createElement("div");
section.id = "onload";
div.id = "onLoadAnimation";
section.appendChild(div);
body.appendChild(section);

// Remova a classe 'hidden' de todos os filhos do body após o carregamento
window.addEventListener("load", () => {
  console.log("loudou");
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("hidden");
  }
  section.classList.add("hidden");
});
