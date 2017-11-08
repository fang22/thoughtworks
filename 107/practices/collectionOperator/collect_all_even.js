'use strict';

function collect_all_even(collection) {
  var arr = [];
  for(var i = 0;i<collection.length;i++){
    if(collection[i]%2 ==0){
      arr.push(collection[i])
    }
  }
  return arr
}

module.exports = collect_all_even;
