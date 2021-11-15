// 1. Напишите программу, запрашивающую у пользователя число и подсчитывающую сумму натуральных положительных чисел от 1 до введенного пользователем значения. Сумма первых *n* положительных чисел может быть рассчитана по формуле: sum = n * (n + 1) / 2

/*let userNumber = +prompt("Введите положительное число");
let sum = (userNumber * (userNumber + 1)) / 2;

document.write(`Сумма натуральных положительных чисел = ${sum} !`);
console.log(`Сумма натуральных положительных чисел = ${sum} !`);*/

//2. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

/*let souvenirWeight = 75;
let cheapStaffWeight = 112;

const kilogram = 1000; // gramm v kilogramme

let SouvenirQuantity = +prompt("сколько сувениров хотите заказать?");
let cheapStaffQuantity = +prompt("сколько сувениров хотите заказать?");

let findTotalWeight =
  SouvenirQuantity * souvenirWeight + cheapStaffQuantity * cheapStaffWeight;

document.write(`<h1> Всего заказов на ${findTotalWeight} граммов! </h1> <br>
<h2> В киллограммах: ${findTotalWeight / kilogram} </h2>`);*/

//3. Представьте, что вы открыли в банке сберегательный счет под 4 % годовых. Проценты банк рассчитывает в конце года и добавляет к сумме счета. Напишите программу, которая запрашивает у пользователя сумму первоначального депозита, после чего рассчитывает и выводит на экран сумму на счету в конце первого, второго и третьего годов. Все суммы должны быть округлены до двух знаков после запятой.

/*let deposit = +prompt("Укажите сумму первоначального депозита");
let rate = 0.04;

let firstYear = deposit + deposit * rate;
let secondYear = firstYear + firstYear * rate;
let thirdYear = secondYear + secondYear * rate;

document.write(
  `Сумма за 1й год с начисленными процентами ${firstYear.toFixed(2)} <br>`
);
document.write(
  `Сумма за 2й год с начисленными процентами ${secondYear.toFixed(2)} <br>`
);
document.write(
  `Сумма за 3й год с начисленными процентами ${thirdYear.toFixed(2)} <br>`
);
*/

////VTOROY VARIANT RESHENIYA CHEREZ ZIKL//////////
/*let rate = 0.04;
let deposit = +prompt("Укажите сумму первоначального депозита");
let sum = deposit;
let year = +prompt("На сколько лет вкладываете депозит?");

for (let i = 0; i <= year; i++) {
  let x = sum * rate;
  sumWithRate = sum + x;
  document.write(
    `Ваша прибыль за 1 год ${x} сом, Общая сумма ${sumWithRate.toFixed(2)}`
  );
}
document.write(
  `первоначальный вклад ${deposit} сом, за ${year} года ваш вклад стал ${sumWithRate.toFixed(
    2
  )} сомов`
);*/

//4. Создайте программу, которая запрашивает у пользователя два целых числа a и b, после чего выводит на экран результаты следующих математических операций:
//- сумма a и b;
//- разница между a и b;
//- произведение a и b;
//- частное от деления a на b;
//- остаток от деления a на b;
//- результат возведения числа a в степень b.

/*let a = +prompt("Укажите любое число");
let b = +prompt("Укажите другое число");

document.write(`сумма a и b = ${a + b} <br>`);

document.write(`разница между a и b = ${a - b} <br>`);

document.write(`произведение a и b = ${a * b} <br>`);

document.write(`частное от деления a на b = ${a / b} <br>`);

document.write(`остаток от деления a на b; = ${a % b} <br>`);

document.write(`результат возведения числа a в степень b = ${a ** b} <br>`);*/
