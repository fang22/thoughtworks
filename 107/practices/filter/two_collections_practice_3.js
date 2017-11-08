'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  var arr = collection_a.concat(collection_b).filter(function (value,i,str) {
    return str = collection_a[value]%collection_b[value] != 0
  });
  return arr
}

module.exports = choose_divisible_integer;
