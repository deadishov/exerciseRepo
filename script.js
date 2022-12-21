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

const checkBoxes = document.querySelectorAll('.custom-checkbox');

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
        startButton.addEventListener('click', this.start);
        plusBtn.addEventListener('click', this.addScreenBlock);
        rollbackInput.addEventListener('input', this.spanner);
    },
    spanner: function () {
        getSpan.textContent = rollbackInput.value + '%';
        //усложненное
        rollbackPriceInput.value = Number(appData.fullPrice) - Number(appData.fullPrice) * rollbackInput.value / 100;
        //усложненное
        this.rollback = rollbackInput.value;
    },
    stopButton: function () {
        selectInput.forEach((select, index) => {
            console.log(getAmountScr[index]);
            if (select.options[select.selectedIndex].textContent === 'Тип экранов' || getAmountScr[index].value.length < 1) {
                startButton.disabled = true;
            } else if (select.options[select.selectedIndex].textContent !== 'Тип экранов' && getAmountScr[index].value.length > 0) {
                startButton.disabled = false;
            }
        });
    },
    checkChange: function () {
        selectInput.forEach((select) => {
            select.addEventListener('change', this.stopButton);
        });

        getAmountScr.forEach((input) => {
            input.addEventListener('input', this.stopButton);
        });
    },
    addTitle: function () {
        document.title = headerName.textContent;
    },
    stopInputs: function () {
        selectInput = document.querySelectorAll('.main-controls__item.screen select');
        getAmountScr = document.querySelectorAll('.main-controls__item.screen input');

        selectInput.forEach((select) => {
            select.disabled = true;
        });
        getAmountScr.forEach((input) => {
            input.disabled = true;
        })
    },
    changeButton: function () {
        startButton.style.display = 'none';
        resetButton.style.display = 'block';
        resetButton.addEventListener('click', this.fullReset);
    },
    fullReset: function () {
        screens = document.querySelectorAll('.screen');
        selectInput = document.querySelectorAll('.main-controls__item.screen select');
        getAmountScr = document.querySelectorAll('.main-controls__item.screen input');

        resetButton.style.display = 'none';
        startButton.style.display = 'block';

        selectInput.forEach((select) => {
            select.selectedIndex = 0
        })
        getAmountScr.forEach((input) => {
            input.value = ''
        })
        selectInput.forEach((select) => {
            select.disabled = false;
        });
        getAmountScr.forEach((input) => {
            input.disabled = false;
        });
        checkBoxes.forEach((checkbox) => {
            checkbox.checked = false;
        });


        appData.init();
        appData.servicePricesPercent = 0,
            appData.servicePricesNumber = 0,
            appData.title = '',
            appData.screens = [],
            appData.adaptive = true,
            appData.screenPrice = 0,
            appData.fullPrice = 0,
            appData.servicePercentPrice = 0,
            appData.rollback = rollbackInput.value,
            appData.servicesPercent = {},
            appData.servicesNumber = {},
            appData.count = 0
        appData.showResult();
    },
    start: function () {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.logger();
        appData.stopButton();
        appData.checkChange();
        appData.showResult();
        appData.stopInputs();
        appData.changeButton();
    },
    showResult: function () {
        scrPriceInput.value = this.screenPrice;
        amountScrInput.value = this.count;
        otherSrvPrice.value = this.servicePricesNumber + this.servicePricesPercent;
        fullPriceInput.value = this.fullPrice;
        rollbackPriceInput.value = this.servicePercentPrice;
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen');

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            });
        });

        console.log(this.screens);
    },
    addServices: function () {
        itemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }

        });

        itemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }

        });
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        console.log(cloneScreen);
        screens[screens.length - 1].after(cloneScreen);
    },
    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price;
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += Number(this.screenPrice) * (this.servicesPercent[key] / 100);
        }


        getAmountScr = document.querySelectorAll('.main-controls__item.screen input');
        getAmountScr.forEach(function (input) {
            appData.count += +input.value;
        });


        this.fullPrice = Number(this.screenPrice) + this.servicePricesPercent + this.servicePricesNumber;
        this.servicePercentPrice = Number(this.fullPrice) - Number(this.fullPrice) * this.rollback / 100;
    },

    logger: function () {
        for (let key in this) {
            console.log('Ключ:' + key + ' ' + 'Значение:' + this[key]);
        }
    }
};


appData.init();