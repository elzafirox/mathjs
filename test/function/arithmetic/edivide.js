// test edivide (element-wise divide)
var assert = require('assert');
    math = require('../../../math.js'),
    approx = require('../../../tools/approx.js'),
    edivide = math.edivide,
    complex = math.complex;


// parser
/* TODO: edivide for parser
assert.equal(math.eval('4 ./ 2'), 2);
assert.equal(math.eval('8 ./ 2 / 2'), 2);
 */
assert.equal(math.eval('edivide(4, 2)'), 2);

// number
assert.equal(edivide(4, 2), 2);
assert.equal(edivide(-4, 2), -2);
assert.equal(edivide(4, -2), -2);
assert.equal(edivide(-4, -2), 2);
assert.equal(edivide(4, 0), Infinity);
assert.equal(edivide(0, -5), 0);
assert.ok(isNaN(edivide(0, 0)));

// wrong arguments
assert.throws(function () {edivide(2,3,4); });
assert.throws(function () {edivide(2); });

// complex
assert.deepEqual(edivide(complex('2+3i'), 2), complex('1+1.5i'));
assert.deepEqual(edivide(complex('2+3i'), complex('4i')), complex('0.75 - 0.5i'));
assert.deepEqual(edivide(complex('2i'), complex('4i')), complex('0.5'));
assert.deepEqual(edivide(4, complex('1+2i')), complex('0.8 - 1.6i'));

// unit
assert.equal(edivide(math.unit('5 m'), 10).toString(), '500 mm');
assert.throws(function () {edivide(10, math.unit('5 m')).toString()});

// matrix, array, range
assert.deepEqual(edivide(math.range(2,2,6), 2), [1,2,3]);
a  = math.matrix([[1,2],[3,4]]);
assert.deepEqual(edivide(a, 2), math.matrix([[0.5,1],[1.5,2]]));
assert.deepEqual(edivide(a.valueOf(), 2), [[0.5,1],[1.5,2]]);
assert.deepEqual(edivide([], 2), []);
assert.deepEqual(edivide([], 2), []);
approx.deepEqual(math.format(edivide(1, [
    [ 1, 4,  7],
    [ 3, 0,  5],
    [-1, 9, 11]
])), math.format([
    [ 1, 0.25, 1/7],
    [ 1/3,  Infinity,  0.2],
    [-1,  1/9,  1/11]
]));
a = math.matrix([[1,2],[3,4]]);
b = math.matrix([[5,6],[7,8]]);
assert.deepEqual(edivide(a, b), math.matrix([[1/5, 2/6], [3/7,4/8]]));
assert.throws(function () {edivide(a, [[1]])});
