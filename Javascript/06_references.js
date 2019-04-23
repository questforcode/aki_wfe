let data = 11
//data = 45. its unchangeable (the value changes, but you destroy the memory zone and create a new one)
duplicate(data)
console.log(data)
console.log(duplicate(data))

//primitive data is passed to the function as values.
//the reference pulls the data so it can be modified as wished, without destroying.
//objects are always references.

function duplicate(data) {
    data = data * 2
    return data
}

let user = {
    name : 'Aki',
    age : 22
}

let user2 = {
    name : 'Navi', 
}

signUp(user, 'HTML')
console.log(user)
signUp (user2)
console.log(user2)

//duplicate the reference, but just one object. 
function signUp(obj) {
    obj.course = 'JavaScript'
}

function signUp(obj, curso ='JavaScript') {
    obj.curso = curso
}
//Here, JavaScript is the value by default. 