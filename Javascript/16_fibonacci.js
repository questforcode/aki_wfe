/*
 * Program that presents the Fibonacci series
 * up to a certain number.
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

show(20)