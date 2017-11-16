'use strict';

module.exports = function countSameElements(collection) {
    var arr = [];
    var str = [];
    var ble = 0;

    for(var i = 0;i< collection.length;i++)
    {
        if(collection[i].length==1)
        {
            if(i==collection.indexOf(collection[i])) {
                str[ble]= { name:collection[i], summary:1};
                arr.push(collection[i]);
                ble++;
            } else
                {
                str[arr.indexOf(collection[i])].summary++;

            }
        }

        // console.log(str)
        //     [ { name: 'a', summary: 3 },
        //     { name: 'e', summary: 7 },
        //     { name: 'h', summary: 8 },
        //     { name: 't', summary: 7 },
        //     { name: 'f', summary: 9 },
        //     { name: 'g', summary: 7 },
        //     { name: 'b', summary: 6 } ]
        //长度为1

        if(collection[i].length==3)
        {
            var a = [];
            var b = [];
            var r = [];
            var j = 0;
            if (collection[i].indexOf(collection[i].charAt(0)) != -1)
            {
                a = collection[i].charAt(0);
                b = parseInt(collection[i].charAt(2));
                r[j] = {
                    name:a,
                    summary:b
                }
            }else
            {
                r[j] = {
                    name:a,
                    count:b
                }
            }
            //console.log(r)//[ { name: 't', summary: 2 } ]
            // [ { name: 'c', summary: 8 } ]
            // [ { name: 'd', summary: 5 } ]

        }
        //长度为3
        if(collection[i].length > 3){
            var obj = new Object();
            if(collection[i].indexOf(collection[i].charAt(0)) != -1){
                if(collection[i].indexOf(collection[i].charAt(1)) == '['){
                    var l = collection[i].charAt(0);
                    var k = parseInt(collection[i].substring(2,collection[i].length -1));
                    obj.name = l;
                    obj.summary = k;
                }
                //console.log(obj)
            }
        }
        //长度为>3
    }
    return str
}
