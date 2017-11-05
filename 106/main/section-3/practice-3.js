'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var collectionC = [];
    for(var i = 0;i < collectionA.length;){
        var count = 0;
        for(var j = 0;j <collectionA.length;j++){
            if(collectionA[i] === collectionA[j]){
                count++;
            }
        }
        collectionC.push({
            key:collectionA[i],
            count:count
        })
        i += count;
    }
    for(var k = 0;k < collectionC.length;k++){
         //console.log(collectionC[k])
    }
    //return collectionC;
    //console.log(collectionC)


    for(var i = 0;i < collectionC.length;i++){
        for(var j = 0;j <objectB.value.length;j++){
            if(collectionC[i].key === objectB.value[j]){
                var collectionD = collectionC[i].count;
                //console.log(collectionD);
                collectionC[i].count = collectionD - parseInt(collectionD/3)
                //parseInt() 函数可解析一个字符串，并返回一个整数。
            }
        }
    }
    //console.log(collectionC)
    return collectionC
}
