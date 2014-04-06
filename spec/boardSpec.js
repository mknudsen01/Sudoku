describe("SudokuApp.Board", function(){
  var puzzleString = '096040001100060004504810390007950043030080000405023018010630059059070830003590007';

  it("should create a new board", function(){
    expect(new SudokuApp.Board(puzzleString)).toBeDefined();
  });

  it("should be created with an empty cells array", function(){
    expect(new SudokuApp.Board(puzzleString).cells.length).toEqual(0);
  });

  describe("splitPuzzle", function(){
    it("should split the string it's given into an array", function(){
      board = new SudokuApp.Board('123');
      expect(board.splitPuzzle()).toEqual(['1','2','3']);
    });
  });

  describe("createBoard", function(){
    it("should add 81 cells to the board cells", function(){
      board = new SudokuApp.Board(puzzleString);
      board.createBoard();
      expect(board.cells.length).toEqual(81);
    });
  });
});