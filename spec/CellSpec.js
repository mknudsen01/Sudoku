describe("SudokuApp.Cell", function(){
  var randomValue = Math.floor(Math.random()*9 + 1);
  var randomPosition = Math.floor(Math.random()*81);

  it("should create a cell", function(){
    expect(new SudokuApp.Cell(randomValue, randomPosition)).toBeDefined();
  });

  it("should create cell with a value between 1 and 9", function(){
    cell = new SudokuApp.Cell(randomValue,randomPosition);
    expect(cell.value).toBeLessThan(10);
    expect(cell.value).toBeGreaterThan(0);
  });

  it("should create cell with a position between 0 and 80", function(){
    cell = new SudokuApp.Cell(randomValue,randomPosition);
    expect(cell.position).toBeLessThan(81);
    expect(cell.position).toBeGreaterThan(-1);
  });

  it("should initiate row, column and box as 0", function(){
    cell = new SudokuApp.Cell(randomValue, randomPosition);
    expect(cell.row).toEqual(0);
    expect(cell.column).toEqual(0);
    expect(cell.box).toEqual(0);
  });

  describe("getRow", function(){
    it("should return the correct row", function(){
      cell = new SudokuApp.Cell(randomValue,randomPosition);
      cell.getRow(cell.position);
      expect(cell.row).toEqual(1 + Math.floor(cell.position/9));
    });
  });

  describe("getColumn", function(){
    it("should return the correct column", function(){
      cell = new SudokuApp.Cell(randomValue,randomPosition);
      cell.getColumn(cell.position);
      expect(cell.column).toEqual(1 + Math.floor(cell.position%9));
    });
  });

  describe("getBox", function(){
    it("should return the correct box", function(){
      cell = new SudokuApp.Cell(randomValue,randomPosition);
      cell.getRow(cell.position);
      cell.getColumn(cell.position);
      cell.getBox(cell.row, cell.column);
      expect(cell.box).toEqual( (Math.ceil(cell.row/3) - 1) * 3 + Math.ceil(cell.column/3));
    });
  });

});