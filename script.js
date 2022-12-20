'use strict';



const headerName = document.getElementsByTagName('h1')[0];

const startButton = document.getElementsByClassName('handler_btn')[0];
const resetButton = document.getElementsByClassName('handler_btn')[1];

const plusBtn = document.querySelector('.screen-btn');

const itemsPercent = document.querySelectorAll('.other-items.percent');
const itemsNumber = document.querySelectorAll('.other-items.number');

const rollbackInput = document.querySelector('.rollback input[type="range"]');
const getSpan = document.querySelector('.rollback .range-value');

let selectInput = document.querySelectorAll('.main-controls__item.screen select');
let getAmountScr = document.querySelectorAll('.main-controls__item.screen input');

const scrPriceInput = document.getElementsByClassName('total-input')[0];
const amountScrInput = document.getElementsByClassName('total-input')[1];
const otherSrvPrice = document.getElementsByClassName('total-input')[2];
const fullPriceInput = document.getElementsByClassName('total-input')[3];
const rollbackPriceInput = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');






const appData = {
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    title: '',
    screens: [],
    adaptive: true,
    screenPrice: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    rollback: rollbackInput.value,
    servicesPercent: {},
    servicesNumber: {},
    count: 0,
    init: function () {
        appData.addTitle();
        appData.stopButton();
        appData.checkChange();
        startButton.addEventListener('click', appData.start);
        plusBtn.addEventListener('click', appData.addScreenBlock);
        rollbackInput.addEventListener('input', appData.spanner);
    },
    spanner: function () {
        getSpan.textContent = rollbackInput.value + '%';
        //усложненное
        rollbackPriceInput.value = Number(appData.fullPrice) - Number(appData.fullPrice) * rollbackInput.value / 100;
        //усложненное
        appData.rollback = rollbackInput.value;
    },
    stopButton: function () {
        selectInput.forEach(function (select, index) {
            console.log(getAmountScr[index]);
            if (select.options[select.selectedIndex].textContent === 'Тип экранов' || getAmountScr[index].value.length < 1) {
                startButton.disabled = true;
            } else if (select.options[select.selectedIndex].textContent !== 'Тип экранов' && getAmountScr[index].value.length > 0) {
                startButton.disabled = false;
            }
        });
    },
    checkChange: function () {
        selectInput.forEach(function (select) {
            select.addEventListener('change', appData.stopButton);
        });

        getAmountScr.forEach(function (input) {
            input.addEventListener('input', appData.stopButton);
        });
    },
    addTitle: function () {
        document.title = headerName.textContent;
    },
    start: function () {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.logger();
        appData.showResult();
    },
    showResult: function () {
        scrPriceInput.value = appData.screenPrice;
        amountScrInput.value = appData.count;
        otherSrvPrice.value = appData.servicePricesNumber + appData.servicePricesPercent;
        fullPriceInput.value = appData.fullPrice;
        rollbackPriceInput.value = appData.servicePercentPrice;
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen');

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            });
        });

        console.log(appData.screens);
    },
    addServices: function () {
        itemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }

        });

        itemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }

        });
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        console.log(cloneScreen);
        screens[screens.length - 1].after(cloneScreen);
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += Number(appData.screenPrice) * (appData.servicesPercent[key] / 100);
        }


        getAmountScr = document.querySelectorAll('.main-controls__item.screen input');
        getAmountScr.forEach(function (input) {
            appData.count += +input.value;
        });


        appData.fullPrice = Number(appData.screenPrice) + appData.servicePricesPercent + appData.servicePricesNumber;
        appData.servicePercentPrice = Number(appData.fullPrice) - Number(appData.fullPrice) * appData.rollback / 100;
    },

    logger: function () {
        for (let key in appData) {
            console.log('Ключ:' + key + ' ' + 'Значение:' + appData[key]);
        }
    }
};


appData.init();