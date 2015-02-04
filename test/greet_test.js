'use strict';

var expect = require('chai').expect;
var greeting = require('../lib/greet');

describe('greeting', function(){
  it('should greet ryan', function(){
    expect(greeting.greet('ryan')).to.eql('hello ryan');
  });
});