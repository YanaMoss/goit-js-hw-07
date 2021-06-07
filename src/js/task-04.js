'use strict';

let counterValue = 0;
const value = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function increment() {
   counterValue += 1;
   value.textContent = counterValue;
}

function decrement() {
   counterValue = counterValue - 1;
   value.textContent = counterValue;
}

