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
app.use(
  compass({
    cache: false,
    project: './app/public/'
  })
);
app.use(express.static('./app/public/'));



// ---------------------------------------
// Defines routes
// ---------------------------------------
app.get('/', function(req, res){
  if (req.session.player1) {
    var player1 = req.session.player1;
  }

  req.session.player2 = new Computer();
  res.render('index');
});

app.post('/start', function(req, res){
  req.session.player1 = new Player(req.body.username);
  res.redirect('/start');
});

app.get('/start', function(req, res){
  var player1 = req.session.player1;
  var player2 = req.session.player2;
  res.render('start', { player: player1, computer: player2 });
});

app.post('/play-again', function(req, res){
  res.redirect('/start');
});

app.get('/choices', function(req, res){
  var player1 = req.session.player1;
  res.render('choices', { player: player1 });
});

app.post('/result', function(req, res){
  var player1 = new Player(req.session.player1.name);
      player1.pickWeapon(req.body.weapon);

  var player2 = new Computer(req.session.player2.name);
      player2.pickWeapon();

  var game = new Game(player1, player2);
  var winner = game.playRound();

  res.render('continue', { player: player1, computer: player2, winner: winner });
});


// ---------------------------------------
// Starts a HTTP server
// ---------------------------------------
app.listen(4567, function(){
  console.log('Listening on port 4567');
});
