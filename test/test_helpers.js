var chai = require("chai");


global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should();

global.Player = require('./../app/models/player');
