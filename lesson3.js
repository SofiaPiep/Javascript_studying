"use strict";

/*Homework 3 Fall 204
Материал к прочтению:
https://learn.javascript.ru/ifelse
https://learn.javascript.ru/switch
https://learn.javascript.ru/array
https://www.w3schools.com/js/js_switch.asp
https://www.w3schools.com/js/js_loop_for.asp
https://www.w3schools.com/js/js_arrays.asp
Задания на закрепление (можно и нужно обсуждать в группе):
Напишите программу калькулятора со switch, обработайте возможные ошибки ввода*/
var num1 = 1;
var num2 = 2;
let action = "*";
var result;
if (typeof num1 === "number" && isNaN(num2) != true) {
  switch (action) {
    case "*":
      console.log(num1 * num2);
      break;
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "/":
      if (num2 != 0) {
        console.log(num1 / num2);
      } else console.log("Деление на ноль запрещено");
      break;
  }
}
/*Попробуйте внедрить в свою программу с кофе вложенный if*/
/*При помощи цикла for выведите чётные числа от 2 до 10*/
for (let i = 2; i <= 10; i += 2) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/*Задача с интервью*
У вас есть массив со скобками, предположим 
[ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
Нужно выяснить, равно ли количество открывающих и 
закрывающих скобок одного типа (последовательность не так важна, но если решите и это, то супер)*/
let arr = ["(", ")", "(", ")", ")"];
let sum1 = 0;
let sum2 = 0;
for (let j = 0; j < arr.length; j++) {
  if (arr[j] === "(") {
    sum1++;
  }
  if (arr[j] === ")") {
    sum2++;
  }
}
if (sum1 === sum2) {
  console.log("Equal");
} else console.log("Not equal");

/*Перепишите задачу с улиткой с помощью цикла for*/
/*«Улитка ползёт вверх по стене высотой 5 метров. 
Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра.
За сколько дней она доползёт до вершины стены.»*/

let wallHeight = 5; // Высота стены
let dailyProgress = 3; // Ежедневный подъем
let nightlySlip = 2; // Ежедневное скольжение
let currentHeight = 0; // Текущая высота улитки
let days = 0; // Количество дней

for (let days = 0; currentHeight < wallHeight; days++) {
  currentHeight += dailyProgress;
  if (currentHeight >= wallHeight) {
    break;
  }
  currentHeight -= nightlySlip;
}

console.log(`Улитка достигнет вершины за ${days} дней.`);

/*Креативное задание*(не показываем решение до понедельника):
Имеется зашифрованное предложение 
“Y-br-o-br-u-br-br-a-br-r-br-e-br-br-t-br-h-br-e-br-br-b-br-e-br-s-br-t-br-br-Q-br-A-br-br-e-br-v-br-e-br-r-br”
“Y o u            are       the            best       QA          ever”
мы знаем, что оно означает “You are the best QA ever”.
Нам нужно придумать программу дешифратор.*/
let str =
  "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
let res = "";
for (let i = 0; i < str.length; i += 3) {
  res = res + str[i];
}
console.log(res);

/*Задачка посложнее* 
 Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему*/

 /*Задачи от Татьяны

 https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript,
 function multiply(a, b) {
    return a * b;
} 
 https://www.codewars.com/kata/5a023c426975981341000014/train/javascript 
 function otherAngle(a, b) {
  return 180-a-b;
}
 https://www.codewars.com/kata/56aed32a154d33a1f3000018/train/javascript,

function myFirstKata(a,b) {
  if (typeof(a) != "number" || typeof(b) != "number") {
    return false;
  } else {
    return a % b + b % a;
  }
}*/