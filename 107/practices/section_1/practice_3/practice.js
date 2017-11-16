function collect_same_elements(collection_a, object_b) {
    var arr = [];
    for(var i in collection_a){
        for(var j in object_b.value){
            if(collection_a[i].indexOf(object_b.value[j])==0){
                arr.push(collection_a[i])
            }
        }
    }
    return arr
}

module.exports = collect_same_elements;
