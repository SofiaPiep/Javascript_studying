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
function drawChristmasTree(height) {
  for (let i = 1; i <= height; i++) {
    // Создаем строку из звездочек с нужным количеством пробелов в начале
    let row = " ".repeat(height - i) + "*".repeat(2 * i - 1);
    console.log(row);
  }
}

// Пример вызова функции для елочки высотой 5 рядов
drawChristmasTree(5);

/*3. Нарисуйте треугольник**
1 
2 6 
3 7 10 
4 8 11 13 
5 9 12 14 15*/

function drawNumberTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    let number = i;
    for (let j = 1; j <= i; j++) {
      row += number + " ";
      number += i;
    }
    console.log(row);
  }
}

// Пример вызова для треугольника из 5 рядов
drawNumberTriangle(5);

/*Часть 2
4. Усовершенствуйте решение задачи про улитку с помощью  наиболее подходящего цикла. */
function snailClimb(wallHeight, dayClimb, nightSlide) {
  let currentHeight = 0;
  let days = 0;

  while (currentHeight < wallHeight) {
    currentHeight += dayClimb;
    days++;
    if (currentHeight >= wallHeight) {
      break; // Если улитка достигла вершины за день, выходим из цикла
    }
    currentHeight -= nightSlide;
  }

  return days;
}

// Пример использования:
const wallHeight = 5;
const dayClimb = 3;
const nightSlide = 2;

const daysToReachTop = snailClimb(wallHeight, dayClimb, nightSlide);
console.log(`Улитке потребуется ${daysToReachTop} дней, чтобы достичь вершины стены.`);

/*5. Задача с интервью*
У вас есть массив с тремя видами скобок, предположим 
[ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов и последовательность может быть разной.
Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). 
Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.
Пример:
[ ‘)’, ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘(‘ ] - у двух нет пары (нарушена последовательность)
[ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’ ] - у всех есть пара
[ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘[’, ‘)’ ] - у трех нет пары*/
function isBalanced(arr) {
  const stack = [];
  const bracketsMap = {
      '(': ')',
      '{': '}',
      '[': ']'
  };

  // Проходим по массиву скобок
  for (let i = 0; i < arr.length; i++) {
      const current = arr[i];

      // Если это открывающая скобка, добавляем её в стек
      if (current === '(' || current === '{' || current === '[') {
          stack.push(current);
      } 
      // Если это закрывающая скобка
      else if (current === ')' || current === '}' || current === ']') {
          // Проверяем, есть ли соответствующая открывающая скобка
          if (stack.length === 0) {
              return `Нарушена последовательность: лишняя закрывающая скобка '${current}'`;
          }
          
          const lastOpen = stack.pop(); // Убираем последнюю открывающую скобку из стека
          if (bracketsMap[lastOpen] !== current) {
              return `Нарушена последовательность: скобки '${lastOpen}' и '${current}' не парные`;
          }
      }
  }

  // Если стек не пуст, остались непарные открывающие скобки
  if (stack.length > 0) {
      return `Непарные открывающие скобки: ${stack.join(', ')}`;
  }

  return 'Все скобки парные и последовательность правильная';
}

// Примеры использования:
console.log(isBalanced([')', '{', '(', '(', ')', ')', '}', '[', ']', '(']));
// Нарушена последовательность: лишняя закрывающая скобка ')'

console.log(isBalanced(['{', '(', '(', ')', ')', '}', '[', ']']));
// Все скобки парные и последовательность правильная

console.log(isBalanced(['{', '(', '(', ')', ')', '}', '[', '[', ')']));
// Непарные открывающие скобки: [



/*Креативное задание*(не показываем решение до понедельника):
Внедрите в свой код про кофе цикл, там, где это может понадобиться. Добавьте комментарии в код с пояснениями изменений, зачем они нужны.
Продумайте на будущее план развития своего кода с кофе, где в реальной жизни он мог бы быть использован. Начните создавать мини-документацию к своему проекту. Пропишите требования так, как вы хотели бы их видеть на своем проекте и чтобы посторонний человек мог в них разобраться. Скорее всего, что-то придется добавить или изменить позже.
Очень полезно, если вы сможете работать парами и проверять друг у друга.
 (это вам поможет впоследствии писать тест кейсы, тестировать документацию и требования)

 From Svetlana
// 1// let vegetables1 = [‘Капуста‘, ‘Репа‘, ‘Редиска‘, ‘Морковка’ , ‘лук‘, ‘картошка‘];
//вывести строки содержащие буквы и ‘а’ и ‘о’ слова не должны повторятся*/

let vegetables1 = ['Капуста', 'Репа', 'Редиска', 'Морковка', 'лук', 'картошка'];

// Функция для проверки наличия обеих букв "а" и "о" в строке
function hasBothLetters(word) {
    return word.includes('а') && word.includes('о');
}

// Фильтрация массива по условиям и удаление дубликатов
//let result = [...new Set(vegetables1.filter(hasBothLetters))];

console.log(result);


// 2/// let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
//вывести строки с четным индексом и четной длиной
//let arr1 = ['mama', 1000, 'Sunday', 3, 'my', true, 'limit', null, 15, 'elite', undefined, 100, 'destruction', 313, 'abc', 425, 'apples'];

// Фильтрация строк с четным индексом и четной длиной
/*let result = arr1.filter((item, index) => {
    return typeof item === 'string' && index % 2 === 0 && item.length % 2 === 0;
});

console.log(result);*/

//* только первое слово
// Поиск первого слова с четным индексом и четной длиной
let result = arr1.find((item, index) => {
  return typeof item === 'string' && index % 2 === 0 && item.length % 2 === 0;
});

// Вывод результата
console.log(result);

// 3/// let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
//вывести строки с четным индексом и четной длиной в обратном порядке
//let arr1 = ['mama', 1000, 'Sunday', 3, 'my', true, 'limit', null, 15, 'elite', undefined, 100, 'destruction', 313, 'abc', 425, 'apples'];

// Фильтрация строк с четным индексом и четной длиной
let filteredWords = arr1.filter((item, index) => {
    return typeof item === 'string' && index % 2 === 0 && item.length % 2 === 0;
});

// Переворот массива с отфильтрованными словами
let reversedWords = filteredWords.reverse();

// Вывод результата
console.log(reversedWords);

//* только первое слово
//let arr1 = ['mama', 1000, 'Sunday', 3, 'my', true, 'limit', null, 15, 'elite', undefined, 100, 'destruction', 313, 'abc', 425, 'apples'];

// Поиск первого слова с четным индексом и четной длиной
let firstWord = arr1.find((item, index) => {
    return typeof item === 'string' && index % 2 === 0 && item.length % 2 === 0;
});

// Если слово найдено, выводим его в обратном порядке
if (firstWord) {
    let reversedWord = firstWord.split('').reverse().join('');
    console.log(reversedWord);
} else {
    console.log('Слово не найдено');
}


//4// // let numbers = [ 3, 5, 25, 70,  171,200,326, 345, 999, 1000, 1005]
// найти сумму всех чисел
let numbers = [3, 5, 25, 70, 171, 200, 326, 345, 999, 1000, 1005];

// Вычисление суммы всех чисел
//let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Вывод результата
console.log(sum);


//5//let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
// найти сумму всех чисел, выведите в формате ‘The sum of all numbers is: 25’
let arr2 = ['mama', 1000, 'Sunday', 3, 'my', true, 'limit', null, 15, 'elite', undefined, 100, 'destruction', 313, 'abc', 425, 'apples'];

// Вычисление суммы всех чисел
let sum = arr2.reduce((accumulator, currentValue) => {
    // Проверяем, является ли текущий элемент числом
    if (typeof currentValue === 'number') {
        return accumulator + currentValue; // Добавляем к накопителю
    }
    return accumulator; // Если не число, просто возвращаем накопитель
}, 0);

// Вывод результата в заданном формате
console.log(`The sum of all numbers is: ${sum}`);


//6// let arr1 = [‘mama’, 1000, ‘Sunday’, 3, ‘my’,true,‘limit’, null,15, ‘elite’, undefined, 100, ‘destruction’, 313,‘abc’, 425, ‘apples’];
// получите массив [1000, 3, true, null, 15, undefined, 100, 313, 425];
let arr1 = ['mama', 1000, 'Sunday', 3, 'my', true, 'limit', null, 15, 'elite', undefined, 100, 'destruction', 313, 'abc', 425, 'apples'];

// Фильтрация массива для получения только чисел, логических значений и null
let filteredArray = arr1.filter(item => 
    typeof item === 'number' || typeof item === 'boolean' || item === null
);

// Вывод результата
console.log(filteredArray);


/*From Tatiana
ToDo:

https://www.codewars.com/kata/534ea96ebb17181947000ada/
/*Your task is to split the chocolate bar of given dimension n x m into small squares. 
Each square is of size 1x1 and unbreakable. 
Implement a function that will return minimum number of breaks needed.
For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, 
but for size 3 x 1 you must do two breaks.
If input data is invalid you should return 0 (as in no breaks are needed 
if we do not have any chocolate to split). Input will always be a non-negative integer.*/


/*https://www.codewars.com/kata/588417e576933b0ec9000045
Task
Your friend advised you to see a new performance in the most popular theater in the city. 
He knows a lot about art and his advice is usually good, but not this time: 
the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, 
especially since the exit is located right behind your row to the left. 
All you need to do is climb over your seat and make your way to the exit.
The main problem is your shyness: you're afraid that you'll end up blocking the view 
(even if only for a couple of seconds) of all the people who sit behind you 
and in your column or the columns to your left. To gain some courage, you decide to calculate 
the number of such people and see if you can possibly make it to the exit without disturbing too many people.
Given the total number of rows and columns in the theater (nRows and nCols, respectively), 
and the row and column you're sitting in, return the number of people who sit strictly 
behind you and in your column or to the left, assuming all seats are occupied.
Example
For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be 96.
Here is what the theater looks like:
Input/Output
[input] integer nCols
An integer, the number of theater's columns.
Constraints: 1 ≤ nCols ≤ 1000.
[input] integer nRows
An integer, the number of theater's rows.
Constraints: 1 ≤ nRows ≤ 1000.
[input] integer col
An integer, the column number of your own seat (with the rightmost column having index 1).
Constraints: 1 ≤ col ≤ nCols.
[input] integer row
An integer, the row number of your own seat (with the front row having index 1).
Constraints: 1 ≤ row ≤ nRows.
[output] an integer
The number of people who sit strictly behind you and in your column or to the left.*/

function seatsInTheater(nCols, nRows, col, row) {
  // Calculate area/total seats in theater
  let totalSeats = nCols * nRows;
  
  /* Calculate cols and rows behind my seat
     Add one to col because my people behind me in my col are  counted
  */
  let newColNumber = nCols - col + 1;
  let newRowNumber = nRows - row;
  
  // Calculate area of seats behind me
  let peopleBehindMe = newColNumber * newRowNumber;
  
  return peopleBehindMe;
}
//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/
/*Description:
Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
Example(Input --> Output)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"*/

function findNeedle(haystack) {
  // Use indexOf to find the position of the needle
  const index = haystack.indexOf("needle");
  
  // Return the formatted message with the index found
  return `found the needle at position ${index}`;
}
                                                              
/*Kata from review:
https://www.codewars.com/kata/570a6a46455d08ff8d001002/
Numbers ending with zeros are boring.
They might be fun in your world, but not here.
Get rid of them. Only the ending ones.
1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway*/

function noBoringZeros(num) {
    // Check if the number is zero
    if (num === 0) return 0;

    // Convert the number to a string and remove trailing zeros using a regular expression
    let result = num.toString().replace(/0+$/, '');

    // Convert back to number and return
    return Number(result);
}
//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
/*Who remembers back to their time in the schoolyard, when girls would take a flower and tear 
its petals, saying each of the following phrases each time a petal was torn:
"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
Your goal in this kata is to determine which phrase the girls would say at the last petal 
for a flower of a given number of petals. The number of petals is always greater than 0.*/

function howMuchILoveYou(nbPetals) {
  // Define the phrases in an array
  const phrases = [
      "I love you",
      "a little",
      "a lot",
      "passionately",
      "madly",
      "not at all"
  ];

  // Calculate the index for the last petal
  // Use (nbPetals - 1) % 6 to get the correct index
  const index = (nbPetals - 1) % 6;

  // Return the corresponding phrase
  return phrases[index];
}

//https://www.codewars.com/kata/5808e2006b65bff35500008f
/*When provided with a letter, return its position in the alphabet.
Input :: "a"
Output :: "Position of alphabet: 1"
Note: Only lowercased English letters are tested*/

function position(letter) {
  // Get the ASCII value of the letter and calculate its position
  const position = letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  
  // Return the formatted output
  return `Position of alphabet: ${position}`;
}
