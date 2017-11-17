'use strict';

function collect_all_even(collection) {
    var arr = [];
    collection.filter(function (value) {
        return arr = value % 2 === 0
    })
}
module.exports = collect_all_even;
