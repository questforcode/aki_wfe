/**
 * Lietral Notation JSON (javascript object notation). {property : value, property : value}
 * no classes in JS (at least not necessary ones)
 * Remember objects are dynamic
 */

 //user1 = new User
 //user2 = new User

let user1 = {
    name : 'Ryo',
    age : 18,
    isStudent : true,
    address : {
        street : 'Street',
        number: '666',
        city: 'Capital'
    },
    salute : function () {
        console.log(`Hello, I am ${this.name}!`) //value from inside the object. never use the object's name inside itself.
    }
}

let user2 = {
    name : 'Akira',
    age : 17,
    course : 'Front'
}

user1.course = 'Back'

user1.salute()