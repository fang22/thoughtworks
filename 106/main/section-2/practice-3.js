'use strict';

module.exports = function countSameElements(collection) {
    var arr = [];
    var str = [];
    var ble = 0;
    for(var i = 0;i < collection.length;i++){
        if(collection[i].length == 1){
            console.log(collection[i])


        }//长度为1
        if(collection[i].length == 3){
            collection[i].indexOf(collection[i].charAt(0));
            collection[i].indexOf(collection[i].charAt(2));
            parseInt(collection[i].charAt(2));
            var obj = new Object();
            obj.name = (collection[i].charAt(0));
            obj.summary = parseInt(collection[i].charAt(2));
            if(str[i].name ===obj.name){
                str[i].summary += obj.summary
            }
            else{
                str[i].name = obj.name
                str[i].summary = obj.summary
            }
        }//长度为3
        if(collection[i].length > 3){
            if(collection[i].indexOf(collection[i].charAt(1)) == '['){
                if(collection[i].indexOf(collection[i].charAt(0))!= -1){
                    var obj1 = new Object();
                    collection[i].indexOf(collection[i].charAt(0));
                    obj1.name = collection[i].indexOf(collection[i].charAt(0));
                    var index = [];
                    collection[i].substring(2,collection[i].length -1);
                    parseInt(collection[i].substring(2,collection[i].length -1));
                    obj1.summary = index;
                    if(str[i].name ===obj1.name){
                        str[i].summary += obj1.summary
                    }
                    else{
                        str[i].name = obj1.name
                        str[i].summary = obj1.summary
                    }
                }
            }
        }//长度为>3
        return str
    }
}
