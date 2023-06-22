// Exercise 3:
// Write a function that takes an object as input and returns an array of all the keys in the object.
const inputObject = {
    name: "John",
    age: 30,
    city: "New York",
};

function getKeys(object) {
    return Object.keys(object)
    
}
result = getKeys(inputObject)
console.log(result)
module.exports = getKeys;
