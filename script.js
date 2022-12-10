'use strict';

// let allServicePrices;
// let title;
// let screens;
// let adaptive;
// let screenPrice;
// let fullPrice;
// let servicePercentPrice;
// let rollback = 25;
// let serviceFirst;
// let serviceSecond;
// let srvPriceOne;
// let srvPriceTwo;

const appData = {
    allServicePrices: '',
    title: '',
    screens: '',
    adaptive: true,
    screenPrice: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    rollback: 25,
    serviceFirst: '',
    serviceSecond: '',
    srvPriceOne: 0,
    srvPriceTwo: 0,

    start: function () {
        appData.asking();
        appData.isNumber()
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice(Number(appData.screenPrice), Number(appData.allServicePrices));
        appData.title = appData.getTitle(appData.title[0].toUpperCase(), appData.title.slice(1));
        appData.servicePercentPrice = appData.getServicePercentPrices(Number(appData.fullPrice));
    },

    asking: function () {
        appData.title = prompt('Как называется ваш проект?');

        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?');
        } while (!appData.isNumber(appData.screenPrice));

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    getFullPrice: function (price1, price2) {
        return price1 + price2;
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num));

    },

    getAllServicePrices: function () {

        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.serviceFirst = prompt('Какой дополнительный тип услуги нужен?');

                do {
                    appData.srvPriceOne = prompt('Сколько это будет стоить?');
                } while (!appData.isNumber((appData.srvPriceOne)));
            } else if (i === 1) {
                appData.serviceSecond = prompt('Какой дополнительный тип услуги нужен?');

                do {
                    appData.srvPriceTwo = prompt('Сколько это будет стоить?');
                } while (!appData.isNumber((appData.srvPriceTwo)));
            }





        }

        return Number(appData.srvPriceOne) + Number(appData.srvPriceTwo);
    },

    getTitle: function (opt1, opt2) {
        return opt1 + opt2;
    },

    getServicePercentPrices: function (perPrice) {
        return perPrice - perPrice * appData.rollback / 100;
    },

    getRollbackMessage: function () {
        if (appData.fullPrice > 30000) {
            console.log('Даем скидку в 10%');
        } else if (15000 < appData.fullPrice && appData.fullPrice < 30000) {
            console.log('Даем скидку в 5%');
        } else if (0 < appData.fullPrice && appData.fullPrice < 15000) {
            console.log('Скидка не предусмотрена');
        } else if (appData.fullPrice < 0) {
            console.log('Что то пошло не так');
        }
    },

    logger: function () {
        console.log(appData.getRollbackMessage());
        console.log(appData.fullPrice);
        console.log(appData.allServicePrices);
        console.log(appData.title);
        console.log(appData.servicePercentPrice);
    }
};


appData.start()