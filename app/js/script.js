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
    const accordionPanel = this.nextElementSibling;
    const plusIcon = this.lastElementChild;

    if (accordionPanel.style.maxHeight) {
      plusIcon.classList.remove("rotate");
      accordionPanel.style.maxHeight = null;
    } else {
      plusIcon.classList.add("rotate");
      accordionPanel.style.maxHeight = `${accordionPanel.scrollHeight}px`;
    }

    /* Subpanel
    ============================ */
    const accordionSubquestions = document.querySelectorAll(
      ".accordion__subtoggle"
    );

    for (let i = 0; i < accordionSubquestions.length; i++) {
      accordionSubquestions[i].addEventListener("click", function () {
        accordionSubquestions[i].classList.toggle("accordion__subtoggle--open");
        console.log(this);
        const accordionSubpanel = this.nextElementSibling;
        if (accordionSubpanel.style.maxHeight) {
          accordionSubpanel.style.maxHeight = null;
        } else {
          accordionSubpanel.style.maxHeight = `${accordionSubpanel.scrollHeight}px`;
          accordionPanel.style.maxHeight = `${
            accordionPanel.scrollHeight + accordionSubpanel.scrollHeight
          }px`;
        }
      });
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
