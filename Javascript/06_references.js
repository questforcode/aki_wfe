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

signUp(user)
console.log(user)

//duplicate the reference, but just one object. 
function signUp(obj) {
    obj.course = 'JavaScript'
}