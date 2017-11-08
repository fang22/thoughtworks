'use strict';
var number_map_to_word_over_26 = function(collection){
  var num;
  if(num > 0) {
    if(num >= 1 && num <= 26) {
      collection = String.fromCharCode(64 + parseInt(num));
      } else {
      while(num > 26) {
        var count = parseInt(num/26);
        var remainder = num%26;
        if(remainder == 0) {
          remainder = 26;
          count--;
          collection = String.fromCharCode(64 + parseInt(remainder)) + stringName;
          } else {
          collection = String.fromCharCode(64 + parseInt(remainder)) + stringName;
          }
          num = count;
        }
        collection = String.fromCharCode(64 + parseInt(num)) + stringName;
      }
      }
};

module.exports = number_map_to_word_over_26;
