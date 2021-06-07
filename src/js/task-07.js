'use strict';

const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text')

fontSizeControlEl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
   const valueFontSizeControl = fontSizeControlEl.value;
   textEl.style.fontSize = `${valueFontSizeControl}px`;  
}