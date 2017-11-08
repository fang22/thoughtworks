'use strict';

function calculate_elements_sum(collection, element) {
  for(var i = 0,len = collection.length;i <len;i++){
    if(collection[i] == element){
        return i
    }
  }
  return-1
}

module.exports = calculate_elements_sum;

