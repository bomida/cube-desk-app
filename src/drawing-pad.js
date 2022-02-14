'use strict';

const canvas = document.querySelector('.jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('.jsColor');
const range = document.querySelector('.jsRange');;
const mode = document.querySelector('.jsMode');
const saveBtn = document.querySelector('.jsSave');
const eraserBtn = document.querySelector('.jsEraser');
const resetBtn = document.querySelector('.jsReset');

let painting = false;
let filling = false;

canvas.width = 360;
canvas.height = 403;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = '#555';
ctx.lineWidth = '2.5';

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function handleEraserClick(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  ctx.strokeStyle = ctx.fillStyle;
  ctx.strokeWidth = 10;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleSaveClick(event) {
  const image = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = image;
  link.download = '🎨 download';
  link.click();
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  if (filling === true) {
    const bgColor = color;
    ctx.fillStyle = bgColor;
  } else {
    const paintingColor = color;
    ctx.strokeStyle = paintingColor;
  }
  // console.log(ctx.fillStyle, ctx.strokeStyle);
}

function handleRangeChange(event) {
  const range = event.target.value;
  ctx.lineWidth = range;
}

function handleModeClick(event) {
  if (filling === true) {
    filling = false;
    mode.innerText = 'Fill';
  } else {
    filling = true;
    mode.innerText = 'Paint';
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleCM(event) {
  event.preventDefault();
  alert(`use a save button`);
}

function onMouseMove(event) {
  let x = event.offsetX;
  let y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleClearClick(event) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('click', handleCanvasClick);
  canvas.addEventListener('contextmenu', handleCM);
}

if (colors) {
  Array.from(colors).forEach(color =>
    color.addEventListener('click', handleColorClick)
  );
}

if (range) {
  range.addEventListener('input', handleRangeChange);
}

if (mode) {
  mode.addEventListener('click', handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener('click', handleSaveClick);
}

if (eraserBtn) {
  eraserBtn.addEventListener('click', handleEraserClick);
}

if (resetBtn) {
  resetBtn.addEventListener('click', handleClearClick);
}