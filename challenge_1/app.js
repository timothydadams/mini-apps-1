/*
-----------------------MODEL
*/
var board = {};

var moves = {
  player: {},
  computer: {}
};


var getPlayerMove = function (cell) {
  if (board[cell] === null) {
    board[cell] = 'X';
    updateMoves();
    getComputerMove();
  }
};

//update scores (for both computer and player)
var updateMoves = function() {
  for (var key in board) {
    if (board[key] === 'X') {
      moves.player[key] = true;
    } else if (board[key] === 'O') {
      moves.computer[key] = true;
    }
  }
  displayBoard();
  checkScore();
};

//computer move 'generator' generates a random ID from 1 to 9
var getComputerMove = function(moves) {
  var randomHelper = function() {
    var min = 1;
    var max = 9;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var randomID = randomHelper();
  while (board[randomID] !== null) {
    randomID = randomHelper();
  }
  board[randomID] = 'O';
  updateMoves();
};

/*
-----------------------VIEW
*/
var displayBoard = function() {
  for (var key in board) {
    var element = document.getElementById(key);
    element.innerText = board[key];
  }
};


//ADDs eventListeners to divs and the reset button
var addListeners = function() {
  //add handleClick to each cell to get each input
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', (e) => getPlayerMove(e.target.id));
  }
  //add click handler to reset button
  var resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', resetBoard);
};

/*
-----------------------CONTROLLER
*/

var checkScore = function() {

  var boardArray = Object.values(board);
  //check horizontal rows
  for (var i = 0; i < 9; i = i + 3) {
    if (boardArray[i] === boardArray[i + 1] && boardArray[i + 1] === boardArray[i + 2]) {
      winner = boardArray[i];
    }
  }

  //check vertical columns for winners
  if (boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6]) {
    winner = boardArray[0];
  } else if (boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7]) {
    winner = boardArray[1];
  } else if (boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8]) {
    winner = boardArray[2];
  }

  //check both diagonals
  if (boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8]) {
    winner = boardArray[0];
  } else if (boardArray[6] === boardArray[4] && boardArray[4] === boardArray[2]) {
    winner = boardArray[6];
  }

  if (winner === 'X') {
    return alert('You Beat the computer!');
  } else if (winner === 'O') {
    return alert('You lost :(');
  }

};


var resetBoard = function() {
  //reset the board
  for (var i = 1; i < 10; i++) {
    board[i] = null;
  }
  //reset the moves
  moves = {
    player: {},
    computer: {}
  };
  displayBoard();
};

addListeners();
resetBoard();