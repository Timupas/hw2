let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log("Температура у Фаренгейт:", fahrenheit);

let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log("Годин у місяці:", hoursInMonth);
console.log("Хвилин у місяці:", minutesInMonth);

let health = 100;
let energy = 80;
health -= 30;
energy -= 20;
console.log("Здоров'я після отримання шкоди:", health);
console.log("Енергія після витрати:", energy);

let totalPrice = 500;
let discount = 0.10;
let discountedPrice = totalPrice * (1 - discount);
console.log("Ціна після знижки:", discountedPrice);

const floatNumber = 12.78;
let roundedDown = Math.floor(floatNumber);
console.log("Округлено вниз:", roundedDown);

const floatString = "45.67";
let parsedFloat = parseFloat(floatString);
console.log("Перетворено в десяткове:", parsedFloat);

const intString = "123";
let parsedInt = parseInt(intString);
console.log("Перетворено в ціле число:", parsedInt);

let number = 49;
let sqrtNumber = Math.sqrt(number);
console.log("Квадратний корінь:", sqrtNumber);

const integer = 42;
const stringNumber = "256";
let convertedInt = parseInt(stringNumber);
let convertedString = integer.toString();
console.log("Рядок у число:", convertedInt);
console.log("Число у рядок:", convertedString);
