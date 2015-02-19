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

describe("Player", function() {
  describe("updateScore", function() {
    it("adds score for the round to total score", function() {
      var playerTurn = Object.create(Turn);
      var player = Object.create(Player);
      player.updateScore(2)
      expect(player.totalScore).to.eq(2)
    });
  });

  describe("checkForWinner", function(){
    it ("declares a winner when player score and total score is equal to or greater than 100", function(){
      var playerTurn = Object.create(Turn);
      var player = Object.create(Player);
      playerTurn.score = 50
      player.totalScore = 51
      expect(player.checkForWinner(playerTurn.score)).to.be.true
    });
  });

  describe("passTurn", function() {
    it("sets turn to false if 'turn over'", function() {
      var playerTurn = Object.create(Turn);
      var player = Object.create(Player);
      player.turn = true;
      player.passTurn("turn over")
      expect(player.turn).to.be.false
    });

    it("keeps player turn on true if 'roll again'", function(){
      var playerTurn = Object.create(Turn);
      var player = Object.create(Player);
      player.turn = true;
      player.passTurn("roll again")
      expect(player.turn).to.be.true
    });
  });
});

describe("Game", function(){
  describe("initializeGame", function(){
    it("creates 2 player objects", function(){
      var newGame = Object.create(Game);
      expect(newGame.playerOne).to.have.property("totalScore")
      expect(newGame.playerTwo).to.have.property("totalScore")
    });
  });

  describe("setUp", function(){
    it("sets player 1 turn to true", function() {
      var newGame = Object.create(Game);
      newGame.setUp();
      expect(newGame.playerOne.turn).to.be.true
    });
  });
});
