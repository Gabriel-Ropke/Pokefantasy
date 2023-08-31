import {
  allAbilities,
  allClipPathBorder,
  allDrops,
  allMoves,
  allPokemon,
  allWeakness,
} from "./database/database.js";
import {
  createAbility,
  createDrop,
  createMove,
  createPokemon,
} from "./functionFilter.js";
import {
  acceptedKeys,
  allElementEditorArray,
  closePages,
  mouseDown,
  handleMouseMove,
  handleMouseMoveChild,
  mouseUp,
  returnActualCardToEditElement,
  verifyEditorNumber,
  verifyEditorString,
  setCardProperties,
} from "./functions/functionEditor.js";
// Const & Let - Pages
const homeSelector = document.querySelector("ul#homeSelector");
const cardSelector = document.querySelector("ul#cardSelector");
const allPageSelector = document.querySelectorAll("ul#pageSelector li");
const allPages = document.querySelectorAll("section#selectorSwitch ul");
// Const & Let - Cards
const allCardSelector = document.querySelectorAll("ul#cardSelector li");

// Const & Let - Preview
const elementEditorList = document.querySelector("ul#elementEditorList");
const cardPreview = document.querySelector("article#cardPreview");
const handlePointers = document.querySelector("div#handles");
const dropCardButton = document.querySelector("li#dropCard-Button");
const pokeCardButton = document.querySelector("li#pokeCard-Button");
const moveCardButton = document.querySelector("li#moveCard-Button");
const abilityRowButton = document.querySelector("li#abilityRow-Button");
const elementEditorRadius = allElementEditorArray[0];
const elementEditorClipPath = allElementEditorArray[1];
const elementEditorResize = allElementEditorArray[2];
const elementEditorText = allElementEditorArray[3];
const elementEditorColor = allElementEditorArray[4];
const elementEditorTransform = allElementEditorArray[5];
const elementEditorFilter = allElementEditorArray[6];
let actualCard;
// Const & Let - Editor
const fontSizeInput = document.querySelector(
  "div#fontSize input[type='number']#fontSizeInput"
);
const fontSizeMinus = document.querySelector("div#fontSize span#fontSizeMinus");
const allEditorSection = document.querySelectorAll("section#editor section");
const widthValue = document.querySelector("label span.valueWidth");
const heightValue = document.querySelector("label span.valueHeight");
const editorSizeWidth = document.querySelector("input#editorSizeWidth");
const editorSizeHeight = document.querySelector("input#editorSizeHeight");
const editorContainer = document.querySelector("section#editor");
const borderStyles = document.querySelector("section#borderStyles");
const buttonSaveEditor = document.querySelector("div#preview button");
const colorContainer = document.querySelector("section#color ul");
const colorInput = document.querySelector("section#color input[type='color']");
const grayscaleInput = document.querySelector("section#filter input#grayscale");
const brightnessInput = document.querySelector(
  "section#filter input#brightness"
);
const blurInput = document.querySelector("section#filter input#blur");
const opacityInput = document.querySelector("section#filter input#opacity");
const saturateInput = document.querySelector("section#filter input#saturate");
grayscaleInput.oninput = (e) => {
  currentFilterValue.grayscale = e.target.value;
  applyFilters();
};

brightnessInput.oninput = (e) => {
  currentFilterValue.brightness = e.target.value;
  applyFilters();
};

opacityInput.oninput = (e) => {
  currentFilterValue.opacity = e.target.value;
  applyFilters();
};

saturateInput.oninput = (e) => {
  currentFilterValue.saturate = e.target.value;
  applyFilters();
};
blurInput.oninput = (e) => {
  currentFilterValue.blur = e.target.value;
  applyFilters();
};
let allColorSelector = document.querySelectorAll("section#color ul li");
let elementToEdit = cardPreview;
let currentFilterValue = {
  grayscale: 0,
  brightness: 1,
  opacity: 1,
  saturate: 1,
  blur: 0,
};
let currentTransformValue = {
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  skewX: 0,
  skewY: 0,
};
const pokeCardStyles = {
  borderRadius: 0,
  clipPath: 0,
  width: 300,
  height: 300,
  transform: "",
};
document.body.style.setProperty(
  "--poke-card-borderRadius",
  pokeCardStyles.borderRadius
);
document.body.style.setProperty(
  "--poke-card-clipPath",
  pokeCardStyles.clipPath
);
function applyFiltersTransform() {
  const transformString = `rotate(${currentTransformValue.rotateX}deg, ${currentTransformValue.rotateY}deg, ${currentTransformValue.rotateX}deg) skew(${currentTransformValue.skewX}deg, ${currentTransformValue.skewY}deg)`;
  elementToEdit.style.transform = transformString;
  actualizeLocalStorage(elementToEdit, transformString);
}
function applyFilters() {
  const filterString = `blur(${currentFilterValue.blur}px) grayscale(${currentFilterValue.grayscale}) brightness(${currentFilterValue.brightness}) opacity(${currentFilterValue.opacity}) saturate(${currentFilterValue.saturate})`;
  elementToEdit.style.filter = filterString;
  function actualizeLocalStorage(element, cardStyles) {
    localStorage.setItem(element.dataset.name, JSON.stringify(cardStyles));
  }
  actualizeLocalStorage(elementToEdit, filterString);
}
let fontSize;
let fontWeight;
let writingMode;
let borderTopRight;
let borderTopLeft;
let borderBottomRight;
let borderBottomLeft;
// Code - Pages
for (let page of allPageSelector) {
  page.addEventListener("click", () => {
    editorContainer.classList.remove("active");
    if (page.dataset.page == "pokedex") {
      closePages(allPages);
      cardSelector.classList.add("active");
    } else {
      closePages(allPages);
      homeSelector.classList.add("active");
    }
    page.classList.add("active");

    // Iteração manual para adicionar/remover a classe "active" nos elementos
    for (let actualActive of allPageSelector) {
      if (actualActive.dataset.page !== page.dataset.page) {
        actualActive.classList.remove("active");
      }
    }
  });
}
createDrop(
  allDrops[Math.floor(Math.random() * allDrops.length)],
  dropCardButton,
  false
);
createPokemon(
  allPokemon[Math.floor(Math.random() * allPokemon.length)],
  pokeCardButton,
  false
);
createMove(
  allMoves[Math.floor(Math.random() * allMoves.length)],
  moveCardButton,
  false
);
createAbility(
  allAbilities[Math.floor(Math.random() * allAbilities.length)],
  abilityRowButton,
  false
);
// Code - Preview
for (let i = 0; i < allCardSelector.length; i++) {
  allCardSelector[i].addEventListener("click", () => {
    handlePointers.innerHTML = "";
    handlePointers.style = "";
    cardPreview.style.animation = "switchCard 1s linear";
    elementEditorList.classList.add("active");
    elementEditorClipPath.isActive = true;
    elementEditorColor.isActive = false;
    elementEditorFilter.isActive = true;
    elementEditorRadius.isActive = true;
    elementEditorResize.isActive = true;
    elementEditorText.isActive = false;
    elementEditorTransform.isActive = true;
    createElementEditorArray();
    activeEditor(cardPreview);
    setTimeout(() => {
      cardPreview.innerHTML = "";
      cardPreview.style.clipPath = "";
      if (allCardSelector[i].dataset.card == "poke") {
        createPokemon(
          allPokemon[Math.floor(Math.random() * allPokemon.length)],
          cardPreview,
          false
        );
      } else if (allCardSelector[i].dataset.card == "drop") {
        createDrop(
          allDrops[Math.floor(Math.random() * allDrops.length)],
          cardPreview,
          false
        );
      } else if (allCardSelector[i].dataset.card == "move") {
        createMove(
          allMoves[Math.floor(Math.random() * allMoves.length)],
          cardPreview,
          false
        );
      } else {
        createAbility(
          allAbilities[Math.floor(Math.random() * allAbilities.length)],
          cardPreview,
          false
        );
      }
      actualCard = cardPreview.children[0];
      editorSizeWidth.value = actualCard.style.width;
      editorSizeHeight.value = actualCard.style.height;
      widthValue.innerText = editorSizeWidth.value;
      heightValue.innerText = editorSizeHeight.value;
      elementToEdit = actualCard;
      return actualCard;
    }, 250);
    setTimeout(() => {
      cardPreview.style.animation = "";
      let allCardChild = Array.from(actualCard.children[0].children);
      let activeChild = null;
      function handleMouseMoveChildWrapper(evento) {
        handleMouseMoveChild(evento, activeChild, actualCard);
      }
      function returnActualCardToEditElementWrapper() {
        returnActualCardToEditElement(
          elementToEdit,
          actualCard,
          cardPreview,
          returnActualCardToEditElement
        );
      }
      function activateElement(element) {
        element.classList.add("active");
        activeChild = element;
        elementToEdit = element;
        if (element.tagName == "SPAN" || element.tagName == "P") {
          elementEditorClipPath.isActive = false;
          elementEditorColor.isActive = true;
          elementEditorFilter.isActive = true;
          elementEditorRadius.isActive = false;
          elementEditorResize.isActive = false;
          elementEditorText.isActive = true;
          elementEditorTransform.isActive = true;
          createElementEditorArray();
        }
        if (element.tagName == "DIV") {
          elementEditorClipPath.isActive = true;
          elementEditorColor.isActive = true;
          elementEditorFilter.isActive = true;
          elementEditorRadius.isActive = true;
          elementEditorResize.isActive = false;
          elementEditorText.isActive = false;
          elementEditorTransform.isActive = true;
          createElementEditorArray();
        }
        cardPreview.addEventListener(
          "click",
          returnActualCardToEditElementWrapper
        );
        element.addEventListener("mousedown", () => {
          mouseDown(element, handleMouseMoveChildWrapper);
        });
        document.addEventListener("mouseup", () => {
          mouseUp(element, handleMouseMoveChildWrapper);
        });
        document.onkeydown = (e) => {
          const keysFunction = acceptedKeys[e.key];
          if (keysFunction) {
            keysFunction(
              element,
              element.getBoundingClientRect(),
              cardPreview.getBoundingClientRect()
            );
          }
        };
        // Adicionar event listeners de keydown
      }

      function deactivateElement(element) {
        element.classList.remove("active");
      }

      for (let i = 0; i < allCardChild.length; i++) {
        let element = allCardChild[i];
        element.oncontextmenu = (e) => {
          e.preventDefault();
        };

        element.onclick = () => {
          closePages(allCardChild);
          if (element.classList.contains("active")) {
            deactivateElement(element);
          } else {
            activateElement(element);
            activeEditor(element);
          }
        };
      }
    }, 1000);
    cardPreview.classList.add("active");
  });
}
function createNewColor(color, container) {
  let li = document.createElement("li");
  li.dataset.value = color;
  li.style.background = color;
  li.onclick = () => {
    elementToEdit.style.color = li.dataset.value;
  };
  container.appendChild(li);
  allColorSelector = document.querySelectorAll("section#color ul li");
}
if (localStorage.getItem("allColors")) {
  for (
    let i = 0;
    i < JSON.parse(localStorage.getItem("allColors")).length;
    i++
  ) {
    createNewColor(
      JSON.parse(localStorage.getItem("allColors"))[i],
      colorContainer
    );
  }
}

console.log(allColorSelector);
for (let i = 0; i < allColorSelector.length; i++) {
  allColorSelector[i].style.background = allColorSelector[i].dataset.value;
  allColorSelector[i].onclick = () => {
    elementToEdit.style.color = allColorSelector[i].dataset.value;
  };
}
const buttonSaveColor = document.querySelector(
  "section#color button.save-color-button"
);
colorInput.oninput = (e) => {
  buttonSaveColor.classList.add("active");
  elementToEdit.style.color = e.target.value;
  buttonSaveColor.onclick = () => {
    buttonSaveColor.classList.remove("active");
    createNewColor(e.target.value, colorContainer);
    let allColors = JSON.parse(localStorage.getItem("allColors")) || [];

    allColors.push(e.target.value);

    localStorage.setItem("allColors", JSON.stringify(allColors));
  };
};
function createElementEditorArray() {
  elementEditorList.innerHTML = "";
  allElementEditorArray.forEach((elementEditor) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    let h4 = document.createElement("h4");
    if (elementEditor.isSVG == true) {
      i.innerHTML = elementEditor.svgPath;
      i.classList.add("svg-icon");
    }
    if (elementEditor.isActive == true) {
      li.classList.add("active");
    }
    li.classList.add("elementEditor");
    li.dataset.name = elementEditor.dataName;
    i.id = elementEditor.id;
    h4.innerText = elementEditor.title;
    li.appendChild(i);
    li.appendChild(h4);
    elementEditorList.appendChild(li);
    li.addEventListener("click", () => {
      const dataset = Array.from(allEditorSection).find(
        (section) => section.dataset.editor == li.dataset.name
      );
      closePages(allPageSelector);
      closePages(allEditorSection);
      editorContainer.classList.add("active");
      dataset.classList.add("active");
    });
  });
}
createElementEditorArray();
// Code - Editor
// Clip Path
for (let i = 0; i < allClipPathBorder.length; i++) {
  let newBorder = document.createElement("div");
  newBorder.classList.add("border");
  newBorder.id = allClipPathBorder[i].name;
  newBorder.dataset.borderStyle = allClipPathBorder[i].name;
  borderStyles.appendChild(newBorder);
  newBorder.style.setProperty("--clip-path", allClipPathBorder[i].clipPath);
  newBorder.style.setProperty(
    "--border-bg-color",
    `rgb(var(--${allWeakness[i].name.toLowerCase()}))`
  );
  newBorder.addEventListener("click", () => {
    buttonSaveEditor.classList.add("active");
    elementToEdit.dataset.clipPath = newBorder.id;
    let allPointers;
    let allBorder = document.querySelectorAll(
      "section#borderStyles div.border"
    );
    let elementRect = elementToEdit.getBoundingClientRect();
    newBorder.classList.add("active");
    for (const border of allBorder) {
      if (border.id != newBorder.id) {
        border.classList.remove("active");
      }
    }
    handlePointers.style = "";
    handlePointers.innerHTML = "";
    handlePointers.style.display = "block";
    handlePointers.style.border = "1px solid orange";
    handlePointers.style.width = `${elementRect.width}px`;
    handlePointers.style.height = `${elementRect.height}px`;
    elementToEdit.style.clipPath = allClipPathBorder[i].clipPath;
    for (const allClipPathPointers of allClipPathBorder[i].pointers) {
      let newPointer = document.createElement("div");
      newPointer.style.setProperty(
        "--pointer-bg-color",
        `rgba(var(--${allWeakness[i].name.toLowerCase()}`
      );
      newPointer.classList.add("pointer");
      newPointer.style.left = allClipPathPointers.left;
      newPointer.style.top = allClipPathPointers.top;
      handlePointers.appendChild(newPointer);
      newPointer.addEventListener("mousedown", () =>
        mouseDown(newPointer, handleMouseMoveWrapper)
      );
      document.addEventListener("mouseup", () =>
        mouseUp(newPointer, handleMouseMoveWrapper)
      );
      allPointers = document.querySelectorAll("div#handles div.pointer");
    }
    function handleMouseMoveWrapper(evento) {
      handleMouseMove(evento, elementToEdit, allPointers, handlePointers);
    }
  });
}
// Border Radius
const borderTopRightInput = document.querySelector(
  "section#borderRadius div.borderSide input[type='range']#topRight"
);
const borderBottomLeftInput = document.querySelector(
  "section#borderRadius div.borderSide input[type='range']#bottomLeft"
);
const borderTopLeftInput = document.querySelector(
  "section#borderRadius div.borderSide input[type='range']#topLeft"
);
const borderBottomRightInput = document.querySelector(
  "section#borderRadius div.borderSide input[type='range']#bottomRight"
);
borderTopRightInput.oninput = () => {
  elementToEdit.style.borderTopRightRadius = borderTopRightInput.value + "px";
};
borderTopLeftInput.oninput = () => {
  elementToEdit.style.borderTopLeftRadius = borderTopLeftInput.value + "px";
};
borderBottomRightInput.oninput = () => {
  elementToEdit.style.borderBottomRightRadius =
    borderBottomRightInput.value + "px";
};
borderBottomLeftInput.oninput = () => {
  elementToEdit.style.borderBottomLeftRadius =
    borderBottomLeftInput.value + "px";
};
// Resize
editorSizeWidth.oninput = () => {
  handlePointers.style.width = `${editorSizeWidth.value}px`;
  elementToEdit.style.width = `${editorSizeWidth.value}px`;
  widthValue.innerText = editorSizeWidth.value;
};
editorSizeHeight.oninput = () => {
  handlePointers.style.height = `${editorSizeHeight.value}px`;
  elementToEdit.style.height = `${editorSizeHeight.value}px`;
  heightValue.innerText = editorSizeHeight.value;
};
// Text
const fontSizePlus = document.querySelector("div#fontSize span#fontSizePlus");
fontSizeInput.oninput = () => {
  elementToEdit.style.fontSize = fontSizeInput.value + "px";
};
fontSizeMinus.onclick = () => {
  fontSizeInput.value--;
  elementToEdit.style.fontSize = fontSizeInput.value + "px";
};
fontSizePlus.onclick = () => {
  fontSizeInput.value++;
  elementToEdit.style.fontSize = fontSizeInput.value + "px";
};
const allFontWeightOptions = document.querySelectorAll("div#fontWeight span");
for (let i = 0; i < allFontWeightOptions.length; i++) {
  allFontWeightOptions[i].onclick = () => {
    closePages(allFontWeightOptions);
    allFontWeightOptions[i].classList.add("active");
    elementToEdit.style.fontWeight = allFontWeightOptions[i].dataset.value;
  };
}
const allWritingModeOptions = document.querySelectorAll("div#writingMode span");
console.log(allWritingModeOptions);
for (let i = 0; i < allWritingModeOptions.length; i++) {
  allWritingModeOptions[i].onclick = () => {
    closePages(allWritingModeOptions);
    allWritingModeOptions[i].classList.add("active");
    elementToEdit.style.writingMode = allWritingModeOptions[i].dataset.value;
  };
}
// Save Button
buttonSaveEditor.addEventListener("click", () => {
  handlePointers.innerHTML = "";
  handlePointers.style = "";
  buttonSaveEditor.classList.remove("active");
});

function activeEditor(elementToEdit) {
  const elementStylesCSS = window.getComputedStyle(elementToEdit);
  const actualElementStyles = elementToEdit.style;
  const pokecardd = {
    width: "350px",
    height: "250px",
    color: "gray",
    writingMode: "horizontal-tb",
  };
  const propertyNames = Object.keys(pokecardd);

  for (let i = 0; i < propertyNames.length; i++) {
    const propertyName = propertyNames[i];
    const propertyValue = pokecardd[propertyName];
    document.documentElement.style.setProperty(
      `--${elementToEdit.dataset.name}-${propertyName}`,
      propertyValue
    );
  }
  console.log(elementToEdit);
  // Text
  fontSize = verifyEditorNumber(
    actualElementStyles.fontSize,
    elementStylesCSS.fontSize
  );
  fontSizeInput.value = fontSize;
  fontWeight = verifyEditorNumber(
    actualElementStyles.fontWeight,
    elementStylesCSS.fontWeight
  );
  const activeFontWeightOption = Array.from(allFontWeightOptions).find(
    (option) => parseInt(option.dataset.value) == fontWeight
  );
  writingMode = verifyEditorString(
    actualElementStyles.writingMode,
    "horizontal-tb"
  );
  const activeWritingModeOption = Array.from(allWritingModeOptions).find(
    (option) => option.dataset.value == writingMode
  );
  // Border Radius
  borderTopLeft = verifyEditorNumber(
    actualElementStyles.borderTopLeftRadius,
    elementStylesCSS.borderTopLeftRadius
  );
  borderTopRight = verifyEditorNumber(
    actualElementStyles.borderTopRightRadius,
    elementStylesCSS.borderTopRightRadius
  );
  borderBottomRight = verifyEditorNumber(
    actualElementStyles.borderBottomRightRadius,
    elementStylesCSS.borderBottomRightRadius
  );
  borderBottomLeft = verifyEditorNumber(
    actualElementStyles.borderBottomLeftRadius,
    elementStylesCSS.borderBottomLeftRadius
  );
  borderTopRightInput.value = borderTopRight;
  borderTopLeftInput.value = borderTopLeft;
  borderBottomLeftInput.value = borderBottomLeft;
  borderBottomRightInput.value = borderBottomRight;
  // Clip Path
  const activeClipPath = Array.from(
    document.querySelectorAll("section#borderStyles div.border")
  ).find((border) => border.id === elementToEdit.dataset.clipPath);
  if (activeClipPath) {
    activeClipPath.classList.add("active");
  }
  closePages(allFontWeightOptions);
  if (activeFontWeightOption) {
    activeFontWeightOption.classList.add("active");
  }
  closePages(allWritingModeOptions);
  if (activeWritingModeOption) {
    activeWritingModeOption.classList.add("active");
  }
}
const card = document.querySelector("article.poke-card");
setCardProperties(card, pokeCardStyles);
