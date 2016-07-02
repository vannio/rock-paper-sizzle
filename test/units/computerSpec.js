var weapons = require('./../../app/data/weapons');

describe('Computer', function(){
  var computer = new Computer();

  it('has a name', function(){
    expect(computer.name).to.exist;
  });

  describe('#pickWeapon', function(){
    it('should only be rock, paper or scissors', function(){
      computer.pickWeapon();
      expect(weapons).to.include(computer.weapon);
    });
  });
});
