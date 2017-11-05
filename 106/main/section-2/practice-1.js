'use strict';

module.exports = function countSameElements(collection) {
   var arr = [];
   for(var i = 0;i < collection.length;){
      var count = 0;
      for(var j = 0;j <collection.length;j++){
         if(collection[i] === collection[j]){
            count++;
         }
      }
      arr.push({
          key:collection[i],
          count:count
      })
       i += count;
   }
   for(var k = 0;k < arr.length;k++){
      // console.log(arr[k])
   }
   return arr
}
