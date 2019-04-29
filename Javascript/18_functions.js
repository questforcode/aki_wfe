/*Declared Function. Gets hoisted. Will get hoisted at the start in the first read.*/
/* console.log(sum(4, 6))
console.log(rest(5, 9)) */

function sum (x = 0, y = 0) {
    return x + y
}


/*Assigned Function
For Javascript, it is simply a data of the object type.*/

let obj = {}
let rest = function(x = 0, y = 0) { //Anonymous function. doesn't get hoisted.
    return x - y
}

console.log(sum(4, 6))
console.log(rest(5, 9))



/**
 * In ES6 there's a new type of function called arrow (=>) function. 
 */

/*  let multiply = function ( x = 1, y = 1) {
     return x * y
 } */

 // let multiply = (x = 1, y = 1) => {return x * y} same as
 let multiply = (x = 1, y = 1) => y * y

 let square = x => x * x //just because theres 1 parameter. very condensed function.

 console.log(multiply(4,7))
 console.log(square(5))