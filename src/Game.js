function getSortedKeys(obj) {
    var keys = []; for(var key in obj) keys.push(key);
    return keys.sort(function(b,a){return obj[a]-obj[b]});
}

function findNamedPlayer(name, playerArray) {
  for(var i = 0; i < playerArray.length; i++) {
    if(playerArray[i]._name === name) {
      return playerArray[i]
    }
  }
}

function countVotes(player) {
  if(typeof voteCount[player._vote]=== "undefined"){
    voteCount[player._vote] = 1;
  } else {
    voteCount[players._vote] += 1;
  }
}



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function Game(players) {
  this._playerNumber = players;
  this._time = "night";
  this._ingameWerewolfCount = null;
  this._ingameVillagerCount = null;
  this._wolfCount = null;
  this._villagerCount = null;
  this._players = [];
  this._playerNames = [];
  this._deadPlayers = [];
  this._roleArray = [];
  this.NIGHT_TIME = "It's night time!";
}

Game.prototype._addPlayers = function (array) {
  this._players = array;
};
Game.prototype._howManyWolves = function (numberOfPlayers) {
  this._wolfCount = Math.floor(numberOfPlayers/4);
};
Game.prototype._howManyVillagers = function () {
  this._villagerCount = this._playerNumber - this._wolfCount;
};
Game.prototype._roleAssignment = function () {
  var wolfCount = this._wolfCount;
  for (var i = 0; i < wolfCount; i++){
    this._roleArray.push("werewolf");
  }
  var villagerCount = this._villagerCount;
  for (var i = 0; i < villagerCount; i++){
    this._roleArray.push("villager");
  }
  var roles = this._roleArray;
  var shuffledRoles = shuffle(roles);

  var assignedRolesArray = this._players.map(function(e, i) {
    return [e, shuffledRoles[i]];
  });
  this._assign(assignedRolesArray);
};

Game.prototype._assign = function (roleArray) {
  var arrayLength = roleArray.length;
  for (var i = 0; i < arrayLength; i++) {
    roleArray[i][0].assign(roleArray[i][1]);
  }
};
Game.prototype._updateTime = function () {
  this._time === "day" ? this._time ="night" : this._time = "day"
};
Game.prototype._headCount = function () {
  this._resetCount();
  this._countPlayers();
};

Game.prototype._countPlayers = function () {
  var playerCount = this._players.length;
  var players = this._players;
  var game = this;
  for (var i = 0; i < playerCount; i++) {
    if((players[i].isAlive())) {
      if(players[i]._role === "werewolf") {
        game._ingameWerewolfCount++;
      }
      else {
        game._ingameVillagerCount++;
      }
    }
  }
};

Game.prototype._resetCount = function () {
  this._ingameWerewolfCount = 0;
  this._ingameVillagerCount = 0;
};

Game.prototype._assignRoles = function () {
  // var playerCount = this._players.length;

  this._howManyWolves(this.playerCount());
  this._howManyVillagers();
  this._roleAssignment();
};

Game.prototype.playerCount = function () {
  return  this._players.length;
};



Game.prototype.isOver = function () {
 return this._ingameWerewolfCount === this._ingameVillagerCount || this._ingameWerewolfCount === 0;
};
Game.prototype._isDay = function () {
  return this._time === "day";
};
Game.prototype._outputTime = function () {
  return this.NIGHT_TIME;
};
Game.prototype._dayVote = function() {
  var voteCount = {};
  var playerCount = this._players.length;
  var players = this._players;
  for(var i = 0; i < playerCount; i++) {
    countVotes(player[i]);
  }
  var sortArray = getSortedKeys(voteCount);
  var deadPlayer = sortArray[0];
  var toDie = findNamedPlayer(deadPlayer, players);
  toDie._kill();
  this._deadPlayers.push(toDie);
  var index = players.indexOf(toDie);
  if (index > -1) {
    players.splice(index, 1);
  }
  this._updateTime();
}

Game.prototype._nightVote = function () {
  var voteCount = {};
  var playerCount = this._players.length;
  var players = this._players
  for(var i = 0; i < playerCount; i++) {
    if(players[i]._role === "werewolf"){
      countVotes(player[i]);
    }
  };
  var sortArray = getSortedKeys(voteCount)

  var deadPlayer = sortArray[0]
  var players = this._players;
  var deadPlayers = this._deadPlayers;
  var toDie = findNamedPlayer(deadPlayer, players);

  toDie._kill()
  deadPlayers.push(toDie);
  var index = players.indexOf(toDie);
  if (index > -1) {
    players.splice(index, 1);
}
debugger

  this._updateTime();

};
