// Exercise 5:
// Write a function that takes an array of numbers as input and returns a new array with only the even numbers.

const array = [12, 19, 42, 67, 88];

function filterEvenNumbers(array) {
    const emptyArray = []
    for (i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            emptyArray.push(array[i])
        }
    }
    return emptyArray
}

result = filterEvenNumbers(array)
console.log(result);

module.exports = filterEvenNumbers;