'use strict';

function compare_collections(collection_a, collection_b) {
    for(var i in collection_a){
      if(collection_a[i]!==collection_b[i]) return false;
    }
    for(var j in collection_b){
      if(collection_a[j]!==collection_b[j]) return false;
    }
    return true;
}

module.exports = compare_collections;


