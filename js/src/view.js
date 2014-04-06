SudokuApp.View = function(board){
  this.board = board;
};

SudokuApp.View.prototype = {
  displayBoard: function(){
    for(var i=0; i<this.board.cells.length; i++){
      $('.board').append('<div class="cell" id='+this.board.cells[i].position+'>'+this.board.cells[i].value+'</div>');
      if(this.board.cells[i].value !== '0'){
        $('#'+i).css('background-color', '#3498db');
      }
    }
  },

  clearBoard: function(){
    $('.board').html('');
  },

  updateCell: function(cell){
    $('#'+cell.position).addClass('solved');
    $('#'+cell.position).text(cell.value);
  }
};