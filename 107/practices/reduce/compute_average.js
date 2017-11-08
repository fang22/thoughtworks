'use strict';

function compute_average(collection) {
  var sum = collection.reduce(function (a,b) {
    return a + b
  });
  var num = sum / collection.length;
  return num
}

module.exports = compute_average;

