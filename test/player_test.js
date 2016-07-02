describe('Player', function(){
  var player = new Player("Player 1");

  it('has a name', function(){
    expect(player.name).to.exist;
  });

  describe('#pickWeapon', function(){
    it('can pick an existing weapon', function(){
      player.pickWeapon("scissors")
      expect(player.currentWeapon).to.equal("scissors");
    });

    it('cannot pick a non-existent weapon', function(){
      function pickWeapon() { player.pickWeapon("shoe"); };
      expect(pickWeapon).to.throw('Invalid weapon');
    });
  });
});
