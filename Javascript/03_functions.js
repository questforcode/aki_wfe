function sum(x,y) {
    //variable exists only inside the function.
    let r = x + y
    return r
}

function show(text) {
    console.log(text)
    //this is a void function. its job is to show me things, not return anything.
}

//from whichever place in my program. exists while the program is executing itself.
let number1 = 23
let number2 = 20
let result = sum(number1, number2)
show(result)

// console.log(r) wouldn't work because R is defined inside a function, not the program.

/*separation of concerns: we do not mix interface / operation types. making sure each part of the program
 deals with specific things.*/