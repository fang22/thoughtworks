function collect_same_elements(collection_a, collection_b) {
    var arr = [];
  for(var i in collection_a){
      for(var j in collection_b[0]){
          if(collection_a[i].indexOf(collection_b[0][j]) == 0){
              arr.push(collection_a[i])
          }
      }
  }
  return arr
}

module.exports = collect_same_elements;
