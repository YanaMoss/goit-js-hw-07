'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.querySelector('#ingredients');
const arrayElement = [];

ingredients.forEach(ingredient => {
   const itemEl = document.createElement('li')
   itemEl.textContent = ingredient;
   arrayElement.push(itemEl);
});

ingredientsList.append(...arrayElement);

