'use strict';

const todoForm = document.querySelector('.todo__form');
const todoInput = document.querySelector('.todo__form input');
const todoList = document.querySelector('.todo__list');

let toDos = [];

const TODOS_KEY = 'todos';

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDos(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteImg = document.createElement('img');

  li.id = newTodo.id;
  span.innerText = newTodo.text;
  deleteImg.setAttribute('src', './img/delete.svg');
  deleteImg.setAttribute('class', 'deleteImg');
  li.innerHTML = `
  <label class="check">
    <input type="checkbox">
    <span class="icon-check"></span>
  </label>
  `;

  deleteImg.addEventListener('click', deleteToDos);
  li.appendChild(span);
  li.appendChild(deleteImg);
  todoList.appendChild(li);
}

function handleSubmitTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

todoForm.addEventListener('submit', handleSubmitTodo);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(paintTodo);
}
