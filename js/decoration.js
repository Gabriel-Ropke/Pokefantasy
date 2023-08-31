import { RandomTypeColor, principalColor } from "./importantConsts.js";
let userLogin;
let username;
let userImg;
if (localStorage.getItem("principalColor")) {
  document.body.style.setProperty("--principal-color", principalColor);
}
if (localStorage.getItem("name")) {
  username = localStorage.getItem("name");
  userImg = "img/moves/flamethrower.jpg";
  userLogin = true;
} else {
  userLogin = false;
}

/* Array to create li */
const notUserInnertext = ["Fazer Login"];
const notUserLinks = ["login.html"];
const userAccessInnertext = ["conta", "configurações", "sair"];
const userAccessLinks = ["account.html", "configurations.html", "index.html"];
const headerListArray = ["index", "pokedex", "infos"];
const footerSocial = ["discord", "twitter", "youtube"];
const footerLinks = ["FAQ", "Sobre Nós", "Sei lá", "Sei lá"];
/* Header Create Items */
const header = document.querySelector("header");
if (header) {
  /* Only User == True */
  const headerUserImg = document.createElement("img");
  const userImageContainer = document.createElement("div");
  const headerUserName = document.createElement("span");
  const headerUserAccess = document.createElement("ul");
  /* Only User == False */
  const headerLoginLink = document.createElement("a");
  /* Header Elements */
  const navbarSwitchButton = document.createElement("button");
  const headerNavbar = document.createElement("nav");
  const headerLogoLink = document.createElement("a");
  const headerLogoImg = document.createElement("img");
  const headerNavbarCover = document.createElement("div");
  /* Header Items id */
  navbarSwitchButton.id = "navbarSwitch";
  headerLogoLink.id = "imgLogoLink";
  headerLogoLink.href = "index.html";
  headerLogoImg.src = "img/general/logo.png";
  headerLogoImg.id = "headerLogoImg";
  headerUserImg.id = "headerUserImg";
  headerUserAccess.id = "userAccess";
  headerNavbarCover.id = "navbarCover";
  /* Check for create User Access Pages */
  if (userLogin == true) {
    headerUserImg.src = userImg;
  } else {
    headerUserImg.src = "img/moves/bubblebeam.jpg";
  }
  if (userLogin == true) {
    for (let i = 0; i < userAccessInnertext.length; i++) {
      let li = document.createElement("li");
      let aHref = document.createElement("a");
      aHref.innerText = userAccessInnertext[i];
      aHref.href = userAccessLinks[i];
      if (userAccessLinks[i] == "index.html") {
        console.log("batata");
        li.onclick = () => {
          localStorage.removeItem("favoritePokemon");
          localStorage.removeItem("isShiny");
          localStorage.removeItem("name");
          localStorage.removeItem("pokedexIsShiny");
          localStorage.removeItem("password");
          localStorage.removeItem("principalColor");
        };
      }
      li.appendChild(aHref);
      headerUserAccess.appendChild(li);
    }
  } else {
    for (let i = 0; i < notUserInnertext.length; i++) {
      let li = document.createElement("li");
      let aHref = document.createElement("a");
      aHref.innerText = notUserInnertext[i];
      aHref.href = notUserLinks[i];
      li.appendChild(aHref);
      headerUserAccess.appendChild(li);
    }
  }
  /* Header AppendChild() */
  header.appendChild(navbarSwitchButton);
  header.appendChild(headerNavbar);
  header.appendChild(headerLogoLink);
  headerLogoLink.appendChild(headerLogoImg);
  if (userLogin == true) {
    header.appendChild(userImageContainer);
    userImageContainer.appendChild(headerUserImg);
    userImageContainer.appendChild(headerUserName);
    userImageContainer.id = "userImgContainer";
    headerUserName.innerText = localStorage.getItem("name");
  } else {
    header.appendChild(headerLoginLink);
    headerLoginLink.innerText = "Fazer Login";
    headerLoginLink.href = "login.html";
    headerLoginLink.id = "loginLink";
    headerLoginLink.style.color = `rgba(var(--${RandomTypeColor}))`;
  }
  header.appendChild(headerUserAccess);
  header.appendChild(headerNavbarCover);
  /* Header Style & Function */
  header.style.borderColor = `rgba(var(--${RandomTypeColor}))`;
  navbarSwitchButton.onclick = () => {
    headerNavbar.classList.toggle("active");
    navbarSwitchButton.classList.toggle("active");
  };
  headerUserImg.onclick = () => {
    headerUserAccess.classList.toggle("active");
  };
  window.addEventListener("scroll", () => {
    if (scrollY >= 30) {
      header.classList.add("closed");
    } else {
      header.classList.remove("closed");
    }
  });
  /* Create Header navbar */
  headerNavbar.innerHTML = "";
  headerListArray.forEach((newLink) => {
    let liNav = document.createElement("li");
    let aHref = document.createElement("a");
    headerNavbar.appendChild(liNav);
    liNav.appendChild(aHref);
    liNav.id = `header${newLink}`;
    aHref.href = `${newLink}.html`;
    aHref.innerText = newLink;
    if (newLink == "index") {
      aHref.innerText = "Home";
    }
  });
}
/* Create Footer */
const footer = document.querySelector("footer");
// if is called 'cause Pokemon.html don't use Footer;
if (footer) {
  /* Footer Logo */
  let div = document.createElement("div");
  let img = document.createElement("img");
  div.classList.add("logo");
  img.src = "img/general/logo.png";
  div.appendChild(img);
  footer.appendChild(div);

  /* Footer Social (Discord, Youtube, Twitter) */
  let ulFooterSocial = document.createElement("ul");
  ulFooterSocial.id = "footerSocial";
  footerSocial.forEach((e) => {
    let buttonSocial = document.createElement("button");
    let iconSocial = document.createElement("i");
    ulFooterSocial.appendChild(buttonSocial);
    buttonSocial.appendChild(iconSocial);
    iconSocial.classList.add(`fab`);
    iconSocial.classList.add(`fa-${e}`);
  });
  footer.appendChild(ulFooterSocial);

  /* Footer Copyright */
  let copyright = document.createElement("p");
  copyright.id = "copyright";
  copyright.innerText = "© Direitos reservados a froga";
  footer.appendChild(copyright);

  /* Footer Links */
  let ulFooterLinks = document.createElement("ul");
  ulFooterLinks.id = "footerLinks";
  footerLinks.forEach((e) => {
    let liFooterLink = document.createElement("li");
    let aHref = document.createElement("a");
    ulFooterLinks.appendChild(liFooterLink);
    liFooterLink.appendChild(aHref);
    aHref.innerText = e;
    aHref.href = "#";
  });
  footer.appendChild(ulFooterLinks);
}

/* Decorate Header by URL Location */
const selectedPage = new URL(window.location);
const headerIndex = document.querySelector("header nav #headerindex");
const headerPokedex = document.querySelector("header nav #headerpokedex");
if (selectedPage.pathname == "/index.html") {
  headerIndex.classList.add("active");
}
if (selectedPage.pathname == "/pokedex.html") {
  headerPokedex.classList.add("active");
}
