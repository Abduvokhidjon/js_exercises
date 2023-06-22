// Exercise 9:
// Write a function that takes an array of objects, each containing a "name" and "score" property, and returns the object with the highest score.

const { array } = require("yargs");

const input = [
  { name: "Alice", score: 95 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 90 },
  { name: "David", score: 88 },
];

function getHighestScoredObject(array) {
  var highestScore = 0;
  result = null
  if (array.lenght == 0) {
    console.log("array empty")
    return result
  } else {
    for (i = 0; i < array.length; i++) {
      // array[i].score = highestScore
      if (array[i].score > highestScore) {
        highestScore = array[i].score;
        result = array[i];
      }
    }
  }
  return result;
}

highest_result = getHighestScoredObject(input);
console.log(highest_result);

module.exports = getHighestScoredObject;
