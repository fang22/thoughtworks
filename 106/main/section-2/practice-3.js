'use strict';

module.exports = function countSameElements(collection) {
    var arr = [];
    var str = [];
    var count = 0;
    var a = collection[0];
    for (var i = 0;i < collection.length;i ++) {
       if (a === collection[i]) {
           count++
       }
       if (a != collection[i]) {
           arr.push({
               key: a,
               count: count
           });
           a = collection[i];
           count = 1
       }
       if (collection[i].length > 2) {
           a = collection[i].slice(0,1);
           count = parseInt(collection[i].slice(2));
           arr.push({
               key: a,
               count: count
           });
           count = 0;
       }
    }
    var name = arr[0].key;
    var summary = arr[0].count;
    for (var j = 1;j < arr.length;j ++) {
        if (name === arr[j].key) {
            summary += arr[j].count;
        }
        if (name != arr[j].key) {
            str.push({
                name: name,
                summary: summary
            });
            name = arr[j].key;
            summary = arr[j].count;
        }
    }
    str.push({
        name: arr[arr.length - 1].key,
        summary: arr[arr.length - 1].count
    })
    return str
}
//这个我借鉴的别人的，我理解不了。
