describe('Game', function(){
  var player1 = spy();
  var player2 = spy();
  var game = new Game(player1, player2);

  describe('#playRound', function(){
    describe('Player 1 chooses rock', function(){
      beforeEach(function(){
        player1.weapon = "rock";
      });

      it('should tie when player 2 chooses rock', function(){
        player2.weapon = "rock";
        expect(game.playRound()).to.be.null;
      });

      it('should lose when player 2 chooses paper', function(){
        player2.weapon = "paper";
        expect(game.playRound()).to.equal(player2);
      });

      it('should win when player 2 chooses scissors', function(){
        player2.weapon = "scissors";
        expect(game.playRound()).to.equal(player1);
      });

    });

    describe('Player 1 chooses paper', function(){
      beforeEach(function(){
        player1.weapon = "paper";
      });

      it('should win when player 2 chooses rock', function(){
        player2.weapon = "rock";
        expect(game.playRound()).to.equal(player1);
      });

      it('should tie when player 2 chooses paper', function(){
        player2.weapon = "paper";
        expect(game.playRound()).to.be.null;
      });

      it('should lose when player 2 chooses scissors', function(){
        player2.weapon = "scissors";
        expect(game.playRound()).to.equal(player2);
      });

    });

    describe('Player 1 chooses scissors', function(){
      beforeEach(function(){
        player1.weapon = "scissors";
      });

      it('should lose when player 2 chooses rock', function(){
        player2.weapon = "rock";
        expect(game.playRound()).to.equal(player2);
      });

      it('should win when player 2 chooses paper', function(){
        player2.weapon = "paper";
        expect(game.playRound()).to.equal(player1);
      });

      it('should tie when player 2 chooses scissors', function(){
        player2.weapon = "scissors";
        expect(game.playRound()).to.be.null;
      });

    });

  });

});
