'use strict';

let money = +prompt("Ваш бюджет на месяц?");
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





// appData.expenses.answer = answer2;
// appData.expenses.answer3= answer4;


console.log(appData.expenses);

// for(let i=0; i < 2; i++){
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = prompt("Во сколько обойдется?");
    
//     if(typeof(a)==='string' && typeof(a)!= null && typeof(b)!=null && a!= ' ' && b!= ' '&& a.length < 50){
//         console.log("done");
//         appData.expenses [a] = b;
//     }else{
//         console.log("вы ввели не строку!!!");

//     }
// }
let i = 0;
while(i < 2){
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
    b = prompt("Во сколько обойдется?");
    
    if(typeof(a)==='string' && typeof(a)!= null && typeof(b)!=null && a!= ' ' && b!= ' '&& a.length < 50){
        console.log("done");
        appData.expenses [a] = b;
    }else{
        //домашка
    }
    i++;
}


// let i = 0;
// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = prompt("Во сколько обойдется?");
    
//     if(typeof(a)==='string' && typeof(a)!= null && typeof(b)!=null && a!= ' ' && b!= ' '&& a.length < 50){
//         console.log("done");
//         appData.expenses [a] = b;
//     }else{
//         //домашка
//     }
// i++;
// }while(i < 2)


appData.moneyPerDay = appData.moneyData/30;

alert("бабки на день " + appData.moneyPerDay);

if (appData.moneyPerDay <= 100){
    console.log("мало");
} else if (appData.moneyPerDay > 100) {
    console.log("достаточно, но лучше больше");
} else {
    console.log("чем больше тем лучше");
}


/*
Сколько типов данных существует в JS?
8
Как вывести информацию в консоль?
console.log();
Какая функция операторов || и &&?
|| - или
&& - и
*/
