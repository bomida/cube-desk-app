'use strict';
const dateText = document.querySelector('.date');
const timeText = document.querySelector('.time');

function getDate() {
  const date = new Date();
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
  const weekday = weekdays[date.getDay()];
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = String(date.getDate()).padStart(2, '0');

  dateText.innerText = `${weekday}\n${year}\n${month}.${day}`;
}
getDate();

function getTime() {
  const date = new Date();
  let hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, '0');

  hour = String(((hour % 12) || 12)).padStart(2, '0');
  timeText.innerText = `${hour}:${minute}`;
}
getTime();

setInterval(getDate, 1000);
setInterval(getTime, 1000);
