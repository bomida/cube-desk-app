'use strict';

const imgInput = document.querySelector('#imgInput');
const imgInputLabel = document.querySelector('.img__input');
const plusIcon = document.querySelector('.fas');
const imgPreview = document.querySelector('.img__preview');

const loginForm = document.querySelector('.login__form');
const loginThumbnail = document.querySelector('.login__thumb');
const loginInput = document.querySelector('.login__input');
const loginName = document.querySelector('.login__name');

const USERNAME_KEY = 'username';
const HIDE_CLASSNAME = 'hide';



imgInput.addEventListener('change', function(event) {
  console.log(imgInput.files);
  const reader = new FileReader();
  reader.onload = function () {
    const img = new Image();
    img.setAttribute('id', 'imgPreview');
    img.src = reader.result;
    imgPreview.appendChild(img);
    plusIcon.style.visibility = 'hidden';
  }
  reader.readAsDataURL(imgInput.files[0]);
}, false);


function onLoginSubmit(event) {
  event.preventDefault();
  loginInput.classList.add(HIDE_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  printUsername(username);
}

function printUsername(username) {
  loginForm.innerHTML = `
    <span class="login__name">${username}</span>`;
  // loginInput.classList.add(HIDE_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  printUsername(savedUsername);
}

