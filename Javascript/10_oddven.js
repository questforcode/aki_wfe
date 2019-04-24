//In ES6, we have template strings. They recognize formats. We can add variables inside strings.

/* let string = 'Hello World'
string = `Hello
World` */

// string = `Hello, ${variable}, how are you`

/**
 * A program that calculates if a number is even or odd
 * and shows the result in the console.
 */

/**
 * Way one. Numeric function.
 * Function calculateWhatIs.
 * @param num: number.
 * @returns: number.
 * Possible values:
 *     0 - even
 *     1 - odd
 */

function calculateWhatIs(num) {
    return num % 2
}

/**
 * Way two. Boolean function.
 * Function isEven.
 * @param num: number.
 * @returns: boolean.
 * Possible values:
 *    true - even
 *    false - odd
 */

function isEven(num) {
    return !(num % 2)
}


/**
 * @param isEven: boolean.
 * @param num: number.
 * @returns: void.
 */

/* 
function show(isEven, num) {
    let messages = [
        `The number ${num} is even.`,
        `The number ${num} is odd.`
    ]
    if (isEven) {
        console.log(messages[0])
    } else {
        console.log(messages[1])
    }
} */

function show(isEven, num) {
    let messages = [
        `The number ${num} is even.`,
        `The number ${num} is odd.`
    ]
    let i = 1
    if (isEven) {
        i = 0
    }
    console.log(messages[i])
}

let num = 23
num = 28
show(isEven(num), (num))

///////////////////////////////////////////
//Final Version.

/**
 * @param code: number. // 0 for even, 1 for odd
 * @param num: number
 * @returns: void
 */

let num2 = 30
function show2(code, num2) {
    let messages = [
        `The number ${num2} is even.`,
        `The number ${num2} is odd.`
    ]
    console.log(messages[code])
}

show2(calculateWhatIs(num2 % 2), num2)

//Error control!