$(document).ready(function() {
  var bowling = new BowlingGame;
  $('#roll').on('click', function() {
    bowling.roll(1);
    $('#rolls').text(bowling.currentRoll);
  })


});
