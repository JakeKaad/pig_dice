// game - turn order decision, passing turns, initialize the game,
// players - take turns, name needs to be assigned by user,
// dice - return a random value between 1-6, save that value
// score - total, adding turn score to score total
// turns - score default 0, consecutive rolling of dice and adding value to score, over if rolled 1 or users passes

var Dice = {
  roll: function() {
    return (Math.floor(Math.random() * (7-1) +1)).toString();
  }
};

var Turn = {
  score: 0,
  updateScore: function(diceSide) {
    if(diceSide === 1) {
      this.score = 0
      return 'turn over'
    } else {
      this.score += diceSide;
      return 'roll again'
    }
  }
};



// engine.playerTurn
// newturn.updateScore
// if upDateScore ="roll again"
// newturn.updateScore
// else
//
// var side = dice.roll
//
//
// var Turn = {
//   score: 0
// }
//
// var Player = {
//   totalScore: 0
// }
//
// turn.player = player1
// turn.score += dice.roll
