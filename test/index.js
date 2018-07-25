'use strict';

var should = require('chai').should();
var bibecore = require('../');

describe('#versionGuard', function() {
  it('global._bibecore should be defined', function() {
    should.equal(global._bibecore, bibecore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      bibecore.versionGuard('version');
    }).should.throw('More than one instance of bibecore');
  });
});
