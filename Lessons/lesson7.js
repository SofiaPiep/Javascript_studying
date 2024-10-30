/*Homework 7_Fall_2024
Материал к прочтению:
https://www.w3schools.com/js/js_object_definition.asp
https://learn.javascript.ru/object

This may help to solve some coding challenges ->
Objects written as name value pairs are similar to:
Associative arrays in PHP
Dictionaries in Python
Hash tables in C
Hash maps in Java
Hashes in Ruby and Perl
Ссылка на код с урока:
https://replit.com/@NalyaShakirova/Object#script.js

Задания на закрепление (можно и нужно обсуждать в группе):

// ==========     Easy
1 -  https://www.codewars.com/kata/514a7ac1a33775cbb500001e
This function should return an object, but it's not doing what's intended. What's wrong?*/

function mystery() {
  var results = { sanity: "Hello" };
  return results;
}

/*2 -  https://www.codewars.com/kata/571f1eb77e8954a812000837

In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:

var animal={name:"dog"}
you can also set/get some properties after the object definition, like this:

var animal={}
animal.name="dog"  (or animal["name"]="dog")
Task
Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."*/

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
};
animal({name:"dog", legs:4, color:"white"})

/*3 -  https://www.codewars.com/kata/527b3cd0492b6b15250060af
You are trying to put a hash in ruby or an object in javascript or java into an array, 
but it always returns error, solve it and keep it as simple as possible!


 
4 -  https://www.codewars.com/kata/521cd52e790405a74800032c
 
5 -  https://www.codewars.com/kata/56a29b237e9e997ff2000048

6 -  https://www.codewars.com/kata/56d8ae9237123036d3001b54

7 - https://www.codewars.com/kata/5722b3f0bd5583cf44001000
 

// ===========     Middle
8 - https://www.codewars.com/kata/57ced2c1c6fdc22123000316
 
9 - https://www.codewars.com/kata/5827acd5f524dd029d0005a4
 
 10 - https://www.codewars.com/kata/58279e13c983ca4a2a00002a


 12 - https://www.codewars.com/kata/57d001b405c186ccb6000304
 
13 -  https://www.codewars.com/kata/5836dce6966f8d1d43000007
  
 14 - https://www.codewars.com/kata/599db0a227ca9f294b0000c8
  
15 - www.codewars.com/kata/57ed4cef7b45ef8774000014

Креативное задание*:
Создайте объект,
где будет храниться информация по кофе и выведите ее в консоль( вид кофе, цена, ингредиенты …). Подумайте, возможно ли хранить данные на все виды кофе в одном объекте или в разных, что более удобно в дальнейшем использовании.
Проверьте файл с кофе на наличие функций. Они нам понадобятся для следующего урока*/
