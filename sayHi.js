'use strict';

export class AwesomeList {
  constructor() {
    this.items = document.querySelector('.items');
    this.items.addEventListener('click', (event) => {
      this.hightlight(event);
    });
  }

  hightlight(event) {
    const yellowBG = event.target.style.backgroundColor === 'yellow';
    if (yellowBG) {
      event.target.style.backgroundColor = 'white';
    } else {
      event.target.style.backgroundColor = 'yellow';
    }
  }

  createItem(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const blackBox = document.createElement('span');
    blackBox.setAttribute('class', 'black-box');
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(blackBox);
    this.items.appendChild(li);
  }
}