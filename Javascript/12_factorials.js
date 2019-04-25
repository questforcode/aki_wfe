// The result of multiplying a number by all the numbers preceding it.
// A repetitive process. A LOOP.


/* for (let i = 0; //start
    i < 5; //until when it loops.
    i++) { //counter goes up one by one. or as we wish. could say i = i + 5, for example.
    console.log(i + 1)
} */

//Three conditions, separated by ;. What it does is loop something n times.
//as many loops as i want, and i can tell what loop i am on thanks to i (index).

/**
 * Program that calculates a number's factorial value.
 */

/**
 * Function factorial.
 * @param num: number
 * @returns: num
 * 
 * We calculate the product of num and all numbers before it until 1.
 */

function factorial(num) {
    if (num <= 0) {
        //0 and negative numbers would go here
        return 0
    }

    let r = 1
    for (let i = 1; i <= num; i++) {
        r = r * i
    }
    return r
}

num = 5
console.log(factorial(num))

////////Use if and else and a single return. Exercise.

function factorial2(num2) {
    let r2 = 1
    if (num <= 0) {
        r = 0
 } else {
     for (let i2 = 1; i2 <= num2; i2++)
     r2 = r2 * i2
 }
 return r2
}
let num2 = 6
console.log(factorial2(num2))