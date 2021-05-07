"use strict";
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
