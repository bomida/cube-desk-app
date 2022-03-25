'use strict';



export default class Weather {
  constructor() {
    this.TEMP_KEY = 'º';
    this.API_KEY = '15b4ffd5b8bca7d558f2320a138ed0dc';
  }

  onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        locateText.textContent = data.name;
        tempText.innerText = Math.round(data.main.temp) + TEMP_KEY;
        weaText.textContent = data.weather[0].main;
        let icon = (data.weather[0].icon).substr(0, 2);
        const img = document.createElement('img');
        img.setAttribute('src', weatherIcon[icon])
        weaIcon.append(img);
      });
  }

  onGeoError() {
    alert(`Can't find you.\nNo weather for you. :(`);
  }
}

// function onGeoOk(position) {
//   const lat = position.coords.latitude;
//   const lng = position.coords.longitude;
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       locateText.textContent = data.name;
//       tempText.innerText = Math.round(data.main.temp) + TEMP_KEY;
//       weaText.textContent = data.weather[0].main;
//       let icon = (data.weather[0].icon).substr(0, 2);
//       const img = document.createElement('img');
//       img.setAttribute('src', weatherIcon[icon])
//       weaIcon.append(img);
//     });
// }

// function onGeoError() {
//   alert(`Can't find you.\nNo weather for you. :(`);
// }

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
