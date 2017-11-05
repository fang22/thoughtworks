'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var collectionC = [];
  for(var i = 0;i < collectionA.length;i++){
      for(var j = 0;j <collectionA[i]['key'].length;j++){
          for(var k = 0;k < objectB.value.length;k++){
              if(collectionA[i]['key'] === objectB.value[k]){
                  collectionC.push(collectionA[i]['key'])
              }
          }
      }
  }
  return collectionC;
}
