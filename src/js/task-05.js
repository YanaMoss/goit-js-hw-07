'use strict';
const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', addName);

function addName(event) {
   nameOutputEl.textContent = event.currentTarget.value
   if (nameOutputEl.textContent.length <= 0) {
      nameOutputEl.textContent = 'незнакомец'
   };
};

