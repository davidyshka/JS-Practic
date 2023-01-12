// Базовые арифметические операторы

/*const width = 10;
const height = 5;
const space = width * height;
console.log(space);
const newWidth = width - 4;
const newWidth2 = width + 4;
const division = newWidth / newWidth2;
const volume = 2**3 // 2 * 2 * 2
console.log(volume);

// Строки
const city = 'Moscow';
const country = 'Russia';
console.log(city + ', ' + country + ' ' + 5);
*/

// Операторы присваивания 

/*
let age = 18;
age += 2;
// age += 2; // age = age +2
// age -= 2; // age = age -2
// age *= 2; // age = age *2
// age /= 2; // age = age /2
// age++;    // age = age + 1
// age--;    // age = age -1
console.log(age)

// Операторы сравнения
const vasya = 20;
console.log(age > vasia);
console.log(age < vasia);
console.log(age >= vasia);
console.log(age <= vasia);
console.log(age == vasia);

*/

/*const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

let b;
let c;

// c = b = 100 + 50;
console.log(typeof(b));
console.log(typeof(c));
*/
/*
let a = 5;
let b = 5.6;
console.log(typeof a)
a = 'string'
console.log(typeof a)
*/

const payRaiteUSD = 80;
const projectHours = 40;
const availableHours = (11-2) * 5;
console.log('Смогу ли я работать' + ' ' + (availableHours > projectHours))
console.log('Я возьму' + ' ' + (payRaiteUSD * projectHours + '$'));

const projectName = 'Сайт магазина';
const price = 2000;
const author = 'David Komarovskiy';

const template = author + ' Заказал ' + projectName + ' По цене ' + price + '$';
const template2= `${author} заказал ${projectName} по цене ${price}$`;
console.log(template)
console.log(template2)






console.log(hoursWork)