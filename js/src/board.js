SudokuApp.Board = function(puzzleString){
  this.puzzleString = puzzleString;
  this.cells = [];
};

SudokuApp.Board.prototype = {
  splitPuzzle: function(){
    return this.puzzleString.split('');
  },

  createBoard: function(){
    cellValues = this.splitPuzzle();
    for(var i=0; i<cellValues.length; i++){
      var cell = new SudokuApp.Cell(cellValues[i],i);
      cell.setRowColBox();
      this.cells.push(cell);
    }
  },

  printValues: function(){
    var values = [];
    for(var i=0; i<this.cells.length; i++){
      values.push(this.cells[i].value);
    }
    return values.join('');
  }
};