//We have access to arithmetic operations, as expected. + - * / %.

let x = 24
let name = 'Haurchefant'
let z = '2'

let division = x / z
//Casting is the intelligence programming languages have to convert types temporarily for operations.
//Javascript can always turn a string into a number. 
console.log(typeof z)
console.log(division)

division = x / name
//Javascript has a concept named NaN (not a number). Any string in a division turns into NaN. 
//Every operation with a NaN turns into NaN.
//Equivalent to the matematical concept of indetermination.
console.log(division)

/* 0 / n = 0
n / 0 = infinite
0 / 0 = NaN */

console.log (0 / 0)
console.log (1 / 0)

//To avoid non determined results, data must be validated. isNaN (a boolean). Look Below.
function divide(x, y) {

    if (isNaN(x) || isNaN(y)) {
        console.log('Invalid Operators.')
        return
    }
    console.log('The result is',  x / y, 'euros.')
}

divide(x, name)

console.log(x + z) 
//+ is an overcharged operator. it has three meanings. + (positive), 
//+ (sum), + (concatenation of strings > sums. casting from number to string.)
//to avoid this, we must force the string to cast. 

//first way. parseInt also works.
console.log(parseFloat(x) + parseFloat(z))

//second way. same but use casting function instead of parse.
console.log(Number(x) + Number(z))

//third way. atuomatically converts things to numbers. 
console.log(+x + +z)

console.log(typeof z) //it always remains a string.