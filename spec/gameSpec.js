describe("SudokuApp.Game", function(){
  var unsolvedBoard = new SudokuApp.Board('005030081902850060600004050007402830349760005008300490150087002090000600026049503');
  var solvedBoard = new SudokuApp.Board('475936281932851764681274359517492836349768125268315497153687942794523618826149573');
  var guesser = new SudokuApp.Guesser();
  var unsolvedView = new SudokuApp.View(unsolvedBoard);
  var solvedView = new SudokuApp.View(solvedBoard);

  unsolvedConfig = {
    view: unsolvedView,
    guesser: guesser,
    board: unsolvedBoard
  };

  solvedConfig = {
    view: solvedView,
    guesser: guesser,
    board: solvedBoard
  };

  var unsolvedGame = new SudokuApp.Game(unsolvedConfig);
  var solvedGame = new SudokuApp.Game(solvedConfig);

  describe("zeroExists", function(){
    it("should return true if a zero is present on the board", function(){
      unsolvedGame.board.createBoard();
      expect(unsolvedGame.zeroExists()).toEqual(true);
    });

    it("should return false if a zero is not present", function(){
      solvedGame.board.createBoard();
      expect(solvedGame.zeroExists()).toEqual(false);
    });
  });

});