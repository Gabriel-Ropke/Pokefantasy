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
} from "./functions/functionCreatePokedex.js";
import {
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
import { db, ref, set, update, get, remove } from "./database/firebase.js";
export function getUser(callback) {
  get(userRef)
    .then((snapshot) => {
      const user = snapshot.val();
      callback(user);
    })
    .catch((error) => {
      console.error("Erro ao obter o usuário:", error);
    });
}
const acceptedKeys = {
  ArrowUp(element, elementRect, containerRect) {
    let top = parseInt(getComputedStyle(element).top);
    if (top - 2 >= 0) {
      element.style.top = top - 2 + "px";
    }
    UpdateUserEditorCardElements("top", elementToEdit.style.top);
  },
  ArrowLeft(element, elementRect, containerRect) {
    let left = parseInt(getComputedStyle(element).left);
    if (left - 2 >= 0) {
      element.style.left = left - 2 + "px";
    }
    UpdateUserEditorCardElements("left", elementToEdit.style.left);
  },
  ArrowRight(element, elementRect, containerRect) {
    let left = parseInt(getComputedStyle(element).left);
    if (left + 2 <= containerRect.width - elementRect.width) {
      element.style.left = left + 2 + "px";
    }
    UpdateUserEditorCardElements("left", elementToEdit.style.left);
  },
  ArrowDown(element, elementRect, containerRect) {
    let top = parseInt(getComputedStyle(element).top);
    if (top + 2 <= containerRect.height - elementRect.height) {
      element.style.top = top + 2 + "px";
    }
    UpdateUserEditorCardElements("top", elementToEdit.style.top);
  },
  Delete(element, elementRect, containerRect) {
    element.style.display = "none";
    element = null;
    UpdateUserEditorCardElements("display", elementToEdit.style.display);
  },
};
async function UpdateUserEditorCardElements(styleName, string) {
  try {
    const ObjectRef = ref(
      db,
      `users/${localStorage.getItem("activeUser")}/${
        actualEditorCard.dataset.name
      }/${elementToEdit.dataset.name}`
    );

    const styleToUpdate = {};
    styleToUpdate[styleName] = string;

    await update(ObjectRef, styleToUpdate);

    console.log("Objeto salvo com sucesso.");
    return "Objeto salvo com sucesso.";
  } catch (error) {
    console.error("Erro ao salvar o objeto:", error);
    throw "Erro ao salvar o objeto.";
  }
}
const userRef = ref(db, "users/" + localStorage.getItem("activeUser"));
getUser((user) => {
  console.log(user.editorColors.length);
  for (let i = 0; i < user.editorColors.length; i++) {
    createNewColor(user.editorColors[i], ColorEditorColorContainer);
  }
});
// Atualize apenas os campos especificados
function updateUserEditorColors(colors) {
  update(userRef, {
    editorColors: colors,
  })
    .then(() => {
      console.log("Usuário atualizado com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao atualizar o usuário:", error);
    });
}
function applyCSSFilter() {
  const filterString = `blur(${currentFilterValue.blur}px) grayscale(${currentFilterValue.grayscale}) brightness(${currentFilterValue.brightness}) opacity(${currentFilterValue.opacity}) saturate(${currentFilterValue.saturate})`;
  elementToEdit.style.filter = filterString;
  UpdateUserEditorCardElements("filter", filterString);
}
function applyCSSTransform() {
  const transformString = `rotateX(${currentTransformValue.rotateX}deg) rotateY(${currentTransformValue.rotateY}deg) rotateZ(${currentTransformValue.rotateZ}deg) skew(${currentTransformValue.skewX}deg, ${currentTransformValue.skewY}deg)`;
  elementToEdit.style.transform = transformString;
  UpdateUserEditorCardElements("transform", transformString);
}

// Const & Let - Pages
const todasAsListasLaterais = document.querySelectorAll(
  "section#selectorSwitch ul"
);
const listaDeHomeParaEditar = document.querySelector("ul#homeSelector");
const listaDeCardsParaEditar = document.querySelector("ul#cardSelector");
const todosOsSeletoresDePagina =
  document.querySelectorAll("ul#pageSelector li");
// Const & Let - Cards
const todasAsCardsDaListaLateral =
  document.querySelectorAll("ul#cardSelector li");

// Const & Let - Preview
const ResetEditButton = document.querySelector("span#resetCard");
const EditionObjectList = document.querySelector("ul#elementEditorList");
const EditorObjectContainer = document.querySelector("article#cardPreview");
const PointersToEditClipPath = document.querySelector("div#handles");
const DropCardToEdit = document.querySelector("li#dropCard-Button");
const PokeCardToEdit = document.querySelector("li#pokeCard-Button");
const MoveCardToEdit = document.querySelector("li#moveCard-Button");
const AbilityRowToEdit = document.querySelector("li#abilityRow-Button");
const SelectorBorderRadiusEditor = allElementEditorArray[0];
const SelectorClipPathEditor = allElementEditorArray[1];
const SelectorResizeEditor = allElementEditorArray[2];
const SelectorTextEditor = allElementEditorArray[3];
const SelectorColorEditor = allElementEditorArray[4];
const SelectorTransformEditor = allElementEditorArray[5];
const SelectorFilterEditor = allElementEditorArray[6];
let actualEditorCard;
// Const & Let - Editor
ResetEditButton.onclick = () => {
  const CardRef = ref(
    db,
    "users/" +
      localStorage.getItem("activeUser") +
      "/" +
      actualEditorCard.dataset.name
  );
  remove(CardRef)
    .then(() => {
      console.log(CardRef);
      console.log(elementToEdit.dataset.name);
      console.log("Nó excluído com sucesso.");
    })
    .catch((error) => {
      console.error("Erro ao excluir o nó:", error);
    });
  elementToEdit.style = "";
};
const TextEditorFontSizeInput = document.querySelector(
  "div#fontSize input[type='number']#fontSizeInput"
);
const TextEditorFontSizeInputMinus = document.querySelector(
  "div#fontSize span#fontSizeMinus"
);
const AllEditorSection = document.querySelectorAll("section#editor section");
const ResizeEditorWidthValue = document.querySelector("label span.valueWidth");
const ResizeEditorHeightValue = document.querySelector(
  "label span.valueHeight"
);
const ResizeEditorWidthInput = document.querySelector("input#editorSizeWidth");
const ResizeEditorHeightInput = document.querySelector(
  "input#editorSizeHeight"
);
const EditorContainer = document.querySelector("section#editor");
const BorderStylesContainer = document.querySelector("section#borderStyles");
const ColorEditorColorContainer = document.querySelector("section#color ul");
const ColorEditorColorInput = document.querySelector(
  "section#color input[type='color']"
);
const FilterEditorGrayscaleInput = document.querySelector(
  "section#filter input#grayscale"
);
const FilterEditorBrightnessInput = document.querySelector(
  "section#filter input#brightness"
);
const FilterEditorBlurInput = document.querySelector(
  "section#filter input#blur"
);
const FilterEditorOpacityInput = document.querySelector(
  "section#filter input#opacity"
);
const FilterEditorSaturateInput = document.querySelector(
  "section#filter input#saturate"
);
const TransformEditorRotateXInput = document.querySelector(
  "section#transform input#rotateX"
);
const TransformEditorRotateYInput = document.querySelector(
  "section#transform input#rotateY"
);
const TransformEditorRotateZInput = document.querySelector(
  "section#transform input#rotateZ"
);
const TransformEditorSkewXInput = document.querySelector(
  "section#transform input#skewX"
);
const TransformEditorSkewYInput = document.querySelector(
  "section#transform input#skewY"
);
let AllColorSelector = document.querySelectorAll("section#color ul li");
let elementToEdit;
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
// Code - Pages
for (let page of todosOsSeletoresDePagina) {
  page.addEventListener("click", () => {
    EditorContainer.classList.remove("active");
    if (page.dataset.page == "pokedex") {
      closePages(todasAsListasLaterais);
      listaDeCardsParaEditar.classList.add("active");
    } else {
      closePages(todasAsListasLaterais);
      listaDeHomeParaEditar.classList.add("active");
    }
    page.classList.add("active");

    // Iteração manual para adicionar/remover a classe "active" nos elementos
    for (let actualActive of todosOsSeletoresDePagina) {
      if (actualActive.dataset.page !== page.dataset.page) {
        actualActive.classList.remove("active");
      }
    }
  });
}
createDrop(
  allDrops[Math.floor(Math.random() * allDrops.length)],
  DropCardToEdit,
  false
);
createPokemon(
  allPokemon[Math.floor(Math.random() * allPokemon.length)],
  PokeCardToEdit,
  false
);
createMove(
  allMoves[Math.floor(Math.random() * allMoves.length)],
  MoveCardToEdit,
  false
);
createAbility(
  allAbilities[Math.floor(Math.random() * allAbilities.length)],
  AbilityRowToEdit,
  false
);
// Code - Preview
for (let i = 0; i < todasAsCardsDaListaLateral.length; i++) {
  todasAsCardsDaListaLateral[i].addEventListener("click", () => {
    PointersToEditClipPath.innerHTML = "";
    PointersToEditClipPath.style = "";
    EditorObjectContainer.style.animation = "switchCard 1s linear";
    EditionObjectList.classList.add("active");
    SelectorClipPathEditor.isActive = true;
    SelectorColorEditor.isActive = false;
    SelectorFilterEditor.isActive = true;
    SelectorBorderRadiusEditor.isActive = true;
    SelectorResizeEditor.isActive = true;
    SelectorTextEditor.isActive = false;
    SelectorTransformEditor.isActive = true;
    createElementEditorArray();
    activeEditor(EditorObjectContainer);
    setTimeout(() => {
      EditorObjectContainer.innerHTML = "";
      EditorObjectContainer.style.clipPath = "";
      if (todasAsCardsDaListaLateral[i].dataset.card == "poke") {
        createPokemon(
          allPokemon[Math.floor(Math.random() * allPokemon.length)],
          EditorObjectContainer,
          false
        );
      } else if (todasAsCardsDaListaLateral[i].dataset.card == "drop") {
        createDrop(
          allDrops[Math.floor(Math.random() * allDrops.length)],
          EditorObjectContainer,
          false
        );
      } else if (todasAsCardsDaListaLateral[i].dataset.card == "move") {
        createMove(
          allMoves[Math.floor(Math.random() * allMoves.length)],
          EditorObjectContainer,
          false
        );
      } else {
        createAbility(
          allAbilities[Math.floor(Math.random() * allAbilities.length)],
          EditorObjectContainer,
          false
        );
      }
      actualEditorCard = EditorObjectContainer.children[0];
      ResizeEditorWidthInput.value = actualEditorCard.style.width;
      ResizeEditorHeightInput.value = actualEditorCard.style.height;
      ResizeEditorWidthValue.innerText = ResizeEditorWidthInput.value;
      ResizeEditorHeightValue.innerText = ResizeEditorHeightInput.value;
      elementToEdit = actualEditorCard;
      const editRef = ref(
        db,
        "users/" +
          localStorage.getItem("activeUser") +
          "/" +
          actualEditorCard.dataset.name
      );
      return actualEditorCard;
    }, 250);
    setTimeout(() => {
      EditorObjectContainer.style.animation = "";
      let allCardChild = Array.from(actualEditorCard.children[0].children);
      let activeChild = null;
      function handleMouseMoveChildWrapper(evento) {
        handleMouseMoveChild(evento, activeChild, actualEditorCard);
        UpdateUserEditorCardElements("top", activeChild.style.top);
        UpdateUserEditorCardElements("left", activeChild.style.left);
      }
      function returnActualCardToEditElementWrapper() {
        returnActualCardToEditElement(
          elementToEdit,
          actualEditorCard,
          EditorObjectContainer,
          returnActualCardToEditElement
        );
      }
      function activateElement(element) {
        element.classList.add("active");
        activeChild = element;
        elementToEdit = element;
        if (element.tagName == "SPAN" || element.tagName == "P") {
          SelectorClipPathEditor.isActive = false;
          SelectorColorEditor.isActive = true;
          SelectorFilterEditor.isActive = true;
          SelectorBorderRadiusEditor.isActive = false;
          SelectorResizeEditor.isActive = false;
          SelectorTextEditor.isActive = true;
          SelectorTransformEditor.isActive = true;
          createElementEditorArray();
        }
        if (element.tagName == "DIV") {
          SelectorClipPathEditor.isActive = false;
          SelectorColorEditor.isActive = true;
          SelectorFilterEditor.isActive = true;
          SelectorBorderRadiusEditor.isActive = true;
          SelectorResizeEditor.isActive = false;
          SelectorTextEditor.isActive = false;
          SelectorTransformEditor.isActive = true;
          createElementEditorArray();
        }
        EditorObjectContainer.addEventListener(
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
              EditorObjectContainer.getBoundingClientRect()
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
          EditorContainer.classList.remove("active");
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
    EditorObjectContainer.classList.add("active");
  });
}
function createNewColor(color, container) {
  let li = document.createElement("li");
  li.dataset.value = color;
  li.style.background = color;
  li.onclick = () => {
    console.log("mudou a cor");
    elementToEdit.style.color = li.dataset.value;
    UpdateUserEditorCardElements("color", li.dataset.value);
  };
  container.appendChild(li);
  AllColorSelector = document.querySelectorAll("section#color ul li");
}
console.log(AllColorSelector);
for (let i = 0; i < AllColorSelector.length; i++) {
  AllColorSelector[i].style.background = AllColorSelector[i].dataset.value;
}
const buttonSaveColor = document.querySelector(
  "section#color button.save-color-button"
);
ColorEditorColorInput.oninput = (e) => {
  buttonSaveColor.classList.add("active");
  elementToEdit.style.color = e.target.value;
  buttonSaveColor.onclick = () => {
    UpdateUserEditorCardElements("color", e.target.value);
    buttonSaveColor.classList.remove("active");
    createNewColor(e.target.value, ColorEditorColorContainer);
    allColors.push(e.target.value);
    updateUserEditorColors(allColors);
  };
};
function createElementEditorArray() {
  EditionObjectList.innerHTML = "";
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
    EditionObjectList.appendChild(li);
    li.addEventListener("click", () => {
      const dataset = Array.from(AllEditorSection).find(
        (section) => section.dataset.editor == li.dataset.name
      );
      closePages(todosOsSeletoresDePagina);
      closePages(AllEditorSection);
      EditorContainer.classList.add("active");
      dataset.classList.add("active");
    });
  });
}
createElementEditorArray();
// Code - Editor
// String Editors
FilterEditorGrayscaleInput.value = "0";
FilterEditorBrightnessInput.value = "1";
FilterEditorOpacityInput.value = "1";
FilterEditorBlurInput.value = "0";
FilterEditorSaturateInput.value = "1";
TransformEditorRotateXInput.oninput = (e) => {
  currentTransformValue.rotateX = e.target.value;
  applyCSSTransform();
};
TransformEditorRotateYInput.oninput = (e) => {
  currentTransformValue.rotateY = e.target.value;
  applyCSSTransform();
};
TransformEditorRotateZInput.oninput = (e) => {
  currentTransformValue.rotateZ = e.target.value;
  applyCSSTransform();
};
TransformEditorSkewXInput.oninput = (e) => {
  currentTransformValue.skewX = e.target.value;
  applyCSSTransform();
};
TransformEditorSkewYInput.oninput = (e) => {
  currentTransformValue.skewY = e.target.value;
  applyCSSTransform();
};
FilterEditorGrayscaleInput.oninput = (e) => {
  currentFilterValue.grayscale = e.target.value;
  applyCSSFilter();
};
FilterEditorBrightnessInput.oninput = (e) => {
  currentFilterValue.brightness = e.target.value;
  applyCSSFilter();
};
FilterEditorOpacityInput.oninput = (e) => {
  currentFilterValue.opacity = e.target.value;
  applyCSSFilter();
};

FilterEditorSaturateInput.oninput = (e) => {
  currentFilterValue.saturate = e.target.value;
  applyCSSFilter();
};
FilterEditorBlurInput.oninput = (e) => {
  currentFilterValue.blur = e.target.value;
  applyCSSFilter();
};
// Clip Path
for (let i = 0; i < allClipPathBorder.length; i++) {
  let newBorder = document.createElement("div");
  newBorder.classList.add("border");
  newBorder.id = allClipPathBorder[i].name;
  newBorder.dataset.borderStyle = allClipPathBorder[i].name;
  BorderStylesContainer.appendChild(newBorder);
  newBorder.style.setProperty("--clip-path", allClipPathBorder[i].clipPath);
  newBorder.style.setProperty(
    "--border-bg-color",
    `rgb(var(--${allWeakness[i].name.toLowerCase()}))`
  );
  newBorder.addEventListener("click", () => {
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
    PointersToEditClipPath.style = "";
    PointersToEditClipPath.innerHTML = "";
    PointersToEditClipPath.style.display = "block";
    PointersToEditClipPath.style.border = "1px solid orange";
    PointersToEditClipPath.style.width = `${elementRect.width}px`;
    PointersToEditClipPath.style.height = `${elementRect.height}px`;
    elementToEdit.style.clipPath = allClipPathBorder[i].clipPath;
    UpdateUserEditorCardElements("clipPath", allClipPathBorder[i].clipPath);
    for (const allClipPathPointers of allClipPathBorder[i].pointers) {
      let newPointer = document.createElement("div");
      newPointer.style.setProperty(
        "--pointer-bg-color",
        `rgba(var(--${allWeakness[i].name.toLowerCase()}`
      );
      newPointer.classList.add("pointer");
      newPointer.style.left = allClipPathPointers.left;
      newPointer.style.top = allClipPathPointers.top;
      PointersToEditClipPath.appendChild(newPointer);
      newPointer.addEventListener("mousedown", () =>
        mouseDown(newPointer, handleMouseMoveWrapper)
      );
      document.addEventListener("mouseup", () =>
        mouseUp(newPointer, handleMouseMoveWrapper)
      );
      allPointers = document.querySelectorAll("div#handles div.pointer");
    }
    function handleMouseMoveWrapper(evento) {
      handleMouseMove(
        evento,
        elementToEdit,
        allPointers,
        PointersToEditClipPath
      );
      UpdateUserEditorCardElements(
        "clipPath",
        `polygon(${elementToEdit.style.clipPath})`
      );
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
  UpdateUserEditorCardElements(
    "borderTopRight",
    borderTopRightInput.value + "px"
  );
};
borderTopLeftInput.oninput = () => {
  elementToEdit.style.borderTopLeftRadius = borderTopLeftInput.value + "px";
  UpdateUserEditorCardElements(
    "borderTopLeft",
    borderTopLeftInput.value + "px"
  );
};
borderBottomRightInput.oninput = () => {
  elementToEdit.style.borderBottomRightRadius =
    borderBottomRightInput.value + "px";
  UpdateUserEditorCardElements(
    "borderBottomRight",
    borderBottomRightInput.value + "px"
  );
};
borderBottomLeftInput.oninput = () => {
  elementToEdit.style.borderBottomLeftRadius =
    borderBottomLeftInput.value + "px";
  UpdateUserEditorCardElements(
    "borderBottomLeft",
    borderBottomLeftInput.value + "px"
  );
};
// Resize
ResizeEditorWidthInput.oninput = () => {
  PointersToEditClipPath.style.width = `${ResizeEditorWidthInput.value}px`;
  elementToEdit.style.width = `${ResizeEditorWidthInput.value}px`;
  ResizeEditorWidthValue.innerText = ResizeEditorWidthInput.value;
  UpdateUserEditorCardElements("width", `${ResizeEditorWidthInput.value}px`);
};
ResizeEditorHeightInput.oninput = () => {
  PointersToEditClipPath.style.height = `${ResizeEditorHeightInput.value}px`;
  elementToEdit.style.height = `${ResizeEditorHeightInput.value}px`;
  ResizeEditorHeightValue.innerText = ResizeEditorHeightInput.value;
  UpdateUserEditorCardElements("height", `${ResizeEditorHeightInput.value}px`);
};
// Text
const fontSizePlus = document.querySelector("div#fontSize span#fontSizePlus");
TextEditorFontSizeInput.oninput = () => {
  elementToEdit.style.fontSize = TextEditorFontSizeInput.value + "px";
  UpdateUserEditorCardElements(
    "fontSize",
    TextEditorFontSizeInput.value + "px"
  );
};
TextEditorFontSizeInputMinus.onclick = () => {
  TextEditorFontSizeInput.value--;
  elementToEdit.style.fontSize = TextEditorFontSizeInput.value + "px";
  UpdateUserEditorCardElements(
    "fontSize",
    TextEditorFontSizeInput.value + "px"
  );
};
fontSizePlus.onclick = () => {
  TextEditorFontSizeInput.value++;
  elementToEdit.style.fontSize = TextEditorFontSizeInput.value + "px";
  UpdateUserEditorCardElements(
    "fontSize",
    TextEditorFontSizeInput.value + "px"
  );
};
const allFontWeightOptions = document.querySelectorAll("div#fontWeight span");
for (let i = 0; i < allFontWeightOptions.length; i++) {
  allFontWeightOptions[i].onclick = () => {
    closePages(allFontWeightOptions);
    allFontWeightOptions[i].classList.add("active");
    elementToEdit.style.fontWeight = allFontWeightOptions[i].dataset.value;
    UpdateUserEditorCardElements(
      "fontWeight",
      allFontWeightOptions[i].dataset.value
    );
  };
}
const allWritingModeOptions = document.querySelectorAll("div#writingMode span");
console.log(allWritingModeOptions);
for (let i = 0; i < allWritingModeOptions.length; i++) {
  allWritingModeOptions[i].onclick = () => {
    closePages(allWritingModeOptions);
    allWritingModeOptions[i].classList.add("active");
    elementToEdit.style.writingMode = allWritingModeOptions[i].dataset.value;
    UpdateUserEditorCardElements(
      "writingMode",
      allWritingModeOptions[i].dataset.value
    );
  };
}
function activeEditor(elementToEdit) {
  console.log(elementToEdit);
  const elementStylesCSS = window.getComputedStyle(elementToEdit);
  const actualElementStyles = elementToEdit.style;
  // Text
  TextEditorFontSizeInput.value = verifyEditorNumber(
    actualElementStyles.fontSize,
    elementStylesCSS.fontSize
  );
  const activeFontWeightOption = Array.from(allFontWeightOptions).find(
    (option) =>
      parseInt(option.dataset.value) ==
      verifyEditorNumber(
        actualElementStyles.fontWeight,
        elementStylesCSS.fontWeight
      )
  );
  const activeWritingModeOption = Array.from(allWritingModeOptions).find(
    (option) =>
      option.dataset.value ==
      verifyEditorString(actualElementStyles.writingMode, "horizontal-tb")
  );
  // Border Radius
  borderTopLeftInput.value = verifyEditorNumber(
    actualElementStyles.borderTopLeftRadius,
    elementStylesCSS.borderTopLeftRadius
  );
  borderTopRightInput.value = verifyEditorNumber(
    actualElementStyles.borderTopRightRadius,
    elementStylesCSS.borderTopRightRadius
  );
  borderBottomLeftInput.value = verifyEditorNumber(
    actualElementStyles.borderBottomLeftRadius,
    elementStylesCSS.borderBottomLeftRadius
  );
  borderBottomRightInput.value = verifyEditorNumber(
    actualElementStyles.borderBottomRightRadius,
    elementStylesCSS.borderBottomRightRadius
  );
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
