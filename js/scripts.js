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

$(function(){
  $("#scrabbler").submit(function(event){
    word = $("#scrabble_word").val();
    wordScore = scrabbleScore(word);
    $(".results").fadeOut("fast");
    $("#word").text(word);
    $("#score").text(wordScore);

    $(".results").toggle(function(){
      $(this).fadeIn(700);
    });
    event.preventDefault();
  });
});
