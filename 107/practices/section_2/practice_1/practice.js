function count_same_elements(collection) {
    var arr =collection.reduce(function (i,v) {
      if(i == v){
          arr.push({key:i,})
      }
    })
}

module.exports = count_same_elements;
