/*Homework 4_Fall_2024
Материал к прочтению:
https://www.w3schools.com/js/js_loop_forin.asp
https://www.w3schools.com/js/js_loop_forof.asp
https://www.w3schools.com/js/js_loop_while.asp

https://learn.javascript.ru/while-for
https://learn.javascript.ru/array

Code from lesson https://replit.com/@NalyaShakirova/Lesson4#script.js

Задания на закрепление (можно и нужно обсуждать в группе):
Часть 1 (!!! У вас будет отдельная запись для первой части, там говорится, что это задание пятое, не обращайте внимания, 
просто идем чуть быстрее)

*/
function drawDiamond() {
    const max = 9; // Максимальное число в ромбе
    
    // Верхняя половина ромба
    for (let i = 1; i <= max; i++) {
      let line = ' '.repeat(max - i); // Добавляем пробелы перед строкой
      for (let j = 1; j <= i; j++) {
        line += j; // Первая половина числа
      }
      for (let j = i - 1; j >= 1; j--) {
        line += j; // Вторая половина числа
      }
      console.log(line);
    }
    
    // Центральная строка с 0
    let centerLine = '';
    for (let j = 1; j <= max; j++) {
      centerLine += j; // Первая половина числа
    }
    centerLine += '0'; // Добавляем 0 в середину
    for (let j = max; j >= 1; j--) {
      centerLine += j; // Вторая половина числа
    }
    console.log(centerLine);
    
    // Нижняя половина ромба
    for (let i = max; i >= 1; i--) {
      let line = ' '.repeat(max - i); // Добавляем пробелы перед строкой
      for (let j = 1; j <= i; j++) {
        line += j; // Первая половина числа
      }
      for (let j = i - 1; j >= 1; j--) {
        line += j; // Вторая половина числа
      }
      console.log(line);
    }
  }
  
  drawDiamond();
  
/*2. Нарисуйте елочку
     *
   ***
  *****
 *******
********* */
function jouluTree() {
    const num  = 9;
    for (let i =1; i <= num; i++) {
      let line = ' '.repeat(num - i);
      for (let j = 1; j <= i; j++) {
        line += j; // Первая половина числа
      }
      for (let j = i - 1; j >= 1; j--) {
        line += '*'.repeat(num - i); // Вторая половина числа
      }
      console.log(line);
    }
}
jouluTree()

/*3. Нарисуйте треугольник**
1 
2 6 
3 7 10 
4 8 11 13 
5 9 12 14 15

Часть 2
4. Усовершенствуйте решение задачи про улитку с помощью  наиболее подходящего цикла. 
5. Задача с интервью*
У вас есть массив с тремя видами скобок, предположим 
[ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов и последовательность может быть разной.
Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.
Пример:
[ ‘)’, ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘(‘ ] - у двух нет пары (нарушена последовательность)
[ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’ ] - у всех есть пара
[ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘[’, ‘)’ ] - у трех нет пары


Креативное задание*(не показываем решение до понедельника):

Внедрите в свой код про кофе цикл, там, где это может понадобиться. Добавьте комментарии в код с пояснениями изменений, зачем они нужны.

Продумайте на будущее план развития своего кода с кофе, где в реальной жизни он мог бы быть использован. Начните создавать мини-документацию к своему проекту. Пропишите требования так, как вы хотели бы их видеть на своем проекте и чтобы посторонний человек мог в них разобраться. Скорее всего, что-то придется добавить или изменить позже.
Очень полезно, если вы сможете работать парами и проверять друг у друга.
 (это вам поможет впоследствии писать тест кейсы, тестировать документацию и требования)





 From Svetlana

// 1// let vegetables1 = [‘Капуста‘, ‘Репа‘, ‘Редиска‘, ‘Морковка’ , ‘лук‘, ‘картошка‘];
//вывести строки содержащие буквы и ‘а’ и ‘о’ слова не должны повторятся

// 2/// let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
//вывести строки с четным индексом и четной длиной
//* только первое слово

// 3/// let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
//вывести строки с четным индексом и четной длиной в обратном порядке
//* только первое слово

//4// // let numbers = [ 3, 5, 25, 70,  171,200,326, 345, 999, 1000, 1005]
// найти сумму всех чисел

//5//let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
// найти сумму всех чисел, выведите в формате ‘The sum of all numbers is: 25’

//6// let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
// получите массив [1000, 3, true, null, 15, undefined, 100, 313, 425];

From Tatiana
ToDo:

https://www.codewars.com/kata/534ea96ebb17181947000ada/
https://www.codewars.com/kata/588417e576933b0ec9000045
https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/

Kata from review:
https://www.codewars.com/kata/570a6a46455d08ff8d001002/
https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
https://www.codewars.com/kata/5808e2006b65bff35500008f*/

/*Homework 4_Fall_2024
Материал к прочтению:
https://www.w3schools.com/js/js_loop_forin.asp
https://www.w3schools.com/js/js_loop_forof.asp
https://www.w3schools.com/js/js_loop_while.asp

https://learn.javascript.ru/while-for
https://learn.javascript.ru/array

Code from lesson https://replit.com/@NalyaShakirova/Lesson4#script.js

Задания на закрепление (можно и нужно обсуждать в группе):
Часть 1 (!!! У вас будет отдельная запись для первой части, там говорится, что это задание пятое, не обращайте внимания, 
просто идем чуть быстрее)

*/
function drawDiamond() {
    const max = 9; // Максимальное число в ромбе
    
    // Верхняя половина ромба
    for (let i = 1; i <= max; i++) {
      let line = ' '.repeat(max - i); // Добавляем пробелы перед строкой
      for (let j = 1; j <= i; j++) {
        line += j; // Первая половина числа
      }
      for (let j = i - 1; j >= 1; j--) {
        line += j; // Вторая половина числа
      }
      console.log(line);
    }
    
    // Центральная строка с 0
    let centerLine = '';
    for (let j = 1; j <= max; j++) {
      centerLine += j; // Первая половина числа
    }
    centerLine += '0'; // Добавляем 0 в середину
    for (let j = max; j >= 1; j--) {
      centerLine += j; // Вторая половина числа
    }
    console.log(centerLine);
    
    // Нижняя половина ромба
    for (let i = max; i >= 1; i--) {
      let line = ' '.repeat(max - i); // Добавляем пробелы перед строкой
      for (let j = 1; j <= i; j++) {
        line += j; // Первая половина числа
      }
      for (let j = i - 1; j >= 1; j--) {
        line += j; // Вторая половина числа
      }
      console.log(line);
    }
  }
  
  drawDiamond();
  
/*2. Нарисуйте елочку
     *
   ***
  *****
 *******
********* */
function jouluTree() {
    const num  = 9;
    for (let i =1; i <= num; i++) {
      let line = ' '.repeat(num - i);
      for (let j = 1; j <= i; j++) {
        line += j; // Первая половина числа
      }
      for (let j = i - 1; j >= 1; j--) {
        line += '*'.repeat(num - i); // Вторая половина числа
      }
      console.log(line);
    }
}
jouluTree()

/*3. Нарисуйте треугольник**
1 
2 6 
3 7 10 
4 8 11 13 
5 9 12 14 15

Часть 2
4. Усовершенствуйте решение задачи про улитку с помощью  наиболее подходящего цикла. 
5. Задача с интервью*
У вас есть массив с тремя видами скобок, предположим 
[ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов и последовательность может быть разной.
Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.
Пример:
[ ‘)’, ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘(‘ ] - у двух нет пары (нарушена последовательность)
[ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’ ] - у всех есть пара
[ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘[’, ‘)’ ] - у трех нет пары


Креативное задание*(не показываем решение до понедельника):

Внедрите в свой код про кофе цикл, там, где это может понадобиться. Добавьте комментарии в код с пояснениями изменений, зачем они нужны.

Продумайте на будущее план развития своего кода с кофе, где в реальной жизни он мог бы быть использован. Начните создавать мини-документацию к своему проекту. Пропишите требования так, как вы хотели бы их видеть на своем проекте и чтобы посторонний человек мог в них разобраться. Скорее всего, что-то придется добавить или изменить позже.
Очень полезно, если вы сможете работать парами и проверять друг у друга.
 (это вам поможет впоследствии писать тест кейсы, тестировать документацию и требования)





 From Svetlana

// 1// let vegetables1 = [‘Капуста‘, ‘Репа‘, ‘Редиска‘, ‘Морковка’ , ‘лук‘, ‘картошка‘];
//вывести строки содержащие буквы и ‘а’ и ‘о’ слова не должны повторятся

// 2/// let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
//вывести строки с четным индексом и четной длиной
//* только первое слово

// 3/// let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
//вывести строки с четным индексом и четной длиной в обратном порядке
//* только первое слово

//4// // let numbers = [ 3, 5, 25, 70,  171,200,326, 345, 999, 1000, 1005]
// найти сумму всех чисел

//5//let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
// найти сумму всех чисел, выведите в формате ‘The sum of all numbers is: 25’

//6// let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
// получите массив [1000, 3, true, null, 15, undefined, 100, 313, 425];

From Tatiana
ToDo:

https://www.codewars.com/kata/534ea96ebb17181947000ada/
https://www.codewars.com/kata/588417e576933b0ec9000045
https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/

Kata from review:
https://www.codewars.com/kata/570a6a46455d08ff8d001002/
https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
https://www.codewars.com/kata/5808e2006b65bff35500008f*/
>>>>>>> 2129cc95b73f138f46866188d165e5c51e2f61ab
