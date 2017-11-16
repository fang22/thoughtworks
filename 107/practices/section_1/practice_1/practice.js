function collect_same_elements(collection_a, collection_b) {
    var arr =[];
    for(var i in collection_a){
        for(var j in collection_b){
            if(collection_a[i].indexOf(collection_b[j])==0) {
                arr.push(collection_a[i])
            }
        }
    }
    return arr
}

module.exports = collect_same_elements;
