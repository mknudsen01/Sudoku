describe("SudokuApp.Guesser", function(){
  it("should create a new guesser", function(){
    expect(new SudokuApp.Guesser(onesRows)).toBeDefined();
  });

  describe("guessOnCell", function(){
    it("should remove the impossible values from a cell", function(){
      guesser.guessOnCell(onesRows, onesRows.cells[0]);
      expect(onesRows.cells[0].possibleValues).toEqual(['2','3','4','5','6','7','8','9']);
    });

    it("should change the value of a cell if when only one value remains", function(){
      guesser.guessOnCell(oneMissing, oneMissing.cells[0]);
      expect(oneMissing.cells[0].value).toEqual('4');
    });

    it("should not change the value of a cell if more than one value remains", function(){
      guesser.guessOnCell(onesRows, onesRows.cells[20]);
      expect(onesRows.cells[20].value).toEqual('0');
    });
  });

  describe("changedFromZero", function(){
    it('should return true for non-zero cells', function(){
      var cell = { value: '5' };
      expect(guesser.changedFromZero(cell)).toBe(true);
    });

    it('should return true for non-zero cells', function(){
      var cell = { value: '0' };
      expect(guesser.changedFromZero(cell)).toBe(false);
    });
  });

  describe("findSameRowValues", function(){
    it("should find the values in the same row", function(){
      expect(guesser.findSameRowValues(onesRows, onesRows.cells[0])).toEqual(onesArray);
    });
  });

  describe("findSameColumnValues", function(){
    it("should find the values in the same columns", function(){
      expect(guesser.findSameColumnValues(onesColumns, onesColumns.cells[0])).toEqual(onesArray);
    });
  });

  describe("findSameBoxValues", function(){
    it("should find the values in the same box", function(){
      expect(guesser.findSameBoxValues(onesBox, onesBox.cells[0])).toEqual(onesArray);
    });
  });

  describe("findImpossibleValues", function(){
    it("should call findSameRowValues", function(){
      spyOn(guesser, 'findSameRowValues');
      guesser.findImpossibleValues(unsolvedBoard, unsolvedBoard.cells[0]);
      expect(guesser.findSameRowValues).toHaveBeenCalled();
    });

    it("should call findSameColumnValues", function(){
      spyOn(guesser, 'findSameColumnValues');
      guesser.findImpossibleValues(unsolvedBoard, unsolvedBoard.cells[0]);
      expect(guesser.findSameColumnValues).toHaveBeenCalled();
    });

    it("should call findSameBoxValues", function(){
      spyOn(guesser, 'findSameBoxValues');
      guesser.findImpossibleValues(unsolvedBoard, unsolvedBoard.cells[0]);
      expect(guesser.findSameBoxValues).toHaveBeenCalled();
    });
  });

  describe("removeImpossiblesFromCell", function(){
    it("should remove the impossible values", function(){
      var cell = { possibleValues: ['1', '2'] };
      guesser.removeImpossiblesFromCell(cell, ['2']);
      expect(cell.possibleValues).toEqual(['1']);
    });
  });
});