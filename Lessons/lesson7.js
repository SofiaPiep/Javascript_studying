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
}
console.log(animal({ name: "dog", legs: 4, color: "white" }));

/*3 -  https://www.codewars.com/kata/527b3cd0492b6b15250060af
You are trying to put a hash in ruby or an object in javascript or java into an array, 
but it always returns error, solve it and keep it as simple as possible!*/

let items = [];
items.push({ a: "b", c: "d" });

/*4 -  https://www.codewars.com/kata/521cd52e790405a74800032c
We have implemented a function wrap(value) that takes a value of arbitrary type 
and wraps it in a new JavaScript Object or Python Dict setting the 'value' key 
on the new Object or Dict to the passed-in value.

So, for example, if we execute the following code:

wrapper_obj = wrap("my_wrapped_string"); 
 # wrapper_obj should be  {"value":"my_wrapped_string"}
We would then expect the following statement to be true:

wrapper_obj["value"] == "my_wrapped_string"
Unfortunately, the code is not working as designed. 
Please fix the code so that it behaves as specified.*/

function wrap(value) {
  return { value: value };
}

/*5 -  https://www.codewars.com/kata/56a29b237e9e997ff2000048
You are creating an "Escape the room" game. The first step is 
to create a hash table called rooms that contains all of the rooms of the game. 
There should be at least 3 rooms inside it, 
each being a hash table with at least three properties (e.g. name, description, completed).*/

var rooms = {
  kitchen: {
    name: "Kitchen",
    description: "A dimly lit kitchen with pots scattered around.",
    completed: false,
  },
  library: {
    name: "Library",
    description: "A quiet library filled with old, dusty books.",
    completed: false,
  },
  basement: {
    name: "Basement",
    description: "A dark, creepy basement with a strange smell.",
    completed: false,
  },
};

/*6 -  https://www.codewars.com/kata/56d8ae9237123036d3001b54
While making a zork-type game, you create an object of rooms. 
Unfortunately, the game is not working. 
Find all of the errors in the rooms object to get your game working again.*/
var rooms = {
  first: {
    description: "This is the first room",
    items: {
      chair: "The old chair looks comfortable",
      lamp: "This lamp looks ancient",
    },
  },
  second: {
    description: "This is the second room",
    items: {
      couch: "This couch looks like it would hurt your back",
      table: "On the table there is an unopened bottle of water",
    },
  },
};

/*7 - https://www.codewars.com/kata/5722b3f0bd5583cf44001000
In lesson #11, we learned that the for loop can be used to traverse an array. If we want to traverse an object, we can use a variant of the for: for..in. This can traverse all the keys of the object. An example:

function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
console.log("keys of ob:")
showObjectKeys(ob);
console.log("values of ob:")
showObjectValues(ob);
Code results:

keys of ob:
item1
item2
item3
item4
values of ob:
This
is
an
example
for..in can also be used with arrays. Modifying the code above:

function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var arr=["one","two","three"];
console.log("keys of arr:")
showObjectKeys(arr);
console.log("values of arr:")
showObjectValues(arr);
Code results:

keys of arr:
0
1
2
values of arr:
one
two
three
As you can see, the keys are the indices of the array elements. Important: When using for..in with an array, the key (index) is always a string, not a number. In the example above, the keys are "0", "1", and "2". We can't see the quotes because console.log() doesn't show them.

Although for..in can be used to traverse the array, this is discouraged because in some cases the order may be unexpected. So it's recommended that you use another variant for this: for..of (new in ES6). for..of can traverse all the values of the array (without accessing them through their index). Function showObjectValues() from above can be modified like this:

function showArrayValues(arr){
  for (var value of arr){
    console.log(value);
  }
}
Ok, lesson is over, let's do a task with for..in.*/

function giveMeFive(obj) {
    // Create an empty array to hold keys and values that meet the criteria
    let result = [];
  
    // Use for..in to traverse the object
    for (let key in obj) {
      // Check if the length of the key is 5
      if (key.length === 5) {
        result.push(key);
      }
      
      // Check if the length of the value is 5
      if (obj[key].length === 5) {
        result.push(obj[key]);
      }
    }
  
    // Return the resulting array
    return result;
  }
  

// ===========     Middle
/*8 - https://www.codewars.com/kata/57ced2c1c6fdc22123000316
 
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
