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



const appData = {
    allServicePrices: 0,
    title: '',
    screens: [],
    adaptive: true,
    screenPrice: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    rollback: 25,
    services: [],
    sale: '',

    start: function () {
        appData.asking();
        appData.isNumber();
        appData.addPrices()
        appData.getFullPrice();
        appData.getTitle();
        appData.getServicePercentPrices();
        appData.getRollbackMessage();
        appData.logger();
    },

    asking: function () {
        do {
            appData.title = prompt('Как называется ваш проект?');
        } while (appData.isNumber(appData.title));

        for (let i = 0; i < 2; i++) {
            let name = '';
            let price = 0;

            do {
                name = prompt('Какие типы экранов нужно разработать?');
            } while (appData.isNumber(name));

            do {
                price = prompt('Сколько будет стоить данная работа?');
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price });
        }


        for (let i = 0; i < 2; i++) {
            let name = '';
            let price = 0;

            do {
                name = prompt('Какой дополнительный тип услуги нужен?')
            } while (appData.isNumber(name));

            do {
                price = prompt('Сколько это будет стоить?');
            } while (!appData.isNumber(price));

            appData.services.push({ id: i, name: name, price: price });

        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        appData.allServicePrices = appData.services.reduce(function (sum, service) {
            return sum + +service.price;
        }, 0);
    },

    getFullPrice: function () {
        appData.fullPrice = Number(appData.screenPrice) + Number(appData.allServicePrices);
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num));

    },

    getTitle: function () {
        appData.title = appData.title[0].toUpperCase() + appData.title.slice(1);
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = Number(appData.fullPrice) - Number(appData.fullPrice) * appData.rollback / 100;
    },

    getRollbackMessage: function () {
        if (Number(appData.fullPrice) > 30000) {
            appData.sale = 'Даем скидку в 10%';
        } else if (15000 < Number(appData.fullPrice) && Number(appData.fullPrice) < 30000) {
            appData.sale = 'Даем скидку в 5%';
        } else if (0 < Number(appData.fullPrice) && Number(appData.fullPrice) < 15000) {
            appData.sale = 'Скидка не предусмотрена';
        } else if (Number(appData.fullPrice) < 0) {
            appData.sale = 'Что то пошло не так';
        }
    },

    logger: function () {
        for (let key in appData) {
            console.log('Ключ:' + key + ' ' + 'Значение:' + appData[key]);
        }
    }
};


appData.start();