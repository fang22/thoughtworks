'use strict';

function double_to_one(collection) {

  var arr = collection.reduce(
    function(a, b) {
      return a.concat(b);
    },
    []
  );
  var str = [];
  for(var i  in arr){
    if(arr.indexOf(arr[i]) == 0){
      console.log(arr)
      str.push(arr[i])
    }
  }
  return arr
}

module.exports = double_to_one;
