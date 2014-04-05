describe("SudokuApp.Game", function(){
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