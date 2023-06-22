// Exercise 2:
// Write a function that takes an array of strings as input and returns a new array with the length of each string.

arrayOfStrings = ["Abduvokhidjon", "Abdujamolov", "Abduhalilovich"];

function getStringLengths(array) {
  arrayOfnumbers = [];
  for (i = 0; i < array.length; i++) {
    var separate = array[i].split("");
    var numberOfLetters = separate.length;
    arrayOfnumbers.push(numberOfLetters);
  }
  return arrayOfnumbers;
}

result = getStringLengths(arrayOfStrings);
console.log(result);

module.exports = getStringLengths;
