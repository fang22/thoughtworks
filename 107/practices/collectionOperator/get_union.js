'use strict';

function get_union(collection_a, collection_b) {
  var c = [];
  if(collection_a && collection_b != undefined){
    var c = collection_a.concat(collection_b);
    var d =[];
    for(var i in c){
      if(d.indexOf(c[i])==-1){
        d.push(c[i])
      }
    }
    return d
  }
}

module.exports = get_union;

