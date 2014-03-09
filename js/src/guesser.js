SudokuApp.Guesser = function(board){
  this.board = board;
};

SudokuApp.Guesser.prototype = {

  zeroExists: function(){
    var exists = false;
    for(var i=0; i<this.board.cells.length; i++){
      if(this.board.cells[i].value == "0"){
        exists = true;
      }
    }
    return exists;
  },

  guessOnCell: function(selectedCell){
    impossibleValues = this.findImpossibleValues(selectedCell);
    this.removeImpossiblesFromCell(selectedCell, impossibleValues);
    //how is this undefined for some of the things?
    if(selectedCell.possibleValues.length === 1){
      selectedCell.changeValue(selectedCell.possibleValues[0]);
    }
  },

  findImpossibleValues: function(selectedCell){
    takenValues = [];
    takenValues = takenValues.concat(this.findSameRowValues(selectedCell));
    takenValues = takenValues.concat(this.findSameColumnValues(selectedCell));
    takenValues = takenValues.concat(this.findSameBoxValues(selectedCell));
    return takenValues;
  },

  findSameRowValues: function(selectedCell){
    takenValues = [];
    for(var i=0; i<this.board.cells.length; i++){
      if(selectedCell.row == this.board.cells[i].row){
        if(this.board.cells[i].value !== '0'){
          takenValues.push(this.board.cells[i].value);
        }
      }
    }
    return takenValues;
  },

  findSameColumnValues: function(selectedCell){
    takenValues = [];
    for(var i=0; i<this.board.cells.length; i++){
      if(selectedCell.column == this.board.cells[i].column){
        if(this.board.cells[i].value !== '0'){
          takenValues.push(this.board.cells[i].value);
        }
      }
    }
    return takenValues;
  },

  findSameBoxValues: function(selectedCell){
    takenValues = [];
    for(var i=0; i<this.board.cells.length; i++){
      if(selectedCell.box == this.board.cells[i].box){
        if(this.board.cells[i].value !== '0'){
          takenValues.push(this.board.cells[i].value);
        }
      }
    }
    return takenValues;
  },

  removeImpossiblesFromCell: function(cell, impossibleValues){
    for(var i=0; i<impossibleValues.length; i++){
      var valueLocation = cell.possibleValues.indexOf(impossibleValues[i]);
      if(valueLocation > -1){
        cell.possibleValues.splice(valueLocation,1);
      }
    }
  }
};