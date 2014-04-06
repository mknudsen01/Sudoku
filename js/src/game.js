SudokuApp.Game = function(config){
  this.view = config.view;
  this.guesser = config.guesser;
  this.board = config.board;
};

SudokuApp.Game.prototype = {
  start: function(){
    this.board.createBoard();
    this.view.clearBoard();
    this.view.displayBoard();
  },

  playRound: function(){
    for(var i=0; i<this.board.cells.length; i++){
      var cell = this.board.cells[i];
      if(cell.value === '0'){
        this.guesser.guessOnCell(this.board,cell);
        if(this.guesser.changedFromZero(cell)){
          this.view.updateCell(cell);
        }
      }
    }
  },

  zeroExists: function(){
    var exists = false;
    for(var i=0; i<this.board.cells.length; i++){
      if(this.board.cells[i].value == "0"){
        exists = true;
      }
    }
    return exists;
  },
};