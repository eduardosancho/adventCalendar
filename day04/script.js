// Challenge Day 04
// https://adventofcode.com/2021/day/4

const jsonData = require('./data.json');
const unorderedBoards = jsonData.boards.split(/^$|\s+(\d+) */g);
const lottery = jsonData.lottery.split(/^$|\,+(\d+)[ ,]*/g);

function organizeBoards(unorderedBoards) {
  let boardsIndex = 0;
  let boards = [];
  let obj = { boardName: `board${boardsIndex}`, boardNums: [], }

  unorderedBoards.forEach((number, index) => {
    if (index % 25 === 0 && index !== 0) {
      boards.push(obj);
      boardsIndex++;
      obj = { boardName: `board${boardsIndex}`, boardNums: [], }
    }
    let pair = {};
    pair[number] = false;
    obj.boardNums.push(pair);
  })
  return boards;
}

function markBoards(current) {
  boards.forEach(board => {
    board.boardNums.forEach(pair => {
      if (Object.keys(pair)[0] === current) {
        pair[current] = true;
      }
    })
  })
}

function findWinner() {
  const winningRows = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24]
  ]
  let firstWinner = {};
  let bingo = false;
  boards.every(board => {
    winningRows.every(row => {
      let winner = true;
      row.forEach(cell => {
        const numberExplored = Object.values(board.boardNums[cell])[0];
        if (!numberExplored) { winner = false; }
      })
      if (winner) {
        firstWinner = board;
        bingo = true;
        return false;
      }
      return true;
    })
    if (bingo === true) { return false; }
    return true;
  })
  return [firstWinner, bingo];
}

function playBingo() {
  let explored = [];
  
  lottery.every(current => {
    explored.push(current);
    markBoards(current);
    [winner, bingo] = findWinner();
    if (bingo === true) { return false; }
    return true;
  });
  
  const unmarked = winner.boardNums.filter(pair => Object.values(pair)[0] === false)
  const unmarkedSum = unmarked.reduce((total, num) => total + parseInt(Object.keys(num)[0]), 0)

  console.log('The winner is: ', winner.boardName);
  console.log('Sum of unmarked numbers: ', unmarkedSum);
  console.log('Last number in the bingo lottery: ', explored[explored.length - 1]);
}
  
const boards = organizeBoards(unorderedBoards);
playBingo();