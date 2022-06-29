//Challenge
//https://adventofcode.com/2021/day/1

const jsonData = require('./data.json');
let stringArray = jsonData.split(' ');

let incrementCounter = 1;


for (let i = 0; i < stringArray.length; i++) {
  stringArray[i] > stringArray[i - 1] ? incrementCounter++ : incrementCounter;
}

console.log("Increment Counter: " + incrementCounter);