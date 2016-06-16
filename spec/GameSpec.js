describe('Game-Player integration',function(){
  var game;
  var player1;
  var player2;
  var player3;
  var player4;
  beforeEach(function(){
    game = new Game(4);
    player1 = new Player("joe");
    player2 = new Player("harry");
    player3 = new Player("hanna");
    player4 = new Player("elia");
    game._addPlayers([player1, player2, player3, player4]);
  });

    it('initializes with a 4 players', function(){
      expect(game._playerNumber).toEqual(4);
    });
    it('starts at night', function(){
      expect(game._time).toEqual("night");
    });
    it('starts with no werewolves',function(){
      expect(game._ingameWerewolfCount).toBe(null);
    });
    it('starts with no villagers',function(){
      expect(game._ingameVillagerCount).toBe(null);
    });
    xit('randomly assigns roles to all the players', function(){
      spyOn(Math, 'random').and.returnValue(0.1);

    });

    it('calculates how many wolves are in the game', function(){
      game._howManyWolves(4);
      expect(game._wolfCount).toEqual(1);
    });
    it('calculates how many villagers are in the game', function(){
      game._howManyWolves(4);
      game._howManyVillagers();
      expect(game._villagerCount).toEqual(3);
    });
    it('randomly assigns roles', function(){
      spyOn(Math, 'random').and.returnValue(1);
      game._assignRoles();
      expect(game._players[1]._role).toEqual("werewolf");
    });
    it('updates the time', function(){
      game._updateTime();
      expect(game._time).toEqual("day");
    });
    it('tells time of day', function(){
      expect(game._isDay()).toEqual(false);
    });

    it('can count the roles by head', function(){
      game._assignRoles();
      game._headCount();
      expect(game._ingameWerewolfCount).toEqual(1);
      expect(game._ingameVillagerCount).toEqual(3);
    });
    it('can count the roles by head after player is killed', function(){
      spyOn(Math, 'random').and.returnValue(1);
      game._assignRoles();
      game._players[2]._kill();
      game._headCount();
      expect(game._ingameWerewolfCount).toEqual(1);
      expect(game._ingameVillagerCount).toEqual(2);
    });
    it('knows when the game is over (villager win)', function(){
      spyOn(Math, 'random').and.returnValue(1);
      game._assignRoles();
      game._players[2]._kill();
      expect(game.isOver()).toBeTruthy();
    });
    it('can tell the players the time', function(){
      expect(game._outputTime()).toEqual("It's night time!");
    });
    it('tests dayVote', function() {
      spyOn(Math, 'random').and.returnValue(1);
      game1 = new Game(4);
      player11 = new Player("joe");
      player21 = new Player("harry");
      player31 = new Player("hanna");
      player41 = new Player("elia");
      player11.makeVote("joe")
      player21.makeVote("harry")
      player31.makeVote("hanna")
      player41.makeVote("joe")
      game1._addPlayers([player11, player21, player31, player41]);
      game1._assignRoles();
      game1._dayVote()
      expect(game1._players[0].isAlive()).toEqual(false);
    });

});
