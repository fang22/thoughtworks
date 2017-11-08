'use strict';
var map_to_three_multiples = function(collections){
  var newarray = collections.map(function (value) {
    return value * 3;
  });
  return newarray
};

module.exports = map_to_three_multiples;
