export const acceptedKeys = {
  ArrowUp(element, elementRect, containerRect) {
    let top = parseInt(getComputedStyle(element).top);
    if (top - 2 >= 0) {
      element.style.top = top - 2 + "px";
    }
  },
  ArrowLeft(element, elementRect, containerRect) {
    let left = parseInt(getComputedStyle(element).left);
    if (left - 2 >= 0) {
      element.style.left = left - 2 + "px";
    }
  },
  ArrowRight(element, elementRect, containerRect) {
    let left = parseInt(getComputedStyle(element).left);
    if (left + 2 <= containerRect.width - elementRect.width) {
      element.style.left = left + 2 + "px";
    }
  },
  ArrowDown(element, elementRect, containerRect) {
    let top = parseInt(getComputedStyle(element).top);
    if (top + 2 <= containerRect.height - elementRect.height) {
      element.style.top = top + 2 + "px";
    }
  },
  Delete(element, elementRect, containerRect) {
    element.style.display = "none";
    element = null;
  },
};
export function onDragPercentToPointers(evento, pointer, containerToRect) {
  const containerRect = containerToRect.getBoundingClientRect();
  const pointerRect = pointer.getBoundingClientRect();
  const objectWidth = pointerRect.width;
  const objectHeight = pointerRect.height;

  let percentX =
    (evento.clientX - containerRect.left) / (containerRect.width - objectWidth);
  let percentY =
    (evento.clientY - containerRect.top) /
    (containerRect.height - objectHeight);

  percentX *= 100;
  percentY *= 100;

  percentX = Math.min(100, Math.max(0, percentX));
  percentY = Math.min(100, Math.max(0, percentY));

  pointer.style.left = `${percentX}%`;
  pointer.style.top = `${percentY}%`;
}
export function onDragPercent(evento, object, containerToRect) {
  const containerRect = containerToRect.getBoundingClientRect();
  const objectRect = object.getBoundingClientRect();
  const objectWidth = objectRect.width;
  const objectHeight = objectRect.height;
  object.style.transform = "translate(0, 0)";

  let percentX =
    (evento.clientX - containerRect.left - objectWidth / 2) /
    (containerRect.width - objectWidth);
  let percentY =
    (evento.clientY - containerRect.top - objectHeight / 2) /
    (containerRect.height - objectHeight);

  percentX *= 100;
  percentY *= 100;

  // Mantém o objeto dentro dos limites do contêiner
  percentX = Math.min(
    100 - (objectWidth / containerRect.width) * 100,
    Math.max(0, percentX)
  );
  percentY = Math.min(
    100 - (objectHeight / containerRect.height) * 100,
    Math.max(0, percentY)
  );
  object.style.left = `${percentX}%`;
  object.style.top = `${percentY}%`;
}
export let handleMouseMove = (
  evento,
  cardPreview,
  allPointers,
  containerToRect
) => {
  let newClipPath = "";
  for (let movePointer of allPointers) {
    if (newClipPath === "") {
      newClipPath = movePointer.style.left + " " + movePointer.style.top;
    } else {
      newClipPath =
        newClipPath +
        "," +
        movePointer.style.left +
        " " +
        movePointer.style.top;
    }
    if (movePointer.isDragging) {
      onDragPercentToPointers(evento, movePointer, containerToRect);
    }
  }
  cardPreview.style.clipPath = `polygon(${newClipPath})`;
};
export let handleMouseMoveChild = (event, child, container) => {
  if (child.isDragging) {
    onDragPercent(event, child, container);
  }
};
export function mouseDown(pointer, documentAddFunction) {
  pointer.isDragging = true;
  pointer.classList.add("active");
  document.addEventListener("mousemove", documentAddFunction);
}

export function mouseUp(pointer, documentAddFunction) {
  pointer.isDragging = false;
  pointer.classList.remove("active");
  document.removeEventListener("mousemove", documentAddFunction);
}
export function closePages(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].classList.remove("active");
  }
}
export function returnActualCardToEditElement(
  actualEditElement,
  actualCard,
  constToRemoveEvent,
  documentAddFunction
) {
  actualEditElement = actualCard;
  constToRemoveEvent.removeEventListener("click", documentAddFunction);
  return actualEditElement;
}
export function verifyEditorNumber(actualStyles, CSSStyles) {
  let variable;
  if (actualStyles) {
    variable = turnToNumber(actualStyles);
  } else {
    variable = turnToNumber(CSSStyles);
  }
  return variable;
}
export function verifyEditorString(elementStylesCSS, string) {
  let variable;
  if (elementStylesCSS) {
    variable = elementStylesCSS;
  } else {
    variable = string;
  }
  return variable;
}
function turnToNumber(value) {
  return parseInt(value);
}
export function setCardProperties(card, cardStyles) {
  for (let i = 0; i < Object.keys(cardStyles).length; i++) {
    let objectKey = Object.keys(cardStyles)[i];
    document.body.style.setProperty(
      `--${card.dataset.cardType}-${objectKey}`,
      cardStyles[objectKey]
    );
  }
}
export const allElementEditorArray = [
  {
    dataName: "radius",
    id: "radius",
    title: "radius",
    isSVG: false,
    isActive: true,
    svgPath: "",
  },
  {
    dataName: "clipPath",
    id: "pentagon",
    title: "clip Path",
    isSVG: false,
    isActive: true,
    svgPath: "",
  },
  {
    dataName: "resize",
    id: "",
    title: "Resize",
    isSVG: true,
    isActive: true,
    svgPath:
      "<svg xmlns='http://www.w3.org/2000/svg' height='35px' viewBox='0 0 512 512'><path d='M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z'/></svg>",
  },
  {
    dataName: "text",
    id: "text",
    title: "Text",
    isSVG: true,
    isActive: true,
    svgPath:
      "<svg xmlns='http://www.w3.org/2000/svg' height='35px' viewBox='0 0 448 512'><path d='M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z'/></svg>",
  },
  {
    dataName: "color",
    id: "color",
    title: "Color",
    isSVG: true,
    isActive: true,
    svgPath:
      "<svg xmlns='http://www.w3.org/2000/svg' height='35px' viewBox='0 0 512 512'><path d='M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z'/></svg>",
  },
  {
    dataName: "transform",
    id: "transform",
    title: "transform",
    isSVG: true,
    isActive: true,
    svgPath:
      "<svg xmlns='http://www.w3.org/2000/svg' height='35px' viewBox='0 0 512 512'><path d='M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z'/></svg>",
  },
  {
    dataName: "filter",
    id: "filter",
    title: "Filter",
    isSVG: true,
    isActive: true,
    svgPath:
      "<svg xmlns='http://www.w3.org/2000/svg' height='35px' viewBox='0 0 512 512'><path d='M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z'/></svg>",
  },
];
