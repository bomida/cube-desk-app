'use strict';

export default class MoveBGElement {
  constructor() {
    this.docStyle = document.documentElement.style;
    document.addEventListener('mousemove', event => {
      this.docStyle.setProperty('--mouse-x', event.clientX);
      this.docStyle.setProperty('--mouse-y', event.clientY);
    });
  }
}