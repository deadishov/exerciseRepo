'use strict';

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
    sale: '',

    start: function () {
        appData.asking();
        appData.isNumber();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.title = appData.getTitle();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.sale = appData.getRollbackMessage();
        appData.logger();
    },

    asking: function () {
        appData.title = prompt('Как называется ваш проект?');

        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?');
        } while (!appData.isNumber(appData.screenPrice));

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    getFullPrice: function () {
        return Number(appData.screenPrice) + Number(appData.allServicePrices);
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

    getTitle: function () {
        return appData.title[0].toUpperCase() + appData.title.slice(1);
    },

    getServicePercentPrices: function () {
        return Number(appData.fullPrice) - Number(appData.fullPrice) * appData.rollback / 100;
    },

    getRollbackMessage: function () {
        if (Number(appData.fullPrice) > 30000) {
            return 'Даем скидку в 10%';
        } else if (15000 < Number(appData.fullPrice) && Number(appData.fullPrice) < 30000) {
            return 'Даем скидку в 5%';
        } else if (0 < Number(appData.fullPrice) && Number(appData.fullPrice) < 15000) {
            return 'Скидка не предусмотрена';
        } else if (Number(appData.fullPrice) < 0) {
            return 'Что то пошло не так';
        }
    },

    logger: function () {
        for (let key in appData) {
            console.log('Ключ:' + key + ' ' + 'Значение:' + appData[key]);
        }
    }
};


appData.start();