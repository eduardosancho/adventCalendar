//Challenge
//https://adventofcode.com/2021/day/1

const jsonData = require('./data2.json');

let stringArray = jsonData.split(' ');
let numArray = [];

stringArray.forEach(function (e) {
  numArray.push(parseInt(e));
});

let sum1 = 0, sum2 = 0, counter = 0;

for (let i = 0; i < numArray.length - 2; i++) {  
  sum1 = numArray[i] + numArray[i + 1] + numArray[i + 2];

  if (sum1 > sum2) {
      counter++;
  }
  
  sum2 = sum1;
}

console.log(counter-1);