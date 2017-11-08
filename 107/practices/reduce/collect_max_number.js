'use strict';

function collect_max_number(collection) {
  var max=Math.max.apply(null,collection)
  return max
}

module.exports = collect_max_number;
