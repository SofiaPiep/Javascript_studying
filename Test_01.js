function highAndLow(numbers) {
  let set1 = numbers.split(" ").map(Number);
  let max1 = Math.max(...set1);
  let min1 = Math.min(...set1);
  console.log(max1 + " " + min1);
}

highAndLow("1 2 3 4 5");

//const answer = confirm("Are you sure you want to lean JS?");
console.log(window)