'use strict';

import MoveBGElement from "./bg.js";
import DateTime from "./date-time.js";
import Calculator from "./claculator.js";

const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equal]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");

new MoveBGElement();
const dateTime = new DateTime();
const calculator = new Calculator(previousOperandText, currentOperandText);

numberBtns.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationBtns.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener("click", button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener("click", button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener("click", button => {
  calculator.delete()
  calculator.updateDisplay()
})

dateTime.getDate();
dateTime.getTime();

window.addEventListener('load', () => {
  setInterval(dateTime.getTime(), 1000);
});