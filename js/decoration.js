import { db, get, orderByChild, query, ref } from "./database/firebase.js";
import { RandomTypeColor, principalColor } from "./importantConsts.js";
const ThisPage = new URL(window.location);
let userLogin = parseInt(localStorage.getItem("activeUser")) || "";
const user = ref(db, "users/" + userLogin);
let userImg = "img/general/logo.png";
if (localStorage.getItem("principalColor")) {
  document.body.style.setProperty("--principal-color", principalColor);
}

/* Array to create li */
const NotUserLinks = [
  {
    text: "Log In",
    href: "login.html",
  },
  {
    text: "Sign Up",
    href: "register.html",
  },
];
const UserLinks = [
  {
    text: "Conta",
    href: "account.html",
  },
  {
    text: "Configurações",
    href: "configurations.html",
  },
  {
    text: "Sair",
    href: "index.html",
  },
];
const HeaderNavbarLinks = [
  {
    text: "Home",
    href: "index.html",
    treeOfLinks: "",
  },
  {
    text: "Pokedex",
    href: "",
    treeOfLinks: [
      {
        text: "Pokedex",
        href: "pokedex.html?page=pokedex",
      },
      {
        text: "Moves",
        href: "pokedex.html?page=moves",
      },
      {
        text: "Abilities",
        href: "pokedex.html?page=abilities",
      },
      {
        text: "Drops",
        href: "pokedex.html?page=drops",
      },
      {
        text: "Weaknesses",
        href: "pokedex.html?page=weaknesses",
      },
      {
        text: "Natures",
        href: "pokedex.html?page=natures",
      },
    ],
  },
];
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
    for (let i = 0; i < UserLinks.length; i++) {
      let li = document.createElement("li");
      let aHref = document.createElement("a");
      aHref.innerText = UserLinks[i].text;
      aHref.href = UserLinks[i].href;
      if (UserLinks[i].href == "index.html") {
        li.onclick = () => {
          localStorage.removeItem("activeUser");
          localStorage.removeItem("UserId");
        };
      }
      li.appendChild(aHref);
      HeaderUserAccessPage.appendChild(li);
    }
  } else {
    for (let i = 0; i < NotUserLinks.length; i++) {
      let NewHeaderLink = document.createElement("a");
      NewHeaderLink.href = NotUserLinks[i].href;
      NewHeaderLink.innerText = NotUserLinks[i].text;
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
  for (let i = 0; i < HeaderNavbarLinks.length; i++) {
    let NavbarLi = document.createElement("li");
    if (ThisPage.pathname == `/${HeaderNavbarLinks[i].href}`) {
      NavbarLi.classList.add("active");
    }
    if (HeaderNavbarLinks[i].treeOfLinks != "") {
      let NavBarLiSpan = document.createElement("span");
      NavBarLiSpan.innerText = HeaderNavbarLinks[i].text;
      NavbarLi.appendChild(NavBarLiSpan);
      NavbarLi.classList.add("nav-list");
      let NavbarLiUl = document.createElement("ul");
      NavbarLi.appendChild(NavbarLiUl);
      for (let ii = 0; ii < HeaderNavbarLinks[i].treeOfLinks.length; ii++) {
        let NavbarLiUlLink = document.createElement("a");
        NavbarLiUlLink.innerText = HeaderNavbarLinks[i].treeOfLinks[ii].text;
        NavbarLiUlLink.href = HeaderNavbarLinks[i].treeOfLinks[ii].href;
        NavbarLiUl.appendChild(NavbarLiUlLink);
      }
    } else {
      let NavbarLiLink = document.createElement("a");
      NavbarLiLink.classList.add("navbar-link");
      NavbarLiLink.href = HeaderNavbarLinks[i].href;
      NavbarLiLink.innerText = HeaderNavbarLinks[i].text;
      NavbarLi.appendChild(NavbarLiLink);
    }
    headerNavbar.appendChild(NavbarLi);
  }
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
