
var Dice = {
  roll: function() {
    return (Math.floor(Math.random() * (6) + 1)).toString();
  }
};

var Turn = {
  score: 0,
  updateScore: function(side) {
    if(side === 1) {
      this.score = 0
      return 'turn over'
    } else {
      this.score += side ;
      return 'roll again'
    }
  }
};

var Player = {
  totalScore: 0,
  turn: false,
  di: Object.create(Dice),
  updateScore: function(turnScore){
    this.totalScore += parseInt(turnScore);
  },
  checkForWinner: function(turnScore) {
    return (this.totalScore + turnScore) >= 100
  },
  passTurn: function(result) {
    if (result === 'turn over') {
      this.turn = false
    }
  },
  rollDice: function(){
    return this.di.roll();
  },
  takeTurn: function() {
    var newTurn = Object.create(Turn);
    console.log(this.username + "'s turn'")
    for(var i = 0; i < 51; i++ ) {
      var result = newTurn.updateScore(this.rollDice());
      console.log("Your Score: " + this.totalScore);
      console.log("Turn Score: " + newTurn.score);
      if (this.checkForWinner(newTurn.score)){
        this.turn = true;
      }
      this.passTurn(result)
      yesOrNo = confirm("Would you like to roll again?")
      if (this.turn === false){
        break;
      }
    }
  }
};

var Game = {
  playerOne: Object.create(Player),
  playerTwo: Object.create(Player),
  setUp: function() {
    this.playerOne.turn = true;
    this.playerOne.username = prompt("What is player one's name?")
    this.playerTwo.username = prompt("What is player two's name?")
  },
  play: function(){
    this.playerOne.takeTurn();
    this.playerTwo.takeTurn();
  }
}

