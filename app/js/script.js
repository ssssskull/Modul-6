"use strict";
/*======================================
*            simone          *
======================================*/

/* dropdown
    ============================*/
let dropdownElement = document.querySelectorAll(".undermenu__dropdown");
dropdownElement = Array.from(dropdownElement);

for (let y = 0; y < dropdownElement.length; y++) {
  dropdownElement[y].addEventListener("click", openMenu);
}

function openMenu() {
  let dropdownChild = this.nextElementSibling;
  dropdownChild.classList.toggle("show");
}

/* Apper effect
    ============================*/

function scrollAppear() {
  let screenDivider = document.querySelector(".divider");
  let dividerPosition = screenDivider.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.1;

  if (dividerPosition < screenPosition) {
    screenDivider.classList.add("divider--appear");
  }
}

window.addEventListener("scroll", scrollAppear);

/*======================================
*            Daniel            *
======================================*/

/* Hide on scroll
    ============================*/
const header = document.querySelector("header");
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else if (header.classList.contains("open")) {
    header.style.top = "0";
  } else {
    header.style.top = `-${header.clientHeight}px`;

    const showClassSelector = document.querySelectorAll(".show");

    for (let z = 0; z < showClassSelector.length; z++) {
      showClassSelector[z].classList.remove("show");
    }
  }
  prevScrollPos = currentScrollPos;
});

/* Hamburger menu
    ============================*/
const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const headerMenu = document.querySelector(".header__menu");
const languageElem = document.querySelector(".header__language");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    /* Luk hamburger menu
    ============================*/
    header.classList.remove("open");
    body.style.overflow = "auto";
    headerMenu.style.height = null;
  } else {
    /* ??ben hamburger menu
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
      accordionPanel.style.maxHeight = `${accordionPanel.scrollHeight + 60}px`;
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
      accordionSubpanel.style.maxHeight = `${
        accordionSubpanel.scrollHeight + 60
      }px`;
      accordionPanel.style.maxHeight = `${
        accordionSubpanel.scrollHeight + accordionPanel.scrollHeight + 60
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
*               Victor            *
======================================*/

const svgPowerButton = document.querySelectorAll(".svghovedmenu__knap");
const svgHovedMenuForklaring = document.querySelector(
  ".hovedmenu__hover-text p"
);

for (let i = 0; i < svgPowerButton.length; i++) {
  svgPowerButton[i].addEventListener("click", function () {
    switch (i) {
      case 0:
        svgHovedMenuForklaring.innerHTML = "Aktuel madtemperatur";
        break;
      case 1:
        svgHovedMenuForklaring.innerHTML = "Aktuelt varmetrin";
        break;
      case 2:
        svgHovedMenuForklaring.innerHTML = "Manuel vandp??fyldning";
        break;
      case 3:
        svgHovedMenuForklaring.innerHTML = "R??rem??nster";
        break;
      case 4:
        svgHovedMenuForklaring.innerHTML = "Omdrejningstal";
        break;
      case 5:
        svgHovedMenuForklaring.innerHTML =
          "Taste for start og stop af funktion, (varme) Tasten skifter farve gr?? / sort";
        break;
      case 6:
        svgHovedMenuForklaring.innerHTML =
          "Taste for start og stop af funktion, (varme) Tasten skifter farve gr?? / sort";
        break;
      case 7:
        svgHovedMenuForklaring.innerHTML =
          "Taste for start og stop af funktion, (varme) Tasten skifter farve gr?? / sort";
        break;
      case 8:
        svgHovedMenuForklaring.innerHTML =
          "Taste for start og stop af funktion, (varme) Tasten skifter farve gr?? / sort";
        break;
      case 9:
        svgHovedMenuForklaring.innerHTML = "Aktuel Temperatur p?? bunden";
        break;
      case 10:
        svgHovedMenuForklaring.innerHTML = "Forvalgt m??ngde";
        break;
      case 11:
        svgHovedMenuForklaring.innerHTML = "Akkumuleret m??ngde";
        break;
      case 12:
        svgHovedMenuForklaring.innerHTML = "Tid";
        break;
      case 13:
        svgHovedMenuForklaring.innerHTML = "Klokkeslet";
        break;
      case 14:
        svgHovedMenuForklaring.innerHTML = "Akkumuleret tid";
        break;
      case 15:
        svgHovedMenuForklaring.innerHTML = "Taster for kip af gryde";
        break;
      case 16:
        svgHovedMenuForklaring.innerHTML = "Menu";
        break;
      case 17:
        svgHovedMenuForklaring.innerHTML = "Klokken";
        break;
      case 18:
        svgHovedMenuForklaring.innerHTML = "Taster for kip af gryde";
        break;
    }
  });
}

const svgPowerButton1 = document.querySelectorAll(".svgvandmenu__knap");
const VandMenuHover = document.querySelector(".vandmenu__hover-text p");

for (let i = 0; i < svgPowerButton1.length; i++) {
  svgPowerButton1[i].addEventListener("click", function () {
    switch (i) {
      case 0:
        VandMenuHover.innerHTML = "Akkumuleret m??ngde";
        break;
      case 1:
        VandMenuHover.innerHTML = "Forvalgt m??ngde";
        break;
      case 2:
        VandMenuHover.innerHTML = "Nulstilling af akkumuleret m??ngde";
        break;
      case 3:
        VandMenuHover.innerHTML = "Retur til hovedmenu";
        break;
    }
  });
}

const svgPowerButton2 = document.querySelectorAll(".svgprogram__knap");
const ProgramHover = document.querySelector(".program__hover-text p");

for (let i = 0; i < svgPowerButton2.length; i++) {
  svgPowerButton2[i].addEventListener("click", function () {
    switch (i) {
      case 0:
        ProgramHover.innerHTML = "Opvarmning";
        break;
      case 1:
        ProgramHover.innerHTML = "Omr??ring";
        break;
      case 2:
        ProgramHover.innerHTML = "Vandp??fyld";
        break;
      case 3:
        ProgramHover.innerHTML = "Tid";
        break;
      case 4:
        ProgramHover.innerHTML = "Buzzer";
        break;
      case 5:
        ProgramHover.innerHTML = "K??ling";
        break;
      case 6:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
      case 7:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
      case 8:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
      case 9:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
      case 10:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
      case 11:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
      case 12:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
      case 13:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
      case 14:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
      case 15:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
      case 16:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
      case 17:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
      case 18:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
      case 19:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
      case 20:
        ProgramHover.innerHTML = "Felt for aktivitet";
        break;
    }
  });
}
