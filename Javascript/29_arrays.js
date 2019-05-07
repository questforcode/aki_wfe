let data = []
// let data = new Array()
//arrays have their own prototype with their own functions.
data = [1, 2, 3, 5, 7, 9, 'Aki']
data.push(45)
//these are completely free arrays. arrays use JSON.

//exercise to make an array of random numbers.

function randomNum100() {
    return parseInt(Math.random() * 100)
}

/**Function randoms, create an array of random numbers, at least 1
 * @param limit: number
 * @returns array[number]
 */

function randoms(limit = 1) {
    let r = []
    for (let i = 0; i < limit; i++) {
        r[i] = randomNum100()

    }
    return r
}

console.log(randoms(12))