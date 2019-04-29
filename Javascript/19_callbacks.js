/**
 * Functions are objects. 
 * A callback is when you pass a function as a parameter.
 * In the case below, operation the parameter calls the function 'sum'.
 */

function showResult(x = 0, y = 0, operation) {
    // let x
    // let y
    // let operation
    console.log(`The result with ${x} and ${y}`)
    console.log(operation(x, y))
}

showResult(11, 12, (x,y) => x + y) //Callback through an anonymous arrow.



/**Functions can nest within each other. */


function math(x = 1, y = 1) {
    console.log(sum2(x, y))

    function sum2(x, y) {
        return x + y
    }

}
math(10, 12)
