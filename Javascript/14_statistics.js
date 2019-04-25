/**
 * A program that calculates statistics, like the mean.
 */

//Understanding default values and making it better.
function sum(x = 0, y = 0) {
    return Number(x) + Number(y)
}

//ES6 Spread operators
function sumPlus(x = 0, y = 0, ...others) {
    if(others){
        console.log('No use', others)
    }
    return Number(x) + Number(y)
}
console.log(sumPlus(5,6,7,8))



/**
 * Function mean.
 * @param data : array
 * @returns: number
 * Also works with a list of numbers. 
 */

function mean(data = [], ...other) {
    if (!Array.isArray(data)) {
            //when data is NOT an array.
            data = [data]
            data = data.concat(other)
    }
    let r = 0
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        r = r + element
    }
    r = r / data.length
    return r
}

let numbers = [3, 5, 6, 4, 6, 2, 5]
console.log(mean(numbers))  