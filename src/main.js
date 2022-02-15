'use strict';

import MoveBGElement from "./bg.js";

new MoveBGElement();
import DateTime from "./date-time.js";

const dateTime = new DateTime();
dateTime.getDate();
dateTime.getTime();

window.addEventListener('load', () => {
  setInterval(dateTime.getTime(), 1000);
});