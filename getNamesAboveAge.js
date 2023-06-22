// Exercise 6:
// Write a function that takes an array of objects, each containing a "name" and "age" property, and returns an array of names of people above a certain age.
const input = [
  { name: "John", age: 25 },
  { name: "Alice", age: 28 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 32 },
];
const ageLimit = 30
function getNamesAboveAge(array, age) {
  emptyArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i].age >= age) {
      emptyArray.push(array[i].name);
    }
  }
  return emptyArray;
}

result = getNamesAboveAge(input, ageLimit);
console.log(result);
module.exports = getNamesAboveAge;