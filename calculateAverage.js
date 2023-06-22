// Exercise 7:
// Write a function that takes an array of numbers as input and returns the average of all the numbers.

const numbers = [92, 77, 93, 63, 18];

function calculateAverage(array) {
  sumOfNumbers = 0;
  averagenNumber = 0;
  if (array.length == 0) {
    averagenNumber = 0;
  } else {
    for (i = 0; i < array.length; i++) {
      sumOfNumbers += array[i];
    }
    averagenNumber = sumOfNumbers / array.length;
  }
  return averagenNumber;
}

result = calculateAverage(numbers);
console.log(result);
module.exports = calculateAverage;
