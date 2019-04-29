/**
 * Calculating factorial with recursion. All loops can be substituted by recursion.
 */


/**
 * Function factorial with recursion. Functions that call themselves (for loop substitution.)
 * @param num: number
 * @returns: num
 * 
 */

function factorial(num) {
    if (num < 0 || parseInt(num) !== num) {
        //0 and negative numbers would go here
        throw `Theres' no factorials for negative or decimal numbers.`
    } else if (num === 0) {
        return 1
    } else if (num === 1) {
        return num
    } else if (num > 170)
        throw `The computer doesn't want to with numbers this big.`
    return num * factorial(num - 1)
}

let num = -5
try {
        console.log(factorial(num))
} catch (error) {
    console.log(error)
}