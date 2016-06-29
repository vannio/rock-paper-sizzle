var express = require('express');
var app = express();
var nunjucks = require('nunjucks');

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
  response.render('index', { title: 'Testing' })
});


// ---------------------------------------
// Starts a HTTP server
// ---------------------------------------
app.listen(4567, function(){
  console.log('Listening on port 4567');
});
