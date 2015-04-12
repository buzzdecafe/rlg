var expect = require('chai').expect;
var fresh = require('../src/fresh');
var smap = require('../src/smap');
var succeed = require('../src/succeed');
var unify = require('../src/unify');

describe('fresh', function() {
  function q5(q) { return unify(q, 5); }
  it('returns a new goal function', function() {
    expect(fresh(q5)).to.be.a('function');
  });

  it('creates a new logic variable in the returned state', function() {
    expect(fresh(q5)(smap({}))).to.eql(succeed({'_.0': 5}));
  });
});
