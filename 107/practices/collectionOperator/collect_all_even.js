'use strict';

function collect_all_even(collection) {
  var i = 0;
  collection = collection.reduce(function (i,v) {
    if (i%2 == v%2)
    return collection = v
  })
}

module.exports = collect_all_even;
