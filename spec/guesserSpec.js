describe("SudokuApp.Guesser", function(){
  var onesRows = new SudokuApp.Board("111111111000000000000000000000000000000000000000000000000000000000000000000000000");
  var onesColumns = new SudokuApp.Board("100000000100000000100000000100000000100000000100000000100000000100000000100000000");
  var onesBox = new SudokuApp.Board("111000000111000000111000000000000000000000000000000000000000000000000000000000000");
  var unsolvedBoard = new SudokuApp.Board('005030081902850060600004050007402830349760005008300490150087002090000600026049503');
  var solvedBoard = new SudokuApp.Board('475936281932851764681274359517492836349768125268315497153687942794523618826149573');
  var oneMissing = new SudokuApp.Board('075936281932851764681274359517492836349768125268315497153687942794523618826149573');
  onesRows.createBoard();
  onesColumns.createBoard();
  onesBox.createBoard();
  unsolvedBoard.createBoard();
  solvedBoard.createBoard();
  oneMissing.createBoard();
  var onesArray = ['1','1','1','1','1','1','1','1','1'];
  it("should create a new guesser", function(){
    expect(new SudokuApp.Guesser(onesRows)).toBeDefined();
  });

  describe("findSameRowValues", function(){
    var guesser = new SudokuApp.Guesser(onesRows);
    it("should find the values in the same row", function(){
      expect(guesser.findSameRowValues(guesser.board.cells[0])).toEqual(onesArray);
    });
  });

  describe("findSameColumnValues", function(){
    var guesser = new SudokuApp.Guesser(onesColumns);
    it("should find the values in the same columns", function(){
      expect(guesser.findSameColumnValues(guesser.board.cells[0])).toEqual(onesArray);
    });
  });

  describe("findSameBoxValues", function(){
    var guesser = new SudokuApp.Guesser(onesBox);
    it("should find the values in the same box", function(){
      expect(guesser.findSameBoxValues(guesser.board.cells[0])).toEqual(onesArray);
    });
  });

  describe("guessOnCell", function(){
    it("should remove the impossible values from a cell", function(){
      var guesser = new SudokuApp.Guesser(onesRows);
      guesser.guessOnCell(onesRows.cells[0]);
      expect(onesRows.cells[0].possibleValues).toEqual(['2','3','4','5','6','7','8','9']);
    });

    it("should change the value of a cell if when only one value remains", function(){
      var guesser = new SudokuApp.Guesser(oneMissing);
      guesser.guessOnCell(oneMissing.cells[0]);
      expect(oneMissing.cells[0].value).toEqual('4');
    });
  });

  describe("zeroExists", function(){
    it("should return true if a zero is present on the board", function(){
      var guesser = new SudokuApp.Guesser(onesRows);
      expect(guesser.zeroExists()).toEqual(true);
    });

    it("should return false if a zero is not present", function(){
      var guesser = new SudokuApp.Guesser(solvedBoard);
      expect(guesser.zeroExists()).toEqual(false);
    });
  });
});