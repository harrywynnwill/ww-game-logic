describe('Game-Player integration',function(){
  var game;
  var player1;
  var player2;
  var player3;
  var player4;
  beforeEach(function(){
    Game.addMode(0)
    player1 = new Player("joe");
    player2 = new Player("harry");
    player3 = new Player("hanna");
    player4 = new Player("elia");
    Game._addPlayers([player1, player2, player3, player4]);
  });

    it('initializes with a 4 players', function(){
      expect(Game.getLivingPlayersList().length).toEqual(4);
    });
    it('starts at night', function(){
      expect(Game.curTime).toEqual("night");
    });
    xit('randomly assigns roles to all the players', function(){
      spyOn(Math, 'random').and.returnValue(0.1);

    });

    it('calculates how many wolves are in the game', function(){
      Game._roleAssignment();
      expect(Game.getLivingWolvesList().length).toEqual(1);
      Game.clearRoleArray()
    });
    it('calculates how many villagers are in the game', function(){
      Game._roleAssignment();
      expect(Game.getLivingNonWolvesList().length).toEqual(3);
      Game.clearRoleArray()
    });
    it('randomly assigns roles', function(){
      spyOn(Math, 'random').and.returnValue(1);
      Game._roleAssignment();
      expect(Game.players[1]._role).toEqual(wwRules.roles.Werewolf);
      Game.clearRoleArray()
    });
    it('updates the time', function(){
      Game._updateTime();
      expect(Game.curTime).toEqual("day");
    });

    it('can count the roles by head', function(){
      Game._roleAssignment()
      expect(Game.getLivingPlayersList().length).toEqual(4);
      expect(Game.getLivingWolvesList().length).toEqual(1);
      expect(Game.getLivingNonWolvesList().length).toEqual(3);
      Game.clearRoleArray();
    });
    it('can count the roles by head after player is killed', function(){
      spyOn(Math, 'random').and.returnValue(1);
      Game._roleAssignment();
      Game.players[2]._kill();
      expect(Game.getLivingWolvesList().length).toEqual(1);
      expect(Game.getLivingNonWolvesList().length).toEqual(2);
      Game.clearRoleArray();
    });
    it('knows when the game is over (villager win)', function(){
      spyOn(Math, 'random').and.returnValue(1);
      Game._roleAssignment();
      Game.players[1]._kill();
      expect(Game.isOver()).toBeTruthy();
    });
});
