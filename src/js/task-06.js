'use strict';
const inputEl = document.querySelector('#validation-input')
const requiredValue = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', validationCheck);

function validationCheck(event) {
   const currentValue = inputEl.value;
      if (currentValue.length == requiredValue) {
         inputEl.classList.add("valid")
         inputEl.classList.remove("invalid")
      }
      else {
         inputEl.classList.add("invalid")
         inputEl.classList.remove("valid")
      }
};