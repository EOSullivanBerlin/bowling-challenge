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

  function isStrike() {
    return game[frameIndex] === 10
  }

  function StrikeBonus() {
    return game[frameIndex + 1] + game[frameIndex + 2]
  }

  function isASpare() {
    return game[frameIndex] + game[frameIndex + 1] === 10
  }

  function SpareBonus() {
    return game[frameIndex + 2]
  }

  function sumOfAllBallsInTheFrame() {
		return game[frameIndex] + game[frameIndex + 1];
  }

  for (var frame = 0; frame < 10; frame++){
    if(isStrike()) {
      score += 10 + StrikeBonus();
      frameIndex ++;
    } else if(isASpare()) {
      score += 10 + SpareBonus();
      frameIndex += 2;
    }else {
      score += sumOfAllBallsInTheFrame();
      frameIndex += 2;
    }
  }
  return score;
};
