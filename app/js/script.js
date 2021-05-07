"use strict";
const btnShow = document.querySelector(".accordion__visible");
console.log(btnShow);
const accordionPanel = document.querySelector(".accordion__panel");
const plusIcon = document.querySelector(".accordion__icon");

btnShow.addEventListener("click", function () {
  accordionPanel.classList.toggle("show");
  // console.log(accordionPanel.offsetHeight);
  // console.log((accordionPanel.style.height = `${accordionPanel.offsetHeight}px`));

  if (accordionPanel.classList.contains("show")) {
    accordionPanel.style.maxHeight = `${accordionPanel.scrollHeight}px`;
    // TODO include offsetHeight somehow to detect size of div
    plusIcon.classList.add("rotate");
  } else {
    accordionPanel.style.maxHeight = null;
    plusIcon.classList.remove("rotate");
  }
});
