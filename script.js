'use strict';

const books = document.querySelectorAll('.book');
const fixBookName = document.querySelectorAll('.book a');
const removeAd = document.querySelector('.adv');
const fixNames = document.querySelectorAll('.book li');
const list = document.querySelectorAll('ul')
const cloneLi = fixNames[1].cloneNode(true)





document.body.style.backgroundImage = 'url(./image/open_book.jpg)';

fixBookName[4].textContent = 'Книга 3. this и Прототипы Объектов';

books[0].before(books[1]);
books[0].after(books[4]);
books[4].after(books[3]);
books[3].after(books[5]);

removeAd.remove();

fixNames[1].after(fixNames[3]);
fixNames[3].after(fixNames[6]);
fixNames[6].after(fixNames[8]);
fixNames[9].after(fixNames[2]);

fixNames[47].after(fixNames[55]);
fixNames[55].after(fixNames[49]);
fixNames[49].after(fixNames[50]);
fixNames[53].after(fixNames[51]);

cloneLi.textContent = 'Глава 8: За пределами ES6';
list[2].append(cloneLi);


