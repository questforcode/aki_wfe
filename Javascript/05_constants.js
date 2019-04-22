let data = 20
data = 30
console.log(data)

const DATA = 25
console.log(DATA)
//cannot add a variable value to a constant.
//DATA = 30 would give an error.

const user = {
    name: 'Aki',
    age: 666
}

// Java, C# ... are OOPs, based on classes. 
// user1 = new user(). instancing an object inside a class. that's how OOPs work.

//JavaScript is an OOP based on prototypes instead of classes, and literal objects. 
//This means they do not need to belong to a class, we can simply define them.
//They're dynamic objects. They can be used and modified as wished as seen in the example.

user.height = 200
user.name = 'Navi'

/*What is constant is that it is an object. The contents are dynamic. It's good practice
that objects are defined by const*/

console.log(user)
console.log(user.name)
console.log(user.age)