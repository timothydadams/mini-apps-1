////////////////////////////////
//            MODEL
/////////////////////////////////

var game = {
  board: {1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null},
  nextMove: 'player', //or computer
  scores: {player: 0, computer: 0}
};

var resetBoard = function () {
  //reset the board, keep scores
  for (var i = 1; i < 10; i++) {
    game.board[i] = null;
  }
  displayBoard();
};

////////////////////////////////
//         CONTROLLERS
////////////////////////////////

var saveMoveToBoard = function (cell) {
  //check that cell is empty
  if (game.board[cell] === null) {
    if (game.nextMove === 'player') {
      game.board[cell] = 'X';
      game.nextMove = 'computer';
      displayBoard();
    } else if (game.nextMove === 'computer') {
      game.board[cell] = 'O';
      game.nextMove = 'player';
      displayBoard();
    }
  }
  checkScore();
};

var checkScore = function () {
  var boardArray = Object.values(game.board);
  var winner = null;
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
    game.scores.player++;
    setTimeout(()=>alert('You Beat the computer!'), 200);
  } else if (winner === 'O') {
    game.scores.computer++;
    setTimeout(()=>alert('You lost :('), 200);
  }

  if (!winner && game.nextMove === 'computer') {
    var remainingCells = 0;
    for (var i = 0; i < boardArray.length; i++) {
      if (boardArray[i] === null) {
        remainingCells++;
      }
    }
    if (remainingCells > 1) {
      getComputerMove();
    } else if (remainingCells === 0) {
      setTimeout(()=>alert('Tie Game, please hit the reset button'), 200);
    }
  }
};

//computer move 'generator' generates a random ID from 1 to 9
var getComputerMove = function() {
  var randomHelper = function() {
    var min = 1;
    var max = 9;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var randomID = randomHelper();
  while (game.board[randomID] !== null) {
    randomID = randomHelper();
    //console.log(randomID);
  }
  saveMoveToBoard(randomID);
};

////////////////////////////////////
//                 VIEW
////////////////////////////////////

var displayBoard = function() {
  for (var key in game.board) {
    var element = document.getElementById(key);
    element.innerText = game.board[key];
  }
};

var myBoard = document.getElementById('board');
myBoard.addEventListener('click', (e) => saveMoveToBoard(e.target.id));
var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetBoard);