'use strict';

const appData = {
    allServicePrices: 0,
    title: '',
    screens: [],
    adaptive: true,
    screenPrice: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    rollback: 25,
    services: {},
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

            appData.screens.push({ id: i, name: name, price: price })
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

            appData.services[name] = +price;

        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
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
console.log(appData.screens);