'use strict';

function get_intersection(collection_a, collection_b) {
  var arr = [];
  for(var i = 0; i <collection_b.length;i++){
    for(var j = 0; j< collection_a.length;j++){
      if(collection_b[i] === collection_a[j]) {
        arr.push(collection_b[i])
        //要注意拿谁和谁比较，害死人
      }
    }
  }
  return arr
}

module.exports = get_intersection;
