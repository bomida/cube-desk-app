'use strict';

import MoveBGElement from "./bg.js";
import DateTime from "./date-time.js";
import Calculator from "./claculator.js";

// calculrator
const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operator]");
const equalsBtn = document.querySelector("[data-equal]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const prevOperandText = document.querySelector("[data-prev-operand]");
const currOperandText = document.querySelector("[data-curr-operand]");

new MoveBGElement();
const dateTime = new DateTime();
const calculator = new Calculator(prevOperandText, currOperandText);


// Calculator area
numberBtns.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationBtns.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsBtn.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteBtn.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});


// DateTime area
dateTime.getDate();
dateTime.getTime();

window.addEventListener('load', () => {
  setInterval(dateTime.getTime(), 1000);
});