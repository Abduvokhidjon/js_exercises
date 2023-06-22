// Exercise 10:
// Write a function that takes an array of strings as input and returns a Map where each string is the key and its length is the value.
arrayOfStrings = ["Abduvokhidjon", "Abdujamolov", "Abduhalilovich"];

function getStringLengthMap(inputArray) {
    const lengthMap = new Map();
  
    for (let i = 0; i < inputArray.length; i++) {
      const currentString = inputArray[i];
      const stringLength = currentString.length;
  
      lengthMap.set(currentString, stringLength);
    }
  
    return lengthMap;
  }

result = getStringLengthMap(arrayOfStrings);
console.log(result)
module.export = getStringLengthMap;