'use strict';

function grouping_count(collection) {
  var result = collection.reduce(function (numbers, number) {
    if (number in numbers) {
      numbers[number]++;
    }
    else {
      numbers[number] = 1;
    }
    return numbers;
  }, {});
  return result
}
module.exports = grouping_count;
