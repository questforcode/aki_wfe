// ES6: we use let and const to declare variables.

let name //declare
name = 'Aki' // initialize

let age = 22 //it's normal to declare and initialize in the same line.

age = 35 //variables can change value, but you cannot declare the same variable twice.


//Undefined data type. Means nothing.
let data
console.log(data)
console.log(typeof data)

//String data type.
data = 'Why hello there, friends!'
console.log(data)
console.log(typeof data) //tells me the type.

//Number data type. Goes without '.
data = 35
console.log(data)
console.log(typeof data)

//Boolean data type. Can only be true or false.
data = true
data = false
console.log(data)
console.log(typeof data)

//Object data type. Objects are defined inside {}.
data = {
    myname: 'Grima',
    myage: 600
}
console.log(data)
console.log(typeof data)

//Array object type data. Can mix and match as needed.
data = [20, 30, 50]
console.log(data)
console.log(typeof data)

//Functions. They're a type of object.

function show() {}
    console.log(show)
    console.log(typeof show)