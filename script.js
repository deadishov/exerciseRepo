let title = 'Just project';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 50;
let rollback = 35;
let fullPrice = 85;
let adaptive = true;


console.log(typeof title);
console.log(screens.length);
console.log(screens.toLowerCase(), screens.split(', '));
console.log('Стоимость верстки экранов ' + screenPrice + ' долларов');
console.log(typeof adaptive);
console.log('Стоимость разработки сайта ' + fullPrice + ' долларов');
console.log(typeof fullPrice);
console.log(fullPrice * rollback / 100);