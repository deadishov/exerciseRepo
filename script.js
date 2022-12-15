'use strict';



const headerName = document.getElementsByTagName('h1');
const buttons = document.getElementsByClassName('handler_btn');
const screenBtn = document.querySelector('.screen-btn');
const itemsNumber = document.querySelectorAll('.other-items.number');
const itemsPercent = document.querySelectorAll('.other-items.percent');
const rollbackInput = document.querySelector('.rollback input[type="range"]');
const getSpan = document.querySelector('.rollback .range-value');
const getTotalInput = document.getElementsByClassName('total-input');
let screens = document.querySelectorAll('.screen');






console.log(headerName[0]);
console.log(buttons);
console.log(screenBtn);
console.log(itemsNumber);
console.log(itemsPercent);
console.log(rollbackInput);
console.log(getSpan);

for (let key in getTotalInput) {
    console.log(getTotalInput[key]);
}

console.log(screens);