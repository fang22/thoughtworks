'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  var arr = collection_a.concat(collection_b).filter(function(v, i, str) {
    return str.indexOf(v) == str.lastIndexOf(v);
  });

  return arr
}

module.exports = choose_no_common_elements;
