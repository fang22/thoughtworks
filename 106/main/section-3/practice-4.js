'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var arr = [];
    var collectionC = [];
    var j = 0;

    for(var i = 0;i< collectionA.length;i++) {
        if(collectionA[i].length==1){
            if(i==collectionA.indexOf(collectionA[i])){
                collectionC[j]= { key:collectionA[i], count:1};
                arr.push(collectionA[i]);
                j++;
            }
            else{
                collectionC[arr.indexOf(collectionA[i])].count++;

            }

        }
        if(collectionA[i].length==3){

            if(arr.indexOf(collectionA[i].charAt(0)) !== -1){
                var a = collectionA[i].charAt(0);
                var b = parseInt(collectionA[i].charAt(2));
                collectionC[j]= {key:a,count:b}
            }
            else{
                collectionC[j] = {
                    key:collectionA[i].charAt(0),
                    count:parseInt(collectionA[i].charAt(2))
                }
            }
        }
    }
    //复制前面的

    for(var i = 0;i < collectionC.length;i++){
        for(var j = 0;j <objectB.value.length;j++){
            if(collectionC[i].key === objectB.value[j]){
                var collectionD = collectionC[i].count;
                collectionC[i].count = collectionD - parseInt(collectionD/3)
            }
        }
    }
    //console.log(collectionC)
    return collectionC
}
