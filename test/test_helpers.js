var chai = require('chai');
var sinon = require('sinon');
var webdriverio = require('webdriverio');
var Browser = require('zombie');

var app = require('../app/app.js');


global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should();
global.spy = sinon.spy;
global.mock = sinon.mock;
global.stub = sinon.stub;
global.browser = new Browser({ site: 'http://localhost:4567' });

global.Player = require('./../app/models/player');
global.Computer = require('./../app/models/computer');
global.Game = require('./../app/models/game');
