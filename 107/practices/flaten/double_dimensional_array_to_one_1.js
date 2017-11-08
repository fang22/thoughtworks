'use strict';

function double_to_one(collection) {

  var arr = collection.reduce(
    function(a, b) {
      return a.concat(b);
    },
    []
  );
  return arr
}

module.exports = double_to_one;
