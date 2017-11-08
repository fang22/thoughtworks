'use strict';

function even_to_letter(collection) {

  for(var i = 0, len = collection.length;i< len;i++){
    if(collection[i]%2 ==0){
      var arr = [];
      arr.push(collection[i]);
      for(var j = 0;j < arr.length;j++){
        var str = arr.fromCharCode(26)
      }
    }
  }
}

module.exports = even_to_letter;
