// Write a function that takes an array of numbers as input and returns the sum of all the numbers.

function sumNumbers(array) {
  var sumOfAllNumbers = 0;
  for (i = 0; i < array.length; i++) {
    sumOfAllNumbers += array[i];
  }
  return sumOfAllNumbers;
}
var array = [4, 6, 7, 8, 9];
result = sumNumbers(array);
console.log(result);

module.exports = sumNumbers;
