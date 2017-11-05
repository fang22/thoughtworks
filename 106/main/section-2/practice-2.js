'use strict';

module.exports = function countSameElements(collection) {
    var arr = [];
    var str = [];
    var ble = 0;

    for(var i = 0;i< collection.length;i++) {
        if(collection[i].length==1){//找出collection[i]的长度等于1的
            if(i==collection.indexOf(collection[i])){
                str[ble]= { key:collection[i], count:1};
                arr.push(collection[i]);
                ble++;
            }
            else{//如果不是第一次出现
                str[arr.indexOf(collection[i])].count++;
                //console.log(collection[i])
                }
                //console.log(str)//将长度1的字符放在了数组str中
        }
        if(collection[i].length==3){//找到d-5
            //console.log(collection[i])
            if(arr.indexOf(collection[i].charAt(0)) !== -1){
                var k = arr.indexOf(collection[i].charAt(0));
                //找到d。charAt()返回collection[i]下标为0的字符(d)
                var c = parseInt(collection[i].charAt(2));
                //找到5。charAt()返回collection[i]下标为2的字符(5);paeseInt()解析charAt()返回的字符，返回整数5
                str[k].count = arr[k] + c;
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
