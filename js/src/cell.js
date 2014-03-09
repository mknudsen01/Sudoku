SudokuApp = {};
////START CELL
SudokuApp.Cell = function(value, position){
  this.value = value;
  this.position = position;
  this.row = 0;
  this.column = 0;
  this.box = 0;
};

SudokuApp.Cell.prototype = {
  setRowColBox: function(){
    this.getRow(this.position);
    this.getColumn(this.position);
    this.getBox(this.row, this.column);
  },

  getRow: function(position){
    this.row = 1 + Math.floor(position / 9);
  },

  getColumn: function(position){
    this.column = 1 + (position % 9);
  },

  getBox: function(row, column){
    boxRow = Math.ceil(this.row / 3);
    boxCol = Math.ceil(this.column / 3);
    this.assignBox(boxRow, boxCol);
  },

  assignBox: function(row, column){
    this.box = (row-1) * 3 + column;
  }
};
////END CELL

