let user = {
    name : 'Aki',
    age: 22,
    course: 'Front'
}

console.log(user)
//Imagine we're sending this data to a Back. Back undestrants JSON, not native format. If I camouflage it as a string, they can use it.
// let userString = "{name : 'Aki', age: 22, course: 'Front'}"
//we do this through a function, not by hand.
let string = JSON.stringify(user)
console.log(string)
console.log(JSON.parse(string))

let student1 = {
    name : 'Viktor',
    age : 27,
    course : 'Javascript'
}

student2 = JSON.parse(JSON.stringify(student1)) //similar concept to array clones.
student2.course = 'Design'
student2.name = 'Gina'

//other way of object clone

student3 = Object.assign({}, student1)
student3.name = 'Sammy'

console.log(student1)
console.log(student2)
console.log(student3)