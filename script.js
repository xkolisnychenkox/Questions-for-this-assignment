'use strict';

let money,time;

function start(){
     money = +prompt("Ваш бюджет на месяц?", " ");
     time = prompt("Введите дату в формате YYYY-MM-DD", " ");

     while(isNaN(money) || money == " " || money == null){
        money = +prompt("Ваш бюджет на месяц?", " ");
     } // isNaN будет давать true пока в money не будет цифр;
}

start();

let appData = {
    timeData : time,
    moneyData : money,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : true 
};





// appData.expenses.answer = answer2;
// appData.expenses.answer3= answer4;


console.log(appData.expenses);
function Chooseexpenses(){
    for(let i=0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
        
        if(typeof(a)==='string' && typeof(a)!= null && typeof(b)!=null && a!= ' ' && b!= ' '&& a.length < 50){
            console.log("done");
            appData.expenses [a] = b;
        }else{
            console.log("вы ввели не строку!!!");
            i = i - 1;
        }
    }
}

Chooseexpenses();


console.log(appData.optionalExpenses);
function chooseOptExpenses(){
    for (let i = 1; i < 4; i++){
        let c = prompt ("Статья необязательных расходов?");
        if(typeof(c)==='string' && typeof(c)!= null  && c!= ' '&& c.length < 50){
                appData.optionalExpenses [i] = c;
        }
        else{
            i = i - 1;
        }
    }
}

chooseOptExpenses();

// let i = 0;
// while(i < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = prompt("Во сколько обойдется?");
    
//     if(typeof(a)==='string' && typeof(a)!= null && typeof(b)!=null && a!= ' ' && b!= ' '&& a.length < 50){
//         console.log("done");
//         appData.expenses [a] = b;
//     }else{
//         i = i - 1;
//     }
//     i++;
// }


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

function detectDayBudget(){
    if (appData.moneyPerDay > 0){
        appData.moneyPerDay = (appData.moneyData/30).toFixed();

        alert("бабки на день " + appData.moneyPerDay);
    }
}
detectDayBudget();


function detectLevel(){
if (appData.moneyPerDay <= 100){
    console.log("мало");
} else if (appData.moneyPerDay > 100) {
    console.log("достаточно, но лучше больше");
} else {
    console.log("чем больше тем лучше");
}
}
detectLevel();

function Checksavings(){
    if (appData.saving == true){
        let save = +prompt("какова сума наколпений ?",""),
            percent = +prompt("под какой процент ?");
        
        appData.mounthInCome = save/100/12+percent;
        alert ("доход в месяц с вашего депозита: " + appData.mounthInCome);
    }
}

Checksavings();

