'use strict';

var greeting = require('./lib/greet.js');

console.log(greeting.greet('ryan'));

var myArg = process.argv[2];

console.log(greeting.greet(myArg));
