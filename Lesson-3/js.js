///1. Имеется строка "иВан" , нужно обработать эту строку и получить правильное написание в виде "Иван"

/*let userName = "AIZADA";
let firstLetterOfName = userName.slice(0, 1).toUpperCase();
let restOfName = userName.slice(1, userName.length).toLowerCase();

console.log(firstLetterOfName + restOfName);*/

////////////////////////////////////////////////////////////////////////////////
//2. Есть стоимость в виде строки "$120". Сначала идёт знак валюты, а затем – число. Необходимо извлечь стоимость без знака $ т.е. из строки "$120" нужно получить "120"

/*let price = "$120";
console.log(price.slice(1, price.length));*/

////////////////////////////////////////////////////////////////////////////////3. Напишите программу, которая осуществляла бы такой диалог человека с компьютером:

/* **КОМПЬЮТЕР ВЫВОДИТ НА ЭКРАН:** Здравствуй, я компьютер, а тебя как зовут?
 ***ЧЕЛОВЕК ВВОДИТ С КЛАВИАТУРЫ:**  Коля*
 **КОМПЬЮТЕР ВЫВОДИТ НА ЭКРАН:**  Очень приятно, Коля. Сколько тебе лет?
 ***ЧЕЛОВЕК ВВОДИТ С КЛАВИАТУРЫ:**  16*
 **КОМПЬЮТЕР ВЫВОДИТ НА ЭКРАН:**   Ого! Тебе уже 16!*/

/*let userName = prompt("Здравствуй, я компьютер, а тебя как зовут?");

let whatIsYourAge = prompt(
  '"Очень приятно, ' + userName + '. Сколько тебе лет?"'
);
let reaction = prompt("Ого! Тебе уже " + whatIsYourAge + "!");

document.write(
  ` <strong>"Здравствуй, я компьютер, а тебя как зовут?  "</strong> `
);
document.write(`${userName}`);
document.write(
  `<strong><br> "Очень приятно, ${userName}. Сколько тебе лет?</strong>  "`
);
document.write(`${whatIsYourAge}`);*/

//////////////////////////////////////////////////////////////////////////////////4. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры карты. **Пример: "Номер вашей карты: **********1245"**
/*
alert("Card Number should consist from 18-digits!");
let cardNumber = prompt("Please write down Your Card Number");
checkIfNumber();

function checkIfNumber() {
  if (cardNumber === Number()) {
    checkCardLength;
  } else if (cardNumber !== Number()) {
    alert("Please write only digits!");
  }
}

checkCardLength();

function checkCardLength() {
  if (cardNumber.length <= 17) {
    alert("Please check card Credentials!");
  } else if (cardNumber.length == 18) {
    document.write(
      `Your Card Number: "************** ${cardNumber.slice(14, 18)}"`
    );
  } else if (cardNumber.length >= 19) {
    alert("Please input correct Card credentials!");
  }
}*/
