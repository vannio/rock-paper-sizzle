var weapons = require('./../data/weapons');

var Player = function(name){
  this.name = name;
};

Player.prototype = {
  pickWeapon: function(weapon){
    if (weapons.indexOf(weapon) < 0) { throw new Error('Invalid weapon'); }
    this.weapon = weapon;
  }
};

module.exports = Player;
