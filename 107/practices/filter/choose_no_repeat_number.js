'use strict';

function choose_no_repeat_number(collection) {

  if(collection != undefined){
    var arr = [];
    for(var i in collection){
      if(arr.indexOf(collection[i]) == 0){
        arr.push(collection[i])
      }
    }
    return arr
  }
}

module.exports = choose_no_repeat_number;
