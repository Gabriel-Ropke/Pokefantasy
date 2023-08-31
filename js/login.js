const inputNameContainer = document.querySelector("div#nameContainer");
const inputName = document.querySelector("input#name");
const inputPasswordContainer = document.querySelector("div#passwordContainer");
const inputPassword = document.querySelector("input#password");
const buttonLogin = document.querySelector("button.login-button");
const showPassword = document.querySelector("svg#eye");
function inputOn(input) {
  if (input.value.length >= 1) {
    input.classList.add("active");
  } else {
    input.classList.remove("active");
  }
}
function inputOut(input, inputContainer, varname, min) {
  if (input.value.length == 0) {
    inputContainer.style.setProperty(varname, "var(--black-light-color)");
  } else if (input.value.length < min) {
    inputContainer.style.setProperty(varname, "rgba(var(--fire))");
  } else {
    inputContainer.style.setProperty(varname, "rgba(var(--grass))");
  }
}
showPassword.onclick = () => {
  if (inputPassword.type == "password") {
    inputPassword.setAttribute("type", "text");
  } else {
    inputPassword.setAttribute("type", "password");
  }
};
inputName.oninput = () => {
  inputOn(inputName);
  if (inputName.value.length >= 5 && inputPassword.value.length >= 6) {
    buttonLogin.disabled = false;
  } else {
    buttonLogin.disabled = true;
  }
};
inputName.addEventListener("focusout", () => {
  inputOut(inputName, inputNameContainer, "--inputName-color", 5);
});
inputPassword.oninput = () => {
  inputOn(inputPassword);
  if (inputName.value.length >= 5 && inputPassword.value.length >= 6) {
    buttonLogin.disabled = false;
  } else {
    buttonLogin.disabled = true;
  }
};
inputPassword.addEventListener("focusout", () => {
  inputOut(inputPassword, inputPasswordContainer, "--inputPassword-color", 6);
});
buttonLogin.onclick = () => {
  localStorage.setItem("name", inputName.value);
  localStorage.setItem("password", inputPassword.value);
};
