/*Homework 5_Fall_2024
Материал к прочтению:
https://learn.javascript.ru/function-basics
https://www.w3schools.com/js/js_functions.asp*/

/*Задания на закрепление (можно и нужно обсуждать в группе):
Внедрите в свой код с Кофе, как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.
- У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
- Дайте названия вашим видам кофе.
const coffee1 = "Americano";
const coffee2 = "Latte";
/*- Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
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
*/
//new code
const coffee1 = "Americano";
const coffee2 = "Latte";

// Prices based on size
const priceAmericano = {
  small: 1,
  medium: 2,
  big: 3,
};

const priceLatte = {
  small: 1,
  medium: 2,
  big: 3,
};

// Function to get coffee details
function getCoffeeDetails(coffee, size) {
  let price;
  let coffeeName;

  // Determine the coffee name and price based on user input
  if (coffee == 1) {
    coffeeName = coffee1;
    price = priceAmericano[size];
  } else if (coffee == 2) {
    coffeeName = coffee2;
    price = priceLatte[size];
  } else {
    return "Invalid coffee selection.";
  }

  // Construct the details string
  return `${coffeeName} ${size} - Price: ${price}`;
}

// Function to display coffee details
function displayCoffeeDetails(details) {
  console.log(details);
  document.write(details + "<br>"); // Display on webpage
}

// User selection
let clientCoffee = prompt("Choose your coffee: 1 - Americano, 2 - Latte");
let clientSize = prompt("Choose your size: 1 - small, 2 - medium, 3 - big");

// Map size input to size strings
let sizeMap = {
  1: "small",
  2: "medium",
  3: "big",
};

let selectedSize = sizeMap[clientSize];

// Validate size input
if (!selectedSize) {
  console.log("Choose a valid size!");
  document.write("Choose a valid size!<br>");
} else {
  // Get coffee details and display them
  let coffeeDetails = getCoffeeDetails(clientCoffee, selectedSize);
  displayCoffeeDetails(coffeeDetails);
}

/*Напишите функцию с калькулятором (используйте предыдущий код), в которую, в качестве параметров, 
передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). 
Проверьте работу функции. example:  function calculate(a, b, operator){} */
function calculate(a, b, operator) {
  let result;

  // Check which operator was provided and perform the corresponding operation
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      // Handle division by zero
      if (b === 0) {
        return "Error: Division by zero is not allowed.";
      }
      result = a / b;
      break;
    default:
      return "Error: Invalid operator. Please use +, -, *, or /.";
  }

  return `Result: ${result}`;
}

/*Напишите функцию, которая создает и выводит в консоль кастомное приветствие с именем, которое вы передаете в функцию.*/

function greetUser(name) {
  // Создаем приветствие
  const greeting = `Привет, ${name}! Добро пожаловать!`;
  // Выводим приветствие в консоль
  console.log(greeting);
}

/*Креативное задание*:
    Доработайте свой код с кофе и продумайте бизнес модель для своего кода.
P.s. Если вы все сделали и у вас есть дополнительное время, решайте задачки с коварс

Kata from Svetlana’s review:*/
/*https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. 
I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.*/
function arrayPlusArray(arr1, arr2) {
  // Combine both arrays
  const combinedArray = arr1.concat(arr2);

  // Sum all elements using reduce
  const sum = combinedArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sum;
}

/*https://www.codewars.com/kata/5a00e05cc374cb34d100000d/
Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]*/
const reverseSeq = (n) => {
  // Create an array from n to 1
  return Array.from({ length: n }, (v, i) => n - i);
};

/*https://www.codewars.com/kata/58ca658cc0d6401f2700045f/
In this simple exercise, you will build a program that takes a value, integer , 
and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, 
it should be included as well. There will only ever be positive integers passed into the function, 
not consisting of 0. The limit will always be higher than the base.
For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, 
and 6 are the multiples of 2 up to 6.*/

function findMultiples(integer, limit) {
  const multiples = [];
  for (let i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }
  return multiples;
}

/*https://www.codewars.com/kata/5413759479ba273f8100003d/
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
(the dedicated builtin(s) functionalities are deactivated)*/

function reverse(array) {
  let reversedArray = []; // Initialize an empty array to hold the reversed elements

  // Loop through the input array from the end to the beginning
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]); // Add each element to the new array
  }

  return reversedArray; // Return the reversed array
}

/*https://www.codewars.com/kata/598057c8d95a04f33f00004e/
Build a function that can get all the integers between two given numbers.
Example: (2,9)
Should give you this output back: [ 3, 4, 5, 6, 7, 8 ]
If startNum is the same as endNum, return an empty array.*/

function range(startNum, endNum) {
  // If startNum is the same as endNum, return an empty array
  if (startNum === endNum) {
    return [];
  }

  // Create an empty array to hold the range of numbers
  let result = [];

  // Ensure that startNum is less than endNum for the loop
  // If not, swap them
  if (startNum > endNum) {
    [startNum, endNum] = [endNum, startNum];
  }

  // Loop through numbers between startNum and endNum (exclusive)
  for (let i = startNum + 1; i < endNum; i++) {
    result.push(i); // Add the current number to the result array
  }

  return result; // Return the array of numbers
}
/*You cannot submit your solution because the kata is retired.*/

/*https://www.codewars.com/kata/5841f4fb673ea2a2ae000111/
Write a function generateIntegers/generate_integers that accepts a single argument n/$n and 
generates an array containing the integers from 0 to n/$n inclusive.
For example, generateIntegers(3)/generate_integers(3) should return [0, 1, 2, 3].
n/$n can be any integer greater than or equal to 0.*/

function generateIntegers(n) {
  // Initialize an empty array
  let result = [];

  // Loop from 0 to n inclusive
  for (let i = 0; i <= n; i++) {
    result.push(i); // Add the current integer to the array
  }

  return result; // Return the array of integers
}

/*You cannot submit your solution because the kata is retired.*/

/*Kata from Tatiana’s review:
https://www.codewars.com/kata/56f695399400f5d9ef000af5/
Some new animals have arrived at the zoo. The zoo keeper is concerned 
that perhaps the animals do not have the right tails. 
To help her, you must correct the broken function to make sure that the second argument (tail), 
is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!
If the tail is right return true, else return false.
The arguments will always be non empty strings, and normal letters.*/

function correctTail(body, tail) {
  // Get the last characters of the body string that are as long as the tail
  const sub = body.substr(body.length - tail.length);

  // Check if the extracted substring matches the tail
  if (sub === tail) {
    return true; // The tail fits
  } else {
    return false; // The tail does not fit
  }
}

/*https://www.codewars.com/kata/5601409514fc93442500010b/
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return true if you're better, else false!
Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!*/

function betterThanAverage(classPoints, yourPoints) {
  // Calculate the total score of the class
  const totalClassPoints = classPoints.reduce((acc, score) => acc + score, 0);
  // Calculate the number of students in the class
  const numberOfStudents = classPoints.length;
  // Calculate the average score, including your score
  const averageScore = (totalClassPoints + yourPoints) / (numberOfStudents + 1);

  // Return true if your score is greater than the average, otherwise false
  return yourPoints > averageScore;
}

/*https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
Wolves have been reintroduced to Great Britain. 
You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. 
Fortunately, you are good at spotting them.
Warn the sheep in front of the wolf that it is about to be eaten. 
Remember that you are standing at the front of the queue which is at the end of the array:
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". 
Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" 
where N is the sheep's position in the queue.
Note: there will always be exactly one wolf in the array.*/

function warnTheSheep(queue) {
  // Find the index of the wolf
  const wolfIndex = queue.indexOf("wolf");

  // If the wolf is at the last position (closest to you)
  if (wolfIndex === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    // Calculate the position of the sheep in front of the wolf
    const sheepInDanger = queue.length - 1 - wolfIndex; // Position relative to you
    return `Oi! Sheep number ${sheepInDanger}! You are about to be eaten by a wolf!`;
  }
}

/*https://www.codewars.com/kata/59c287b16bddd291c700009a/ 
A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. 
The brick's length and width are equal, forming a square; its height may be different. 
Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. 
Write a function iceBrickVolume that will accept these parameters:
radius - bottle's radius (always > 0);
bottleLength - total bottle length (always > 0);
rimLength - length from bottle top to brick (always < bottleLength);
And return volume of ice brick that magician managed to put into a bottle.
Note:
All inputs are integers. Assume no irregularities to the cuboid brick. 
You may assume the bottle is shaped like a cylinder. 
The brick cannot fit inside the rim. The ice brick placed into the bottle is the largest possible cuboid 
that could actually fit inside the inner volume.*/
function iceBrickVolume(radius, bottleLength, rimLength) {
  var brickLength = bottleLength - rimLength;
  var brickDepth = radius * 2;
  var brickHeight = radius;

  return brickLength * brickDepth * brickHeight;
}

//bottle length - rim length will give you the height of the brick = (brick height x width x depth)
//radius x 2 = width of the brick
//

//the bottle volume = volume = r squared x height x pi = 31.4
//radius = 1
//bottlelength = 10
//rimlength = 2

//the brick volume = 16
//brick length = 8
//brick depth = 1 x 2 (double the radius)
//brick height = 1

//brick volume = 1150
//brick length = 23
//brick depth = 5 x 2 (double the radius)
//brick height = 5
