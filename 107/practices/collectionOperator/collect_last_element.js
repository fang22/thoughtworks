'use strict';

function collect_last_element(collection) {
  if(collection != undefined){
    var a = collection.pop()
  }
  return a
}

module.exports = collect_last_element;
