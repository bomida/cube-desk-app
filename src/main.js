'use strict';

import MoveBGElement from "./bg.js";
import DateTime from "./date-time.js";
import Calculator from "./claculator.js";
import Weather from "./weather";

// calculator
const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operator]");
const equalsBtn = document.querySelector("[data-equal]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const prevOperandText = document.querySelector("[data-prev-operand]");
const currOperandText = document.querySelector("[data-curr-operand]");

// weather
const locateText = document.querySelector('.locate');
const tempText = document.querySelector('.temp');
const weaText = document.querySelector('.wea__text');
const weaIcon = document.querySelector('.wea__icon');

let weatherIcon = {
  '01': './img/01d.png',
  '02': './img/02d.png',
  '03': './img/03d.png',
  '04': './img/04d.png',
  '09': './img/09d.png',
  '10': './img/10d.png',
  '11': './img/11d.png',
  '13': './img/13d.png',
  '50': './img/50d.png'
};
new Weather();


new MoveBGElement();
const dateTime = new DateTime();
const calculator = new Calculator(prevOperandText, currOperandText);


// Calculator area
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

equalsBtn.addEventListener("click", () => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearBtn.addEventListener("click", () => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteBtn.addEventListener("click", () => {
  calculator.delete()
  calculator.updateDisplay()
})


// DateTime area
dateTime.getDate();
dateTime.getTime();

window.addEventListener('load', () => {
  setInterval(dateTime.getTime(), 1000);
});