var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session')
var session = require('express-session');
var compass = require('node-compass');


// ---------------------------------------
// Requiring models
// ---------------------------------------
var Game = require('./models/game');
var Player = require('./models/player');
var Computer = require('./models/computer');


// ---------------------------------------
// Parsing application
// ---------------------------------------
app.use(bodyParser.json()); // json
app.use(bodyParser.urlencoded({ extended: true })); // x-www-form-urlencoded


// ---------------------------------------
// Cookies and sessions
// ---------------------------------------
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));


// ---------------------------------------
// Sets config for rendering templates
// ---------------------------------------
app.set('view engine', 'nunjucks');
nunjucks.configure('./app/views', {
  autoescape: true,
  watch: true,
  express: app
});


// ---------------------------------------
// Sets config for compass
// ---------------------------------------
if (app.get('env') !== 'test'){
  app.use(
    compass({
      project: './app/public/'
    })
  );

  app.use(express.static('./app/public/'));
}

// ---------------------------------------
// Defines routes
// ---------------------------------------
app.get('/', function(req, res){
  res.render('index');
});

app.post('/start', function(req, res){
  req.session.player1 = new Player(req.body.username);
  req.session.player2 = new Computer();
  res.redirect('/start');
});

app.get('/start', function(req, res){
  res.render('start', {
    player: req.session.player1,
    computer: req.session.player2
  });
});

app.post('/play-again', function(req, res){
  res.redirect('/start');
});

app.get('/choices', function(req, res){
  res.render('choices', {
    player: req.session.player1
  });
});

app.post('/result', function(req, res){
  var player1 = new Player(req.session.player1.name);
      player1.pickWeapon(req.body.weapon);

  var player2 = new Computer(req.session.player2.name);
      player2.pickWeapon();

  var game = new Game(player1, player2);

  res.render('continue', {
    player: player1,
    computer: player2,
    winner: game.playRound()
  });
});


// ---------------------------------------
// Starts a HTTP server
// ---------------------------------------
app.locals.env = app.get('env');

if (app.get('env') !== 'test'){
  var port = process.env.PORT || 4567;
  app.listen(port, function() {
    console.log('App is running on http://localhost:' + port);
  });
}
else {
  app.listen(3000, function() {
    console.log('Testing on port ' + 3000);
  });
}
