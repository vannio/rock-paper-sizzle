var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


// ---------------------------------------
// Parsing application
// ---------------------------------------
app.use(bodyParser.json()); // json
app.use(bodyParser.urlencoded({ extended: true })); // x-www-form-urlencoded
app.use(cookieParser('this_is_my_secret'));


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
// Defines routes
// ---------------------------------------
app.get('/', function(request, response){
  response.render('index', { title: request.cookies.name })
});

app.post('/name', function(request, response){
  response.cookie('name', request.body.name );
  response.redirect('/');
});


// ---------------------------------------
// Starts a HTTP server
// ---------------------------------------
app.listen(4567, function(){
  console.log('Listening on port 4567');
});
