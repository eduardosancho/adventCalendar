// Challenge
// https://adventofcode.com/2021/day/3

import jsonData from './data.json' assert {type: 'json'};
const input = jsonData.split(' ');

let oxygenInput = input;
let co2Input = input;

function findRating(input, searchCriteria = 'least') {
  let position = 0, zeros = 0, ones = 0, whoLives = 0;

  while (input.length > 1) {
    input.forEach(binaryStr => {
      const checkVal = binaryStr.charAt(position);
      checkVal === '1' ? ones++ : zeros++;
    })
    searchCriteria === 'most' ?
      whoLives = ones >= zeros ? 1 : 0
      :
      whoLives = zeros <= ones ? 0 : 1;
    ones = 0;
    zeros = 0;

    input = input.filter(binaryStr => binaryStr.charAt(position) === whoLives.toString());
    position++;

  }
  return parseInt(input[0], 2);
}

console.log(findRating(oxygenInput, 'most'));
console.log(findRating(co2Input));

