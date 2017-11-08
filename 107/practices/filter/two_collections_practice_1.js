'use strict';

function choose_common_elements(collection_a, collection_b) {

  var resultArr = collection_b.concat(collection_a).filter(function (item, index, self) {
    return self.indexOf(item) != index;
  });
  return resultArr
}

module.exports = choose_common_elements;
