describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player("joe");
  });

  it("intializes with a name ", function() {
    expect(player._name).toEqual("joe");
  });
  it("initializes alive", function() {
    expect(player._dead).toBeFalsy();
  });
  it("initializes roleless", function() {
    expect(player._role).toBe(null);
  });


  it("initializes voteless", function() {
    expect(player._vote).toBe(null);
  });

  it("can check the status of life", function() {
    expect(player.isAlive()).toBeTruthy();
  });
  it("can be killed", function() {
    player._kill();
    expect(player.isAlive()).toBeFalsy();
  });
  it("can vote", function(){
    player.makeVote("Joe");
    expect(player._vote).toEqual("Joe");
  });
});
