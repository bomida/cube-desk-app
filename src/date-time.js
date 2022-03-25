'use strict';

export default class DateTime {
  constructor() {
    this.dateText = document.querySelector('.date');
    this.timeText = document.querySelector('.time');
    this.months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AGU', 'SEP', 'OCT', 'NOV', 'DEC'];
    this.weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
  }

  getDate() {
    const date = new Date();
    const weekday = this.weekdays[date.getDay()];
    const year = date.getFullYear();
    const month = this.months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');

    this.dateText.innerText = `${weekday}\n${year}\n${month}.${day}`;
  }

  getTime() {
    const date = new Date();
    let second = date.getSeconds();
    let hour = date.getHours();
    const minute = String(date.getMinutes()).padStart(2, '0');

    hour = String(((hour % 12) || 12)).padStart(2, '0');
    this.timeText.innerText = `${hour}:${minute}`;
    // console.log(`${hour}:${minute}:${second}`);
  }
}