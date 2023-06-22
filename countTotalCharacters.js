// Exercise 8:
// Write a function that takes an array of strings as input and returns the total number of characters in all the strings combined.

arrayOfStrings = ["Abduvokhidjon", "Abdujamolov", "Abduhalilovich"];

function countTotalCharacters(array) {
    totalCharacters = 0
    for (i = 0; i < array.length; i++) {
      var separate = array[i].split("");
      var numberOfLetters = separate.length;
      totalCharacters += numberOfLetters
    }
    return totalCharacters
  }
  
  result = countTotalCharacters(arrayOfStrings);
  console.log(result);

  module.exports = countTotalCharacters;