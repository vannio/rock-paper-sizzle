describe('Entering a name', function(){
  before(function(next){
    browser.visit('/', next);
  });

  it('should print name when form is submitted', function(done) {
    browser
      .fill('username', 'Van')
      .pressButton('Start Game', function(){
        expect(browser.text('body')).to.contain('Van');
        done();
      });
  });
});
