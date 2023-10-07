const SlideWrapper = document.querySelector("#slideWrapper");
const SlideButtonPreview = document.querySelector("#sliderPreview");
const SlideButtonNext = document.querySelector("#sliderNext");
const allSlideInputRadio = document.querySelectorAll("input[type='radio']");
const SlideInputRadioContainer = document.querySelector("#inputRadioContainer");
const allSlideItems = document.querySelectorAll("li.slide-item");
const SlideList = document.querySelector("ul#slideList");
let controlButtons;
const state = {
  startingPoint: 0, // ver se pode tirar dps
  LastPosition: 0,
  CurrentPosition: 0,
  movement: 0, // ver se pode tirar dps
  currentSlideIndex: 0,
};
function translateSlide({ position }) {
  SlideList.style.transform = `translateX(${position}px)`;
}
function getCenterPosition({ index }) {
  const slideWidth = allSlideItems[index].clientWidth;
  const windowWidth = document.body.clientWidth;
  const margin = (windowWidth - slideWidth) / 2;
  const position = margin - index * slideWidth;
  return position;
}
function activeControlRadio({ index }) {
  controlButtons[index].checked = true;
}
function setVisibleSlide({ index, animate }) {
  const position = getCenterPosition({ index: index });
  state.currentSlideIndex = index;
  SlideList.style.transition =
    animate === true ? "transform 0.5s ease" : "none";
  activeControlRadio({ index: index });
  translateSlide({ position: position });
}
function nextSlide() {
  setVisibleSlide({ index: state.currentSlideIndex + 1, animate: true });
}
function previewSlide() {
  setVisibleSlide({ index: state.currentSlideIndex - 1, animate: true });
}
function createControlRadios() {
  for (let i = 0; i < allSlideItems.length; i++) {
    let controlRadio = document.createElement("input");
    let controlRadioLabel = document.createElement("label");
    controlRadio.type = "radio";
    controlRadio.name = "sliderRadio";
    controlRadio.id = `radio${i}`;
    controlRadioLabel.setAttribute("for", `radio${i}`);
    controlRadio.onclick = () => {
      setVisibleSlide({ index: i, animate: true });
    };
    if (i == 1) {
      controlRadio.checked = true;
    }
    SlideInputRadioContainer.appendChild(controlRadio);
    SlideInputRadioContainer.appendChild(controlRadioLabel);
  }
  controlButtons = document.querySelectorAll("#inputRadioContainer input");
}
function slideListTranstionEnd() {
  if (state.currentSlideIndex == SlideList.length - 1) {
    setVisibleSlide({ index: 1, animate: false });
  }
}
function setListener() {
  SlideButtonNext.onclick = () => {
    nextSlide();
  };
  SlideButtonPreview.onclick = () => {
    previewSlide();
  };
  SlideList.addEventListener("transitionend", slideListTranstionEnd);
}
function initSlider() {
  createControlRadios();
  setListener();
  setVisibleSlide({ index: 0, animate: true });
}
initSlider();
