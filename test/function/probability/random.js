// test random
var assert = require('assert');
var math = require('../../../math.js');

var r1 = math.random();
assert.ok(r1 >= 0 && r1 <= 1);

var r2 = math.random();
assert.ok(r2 >= 0 && r2 <= 1);

var r3 = math.random();
assert.ok(r3 >= 0 && r3 <= 1);
