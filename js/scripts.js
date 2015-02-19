
var Dice = {
  roll: function() {
    return (Math.floor(Math.random() * (6) + 1));
  }
};

var Turn = {
  score: 0,
  stillPlayerTurn: true,
  updateScore: function(side) {
    if(side === 1) {
      this.score = 0
      this.stillPlayerTurn = false;
    } else {
      this.score = this.score + side;
    }
  }
};

var Player = {
  totalScore: 0,
  di: Object.create(Dice),
  updateScore: function(turnScore){
    this.totalScore += turnScore;
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
    this.newTurn = Object.create(Turn);
    return this.newTurn
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

$(function(){
  $('#new_game').click(function(){
    newGame = Object.create(Game);
    newGame.setUp();
    var playerOne = newGame.playerOne
    var playerTwo = newGame.playerTwo
    $('.player_one_name').text(playerOne.username)
    $('#player_one_score').text(playerOne.totalScore)
    $('.player_two_name').text(playerTwo.username)
    $('#player_two_score').text(playerTwo.totalScore)
    $('.player-squares').show();

    var playerOneTurn = playerOne.takeTurn();
    $('#player_one_button').click(function(){
      var pOneRoll = playerOne.rollDice();
      $('#player_one_last_roll').text(pOneRoll);
      playerOneTurn.updateScore(pOneRoll);
      if (playerOneTurn.stillPlayerTurn) {
        $('#player_one_turn_score').text(playerOneTurn.score);
      } else {
        $('#player_one_turn_area').hide();
        $('#player_two_turn_area').show();
      }

      $('#player_one_pass_button').show();
      $('#player_one_pass_button').click(function(){
        playerOne.updateScore(playerOneTurn.score);
        $('#player_one_score').text(playerOne.totalScore);
        playerTwo.takeTurn();
        $('#player_one_turn_area').hide();
        $('#player_two_turn_area').show();
      });
    });
  });
});



