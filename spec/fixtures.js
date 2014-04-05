var onesRows = new SudokuApp.Board("111111111000000000000000000000000000000000000000000000000000000000000000000000000");
var onesColumns = new SudokuApp.Board("100000000100000000100000000100000000100000000100000000100000000100000000100000000");
var onesBox = new SudokuApp.Board("111000000111000000111000000000000000000000000000000000000000000000000000000000000");
var unsolvedBoard = new SudokuApp.Board('005030081902850060600004050007402830349760005008300490150087002090000600026049503');
var solvedBoard = new SudokuApp.Board('475936281932851764681274359517492836349768125268315497153687942794523618826149573');
var oneMissing = new SudokuApp.Board('075936281932851764681274359517492836349768125268315497153687942794523618826149573');
var guesser = new SudokuApp.Guesser();
onesRows.createBoard();
onesColumns.createBoard();
onesBox.createBoard();
unsolvedBoard.createBoard();
solvedBoard.createBoard();
oneMissing.createBoard();
var onesArray = ['1','1','1','1','1','1','1','1','1'];
var unsolvedView = new SudokuApp.View(unsolvedBoard);
var solvedView = new SudokuApp.View(solvedBoard);
var unsolvedConfig = {
    view: unsolvedView,
    guesser: guesser,
    board: unsolvedBoard
  };

var solvedConfig = {
    view: solvedView,
    guesser: guesser,
    board: solvedBoard
  };