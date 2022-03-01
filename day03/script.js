//Challenge
//https://adventofcode.com/2021/day/2

const jsonData = require('./data.json');
const input = jsonData.split(' ');

const directions = input.filter(item => !(parseInt(item) == item));
const magnitude = input.filter(item => (parseInt(item) == item));