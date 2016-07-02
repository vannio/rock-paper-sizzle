var p1WinningCombos = ['rock scissors', 'paper rock', 'scissors paper'];

var Game = function(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype = {
  playRound: function(){
    var currentCombo = this.player1.weapon + ' ' + this.player2.weapon;
    return this._decideWinner(currentCombo);
  },

  _decideWinner: function(combination){
    if (combination.split(' ')[0] === combination.split(' ')[1]){
      return null;
    }

    if (p1WinningCombos.indexOf(combination) >= 0) {
      return this.player1;
    }

    return this.player2;
  }
}

module.exports = Game;
