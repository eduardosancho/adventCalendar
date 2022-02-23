//Challenge
//https://adventofcode.com/2021/day/2

const jsonData = require('./data.json');
const input = jsonData.split(' ');

const direction = input.filter(item => !(parseInt(item) == item));
const magnitude = input.filter(item => parseInt(item) == item);

let depth = 0;
let distance = 0;
let count = 0;

for (let i = 0; i < direction.length; i++) {
  count += 1;
  switch (direction[i]) {
    case 'forward':
      distance += parseInt(magnitude[i]);
      break;
    case 'up':
      depth -= parseInt(magnitude[i]);
      break;
    case 'down':
      depth += parseInt(magnitude[i]);
      break;
    default:
      break;
  }
}

console.log(distance);
console.log(depth);