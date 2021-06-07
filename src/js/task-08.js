'use strict'
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input')
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
let boxArray = [];
const colors = ["red", "blue", "green", "black", "tomato","yellow" ];
const randomizer = max => {
  return Math.floor(Math.random() * max);
};

renderBtn.addEventListener('click', create);
destroyBtn.addEventListener('click', clear);

function create(event) {
   const amount = inputEl.value;
   createBoxes(amount);
}

function createBoxes(amount) {
   for (let index = 0; index < amount; index++) {
         const boxEl = document.createElement('div');
         const currentSize = 30 + index * 10;
         boxEl.style.width = `${currentSize}px`;
         boxEl.style.height = `${currentSize}px`;
         boxEl.style.backgroundColor = colors[randomizer(colors.length)];
         boxArray.push(boxEl);
      }
   boxesEl.append(...boxArray);

};

function clear(event) {
   const boxArrayDestroy = boxesEl.querySelectorAll('div');
   for (let box of boxArrayDestroy) {
      box.remove();
   }
   boxArray = [];
};