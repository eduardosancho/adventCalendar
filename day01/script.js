//Challenge
//https://adventofcode.com/2021/day/1

var counter = 0;

const jsonData = require('./data.json');

let stringArray = jsonData.split(' ');

for (let i = 0; i < stringArray.length-1; i++) {
    +stringArray[i] < +stringArray[i + 1] ? counter++ : counter;
}

console.log(counter);