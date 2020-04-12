'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
console.log(money);
console.log(time);

let appData = {
    timeData : time,
    moneyData : money,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : false 
};


let answer = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется?");

appData.expenses[answer] = answer2;

console.log(appData.expenses);


let moneyOneDay = money/30;
alert("Ваш расход на 1 день составляет  " + moneyOneDay + "грн");
console.log(moneyOneDay);


/*
Сколько типов данных существует в JS?
8
Как вывести информацию в консоль?
console.log();
Какая функция операторов || и &&?
|| - или
&& - и
*/
