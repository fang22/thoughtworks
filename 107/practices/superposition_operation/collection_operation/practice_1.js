'use strict';

function hybrid_operation(collection) {

  for(var i = 0;i<collection.length;i++) {
    var num = [];
    num.push(collection[i])
    var arr = num.map(function (sum) {
      return (sum*3) + 2
    })
  }
  return arr
}

module.exports = hybrid_operation;

