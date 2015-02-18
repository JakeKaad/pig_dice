describe("Dice", function(){
  describe("roll", function(){
    it ("returns 1 value when you roll the dice", function(){
      var rolledDice = Object.create(Dice);
      var sideUp = rolledDice.roll();
      expect(sideUp.length).to.eq(1);
    });

    it("tests that return value is between 1 and 6", function() {
      var rolledDice = Object.create(Dice);
      var sideUp = rolledDice.roll();
      expect("123456").to.contain(sideUp);
    });
  });
});

describe("Turn", function(){
  describe("updateScore", function(){
    context ("when 1 is rolled", function(){
      it("sets score to 0", function(){
        var newTurn = Object.create(Turn);
        newTurn.score = 5
        newTurn.updateScore(1)
        expect(newTurn.score).to.eq(0)
      });

      it("returns 'turn over'", function() {
        var newTurn = Object.create(Turn);
        newTurn.score = 5
        var result = newTurn.updateScore(1)
        expect(result).to.eq("turn over")
      });
    });

    context( "when another number is rolled", function(){
      it("sets the score to the rolled number", function(){
        var newTurn = Object.create(Turn);
        newTurn.updateScore(2)
        expect(newTurn.score).to.eq(2)
      });

      it("returns 'roll again'", function(){
        var newTurn = Object.create(Turn);
        var result = newTurn.updateScore(2)
        expect(result).to.eq("roll again")
      });
    });
  });
});
