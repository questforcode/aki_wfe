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
 * Generates exceptions if the parameter isn't a number.
 *     2 - decimal
 *     3 - not a number
 */

function calculateWhatIs(num) {
    let r
    if (isNaN(num) || Array.isArray(num) || typeof num === 'boolean') {
        //not a number
        r = 3
    } else if (parseInt(num) != num) {
        //a decimal number.
        r = 2
    }

    else {
        r = num % 2
    }
    return r
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
    if (isNaN(num) || Array.isArray(num) || typeof num === 'boolean') {
        throw 3
    } else if (parseInt(num) != num) {
        throw 2
    }
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

function show(num) {
    let message = [
        `The number ${num} is even.`,
        `The number ${num} is odd.`,
        `The number ${num} is decimal.`,
        `${num} Isn't a  number.`
    ] 
    let i
    try {
        i = (isEven(num)) ? 0 : 1
    } catch (error) {
        console.log(error)
        i = error
    }
    console.log(message[i])
}

let num = 5
show(num)

///////////////////////////////////////////
//Final Version.

/**
 * @param code: number. // 0 for even, 1 for odd
 * @param num: number
 * @returns: void
 */

let num2 = 30
num2 = 45.6
function show2(code, num2) {
    let messages = [
        `The number ${num2} is even.`,
        `The number ${num2} is odd.`,
        `The number ${num2} is decimal.`,
        `${num2} Isn't a  number.`
    ]
    console.log(messages[code])
}

show2(calculateWhatIs(num2), num2)

//Error control!

/**
 * Addenums to calculateWhatis. check it up.
 * 2 - decimals
 * 3 - non-numbers
 */

//Error control. Check isEven.
/* try {
    //notReal()
    throw 'Trialing an error.'  //Generate our own errors.
} catch (error) {
    console.log('Sorry, not working.', error)
}


 */
