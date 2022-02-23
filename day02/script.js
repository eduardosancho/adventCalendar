//Challenge
//https://adventofcode.com/2021/day/1

var counter = 0;
// var operations = 0;

const jsonData = require('./data.json');

let stringArray = jsonData.split(' ');
let numArray = [];

stringArray.forEach(function (e) {
    numArray.push(parseInt(e));
});

let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < numArray.length - 2; i++) {
    
    sum1 = numArray[i] + numArray[i + 1] + numArray[i + 2];

    if (sum1 > sum2) {
        counter++;
    }
    
    sum2 = sum1;
    // operations++;
}

// console.log(operations);
console.log(counter-1);