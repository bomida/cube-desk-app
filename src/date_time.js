'use strict';
const dateText = document.querySelector('.date');
const timeText = document.querySelector('.time');
const date = new Date();

function getDate() {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AGU',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
  const weekday = weekdays[date.getDay()].toString();
  const year = date.getFullYear().toString();
  const month = months[date.getMonth()].toString();
  const day = date.getDate().toString().padStart(2, '0');
  dateText.innerText = `${weekday}\n${year}\n${month}.${day}`;
}
getDate();

function getTime() {
  const hour = date.getHours().toString();
  const minute = date.getMinutes().toString();
  timeText.innerText = `${hour}:${minute}`;
}
getTime();

setInterval(getTime, 1000);
setInterval(getTime, 1000);
