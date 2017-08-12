$(document).ready(function() {
  var bowling = new BowlingGame;
  var player = new Player;

  var isStrike = function(pins) {
    pins === 10;
  };


  $('#roll').on('click', function() {
    var pins = player.bowl();
    bowling.roll(pins);
    $('#pinsKnokedDown').text(pins);
    $('#rolls').text(bowling.currentRoll);
  })

  $('#result').on('click', function() {
    $('#score').text(bowling.score());
  })







});
