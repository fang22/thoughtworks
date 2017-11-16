function collect_same_elements(collection_a, object_b) {
    var arr = [];
    for(var i in collection_a){
        for(var j in object_b.value){
            var a = collection_a[i].key
            var b = object_b.value[j]
            if(a.indexOf(b) == 0){
                arr.push(a)
            }
        }
    }
    return arr
}

module.exports = collect_same_elements;
