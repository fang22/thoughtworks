'use strict';
function map_to_even(collection){
  var newarray = collection.map(function (value) {
    return value * 2;
  });
  return newarray
}
module.exports = map_to_even;
