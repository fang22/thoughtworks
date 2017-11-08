'use strict';
var map_to_four_multiples_add_one = function(collection){
  var newarray = collection.map(function (value) {
    return value * 4 + 1;
  });
  return newarray
};

module.exports = map_to_four_multiples_add_one;
