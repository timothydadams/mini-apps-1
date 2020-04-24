
//model
var handleClick = function (cell) {
  console.log('clicked cell: ', cell);
  //check to see if the board cell already has a value
  //if its clear, add an 'x'
  //else alert that that spot has already been taken

  //generate a computer move

};

var reset = function(e) {
  e.preventDefault();
  console.log('hey there, im clearing the board');

};


//build an 'x' element



//view
/*
ADDs eventListeners to divs and the reset button
*/
var addListeners = function() {
  //add handleClick to each cell to get each input
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', (e) => handleClick(e.target.attributes.value.value));
  }
  //add click handler to reset button
  var resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', (e)=>reset(e));
};




//controller
addListeners();


