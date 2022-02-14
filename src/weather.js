'use strict';
const locateText = document.querySelector('.locate');
const tempText = document.querySelector('.temp');
const weaText = document.querySelector('.wea__text');
const weaIcon = document.querySelector('.wea__icon');

const TEMP_KEY = 'º';
const API_KEY = '15b4ffd5b8bca7d558f2320a138ed0dc';

let weatherIcon = {
  '01' : './img/01d.png',
  '02' : './img/02d.png',
  '03' : './img/03d.png',
  '04' : './img/04d.png',
  '09' : './img/09d.png',
  '10' : './img/10d.png',
  '11' : './img/11d.png',
  '13' : './img/13d.png',
  '50' : './img/50d.png'
  };

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      locateText.textContent = data.name;
      tempText.innerText = Math.round(data.main.temp) + TEMP_KEY;
      weaText.textContent = data.weather[0].main;
      let icon = (data.weather[0].icon).substr(0,2);
      const img = document.createElement('img');
      img.setAttribute('src', weatherIcon[icon])
      weaIcon.append(img);
    });
}

function onGeoError() {
  alert(`Can't find you.\nNo weather for you. :(`);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
