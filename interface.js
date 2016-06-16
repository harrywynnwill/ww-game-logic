$(document).ready(function(){
var player1 = new Player("Joe");
var player2 = new Player("Elia");
var player3 = new Player("Hanna");
var player4 = new Player("Harry");
var game = new Game(4);

game._addPlayers([player1, player2, player3, player4]);

$('#name-1').text(game._players[0]._name);
$('#vote-1').text(game._players[0]._vote);
$('#alive-1').text(game._players[0]._dead);
$('#name-2').text(game._players[1]._name);
$('#vote-2').text(game._players[1]._vote);
$('#alive-2').text(game._players[1]._dead);
$('#name-3').text(game._players[2]._name);
$('#vote-3').text(game._players[2]._vote);
$('#alive-3').text(game._players[2]._dead);
$('#name-4').text(game._players[3]._name);
$('#vote-4').text(game._players[3]._vote);
$('#alive-4').text(game._players[3]._dead);

$('#time').text(game._time);

function updateTime(){
  $('#time').text(game._time);
}
function updateVote(){
  $('#vote-1').text(game._players[0]._vote);
  $('#vote-2').text(game._players[1]._vote);
  $('#vote-3').text(game._players[2]._vote);
  $('#vote-4').text(game._players[3]._vote);
}

function updateDeath(){
  $('#alive-1').text(game._players[0]._dead);
  $('#alive-2').text(game._players[1]._dead);
  $('#alive-3').text(game._players[2]._dead);
  $('#alive-4').text(game._players[3]._dead);
}

  $('#vote-form').submit(function(event){
   event.preventDefault();
   var vote =  $('#vote-choice-1').val();
   game._players[0].makeVote(vote);
   updateVote();
  });
  $('#vote-form').submit(function(event){
    event.preventDefault();
    var vote =  $('#vote-choice-2').val();
    game._players[1].makeVote(vote);
    updateVote();
  });
  $('#vote-form').submit(function(event){
    event.preventDefault();
    var vote =  $('#vote-choice-3').val();
    game._players[2].makeVote(vote);
    updateVote();
  });
  $('#vote-form').submit(function(event){
    event.preventDefault();
    var vote =  $('#vote-choice-4').val();
    game._players[3].makeVote(vote);
    updateVote();
  });

  $('#day-vote').click(function(){


    game._dayVote();
    updateTime();
    updateDeath();

  });



});
