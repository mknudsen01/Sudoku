$(document).ready(function(){
  board = new SudokuApp.Board('005030081902850060600004050007402830349760005008300490150087002090000600026049503');
  board.createBoard();
  guesser = new SudokuApp.Guesser(board);
  view = new SudokuApp.View(board);

  view.displayBoard();
  while(guesser.zeroExists()){
    for(var i=0; i<guesser.board.cells.length; i++){
      if(guesser.board.cells[i].value === '0'){
        guesser.guessOnCell(guesser.board.cells[i]);
      }
    }
  }
});