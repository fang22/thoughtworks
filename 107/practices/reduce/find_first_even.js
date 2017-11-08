'use strict';

function find_first_even(collection) {
  var arr =  collection.filter((index,value)=>{
    if(index%2 ==0){
      return true;
  }
  });
  var first= arr[0]
  return first
}

module.exports = find_first_even;

