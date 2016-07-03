describe('Entering a name', function(){
  before(function(done){
    browser.visit('/', done);
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
