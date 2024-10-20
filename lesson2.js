<<<<<<< HEAD
/*Задания на закрепление:
1.1 Напишите программу по согласованию отпуска в зависимости от месяца. 
Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.*/

/*let prompt = require('prompt-sync')();*/
// get input from the user.
let month = prompt('Введите желаемый месяц отпуска:  ');
if (month === 'July' || month === 'August') {
    console.log('approved')
    document.write('Отпуск разрешен!');
}
else { console.log('denied'), document.write('Denied\n') };


/*1.2 Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить
то или иное арифметическое действие и выводиться результат в консоль.*/

var num1 = prompt('Input the First number: ');
var num2 = prompt('Input the Second number: ');
var action = prompt('What do you want to do?\n Enter 1 for multiply\n Enter 2 for division\n Enter 3 for addition\n Enter 4 for substraction\n');
if (action === '1') { console.log(num1 * num2), document.write(num2 * num1) }
else if (action === '2') { console.log(num1 / num2), document.write(num2 / num1) }
else if (action === '3') { console.log(num1 + num2), document.write(num2 + num1) }
else if (action === '4') { console.log(num1 - num2), document.write(num2 - num1) }
else { console.log('Some mistake with actions\n'), document.write('Неверно введено действие\n') };
/*1.3 Решите задачу с помощью пройденных тем (исключительно с помощью пройденных тем):
«Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра.
За сколько дней она доползёт до вершины стены.»*/
//5 = 3x-2(x-1)//5= 3x-2x+2//3 = x
/*console.log (3);*/

/*var count1 = 1;
var dist = 0; // Инициализируем dist

while (dist <= 5) {
    dist = 3 * count1;
    
    if (dist >= 5) {
        console.log(count1);
        break; 
    } else {
        count1 += 1; // Увеличиваем count1
    }
}*/

/*Креативное задание*:
2.1 Напишите следующую программу:
- У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
- Дайте названия вашим видам кофе.*/
const coffee1 = "Americano";
const coffee2 = "Latte";
/*- Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).*/
const priceAmericanoSmall = 1;
const priceAmericanoMedium = 2;
const priceAmericanoBig = 3;
const priceLatteSmall = 1;
const priceLatteMedium = 2;
const priceLatteBig = 3;
/*- Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) 
и его стоимость (в зависимости от размера стаканчика). 
- Компоненты кофе не влияют на стоимость.*/

/*- Используйте подходящую комбинацию условий if, (else if), else для решения задачи.
2.2 Нарисуйте блок-схему вашей программы (так проще будет написать саму программу).
Можете использовать следующий сайт https://miro.com/app/board или от руки*/
let clientCoffee = prompt('Choose your coffee: 1 - Americano, 2 - Latte');
let clientSize = prompt('Choose your size: 1 - small, 2 - medium, 3 - big');
    if (clientSize == 1 && clientCoffee == 1) {
        console.log(coffee1 + " small");
        console.log("Price: " + priceAmericanoSmall);
    } else if (clientSize == 2 && clientCoffee == 1) {
        console.log(coffee1 + " medium");
        document.write(coffee1 + " medium\n");
        console.log("Price: " + priceAmericanoMedium);
        document.write("Price: " + priceAmericanoMedium + "\n");
    } else if (clientSize == 3 && clientCoffee == 1) {
        console.log(coffee1 + " big");
        document.write(coffee1 + " big\n");
        document.write("Price: " + priceAmericanoBig + "\n")
    } else if (clientSize == 1 && clientCoffee == 2) {
        console.log(coffee2 + " small");
        document.write(coffee2 + " small\n");
        console.log("Price: " + priceLatteSmall);
        document.write("Price: " + priceLatteSmall + "\n");
    } else if (clientSize == 2 && clientCoffee == 2) {
        console.log(coffee2 + " medium");
        document.write(coffee2 + " medium\n");
        console.log("Price: " + priceLatteMedium);
        document.write("Price: " + priceLatteMedium + "\n");
    } else if (clientSize == 3 && clientCoffee == 2) {
        console.log(coffee2 + " big");
        document.write(coffee2 + " big\n");
        document.write("Price: " + priceLatteBig + "\n");
    } else {
        console.log("Choose right numbers!");
        document.write("Choose right numbers\n")

}

/*Задание от Татьяны
Задача 1
   Напишите программу для бара-автомата. Клиент вводит имя Name и возраст age и получает напиток. 
   Если клиент моложе 21 года, то выводится строка “Возьмите стакан сока”, если клиенту 21 или больше,  
   выводится строка “Могу предложить бокал вина”, если больше 80-ти,
выводится строка “Может, кефир?”*/
let name = 'Alexander'
let age = 15
if ( age < 21) {
    console.log('Возьмите стакан сока')
} else if (21<= age && age < 80) {
    console.log('Могу предложить бокал вина')
    } else if (age >= 80) {
    console.log('Может, кефир?')
    } else {
    console.log('Неверно введен возраст')
}

/*Задача 2.
   Underweight (Below 18.5) - выводит надпись “Мало каши ел(а) • 
   Healthy Weight (18.5 - 24.9) выводит надпись “Молодец! Так держать!”• 
   Overweight (25.0 - 29.9) выводит надпись” А тортик лучше отдать соседке” • 
   Obesity (30.0 and Above) выводит надпись “С завтрашнего дня - на воде и огурцах!”*/
    let weight = 25.5
    if (weight < 18.5) {
        console.log('Мало каши ел(а)')
    } else if (18.5 <= weight && weight <= 24.9) {
        console.log('Молодец! Так держать!')
    } else if (25 <= weight && weight <= 29.9) {
        console.log('А тортик лучше отдать соседке')
    } else if (weight > 29.9) {
        console.log('С завтрашнего дня - на воде и огурцах!')
    } else {
        console.log('Неверно введен вес')
    }
 

/*Задача 3
   Напишите программу для расчета стоимости билетов. 
   Для пассажиров старше 18 лет- полная цена, для младенцев младше 2 лет - 10% стоимости, 
   для детей от 2-х до 18ти лет - 50 % стоимости, для пенсионеров старше 65 лет - 60% стоимости*/

    let age1 = 15
    let ticketPrice = 0
    if (age1 > 18) {
        ticketPrice = 100
    } else if (age1 < 2) {
        ticketPrice = 0.9 * 100
    } else if (2 <= age1 && age1 <= 18) {
        ticketPrice = 0.5 * 100
    } else if (age1 > 65) {
        ticketPrice = 0.6 * 100
    } else {
        console.log('Неверно введен возраст')
    }
    console.log('Стоимость билета:', ticketPrice)

/*Как установить пакет  prompt- sync в VS Code
1 Заходите во вкладку Терминал.
2 переходите в нужную папку (это важно!) : cd (имя папки) 
3.Набираете в терминале npm i prompt-sync
4. Тестовый код для проверки:
var prompt = require('prompt-sync')();
var n = prompt('How many more times? ');
5. далее исполняете код: node lesson2.js (имя своего файла) 
6. Значения переменной тоже вводятся в терминале.
7. Результат выполнения тоже будет в закладке терминал.
NOTE:  1.Вводить значения можно только на английском.
             2. Если выдаст ошибку, то введите в терминале: npm i --save-dev @types/node*/
=======
/*Задания на закрепление:
1.1 Напишите программу по согласованию отпуска в зависимости от месяца. 
Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.*/

/*let prompt = require('prompt-sync')();*/
// get input from the user.
let month = prompt('Введите желаемый месяц отпуска:  ');
if (month === 'July' || month === 'August') {
    console.log('approved')
    document.write('Отпуск разрешен!');
}
else { console.log('denied'), document.write('Denied\n') };


/*1.2 Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить
то или иное арифметическое действие и выводиться результат в консоль.*/

var num1 = prompt('Input the First number: ');
var num2 = prompt('Input the Second number: ');
var action = prompt('What do you want to do?\n Enter 1 for multiply\n Enter 2 for division\n Enter 3 for addition\n Enter 4 for substraction\n');
if (action === '1') { console.log(num1 * num2), document.write(num2 * num1) }
else if (action === '2') { console.log(num1 / num2), document.write(num2 / num1) }
else if (action === '3') { console.log(num1 + num2), document.write(num2 + num1) }
else if (action === '4') { console.log(num1 - num2), document.write(num2 - num1) }
else { console.log('Some mistake with actions\n'), document.write('Неверно введено действие\n') };
/*1.3 Решите задачу с помощью пройденных тем (исключительно с помощью пройденных тем):
«Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра.
За сколько дней она доползёт до вершины стены.»*/
//5 = 3x-2(x-1)//5= 3x-2x+2//3 = x
/*console.log (3);*/

/*var count1 = 1;
var dist = 0; // Инициализируем dist

while (dist <= 5) {
    dist = 3 * count1;
    
    if (dist >= 5) {
        console.log(count1);
        break; 
    } else {
        count1 += 1; // Увеличиваем count1
    }
}*/

/*Креативное задание*:
2.1 Напишите следующую программу:
- У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
- Дайте названия вашим видам кофе.*/
const coffee1 = "Americano";
const coffee2 = "Latte";
/*- Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).*/
const priceAmericanoSmall = 1;
const priceAmericanoMedium = 2;
const priceAmericanoBig = 3;
const priceLatteSmall = 1;
const priceLatteMedium = 2;
const priceLatteBig = 3;
/*- Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) 
и его стоимость (в зависимости от размера стаканчика). 
- Компоненты кофе не влияют на стоимость.*/

/*- Используйте подходящую комбинацию условий if, (else if), else для решения задачи.
2.2 Нарисуйте блок-схему вашей программы (так проще будет написать саму программу).
Можете использовать следующий сайт https://miro.com/app/board или от руки*/
let clientCoffee = prompt('Choose your coffee: 1 - Americano, 2 - Latte');
let clientSize = prompt('Choose your size: 1 - small, 2 - medium, 3 - big');
    if (clientSize == 1 && clientCoffee == 1) {
        console.log(coffee1 + " small");
        console.log("Price: " + priceAmericanoSmall);
    } else if (clientSize == 2 && clientCoffee == 1) {
        console.log(coffee1 + " medium");
        document.write(coffee1 + " medium\n");
        console.log("Price: " + priceAmericanoMedium);
        document.write("Price: " + priceAmericanoMedium + "\n");
    } else if (clientSize == 3 && clientCoffee == 1) {
        console.log(coffee1 + " big");
        document.write(coffee1 + " big\n");
        document.write("Price: " + priceAmericanoBig + "\n")
    } else if (clientSize == 1 && clientCoffee == 2) {
        console.log(coffee2 + " small");
        document.write(coffee2 + " small\n");
        console.log("Price: " + priceLatteSmall);
        document.write("Price: " + priceLatteSmall + "\n");
    } else if (clientSize == 2 && clientCoffee == 2) {
        console.log(coffee2 + " medium");
        document.write(coffee2 + " medium\n");
        console.log("Price: " + priceLatteMedium);
        document.write("Price: " + priceLatteMedium + "\n");
    } else if (clientSize == 3 && clientCoffee == 2) {
        console.log(coffee2 + " big");
        document.write(coffee2 + " big\n");
        document.write("Price: " + priceLatteBig + "\n");
    } else {
        console.log("Choose right numbers!");
        document.write("Choose right numbers\n")

}

/*Задание от Татьяны
Задача 1
   Напишите программу для бара-автомата. Клиент вводит имя Name и возраст age и получает напиток. 
   Если клиент моложе 21 года, то выводится строка “Возьмите стакан сока”, если клиенту 21 или больше,  
   выводится строка “Могу предложить бокал вина”, если больше 80-ти,
выводится строка “Может, кефир?”*/
let name = 'Alexander'
let age = 15
if ( age < 21) {
    console.log('Возьмите стакан сока')
} else if (21<= age && age < 80) {
    console.log('Могу предложить бокал вина')
    } else if (age >= 80) {
    console.log('Может, кефир?')
    } else {
    console.log('Неверно введен возраст')
}

/*Задача 2.
   Underweight (Below 18.5) - выводит надпись “Мало каши ел(а) • 
   Healthy Weight (18.5 - 24.9) выводит надпись “Молодец! Так держать!”• 
   Overweight (25.0 - 29.9) выводит надпись” А тортик лучше отдать соседке” • 
   Obesity (30.0 and Above) выводит надпись “С завтрашнего дня - на воде и огурцах!”*/
    let weight = 25.5
    if (weight < 18.5) {
        console.log('Мало каши ел(а)')
    } else if (18.5 <= weight && weight <= 24.9) {
        console.log('Молодец! Так держать!')
    } else if (25 <= weight && weight <= 29.9) {
        console.log('А тортик лучше отдать соседке')
    } else if (weight > 29.9) {
        console.log('С завтрашнего дня - на воде и огурцах!')
    } else {
        console.log('Неверно введен вес')
    }
 

/*Задача 3
   Напишите программу для расчета стоимости билетов. 
   Для пассажиров старше 18 лет- полная цена, для младенцев младше 2 лет - 10% стоимости, 
   для детей от 2-х до 18ти лет - 50 % стоимости, для пенсионеров старше 65 лет - 60% стоимости*/

    let age1 = 15
    let ticketPrice = 0
    if (age1 > 18) {
        ticketPrice = 100
    } else if (age1 < 2) {
        ticketPrice = 0.9 * 100
    } else if (2 <= age1 && age1 <= 18) {
        ticketPrice = 0.5 * 100
    } else if (age1 > 65) {
        ticketPrice = 0.6 * 100
    } else {
        console.log('Неверно введен возраст')
    }
    console.log('Стоимость билета:', ticketPrice)

/*Как установить пакет  prompt- sync в VS Code
1 Заходите во вкладку Терминал.
2 переходите в нужную папку (это важно!) : cd (имя папки) 
3.Набираете в терминале npm i prompt-sync
4. Тестовый код для проверки:
var prompt = require('prompt-sync')();
var n = prompt('How many more times? ');
5. далее исполняете код: node lesson2.js (имя своего файла) 
6. Значения переменной тоже вводятся в терминале.
7. Результат выполнения тоже будет в закладке терминал.
NOTE:  1.Вводить значения можно только на английском.
             2. Если выдаст ошибку, то введите в терминале: npm i --save-dev @types/node*/
>>>>>>> 2129cc95b73f138f46866188d165e5c51e2f61ab
