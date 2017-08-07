var BowlingGame = function() {
  this._rolls = [];
  this.currentRoll = 0;
};

BowlingGame.prototype.roll = function(pins) {
this._rolls[this.currentRoll] = pins;
this.currentRoll += 1;
};

BowlingGame.prototype._rolls = function() {
  return this._rolls;
};

BowlingGame.prototype.score = function() {
  var score = 0;
  var frameIndex = 0;
  var game = this._rolls

  function sumOfAllBallsInTheFrame() {
		return game[frameIndex] + game[frameIndex + 1];
  }

  for (var frame = 0; frame < 10; frame++){
    score += sumOfAllBallsInTheFrame();
    frameIndex += 2;

  }
  return score;
};
