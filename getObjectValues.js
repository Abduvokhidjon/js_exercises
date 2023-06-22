// Exercise 4:
// Write a function that takes an object as input and returns an array of all the values in the object.

const inputObject = {
    name: "John",
    age: 30,
    city: "New York",
};

function getObjectValues(object) {
    return Object.values(object)
    
}
result = getObjectValues(inputObject)
console.log(result)

module.exports = getObjectValues;