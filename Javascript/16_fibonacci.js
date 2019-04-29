/*
 * Program that presents the Fibonacci series
 * up to a certain number.
 * This program just gives me a specific number of things in the series. Bottom exercise
 * is the 'correct' way to do it.
 */

/**
 * @param num : number
 * @returns : array
 */

function fibonacci(num) {
    let series = []
    for (let i = 0; i < num; i++) {
        if (i == 0 || i == 1) {
            series.push(i)
        }

        else {

            let x = series[i - 1]
            let y = series[i - 2]
            series.push(x + y)
        }
    }
    return series
}

/**
 * 
 * Show function. 
 */

function show(num) {
    console.log(fibonacci(num))
}

let num = 10
show(num)


/*-------------------------------------------------------------------*/


/**
 * Class Version of This
 */

/**
 * function fiboClass
 * @param limit: number
 * @returns : array [numbers]
 */
function fiboClass(limit) {
    let i = 0
    let j = 1
    let group = [i]

    //Not recommended for, because we have no idea of the limit.
    /*    for (let k = 0; k < Infinity; k++) {
           const element = array[k];
           if() {
               //continue
               break //exit condition to stop an infinite loop.
           } */

    while (j <= limit) {
        let next = i + j
        i = j
        j = next
        group.push(i)


    }
    return group
}

let limit = 200
console.log(fiboClass(limit))



/**
 *  Class For Version. Not recommended.
 * */

function fiboFor(limit2) {
    /*    let i = 0
       let j = 1 */
    let group2 = [0]

    /*     for (let ind = 0; ind < Infinity; ind++) {
            let next = i + j
            i = j
            j = next
            group2.push(i)
            if (j > limit2) {
                break
            }
     */

    for (let i = 0, j = 1; i < limit2; i = j, j = next) {
        group2.push[j]
        next = i + j

    }
    return group2
}


let limit2 = 30
console.log(fiboFor(limit2))