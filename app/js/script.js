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
    const accordionContent = this.nextElementSibling;
    const plusIcon = this.lastElementChild;
    if (accordionContent.style.maxHeight) {
      plusIcon.classList.remove("rotate");
      accordionContent.style.maxHeight = null;
    } else {
      plusIcon.classList.add("rotate");
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
    }
  });
}

/* Dropdown
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
