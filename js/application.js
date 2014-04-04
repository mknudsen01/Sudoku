$(document).ready(function(){
  SudokuApp.board = new SudokuApp.Board('005030081902850060600004050007402830349760005008300490150087002090000600026049503');
  SudokuApp.guesser = new SudokuApp.Guesser();
  SudokuApp.view = new SudokuApp.View(SudokuApp.board);

  gameConfig = {
    view: SudokuApp.view,
    guesser: SudokuApp.guesser,
    board: SudokuApp.board
  };
  SudokuApp.game = new SudokuApp.Game(gameConfig);

  SudokuApp.game.start();
  function nextRound(){
    SudokuApp.game.playRound();
    setTimeout(function() {
      if(SudokuApp.game.zeroExists){
        nextRound();
      }
    }, 3000 );
  }
  nextRound();
});