// Halloween challenge_ https://www.halloween.dev/  midu.dev

/*1. During Halloween night 🎃, a witch 🧙‍♀️ is preparing a magical brew. 
She has a list of potions, each with an associated power, 
and she wants to combine two of them to achieve a specific total power.
Given a list of integers where each number represents the power of a potion 🧪 
and an integer representing the target power, 
you must find the index of the first two potions that add up to exactly the target power.

For example:

const potions = [4, 5, 6, 2]
const goal = 8

createMagicPotion(potions, goal) // [2, 3]
If no combination is found, return undefined

const potions = [1, 2, 3, 4]
const goal = 9

createMagicPotion(potions, goal) // undefined
In the case that there is more than one possible combination, 
select the combination whose second potion appears first in the list.

const potions = [1, 2, 3, 4]
const goal = 5

createMagicPotion(potions, goal) // [1, 2]
// it could also be [0, 3] but there is a combination earlier*/

function createMagicPotion(potions, target) {
  const seen = {};

  for (let i = 0; i < potions.length; i++) {
    const currentPotion = potions[i];
    const compl = target - currentPotion;

    if (seen[compl] !== undefined) {
      return [seen[compl], i];
    }

    seen[currentPotion] = i;
  }

  return undefined;
}

/*2. In an epic battle between zombies 🧟 and humans 👮‍♂️, 
both sides have a list of fighters with specific attack powers.

The battle unfolds in rounds, and each round pits each fighter against their opponent.

The side with the greater attack power wins the round, 
and their power is added to the next fighter on their team.

In case of a tie, both fighters fall and do not affect the next round.

Given two strings zombies and humans, 
where each digit (from 1 to 9) represents a fighter's attack power, 
determine who is left at the end and with how much attack power.

Important: Both strings will always have the same length.

The output is a string representing the final result of the battle.

If a zombie is left, return its power followed by "z", for example "3z".
If a human is left, return its power followed by "h", for example "2h".
If there's a tie and neither is left with power at the end, return "x".
Here's an example:

const zombies = '242';
const humans = '334';

const result = battleHorde(zombies, humans);  // -> "2h"

// first round: zombie 2 vs human 3 -> human wins (+1)
// second round: zombie 4 vs human 3+1 -> tie
// third round: zombie 2 vs human 4 -> human wins (+2)
// result: "2h"
Another example with a tie:

const zombies = '444';
const humans = '282';

const result = battleHorde(zombies, humans);  // -> "x"

// first round: zombie 4 vs human 2 -> zombie wins (+2)
// second round: zombie 4+2 vs human 8 -> human wins (+2)
// third round: zombie 4 vs human 2+2 -> tie
// result: "x"*/

function battleHorde(zombies, humans) {
  const zombieArray = zombies.split("").map((x) => Number(x));
  const humanArray = humans.split("").map((x) => Number(x));
  let i = 0;
  let zombiePower = zombieArray[i];
  let humanPower = humanArray[i];
  while (i < zombieArray.length - 1) {
    const currentZombiePower = zombiePower;
    const currentHumanPower = humanPower;
    if (currentZombiePower > currentHumanPower) {
      i++;
      zombiePower = zombieArray[i] + (currentZombiePower - currentHumanPower);
      humanPower = humanArray[i];
    } else if (currentHumanPower > currentZombiePower) {
      i++;
      humanPower = humanArray[i] + (currentHumanPower - currentZombiePower);
      zombiePower = zombieArray[i];
    } else {
      i++;
      zombiePower = zombieArray[i];
      humanPower = humanArray[i];
    }
  }
  if (zombiePower === humanPower) {
    return "x";
  }
  if (zombiePower > humanPower) {
    return `${zombiePower - humanPower}z`;
  }
  return `${humanPower - zombiePower}h`;
}

/*3. You are trapped in a nightmare where Freddy Krueger is chasing you 😭. 
The dream is represented by a maze of cells, 
where each cell has a numeric value indicating the danger level of that part of the dream.

You must find the safest path (i.e., the one with the lowest total danger value) 
from the top-left corner to the bottom-right corner of the matrix.

In this challenge, you can only move right or down (you cannot move back or diagonally), 
and you must calculate the total danger level of the safest path.

The nightmare is represented by an n x m matrix called dream 
where each cell is a positive number representing the danger level of that cell in the dream.

And you have to return the total danger value of the safest path from the top-left corner 
(position [0][0]) to the bottom-right corner (position [n-1][m-1]).

const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]

const bestPath = findSafestPath(dream) // Returns 7
// The safest path is:
// [0, 0] -> 1
// [0, 1] -> 3
// [0, 2] -> 1
// [1, 2] -> 1
// [2, 2] -> 1

// 1 -> 3 -> 1 -> 1 -> 1 = 7*/

function findSafestPath(dream) {
  const n = dream.length;
  const m = dream[0].length;

  const dp = Array.from({ length: n }, () => Array(m).fill(Infinity));

  dp[0][0] = dream[0][0];

  for (let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + dream[0][j];
  }

  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + dream[i][0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + dream[i][j];
    }
  }

  return dp[n - 1][m - 1];
}

/*4.  A person has been murdered on Halloween night 🔪. 
Using a spell 🧙‍♀️, we managed to hear their last whisper 
but it is very weak and doesn't allow us to identify who might have been the killer.

The information it provides us:

whisper: string representing what the victim tried to say before dying

suspects: list of strings representing the names of all the suspects.

We have to keep in mind that the whisper whisper has some rules:

Each ~ represents an uncertain letter in the whisper.
Each position in the whisper corresponds to a position in the killer's name.
The length of the whisper doesn't always represent the full length of the name, 
as the victim might have died before finishing saying it.
But if the last character of the whisper is a $, then the killer's name ended there.
Your goal is to find out who could be the killer! You must return:

If only one name matches the whisper pattern, return that name.
If there are multiple names that match, return all names separated by commas.
If no name matches, return an empty string ("").
Letter case doesn't matter.

const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

findTheKiller(whisper, suspects); // -> 'Dracula'

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper2, suspects2); // -> 'Freddy,Freddier,Fredderic'

const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper3, suspects3); // -> ''

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']

findTheKiller(whisper4, suspects4); // -> ''*/

function findTheKiller(whisper, suspects) {
  const isExactLength = whisper.endsWith("$");
  const pattern = whisper.toLowerCase().replace(/\$$/, "");
  const matches = suspects.filter((suspect) => {
    const name = suspect.toLowerCase();

    if (isExactLength && name.length !== pattern.length) return false;
    if (!isExactLength && name.length < pattern.length) return false;

    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] !== "~" && pattern[i] !== name[i]) {
        return false;
      }
    }

    return true;
  });

  return matches.length === 1 ? matches[0] : matches.join(",") || "";
}

/*5. You are trapped in Silent Hill, 
in a square room of size n x n and the feared Pyramid Head (▲) 
is somewhere in the room, moving towards you (T).

You cannot move, and Pyramid Head moves one cell per turn, 
in any of the four cardinal directions (up, down, left, right), 
but always chooses the shortest path to your position. 
Your goal is to determine if Pyramid Head can reach you.

The room is represented by an n x n matrix:

T: your position (where you are trapped).
▲: the initial position of Pyramid Head.
.: empty spaces where Pyramid Head can move.
#: walls that Pyramid Head cannot pass through.
Write a function to determine if Pyramid Head will be able to reach you. 
If Pyramid Head can reach you, return the number of steps it takes to achieve this, 
if it cannot reach you then return -1.

const room = [
  ['.', '.', '#', '.', '▲'],
  ['#', '.', '#', '.', '#'],
  ['.', '.', '.', '.', '.'],
  ['#', '#', '#', '.', '#'],
  ['T', '.', '.', '.', '.'],
]

escapePyramidHead(room) // -> 8

const room2 = [
  ['T', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['▲', '.', '.', '#'],
  ['.', '#', '#', '#'],
]

escapePyramidHead(room2) // -> 2

const room3 = [
  ['#', '#', '#'],
  ['▲', '.', '#'],
  ['.', '#', 'T'],
]

escapePyramidHead(room3) // -> null*/

function escapePyramidHead(room) {
  const n = room.length;
  const directions = [
    [1, 0], // вниз//down
    [-1, 0], // вверх//up
    [0, 1], // вправо//right
    [0, -1], // влево//left
  ];

  let start = null;
  let target = null;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (room[i][j] === "▲") start = [i, j];
      if (room[i][j] === "T") target = [i, j];
    }
  }

  if (!start || !target) return -1;

  const queue = [[...start, 0]];
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const [x, y, steps] = queue.shift();

    if (x === target[0] && y === target[1]) return steps;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < n &&
        !visited[nx][ny] &&
        room[nx][ny] !== "#"
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, steps + 1]);
      }
    }
  }

  return -1;
}
