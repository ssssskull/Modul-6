"use strict";
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
      accordionPanel.style.maxHeight = `${accordionPanel.scrollHeight + 20}px`;
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
        accordionSubpanel.scrollHeight + 20
      }px`;
      accordionPanel.style.maxHeight = `${
        accordionSubpanel.scrollHeight + accordionPanel.scrollHeight + 20
      }px`;
    }
  });
}

// TODO test hvis det virker uden +20, det er lagt til for at give plads til margin bottom
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

/*=======================================
*            Frederikke            *
======================================*/

/* Active-class på nav
    ============================*/
    const navlinks = document.querySelectorAll(".header__links");
    const sections = Array.from(document.querySelectorAll("section"));
    
    sections.splice(0, 1); //<-- Fjerner det første element i det array, der er gemt i konstanten sections
    function changeLinkState() {
      let index = sections.length; //<-- Gemmer længden arrayet fra konstanten sections i en variabel
    
      while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
      /*
          ^While loop:
          --index – decrementer index med hver iteration
          && – samtidig med at
          window.scrollY + 100 < sections[index].offsetTop – vinduets Y-position + 100 sammenlignes med den aktuelle positions Y-position. Loopet stopper, når vinduets Y-position + 90 IKKE længere er lavere end den aktuelle sektions Y-position.
          */
    
      navlinks.forEach((link) => link.classList.remove("active")); //<-- Active-class fjernes fra hvert element i den node-list, der er gemt i konstanten navlinks
      navlinks[index].classList.add("active"); //<-- Tilføjer active-class til den aktuelle section fra node-listen i navlinks
    }
    
    changeLinkState();
    window.addEventListener("scroll", changeLinkState);
    