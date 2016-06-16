function Player(name) {
  this._name = name;
  this._role = null;
  this._dead = false;
  this._vote = null;
}

Player.prototype.assign = function (role) {
  this._role = role;
};
Player.prototype.isAlive = function () {
  return !(this._dead);
};
Player.prototype.makeVote = function (name) {
  this._vote = name;
};

Player.prototype._kill = function () {
  this._dead = true;
};
