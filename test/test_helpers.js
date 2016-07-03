var chai = require('chai');
var sinon = require('sinon');
var Browser = require('zombie');

var app = require('../app/app.js');

global.expect = chai.expect;
global.spy = sinon.spy;
global.browser = new Browser({ site: 'http://localhost:3000' });

global.Player = require('./../app/models/player');
global.Computer = require('./../app/models/computer');
global.Game = require('./../app/models/game');
