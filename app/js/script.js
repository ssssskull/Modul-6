"use strict";
/*======================================
*            Daniel            *
======================================*/

/* Hide on scroll
    ============================*/
const header = document.querySelector("header");
/*let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else if (header.classList.contains("open")) {
    header.style.top = "0";
  } else {
    header.style.top = `-${header.clientHeight}px`;
  }
  prevScrollPos = currentScrollPos;
});

/* Hamburger menu
    ============================*/
const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const headerMenu = document.querySelector(".header__menu");
const languageElem = document.querySelector(".header__language");

body.style.padding = `${header.clientHeight}px 0 0 0`;

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    /* Luk hamburger menu
    ============================*/
    header.classList.remove("open");
    body.style.overflow = "auto";
    headerMenu.style.height = null;
  } else {
    /* Åben hamburger menu
    ============================*/
    header.classList.add("open");
    body.style.overflow = "hidden";
    headerMenu.style.height = `100vh`;
  }
});

/* Accordion
    ============================ */
const accordionQuestions = document.querySelectorAll(".accordion__question");

for (let i = 0; i < accordionQuestions.length; i++) {
  accordionQuestions[i].addEventListener("click", function () {
    this.classList.toggle("panel-open");
    const accordionPanel = this.nextElementSibling;
    const plusIcon = this.lastElementChild;
    if (accordionPanel.style.maxHeight) {
      plusIcon.classList.remove("rotate");
      accordionPanel.style.maxHeight = null;
    } else {
      plusIcon.classList.add("rotate");
      accordionPanel.style.maxHeight = `${accordionPanel.scrollHeight}px`;
    }
  });
}

/* Subpanel
    ============================ */
const accordionSubquestions = document.querySelectorAll(
  ".accordion__subtoggle"
);

for (let i = 0; i < accordionSubquestions.length; i++) {
  accordionSubquestions[i].addEventListener("click", function () {
    const accordionPanel = this.parentElement;
    const accordionSubpanel = this.nextElementSibling;
    accordionSubquestions[i].classList.toggle("accordion__subtoggle--open");
    accordionSubquestions[i].classList.toggle("accordion__subtoggle--hover");

    if (accordionSubpanel.style.maxHeight) {
      accordionSubpanel.style.maxHeight = null;
    } else {
      accordionSubpanel.style.maxHeight = `${accordionSubpanel.scrollHeight}px`;
      accordionPanel.style.maxHeight = `${accordionSubpanel.scrollHeight + accordionPanel.scrollHeight
        }px`;
    }
  });
}

/* Mobil menu dropdown
    ============================ */
const dropDown = document.querySelectorAll(".header__dropDown");

for (let i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener("click", function () {
    const underMenu = this.nextElementSibling;
    if (underMenu.style.height) {
      underMenu.style.height = null;
    } else {
      underMenu.style.height = `${underMenu.scrollHeight}px`;
    }
  });
}

/*======================================
*               Victor                 *
======================================*/

const svgPowerButton = document.querySelectorAll(".svg--knap");
const HovedMenuHover = document.querySelector(".hovedmenu__hover-text");

console.log(svgPowerButton);

for (let i = 0; i < svgPowerButton.length; i++) {
  svgPowerButton[i].addEventListener("click", function () {
    switch (i) {
      case 0:
        HovedMenuHover.innerHTML = "Aktuel madtemperatur";
        break;
      case 1:
        HovedMenuHover.innerHTML = "Aktuelt varmetrin";
        break;
      case 2:
        HovedMenuHover.innerHTML = "Manuel vandpåfyldning";
        break;
      case 3:
        HovedMenuHover.innerHTML = "Røremønster";
        break;
      case 4:
        HovedMenuHover.innerHTML = "Omdrejningstal";
        break;
      case 5:
        HovedMenuHover.innerHTML = "Taste for start og stop af funktion, (varme) Tasten skifter farve grå / sort";
        break;
      case 6:
        HovedMenuHover.innerHTML = "Taste for start og stop af funktion, (varme) Tasten skifter farve grå / sort";
        break;
      case 7:
        HovedMenuHover.innerHTML = "Taste for start og stop af funktion, (varme) Tasten skifter farve grå / sort";
        break;
      case 8:
        HovedMenuHover.innerHTML = "Taste for start og stop af funktion, (varme) Tasten skifter farve grå / sort";
        break;
      case 9:
        HovedMenuHover.innerHTML = "Aktuel Temperatur på bunden";
        break;
      case 10:
        HovedMenuHover.innerHTML = "Forvalgt mængde";
        break;
      case 11:
        HovedMenuHover.innerHTML = "Akkumuleret mængde";
        break;
      case 12:
        HovedMenuHover.innerHTML = "Tid";
        break;
      case 13:
        HovedMenuHover.innerHTML = "Klokkeslet";
        break;
      case 14:
        HovedMenuHover.innerHTML = "Akkumuleret tid";
        break;
      case 15:
        HovedMenuHover.innerHTML = "Taster for kip af gryde";
        break;
      case 16:
        HovedMenuHover.innerHTML = "Menu";
        break;
      case 17:
        HovedMenuHover.innerHTML = "Klokken";
        break;
      case 18:
        HovedMenuHover.innerHTML = "Taster for kip af gryde";
        break;
    }
  })
}



