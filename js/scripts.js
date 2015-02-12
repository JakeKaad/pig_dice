var scrabbleScore = function(word){
  var letters = word.toUpperCase().split("");
  var scores = createScoreObject();
  var score = 0;
  letters.forEach(function(letter){
    score += scores[letter];
  });


  return score;

};


var createScoreObject = function(){
  var scoreConstructor =
  [1, "A", "E", "O", "U", "L", "N", "R", "S", "T",
   2, "D", "G",
   3, "B", "C", "M", "P",
   4, "F", "H", "V", "W", "Y",
   5, "K",
   8, "J", "X",
   10, "Q", "Z"];
   var scores = {};
   var scoreValue = 0;
   for(var i = 0; i < scoreConstructor.length; i++){
     if(isInteger(scoreConstructor[i])) {
       scoreValue = scoreConstructor[i];
    } else {
      scores[scoreConstructor[i]] = scoreValue;
    }
   }
   return scores;
}

function isInteger(x) {
  return x % 1 === 0;
}
  //
  //
  // A, E, I, O, U, L, N, R, S, T       1
  // D, G                               2
  // B, C, M, P                         3
  // F, H, V, W, Y                      4
  // K                                  5
  // J, X                               8
  // Q, Z                               10
