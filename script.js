const btn = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
const eBtn = document.getElementById('e_btn');
const range = document.getElementById('range');
const circle = document.getElementById('circle');


const logger = function () {
    square.style.backgroundColor = input.value;
}
const inputRange = function () {
    circle.style.width = range.valueAsNumber + '%';
    circle.style.height = range.valueAsNumber + '%';
}



btn.addEventListener('click', logger);
eBtn.style.display = 'none';
range.addEventListener('input', inputRange);
