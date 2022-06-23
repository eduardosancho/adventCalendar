//Challenge
//https://adventofcode.com/2021/day/2

const jsonData = require('./data.json');
const input = jsonData.split(' ');

const directions = input.filter(item => !(parseInt(item) == item));
const magnitude = input.filter(item => (parseInt(item) == item));

let depth = 0, distance = 0, aim = 0, count = 0;

for (let i = 0; i < directions.length; i++) {
  count += 1;
  switch (directions[i]) {
    case 'forward':
      distance += parseInt(magnitude[i]);
      depth += parseInt(magnitude[i]) * aim;
      break;
    case 'up':
      aim -= parseInt(magnitude[i]);
      break;
    case 'down':
      aim += parseInt(magnitude[i]);
      break;
    default:
      break;
  }
}

console.log('distance', distance);
console.log('depth', depth);