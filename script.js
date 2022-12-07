'use strict';

let allServicePrices;
let title;
let screens;
let adaptive;
let screenPrice;
let fullPrice;
let servicePercentPrice
let rollback = 25;
let serviceFirst;
let serviceSecond;





function getFullPrice(price1, price2) {
    return price1 + price2;
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));

}

const asking = function () {
    title = prompt('Как называется ваш проект?');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    screenPrice = prompt('Сколько будет стоить данная работа?', '12000');

    while (!isNumber(screenPrice)) {
        screenPrice = prompt('Сколько будет стоить данная работа?', '12000');
    }


    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            serviceFirst = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            serviceSecond = prompt('Какой дополнительный тип услуги нужен?');
        }


        sum += +prompt('Сколько это будет стоить?');

    }

    return sum;
}

function getTitle(opt1, opt2) {
    return opt1 + opt2;
}

function getServicePercentPrices(perPrice) {
    return perPrice - perPrice * rollback / 100;
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

asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(Number(screenPrice), Number(allServicePrices));
title = getTitle(title[0].toUpperCase(), title.slice(1));
servicePercentPrice = getServicePercentPrices(Number(fullPrice));


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);


console.log(fullPrice);
console.log(allServicePrices);
console.log(title);
console.log(servicePercentPrice);
console.log(screens);