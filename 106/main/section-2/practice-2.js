'use strict';

module.exports = function countSameElements(collection) {
    var arr = [];
    var str = [];
    var ble = 0;

    for(var i = 0;i< collection.length;i++) {
        if(collection[i].length==1){
            if(i==collection.indexOf(collection[i])){
                str[ble]= { key:collection[i], count:1};
                arr.push(collection[i]);
                ble++;
            }
            else{
                str[arr.indexOf(collection[i])].count++;
                
                }
               
        }
        if(collection[i].length==3){//找到d-5
            //console.log(collection[i])
            if(arr.indexOf(collection[i].charAt(0)) !== -1){
                var a = collection[i].charAt(0);
                //找到d。charAt()返回collection[i]下标为0的字符(d)
                var b = parseInt(collection[i].charAt(2));
                //找到5。charAt()返回collection[i]下标为2的字符(5);paeseInt()解析charAt()返回的字符，返回整数5
                str[ble]= {key:a,count:b}
            }
            else{
                str[ble] = {
                    key:collection[i].charAt(0),
                    count:parseInt(collection[i].charAt(2))
                }
                //console.log(str[ble])
            }
        }
    }
    return str;
}    
