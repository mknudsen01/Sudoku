SudokuApp.Guesser = function(){
};

SudokuApp.Guesser.prototype = {
  guessOnCell: function(board,selectedCell){
    impossibleValues = this.findImpossibleValues(board,selectedCell);
    this.removeImpossiblesFromCell(selectedCell, impossibleValues);
    if(selectedCell.possibleValues.length === 1){
      selectedCell.changeValue(selectedCell.possibleValues[0]);
    }
  },

  changedFromZero: function(cell){
    return cell.value !== '0';
  },

  findImpossibleValues: function(board, selectedCell){
    takenValues = [];
    takenValues = takenValues.concat(this.findSameRowValues(board, selectedCell));
    takenValues = takenValues.concat(this.findSameColumnValues(board,selectedCell));
    takenValues = takenValues.concat(this.findSameBoxValues(board,selectedCell));
    return takenValues;
  },

  findSameRowValues: function(board, selectedCell){
    takenValues = [];
    for(var i=0; i<board.cells.length; i++){
      if(selectedCell.row == board.cells[i].row){
        if(board.cells[i].value !== '0'){
          takenValues.push(board.cells[i].value);
        }
      }
    }
    return takenValues;
  },

  findSameColumnValues: function(board,selectedCell){
    takenValues = [];
    for(var i=0; i<board.cells.length; i++){
      if(selectedCell.column == board.cells[i].column){
        if(board.cells[i].value !== '0'){
          takenValues.push(board.cells[i].value);
        }
      }
    }
    return takenValues;
  },

  findSameBoxValues: function(board, selectedCell){
    takenValues = [];
    for(var i=0; i<board.cells.length; i++){
      if(selectedCell.box == board.cells[i].box){
        if(board.cells[i].value !== '0'){
          takenValues.push(board.cells[i].value);
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