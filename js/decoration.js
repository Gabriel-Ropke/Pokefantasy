import { db, get, orderByChild, query, ref } from "./database/firebase.js";
import { RandomTypeColor, principalColor } from "./importantConsts.js";
let userLogin = parseInt(localStorage.getItem("activeUser")) || "";
console.log(localStorage.getItem("activeUser"));
const user = ref(db, "users/" + userLogin);
let userImg = "img/general/logo.png";
if (localStorage.getItem("principalColor")) {
  document.body.style.setProperty("--principal-color", principalColor);
}

/* Array to create li */
const NotUserPages = ["Log In", "Sign Up"];
const NotUserLinks = ["login.html", "createaccount.html"];
const ActiveUserPages = ["conta", "configurações", "sair"];
const ActiveUserLinks = ["account.html", "configurations.html", "index.html"];
const HeaderNavbarPages = ["index", "pokedex", "infos"];
const FooterSocialPages = ["discord", "twitter", "youtube"];
const FooterLinks = ["FAQ", "Sobre Nós", "Entre em Contato", "Não sei"];
/* Header Create Items */
const Header = document.querySelector("header");
if (Header) {
  /* Header Elements */
  const HeaderUserContainer = document.createElement("div");
  const navbarSwitchButton = document.createElement("button");
  const headerNavbar = document.createElement("nav");
  const headerLogoLink = document.createElement("a");
  const headerLogoImg = document.createElement("img");
  const headerNavbarCover = document.createElement("div");
  /* Header Items id */
  HeaderUserContainer.id = "userImgContainer";
  navbarSwitchButton.id = "navbarSwitch";
  headerLogoLink.id = "imgLogoLink";
  headerLogoLink.href = "index.html";
  headerLogoImg.src = "img/general/logo.png";
  headerLogoImg.id = "headerLogoImg";
  headerNavbarCover.id = "navbarCover";
  /* Check for create User Access Pages */
  console.log(userLogin);
  if (userLogin != "") {
    const HeaderUserImg = document.createElement("img");
    const HeaderUserName = document.createElement("span");
    const HeaderUserAccessPage = document.createElement("ul");
    Header.appendChild(HeaderUserAccessPage);
    HeaderUserContainer.appendChild(HeaderUserImg);
    HeaderUserContainer.appendChild(HeaderUserName);
    HeaderUserName.innerText = localStorage.getItem("name");
    HeaderUserAccessPage.id = "userAccess";
    HeaderUserImg.src = userImg;
    HeaderUserImg.id = "headerUserImg";
    HeaderUserImg.onclick = () => {
      HeaderUserAccessPage.classList.toggle("active");
    };
    for (let i = 0; i < ActiveUserPages.length; i++) {
      let li = document.createElement("li");
      let aHref = document.createElement("a");
      aHref.innerText = ActiveUserPages[i];
      aHref.href = ActiveUserLinks[i];
      if (ActiveUserLinks[i] == "index.html") {
        li.onclick = () => {
          localStorage.removeItem("activeUser");
          localStorage.removeItem("UserId");
        };
      }
      li.appendChild(aHref);
      HeaderUserAccessPage.appendChild(li);
    }
  } else {
    for (let i = 0; i < NotUserPages.length; i++) {
      let NewHeaderLink = document.createElement("a");
      NewHeaderLink.href = NotUserLinks[i];
      NewHeaderLink.innerText = NotUserPages[i];
      NewHeaderLink.style.color = `rgba(var(--${RandomTypeColor}))`;
      HeaderUserContainer.appendChild(NewHeaderLink);
      HeaderUserContainer.style.columnGap = "10px";
      NewHeaderLink.style.padding = "5px 10px";
      if (i == 0) {
        NewHeaderLink.style.border = `2px solid rgba(var(--${RandomTypeColor}))`;
        NewHeaderLink.style.borderRadius = "5px";
      }
    }
  }
  /* Header AppendChild() */
  Header.appendChild(navbarSwitchButton);
  Header.appendChild(headerNavbar);
  Header.appendChild(headerLogoLink);
  headerLogoLink.appendChild(headerLogoImg);
  Header.appendChild(HeaderUserContainer);
  Header.appendChild(headerNavbarCover);
  /* Header Style & Function */
  Header.style.borderColor = `rgba(var(--${RandomTypeColor}))`;
  navbarSwitchButton.onclick = () => {
    headerNavbar.classList.toggle("active");
    navbarSwitchButton.classList.toggle("active");
  };
  window.addEventListener("scroll", () => {
    if (scrollY >= 30) {
      Header.classList.add("closed");
    } else {
      Header.classList.remove("closed");
    }
  });
  /* Create Header navbar */
  headerNavbar.innerHTML = "";
  for (let i; i < HeaderNavbarPages.length; i++) {
    console.log(HeaderNavbarPages);
  }
  HeaderNavbarPages.forEach((newLink) => {
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
  FooterSocialPages.forEach((e) => {
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
  FooterLinks.forEach((e) => {
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
