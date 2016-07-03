describe('Picking a weapon', function(){
  before(function(done){
    browser.visit('/', function(){
      browser
        .fill('username', 'Van')
        .pressButton('Start Game', done);
    });
  });

  it('Player 1 can pick rock', function(done){
    browser
      .choose('Rock')
      .pressButton('Submit', function(){
        expect(browser.text('body')).to.contain('Van chose rock');
        done();
      });
  });
});
