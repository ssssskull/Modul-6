"use strict";
const btnShow = document.querySelector(".accordion__visible");
console.log(btnShow);
const hiddenText = document.querySelector(".accordion__hiddenText");
const plusIcon = document.querySelector(".accordion__icon");

btnShow.addEventListener("click", function () {
  hiddenText.classList.toggle("show");
  // console.log(hiddenText.offsetHeight);
  // console.log((hiddenText.style.height = `${hiddenText.offsetHeight}px`));

  if (hiddenText.classList.contains("show")) {
    hiddenText.style.height = `${50}px`;
    // TODO include offsetHeight somehow to detect size of div
    plusIcon.classList.add("rotate");
  } else {
    hiddenText.style.height = 0;
    plusIcon.classList.remove("rotate");
  }
});
