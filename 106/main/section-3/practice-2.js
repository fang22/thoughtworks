'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    for(var i = 0;i < collectionA.length;i++){
        for(var j = 0;j <objectB.value.length;j++){
            if(collectionA[i].key === objectB.value[j]){
              var collectionC = collectionA[i].count
                //console.log(collectionC)//3795
                collectionA[i].count = collectionC - parseInt(collectionC/3)
                //parseInt() 函数可解析一个字符串，并返回一个整数。
            }
        }
    }
    //console.log(collectionA)//和答案一样
    return collectionA
}
