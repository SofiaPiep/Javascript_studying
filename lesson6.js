/*Homework 6_Fall_2024
Материал к прочтению:
Не закапывайтесь сильно в методы. В qa большинство нужно просто знать, что такие бывают, чтобы в нужный момент найти. 
https://www.w3schools.com/js/js_string_methods.asp
https://www.w3schools.com/js/js_array_methods.asp
https://www.w3schools.com/js/js_regexp.asp
https://learn.javascript.ru/string
https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Useful_string_methods
https://learn.javascript.ru/array-methods
https://habr.com/ru/company/plarium/blog/483958/
https://learn.javascript.ru/regexp-introduction
чисто глянуть:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
Код с  урока https://replit.com/@NalyaShakirova/Lessons6*/

/*Задания на закрепление (можно и нужно обсуждать в группе):
1. Задача про Палиндром. 
Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается 
как в привычном направлении, так и в обратном. 
К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
Дана строка; нужно написать функцию, которая позволяет вернуть значение true, 
если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.*/

function isPalindrome(str) {
  // Преобразуем строку в нижний регистр и удалим все небуквенные символы
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Развернем очищенную строку
  const reversedStr = cleanedStr.split("").reverse().join("");

  // Сравним исходную и развернутую строки
  return cleanedStr === reversedStr;
}

/*Дополнительно(сколько сможете):

https://www.codewars.com/kata/515e271a311df0350d00000f
Complete the square sum function so that it squares each number passed into it and then sums the results together.*/

function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

/*https://www.codewars.com/kata/53dc54212259ed3d4f00071c

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.*/

function sum(numbers) {
  "use strict";

  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

/*https://www.codewars.com/kata/572cb264362806af46000793 - splice and other methods explanation, list of kata
We have learned four basic array methods, pop(), push(), shift() and unshift(), they are used to add or remove an array of elements. But their disadvantage is that they can only add or remove elements in order. This time we learn a new method: splice(). It can add and/or remove elements at any location in the array. Its usage:

arrayObject.splice(startindex, deleteCount [,element1, element1, ...,elementx])
parameter1 and parameter2 are used to remove element. parameters in the [] is some elements to add, if we omitted it, splice() only performs removal operations.

We can write that way:

arrayObject.splice(a,b,[c,d,e,...,z])
Then ask yourself three questions:

Where do I start removing elements?   ---- a
How many elements need to be removed? ---- b
What elements should be added after the removal of the element?
--- c,d,e,...z
Some examples to help you understand splice()

function removeOdd(arr){
  //remove odd number of arr
  for (var i=arr.length;i>=0;i--)
    if (arr[i]%2) arr.splice(i,1)
  return arr;
}
console.log(removeOdd([1,2,3,4,5]))   //output: [ 2, 4 ]
console.log(removeOdd([1,3,5,7,9]))   //output: []
The example above removes all the odd numbers from the array, leaving all the even numbers.

Why don't I start to traverse the array from index0? because we need to pay special attention to that some of the methods of the array directly modify the original array. In some cases, if you forget the fact, you will get the wrong result. In the example above, if we start to traverse the array from index0, some element will be missed:

function removeOdd(arr){
  //remove odd number of arr
  for (var i=0;i<arr.length;i++)
    if (arr[i]%2) arr.splice(i,1)
  return arr;
}
console.log(removeOdd([1,3,5,7,9]))   //output: [3,7]
because:
When i=0, arr[i]=1, arr.splice(0,1) then arr=[3,5,7,9], i++
then i=1, arr[i]=5, element 3 is missed because its index is became to 0
so, we got an wrong answer...
Look at the following example:

function removeOdd(arr){
  //remove odd number from arr
  for (var i=arr.length;i>=0;i--)
    if (arr[i]%2) arr.splice(i,1)
  return arr;
}
function removeEven(arr){
  //remove even number from arr
  for (var i=arr.length;i>=0;i--)
    if (arr[i]%2==0) arr.splice(i,1)
  return arr;
}
var arr=[1,2,3,4,5]
removeOdd(arr)
console.log(arr)   //output: [ 2, 4 ]
removeEven(arr)
console.log(arr)   //output: []
Perhaps the purpose of running removeEven is to remove the even number, leaving the odd number. But in fact, we get an empty array, which is not what we want. How to improve it?

In this case, you can use slice() to make a "copy" for the array. In the previous study of string objects, We have known the slice, which is used to intercept a string. For an array object, the usage of slice() is similar to the stringObject method. Some people may want to use "=" operator to implement backup, but that is wrong. See the example:

var originalArray=[1,2,3,4,5];
//use "=" operators
var new1=originalArray;   
//use slice() without parameters can make a "copy"
var new2=originalArray.slice();  
//then three array all are [1,2,3,4,5], let's us do something..
new1.push(100);
new2.push(111);
//Let's look at the changes in these arrays:
console.log(new1)
console.log(new2)
console.log(originalArray)

//output:
[ 1, 2, 3, 4, 5, 100 ]
[ 1, 2, 3, 4, 5, 111 ]
[ 1, 2, 3, 4, 5, 100 ]
We can see that the value of the original array will be changed with the new1. Because new1 use "=" operator, just do a shortcut to the original array; The value of the original array does not change with new2. Because it uses slice() to create a new array, which has no relation to the original array.

So, we can use the slice() without the parameter to create a copy of the original array. However, if the original array is a 2D array or multidimensional arrays, the use of slice() is not enough. see example:

var originalArray=[[1,2,3],[4,5]];
//use slice() without parameters can make a "copy"
var newarray=originalArray.slice();  
newarray[1].push(100);
//Let's look at the changes in these arrays:
console.log(newarray)
console.log(originalArray)

//output:
[ [ 1, 2, 3 ], [ 4, 5, 100 ] ]
[ [ 1, 2, 3 ], [ 4, 5, 100 ] ]
We can see that when the copy array is changed, the original array will be changed. How to solve this problem? When we learn another method map() will get the answer.

As a programmer, do not modify the original array is a good programming habits. In many Kata are default or explicitly pointed out: the user should not modify the original array

Ok, lesson is over. let's us do some task.

Task
Coding in function threeInOne. function accept 1 parameters arr, it's a 1D number array. Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result.

Note1: You should not modify the original array.

Note2: Because this is a beginner Kata, and due to the author's mercy ;-), so you do not have to verify the validity of the parameter, and do not worry about the number of elements of the array is not a multiple of 3.

Example:

threeInOne( [1,2,3]) should return [6]
threeInOne( [1,2,3,4,5,6]) should return [6,15]
threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]
Series
( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)

#1: create your first JS function helloWorld
#2: Basic data types--Number
#3: Basic data types--String
#4: Basic data types--Array
#5: Basic data types--Object
#6: Basic data types--Boolean and conditional statements if..else
#7: if..else and ternary operator
#8: Conditional statement--switch
#9: loop statement --while and do..while
#10: loop statement --for
#11: loop statement --break,continue
#12: loop statement --for..in and for..of
#13: Number object and its properties
#14: Methods of Number object--toString() and toLocaleString()
#15: Methods of Number object--toFixed(), toExponential() and toPrecision()
#16: Methods of String object--slice(), substring() and substr()
#17: Methods of String object--indexOf(), lastIndexOf() and search()
#18: Methods of String object--concat() split() and its good friend join()
#19: Methods of String object--toUpperCase() toLowerCase() and replace()
#20: Methods of String object--charAt() charCodeAt() and fromCharCode()
#21: Methods of String object--trim() and the string template
#22: Unlock new skills--Arrow function,spread operator and deconstruction
#23: methods of arrayObject---push(), pop(), shift() and unshift()
#24: methods of arrayObject---splice() and slice()
#25: methods of arrayObject---reverse() and sort()
#26: methods of arrayObject---map()
#27: methods of arrayObject---filter()
#28: methods of arrayObject---every() and some()
#29: methods of arrayObject---concat() and join()
#30: methods of arrayObject---reduce() and reduceRight()
#31: methods of arrayObject---isArray() indexOf() and toString()
#32: methods of Math---round() ceil() and floor()
#33: methods of Math---max() min() and abs()
#34: methods of Math---pow() sqrt() and cbrt()*/

function threeInOne(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    const sum = arr[i] + arr[i + 1] + arr[i + 2];
    result.push(sum);
  }
  return result;
}

/*https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
the string should start with a 1.
a string with size 6 should return :'101010'.
with size 4 should return : '1010'.
with size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers.*/

function stringy(size) {
  let result = "";
  for (let i = 0; i < size; i++) {
    result += i % 2 === 0 ? "1" : "0";
  }
  return result;
}

/*This one may be on interview:
https://www.codewars.com/kata/522551eee9abb932420004a0 - not easy
I love Fibonacci numbers in general, but I must admit I love some more than others.
I would like for you to write me a function that, when given a number n (n >= 1 ), 
returns the nth number in the Fibonacci Sequence.
For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.
For reference, the first two numbers in the Fibonacci sequence are 0 and 1, 
and each subsequent number is the sum of the previous two.*/

function nthFibo(n) {
  let [prev, curr] = [0, 1];
  for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
  return prev;
}

/*Креативное задание*:
Пересмотрите код с кофе и замените методами, если возможно.
От Татьяны


https://www.codewars.com/kata/53dc23c68a0c93699800041d/
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
You can ignore any need to sanitize words or add punctuation, 
but you should add spaces between each word. Be careful, 
there shouldn't be a space at the beginning or the end of the sentence!
Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'*/

function smash(words) {
  return words.join(" ");
}

/*https://www.codewars.com/kata/56b1f01c247c01db92000076
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!*/

function doubleChar(str) {
  return str
    .split("")
    .map((char) => char.repeat(2))
    .join("");
}

/*https://www.codewars.com/kata/50654ddff44f800200000007
Given 2 strings, a and b, return a string of the form short+long+short, 
with the shorter string on the outside and the longer string on the inside. 
The strings will not be the same length, but they may be empty ( zero length ).
Hint for R users:
The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output
("1", "22") --> "1221"
("22", "1") --> "1221"
ShortLongShort.solution("1", "22"); // returns "1221"
ShortLongShort.solution("22", "1"); // returns "1221"*/

function solution(a, b) {
  if (a.length > b.length) {
    return b + a + b;
  } else {
    return a + b + a;
  }
}
