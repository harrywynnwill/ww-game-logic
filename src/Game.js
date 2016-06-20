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
// var Game {
//   _time: "night",
//   _mode: null,
//   players: [],
//   _deadPlayers: [],
//   _roleArray: []
// }
// // not necessarily going to keep Game
// Game.addPlayers = function(playerArray) {
//   Game.players = playerArray;
// }
//
// Game.addMode = function(modeIndex) {
//   Game._mode = wwRules.gameModes[modeIndex];
// }
//
// Game.startWithMode = function(modeNumber) {
//   Game.mode = wwRules.gameModes[modeNumber]
// }
//
// Game.listMatchedPlayersByType = function(matchfn) {
//     var playerList = [];
//     for (var i = 0; i < Game._playerNumber; i++) {
//         if (matchfn(Game.players[i])) {
//             playerList.push(Game.players[i]);
//         }
//     }
//     return playerList;
// };
//
// Game.getLivingPlayersList = function() {
//     return Game.listMatchedPlayersByType(function(p) { return p.isAlive(); });
// };
//
// Game.getLivingWolvesList = function() {
//     return Game.listMatchedPlayersByType(function(p) { return p.isAlive() && p._role == ww.Roles.Werewolf; });
// };
//
// Game.getLivingNonWolvesList = function() {
//     return Game.listMatchedPlayersByType(function(p) { return p.isAlive() && p._role != ww.Roles.Werewolf; });
// };
//
// Game.getFullEvilTeam = function() {
//     return Game.listMatchedPlayersByType(function(p) { return p._role.team == "Werewolves"; });
// };
//
// Game.getFullGoodTeam = function() {
//     return Game.listMatchedPlayersByType(function(p) { return p._role.team == "Village"; });
// };
//
// Game._addPlayers = function (array) {
//   this.players = array;
// };
// Game._roleAssignment = function () {
//   var wolfCount = Game.mode.roles[0].count;
//   for (var i = 0; i < wolfCount; i++){
//     this._roleArray.push("werewolf");
//   }
//   var villagerCount = this.mode.roles[1].count;
//   for (var i = 0; i < villagerCount; i++){
//     this._roleArray.push("villager");
//   }
//   var roles = this._roleArray;
//   var shuffledRoles = shuffle(roles);
//
//   var assignedRolesArray = this.players.map(function(e, i) {
//     return [e, shuffledRoles[i]];
//   });
//   this._assign(assignedRolesArray);
// };
//
// Game._assign = function (roleArray) {
//   var arrayLength = roleArray.length;
//   for (var i = 0; i < arrayLength; i++) {
//     if(this.roleArray[i][1] === "werewolf") {
//       this.roleArray[i][0].assign(wwRules.roles.Werewolf);
//     } else if(this.roleArray[i][1] === "villager") {
//       this.roleArray[i][0].assign(wwRules.roles.Villager);
//     }
//   }
// };
// Game._updateTime = function () {
//   Game.curTime === "day" ? this._time ="night" : this._time = "day"
// };
// // Game._headCount = function () {
// //   this._resetCount();
// //   this._countPlayers();
// // };
//
// // Game._countPlayers = function () {
// //   var playerCount = this.players.length;
// //   var players = this.players;
// //   var game = this;
// //   for (var i = 0; i < playerCount; i++) {
// //     if((players[i].isAlive())) {
// //       if(players[i]._role === "werewolf") {
// //         game._ingameWerewolfCount++;
// //       }
// //       else {
// //         game._ingameVillagerCount++;
// //       }
// //     }
// //   }
// // };
// //
// // Game._resetCount = function () {
// //   this._ingameWerewolfCount = 0;
// //   this._ingameVillagerCount = 0;
// // };
//
// Game._assignRoles = function () {
//   // var playerCount = this.players.length;
//
//   // this._howManyWolves(this.playerCount());
//   // this._howManyVillagers();
//   this._roleAssignment();
// };
//
// // Game.playerCount = function () {
// //   return  this.players.length;
// // };
//
//
//
// Game.isOver = function () {
//  return this.getFullEvilTeam().length === this.getGullGoodTeam().length || this.getGullEvilTeam().length === 0;
// };
// Game._isDay = function () {
//   return this._time === "day";
// };
// Game._outputTime = function () {
//   return this.NIGHT_TIME;
// };
// Game._dayVote = function() {
//   var voteCount = {};
//   var playerCount = this.players.length;
//   var players = this.players;
//   for(var i = 0; i < playerCount; i++) {
//     countVotes(player[i]);
//   }
//   var sortArray = getSortedKeys(voteCount);
//   var deadPlayer = sortArray[0];
//   var toDie = findNamedPlayer(deadPlayer, players);
//   toDie._kill();
//   this._deadPlayers.push(toDie);
//   var index = players.indexOf(toDie);
//   if (index > -1) {
//     players.splice(index, 1);
//   }
//   this._updateTime();
// }
//
// Game.dayVote = function() {
//
// }
//
// Game._nightVote = function () {
//   var voteCount = {};
//   var playerCount = this.players.length;
//   var players = this.players
//   for(var i = 0; i < playerCount; i++) {
//     if(players[i]._role === "werewolf"){
//       countVotes(player[i]);
//     }
//   };
//   var sortArray = getSortedKeys(voteCount)
//
//   var deadPlayer = sortArray[0]
//   var players = this.players;
//   var deadPlayers = this._deadPlayers;
//   var toDie = findNamedPlayer(deadPlayer, players);
//
//   toDie._kill()
//   deadPlayers.push(toDie);
//   var index = players.indexOf(toDie);
//   if (index > -1) {
//     players.splice(index, 1);
// }
// debugger
//
//   this._updateTime();
//
// };

var Game = {};

(function() {

    Game.numPlayers = 0;

    Game.curTurnIndex = 0;
    Game.curTime = "night";
    Game.mode = null;
    Game._roleArray = []
    Game.players = [];

    Game.nkPlayerIndex = -1;

    Game.maxNightActions = 0;
    Game.wolfSuggestList = [];

    Game.addMode = function(modeIndex) {
      Game.mode = wwRules.gameModes[modeIndex];
    }

    Game.listMatchedPlayersByType = function(matchfn) {
        var playerList = [];
        for (var i = 0; i < Game.numPlayers; i++) {
            if (matchfn(Game.players[i])) {
                playerList.push(Game.players[i]);
            }
        }
        return playerList;
    };

    Game.getLivingPlayersList = function() {
        return Game.listMatchedPlayersByType(function(p) { return p.isAlive(); });
    };

    Game.getLivingWolvesList = function() {
        return Game.listMatchedPlayersByType(function(p) { return p.isAlive() && p._role == wwRules.roles.Werewolf; });
    };

    Game.getLivingNonWolvesList = function() {
        return Game.listMatchedPlayersByType(function(p) { return p.isAlive() && p._role != wwRules.roles.Werewolf; });
    };

    Game.getFullEvilTeam = function() {
        return Game.listMatchedPlayersByType(function(p) { return p._role.team == "Werewolves"; });
    };

    Game.getFullGoodTeam = function() {
        return Game.listMatchedPlayersByType(function(p) { return p._role.team == "Village"; });
    };

    Game.clearRoleArray = function() {
      Game._roleArray = [];
    }

    Game._addPlayers = function (array) {
      Game.players = array;
      Game.numPlayers = Game.players.length;
    };
    Game._roleAssignment = function () {
      var wolfCount = Game.mode.roles[0].count;
      for (var i = 0; i < wolfCount; i++){
        this._roleArray.push("werewolf");
      }
      var villagerCount = this.mode.roles[1].count;
      for (var i = 0; i < villagerCount; i++){
        this._roleArray.push("villager");
      }
      var roles = this._roleArray;
      var shuffledRoles = shuffle(roles);

      var assignedRolesArray = this.players.map(function(e, i) {
        return [e, shuffledRoles[i]];
      });
      this._assign(assignedRolesArray);
    };

    Game._assign = function (roleArray) {
      var arrayLength = roleArray.length;
      for (var i = 0; i < arrayLength; i++) {
        if(roleArray[i][1] === "werewolf") {
          roleArray[i][0].assign(wwRules.roles.Werewolf);
        } else if(roleArray[i][1] === "villager") {
          roleArray[i][0].assign(wwRules.roles.Villager);
        }
      }
    };
    Game._updateTime = function () {
      Game.curTime === "day" ? Game.curTime ="night" : Game.curTime = "day"
    };

    Game.isOver = function () {
     return Game.getLivingWolvesList().length === Game.getLivingNonWolvesList().length || Game.getLivingWolvesList().length === 0;
    };
})();
