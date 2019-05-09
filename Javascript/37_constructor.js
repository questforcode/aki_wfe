let user1 = {
    name: 'Rayne',
    age: 20,
    salute: function (toWhom = 'friend') {
        console.log(`Hello ${toWhom}, I'm ${this.name}!`)
    }
}

function User(name, age) { //This is a constructor function.
    this.name = name
    this.age = age
    this.pets = []
}

User.prototype.salute = function (toWhom = 'friend') { //saving things in the prototype function.
    console.log(`Hello ${toWhom}, I'm ${this.name}!`) //changing user to Object affects the prototypes of all objects.
}

User.prototype.adopt = function (pet = new Pet()) {
    this.pets.push(pet)
}

let user2 = new User('Maestitia', 23)
let user3 = new User('Heidi', 21)

console.log(user1)
console.log(user2)
console.log(user3)
user1.salute(user2.name)
user2.salute(user1.name)
user3.salute(user1.name + ', ' + user2.name)

/**
 * Constructive function for pets.
 */

function Pet(name, type = '', species) {
    this.name = name
    this.type = type
    this.species = species
}

let pet1 = new Pet('Robin', 'Cat', 'Common')
let pet2 = new Pet('Loki', 'Dog', 'Shiba Inu')

pet1.age = 1
// delete pet2.species

console.log(pet1)
console.log(pet2)

user2.adopt(pet2)
console.log(user2)

// user3.pets[0] = new Pet ('Tweewy', 'canary'): association. here it only exists associated to the user, not on its own.

//Prototypes in JS are so strong we can even modify the language.
//We can rewrite the native prototypes like i did in prototype.salute.


/**
 * Dependency. New method, adopt. Look up.
 * Here, the pet object depends on the User object, because the User object makes use of it through a method.
 */

