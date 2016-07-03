var weapons = require('./../data/weapons');
var names = ["Hugh Jass", "I.P. Freely", "Amanda Hugginkiss"];

var Computer = function(name){
  this.name = name || this._sample(names);
}

Computer.prototype = {
  pickWeapon: function(){
    this.weapon = this._sample(weapons);
  },

  _sample: function(array){
    return array[Math.floor(Math.random() * array.length)];
  }
}

module.exports = Computer;
