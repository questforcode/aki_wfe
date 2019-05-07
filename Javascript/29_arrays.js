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


//----// Learning arrays function methods.

function test(params) {
    let data = [1, 7, 3, 2]
    let moreData = [1, 4, 6]
    let final = data.concat(moreData) //concat returns a new array, doesn't modify the original array
    //data.sort() //modifies the array.

    // temp = data creates a new reference to the same object, so modifying it would also modify data. we cannot
    // have both the original and the sorted that way.
    //This is where we use array cloning with slice and splice.

    //slice takes a bit of array, clones it into a new array, and returns it.
    let temp = data.slice(0)
    temp.sort()

    //sort can have an alternative. use a callback to tell it how to order.
    data2 = [1, 7, 70, 3, 9]
    data2.sort(a,b => a - b) //ordering function)

    console.log(+data.join(''))
    console.log(temp)
    console.log(final)
    console.log(data2)
}
test()