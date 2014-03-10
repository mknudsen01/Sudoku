SudokuApp.View = function(board){
  this.board = board;
};

SudokuApp.View.prototype = {
  displayBoard: function(){
    for(var i=0; i<this.board.cells.length; i++){
      $('.board').append('<div class="cell" id='+this.board.cells[i].position+'>'+this.board.cells[i].value+'</div>');
    }
  },

  changeCells: function(cellsToChange){
    for(var i=0; i<cellsToChange.length; i++){
      $('#'+cellsToChange[i].position).text(cellsToChange[i].value);
    }
  }
};