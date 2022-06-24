// Challenge Day 04
// https://adventofcode.com/2021/day/4

const jsonData = require('./data.json');
const boards = jsonData.boards.split(/^$|\s+(\d+) */g);
const lottery = jsonData.lottery.split(/^$|\,+(\d+)[ ,]*/g);

