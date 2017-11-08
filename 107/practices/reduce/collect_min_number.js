'use strict';

function collect_min_number(collection) {
  var min=Math.min.apply(null,collection);
  return min
}

module.exports = collect_min_number;

