"use strict";
const firstAnswer = document.querySelector(".first-answer");
const secondAnswer = document.querySelector(".second-answer");
const thirdAnswer = document.querySelector(".third-answer");
const fourthAnswer = document.querySelector(".fourth-answer");

const firstPlusIcon = document.getElementById("first-plus");
const secondPlusIcon = document.getElementById("second-plus");
const thirdPlusIcon = document.getElementById("third-plus");
const fourthPlusIcon = document.getElementById("fourth-plus");

let isFirstMinus = false;
let isSecondMinus = false;
let isThirdMinus = false;
let isFourthMinus = false;

function toggleIcons(iconName, isMinusVariable) {
  if (isMinusVariable) {
    iconName.src = "assets/images/icon-plus.svg";
    isMinusVariable = false;
  } else {
    iconName.src = "assets/images/icon-minus.svg";
    isMinusVariable = true;
  }
}

firstPlusIcon.addEventListener("click", function () {
  toggleIcons(firstPlusIcon, isFirstMinus);
  isFirstMinus = !isFirstMinus;
  firstAnswer.classList.toggle("hidden");
});

secondPlusIcon.addEventListener("click", function () {
  toggleIcons(secondPlusIcon, isSecondMinus);
  isSecondMinus = !isSecondMinus;
  secondAnswer.classList.toggle("hidden");
});

thirdPlusIcon.addEventListener("click", function () {
  toggleIcons(thirdPlusIcon, isThirdMinus);
  isThirdMinus = !isThirdMinus;
  thirdAnswer.classList.toggle("hidden");
});

fourthPlusIcon.addEventListener("click", function () {
  toggleIcons(fourthPlusIcon, isFourthMinus);
  isFourthMinus = !isFourthMinus;
  fourthAnswer.classList.toggle("hidden");
});
