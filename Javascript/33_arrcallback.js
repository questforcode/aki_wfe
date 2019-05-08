let numbers = [5, 8, 23, 45, 67, 56, 89]

let squares = numbers.map(item => item*item) //returns an array of the same length but applying the callback function
//map automatically adds 3 parameters: item, i [position], the whole array.
//map is a transformer

let totalSum = 0
for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    totalSum += item
}

let squareSum = 0
squares.forEach(item => squareSum += item) //performs a specified action for each item, and does what you want on each loop. 
//a type of loop. 3 parameters. same as for loop.

let evenNumbers = numbers.filter(item => !(item%2)) //filter returns an array of different length, with the specified conditions.

let limit = 25
let bigNumbers = numbers.filter(item => item >= limit)

let product = numbers.reduce((a, b) => a*b) //this function receives 2 elements. a and b.
let sum2 = numbers.reduce((a,b) => a+b)

console.log(squares)
console.log(totalSum)
console.log(squareSum)
console.log(evenNumbers)
console.log(bigNumbers)
console.log(product)
console.log(sum2)