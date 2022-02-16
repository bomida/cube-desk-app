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

// 자바스크립트 모듈 공부 중인데 잘 안되는 부분이 있어서요ㅠㅠ 코드 봐주실 분 계실까요?

// 날짜랑 시간 정보를 가지고 와서 화면에 뿌려주는 클래스를 만들고 main.js라는 파일에 import해서 초마다 시간을 업데이트 해주는 코드입니다.

// 모듈화하기 전에는 잘 작동이 되는걸 확인했는데 setInterval부분에서 작동을 안하고 콘솔에 오류도 안떠서 안되는 원인을 모르겠습니다ㅠㅠ