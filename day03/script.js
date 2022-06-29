// Challenge
// https://adventofcode.com/2021/day/3

import jsonData from './data.json' assert {type: 'json'};
const input = jsonData.split(' ');
const size = input[0].length;

let bitCounter = new Array(12);
for (let i = 0; i < size; i++) {
  bitCounter[i] = [0, 0];
}

input.forEach(binaryStr => {
  binaryStr.split('').forEach((bit, index) => {
    bitCounter[index][parseInt(bit)]++;
  })
})

let gammaRate = [];
let epsilonRate = [];

bitCounter.forEach((pair, index) => {
  gammaRate[index] = pair.indexOf(Math.max(...pair));
  epsilonRate[index] = pair.indexOf(Math.min(...pair));
})

const powerConsumption = parseInt(gammaRate.join(''), 2) * parseInt(epsilonRate.join(''), 2);

console.log("Gamma rate: " + gammaRate.join(''));
console.log("Epsilon rate: " + epsilonRate.join(''));
console.log("Power consumption: " + powerConsumption);