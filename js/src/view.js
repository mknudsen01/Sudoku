SudokuApp.View = function(board){
  this.board = board;
};

SudokuApp.View.prototype = {
  displayBoard: function(){
    for(var i=0; i<this.board.cells.length; i++){
      $('.board').append('<div class="cell" id='+this.board.cells[i].position+'>'+this.board.cells[i].value+'</div>');
      if(this.board.cells[i].value !== '0'){
        $('#'+i).css('background-color', 'blue');
      }
    }
  },

  updateCell: function(cell){
    $('#'+cell.position).css('background-color', 'green');
    $('#'+cell.position).text(cell.value);
  }
};