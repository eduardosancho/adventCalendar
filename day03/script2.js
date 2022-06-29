// Challenge
// https://adventofcode.com/2021/day/3

import jsonData from './data.json' assert {type: 'json'};
const input = jsonData.split(' ');

let oxygenInput = input;
let co2Input = input;

function findRating(allReadings, searchCriteria = 'least') {
  let remainingReadings = allReadings;
  let position = 0, zeros = 0, ones = 0, whoLives;

  while (remainingReadings.length > 1) {
    remainingReadings.forEach(binaryStr => { // Count all instances of a value per each position
      const checkVal = binaryStr.charAt(position);
      checkVal === '1' ? ones++ : zeros++;
    })
    searchCriteria === 'most' ?
      whoLives = ones >= zeros ? 1 : 0
      :
      whoLives = zeros <= ones ? 0 : 1;
    ones = 0; // Reset values
    zeros = 0;

    remainingReadings = remainingReadings.filter(binaryStr => binaryStr.charAt(position) === whoLives.toString()); // Discard, apply search criteria
    position++; // Advance to next position
  }
  return remainingReadings[0];
}

const oxygenRating = findRating(oxygenInput, 'most');
const CO2Rating = findRating(co2Input);
const lifeSupportRating = parseInt(oxygenRating, 2) * parseInt(CO2Rating, 2);

console.log("Oxygen Generator Rating: " + oxygenRating);
console.log("CO2 Scrubber Rating: " + CO2Rating);
console.log("Life Support Rating: " + lifeSupportRating);

