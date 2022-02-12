'use strict';
const locateText = document.querySelector('.locate');
const tempText = document.querySelector('.temp');
const weaText = document.querySelector('.wea__text');
const weaIcon = document.querySelector('.wea__icon');

// const API_KEY = '15b4ffd5b8bca7d558f2320a138ed0dc';

function onGeoOk(position) {
  console.log(position);
}

function onGeoError() {
  alert(`I cna't find your location`);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
