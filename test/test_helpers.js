var chai = require('chai');
var sinon = require('sinon');

global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should();
global.spy = sinon.spy;
global.mock = sinon.mock;
global.stub = sinon.stub;

global.Player = require('./../app/models/player');
global.Computer = require('./../app/models/computer');
global.Game = require('./../app/models/game');
