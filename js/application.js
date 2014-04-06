$(document).ready(function(){
  for(var i=0; i<81; i++){
    $('.board').append('<div class="cell">0</div>');
  }
  var timeoutID;
  var nextRound = function(){
    SudokuApp.game.playRound();
    timeoutID = setTimeout(function() {
      if(SudokuApp.game.zeroExists){
        nextRound();
      }
    }, 3000 );
  };

  $('.load').on('click', function(event){
    event.preventDefault();
    if(timeoutID){
      clearTimeout(timeoutID);
    }
    SudokuApp.board = new SudokuApp.Board($('#puzzles option:selected').val());
    SudokuApp.guesser = new SudokuApp.Guesser();
    SudokuApp.view = new SudokuApp.View(SudokuApp.board);
    gameConfig = {
      view: SudokuApp.view,
      guesser: SudokuApp.guesser,
      board: SudokuApp.board
    };
    SudokuApp.game = new SudokuApp.Game(gameConfig);
    SudokuApp.game.start();
  });

  $('.solve').on('click', function(event){
    event.preventDefault();
    if(SudokuApp.board){
      nextRound();
    }
  });
});