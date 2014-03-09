describe("SudokuApp.Guesser", function(){
  var onesRows = new SudokuApp.Board("111111111000000000000000000000000000000000000000000000000000000000000000000000000");
  var onesColumns = new SudokuApp.Board("100000000100000000100000000100000000100000000100000000100000000100000000100000000");
  var onesBox = new SudokuApp.Board("111000000111000000111000000000000000000000000000000000000000000000000000000000000");
  onesRows.createBoard();
  onesColumns.createBoard();
  onesBox.createBoard();
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
  });



});