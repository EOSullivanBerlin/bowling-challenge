describe('Bowling Game', function() {
  var game;
  beforeEach(function() {
    game = new BowlingGame;
  });

  it('allows the player to add the pins they have knoked to the score', function(){
    game.roll(10)
    expect(game._rolls).toEqual([10]);
  });

  it('allows the player to add many rolls to the score', function() {
    game.roll(10)
    game.roll(10)
    game.roll(10)
    expect(game._rolls).toEqual([10, 10, 10]);
  });

  function rollMany (n, pins) {
		for (var i = 0; i < n; i++) {
			game.roll(pins)
		}
	}

  function rollSpare (pins) {
    game.roll(pins)
    game.roll(pins)
  }

  function rollStrike() {
    game.roll(10)
  }

  it('can handle a gutter game', function() {
    rollMany(20, 0)
    expect(game.score()).toEqual(0)
  });

  it('can handle a game of ones', function() {
    rollMany(20, 1)
    expect(game.score()).toEqual(20)
  });

  it('can handle a sigle spare', function() {
    rollSpare(5)
    game.roll(3)
    rollMany(17, 0)
    expect(game.score()).toEqual(16)
  });

  it('can handle a single strike', function() {
    rollStrike()
    game.roll(1)
    game.roll(1)
    rollMany(16, 0)
    expect(game.score()).toEqual(14)
  });

  it('can handle a perfect game', function() {
    rollMany(12, 10)
    expect(game.score()).toEqual(300)
  });


});
