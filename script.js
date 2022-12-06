'use strict';

let title = prompt('Как называется ваш проект?');
console.log(title);


let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
console.log(screens);


let screenPrice = prompt('Сколько будет стоить данная работа?', '12000');
console.log(screenPrice);


let adaptive = confirm('Нужен ли адаптив на сайте?');
console.log(adaptive);


let serviceFirst = prompt('Какой дополнительный тип услуги нужен?');
console.log(serviceFirst);
let servicePrice1 = prompt('Сколько это будет стоить?');
console.log(servicePrice1);

let serviceSecond = prompt('Какой дополнительный тип услуги нужен?');
console.log(serviceSecond);
let servicePrice2 = prompt('Сколько это будет стоить?');
console.log(servicePrice2);


let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
console.log(Number(fullPrice));



let rollback = 25

let servicePercentPrice = Number(fullPrice) - Number(fullPrice) * rollback / 100;
console.log(Math.ceil(servicePercentPrice));


if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (15000 < fullPrice && fullPrice < 30000) {
    console.log('Даем скидку в 5%');
} else if (0 < fullPrice && fullPrice < 15000) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что то пошло не так');
}



//  Задание 4


let allServicePrices


const getAllServicePrices = function () {
    allServicePrices = Number(servicePrice1) + Number(servicePrice2)
    console.log(allServicePrices);
}

function getFullPrice() {
    function fullPrice(str) {
        console.log(str);
    }

    fullPrice(Number(screenPrice) + allServicePrices)
}

const getTitle = function () {
    const strTitle = title[0].toUpperCase() + title.slice(1);
    console.log(strTitle);
}

const getServicePercentPrices = function () {
    servicePercentPrice = Number(fullPrice) - Number(fullPrice) * rollback / 100
    console.log(servicePercentPrice);
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function () {
    if (fullPrice > 30000) {
        console.log('Даем скидку в 10%');
    } else if (15000 < fullPrice && fullPrice < 30000) {
        console.log('Даем скидку в 5%');
    } else if (0 < fullPrice && fullPrice < 15000) {
        console.log('Скидка не предусмотрена');
    } else if (fullPrice < 0) {
        console.log('Что то пошло не так');
    }
}




showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

getRollbackMessage()
getAllServicePrices()
getFullPrice()
getTitle()
getServicePercentPrices()

console.log(screens);