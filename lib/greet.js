'use strict';

var app = exports = module.exports = {};

var greeting = 'hello ';

app.greet = function(name) {
  return greeting + name;
};
