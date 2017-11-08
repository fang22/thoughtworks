'use strict';

function calculate_elements_sum(collection) {
  var sum = collection.reduce(function (a,b) {
    return a + b
  });
  return sum
}

module.exports = calculate_elements_sum;

