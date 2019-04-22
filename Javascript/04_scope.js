//Variable scopes. 

//The first scope is a global scope, through let. It exists everywhere on the program.

let var1 = 20

//VERY BAD!! VERY VERY BAD!! DON'T DO.
//never access global variables through functions.
function test() {
    console.log(var1)
}

test() //execution of the function.

//the right way to do this is:

let var2 = 30

function goodTest(x) {
    console.log(x)
}
goodTest(var2)

//new in ES6 is to use LET instead of var. old JS code has var.
//the difference is that LET has a more restrained scope.
//the scope of a LET is the block in which they are created. usually they're out of if's, this is an example.

function conditional() {
    let ext = 22
    if(true) {
        let data = 23    
        console.log(ext)    
        console.log(data) //the if is a completely new entity
    }


}

conditional()

//another example
let x = 12

function moreTest() {
    let x = 23
    //x = 23
    console.log('Inside the function, X is', x)
}

moreTest()
console.log('Outside of the function, X is', x)