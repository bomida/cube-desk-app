'use strict';

let docStyle = document.documentElement.style;

    document.addEventListener('mousemove', function(event) {
      docStyle.setProperty('--mouse-x', event.clientX);
      docStyle.setProperty('--mouse-y', event.clientY);
    });