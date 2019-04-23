//Asignation.

let x = 23

x++
x--
//A shortened way of typing x = x(+)(-)1


//Arithmetics. 

let y = 2

let r
r = x + y //sum.
r = x - y //takeaway.
r = x * y // multiply.
r = x / y // division.
r = parseInt(x / y) //full number division.
r = x % y //module or rest of the parseInt operation (the extra).


//Arithmetic asignations.

y = 2
y += 3 // y = y + 3
y -= 3 // y = y - 3
y *= 2 // y = y * 3
y /= 3 // y = y / 3
y %= 3 // y = y % 3

//Ternary operator, '?'.

let age = 15
let i
if (x >= 18) {
    i = 0
} else {
    i = 1
}

i = (age >= 18) ? 0 : 1 //It does exactly the same as the line from before. 
console.log(i)


//Objects. Literal classless object.  JSON notation.

let user = {
    name: 'Aki', //Property : value
    age: 22
}
console.log(user.name)

//arrays. similar to object, but values are stored sequentially and in order. first element of a list is 0.
let users = ['Aki', 'Grima', 'Robin', 'Navi']
console.log(users[1])
//lists are ALWAYS arrays.

let numbers = [12, 45, 67]
//they can also grow.

//arrays have a lot of properties once defined. code recognizes arrays.
users[users.length] = 'Chrom'
users[users.length] = 'Lisa'
users [100] = 'Frederick'
console.log(users)
console.log(users.length)

//Messages to the user.

let message = [
    'Welcome to the Casino.',
    'No underage people allowed.'
]

console.log(message [i])