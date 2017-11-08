'use strict';

function find_last_even(collection) {
  var arr =  collection.filter((index,value)=>{
    if(index%2 ==0){
      return true;
    }
  });
  var last;
  last = arr.pop((arr.length))
  return last
}

module.exports = find_last_even;
