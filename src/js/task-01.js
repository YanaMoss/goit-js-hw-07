'use strict';

const quantityCategories = document.querySelectorAll('.item').length;
console.log(`В списке ${quantityCategories} категории.`);

const categories = document.querySelectorAll('.item');
categories.forEach(categoryEl => {
   const nameCategory = categoryEl.querySelector('h2').textContent;
   console.log(`Категория: ${nameCategory}`);
   const quantitiEl = categoryEl.querySelectorAll('ul li').length;
   console.log(`Количество элементов: ${quantitiEl}`);
});
