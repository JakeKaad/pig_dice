describe('scrabbleScore', function(){
  it("gives a score of 1 for the word A", function(){
    expect(scrabbleScore("A")).to.equal(1);
  });

  it("gives a score of 2 for the word An", function(){
    expect(scrabbleScore("An")).to.equal(2);
  });

  it("gives a score of 3 for the word AD", function(){
    expect(scrabbleScore("AD")).to.equal(3);
  });

  it("Gives a score of 33 for the wored ADBFKJQ", function(){
    expect(scrabbleScore("ADBFKJQ")).to.equal(33);
  })
});
