'use strict';

function amount_even(collection) {

  var sum = 0;
  for(var i = 0;i <collection.length;i++){
    if(collection[i]%2 ==0){
      var arr=[];
      arr.push(collection[i])
      for(var j = 0;j < arr.length;j++){
        sum += arr[i]
      }
    }
  }
  return sum
}

module.exports = amount_even;
