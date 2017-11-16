'use strict';

function compute_chain_median(collection) {
  var arr = collection.split("->")
    function sortnum(a,b) {
        return a - b
    }
    var str = arr.sort(sortnum)
    for(var i = 0;i <str.length;i++){
    if(str.length%2 ==0){
      var len = str.length;
      parseInt(str[i]);
      var num = (str[len/2-1]/2) + (str[len/2]/2)
    }
    return num
    }
}

module.exports = compute_chain_median;
