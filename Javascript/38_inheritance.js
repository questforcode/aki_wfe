//Prototype inheritance is a string of prototypes, object level.
//you create an instance of the parent, and relate it to the child. Here, student will inherit name and age.

function Person() {

}

Person.prototype.salute = function(toWhom = 'friend') {
    console.log(`Hello, ${toWhom}, I'm ${this.name}.`)
}

function Student(name, age, course) {
    this.name = name
    this.age = age
    this.course = course
}

Student.prototype = new Person() //student becomes the child of Person
Student.prototype.constructor = Student //fix a problem that happens. These 2 instructions create an inheritance
//based on their prototypes.

let student1 = new Student('Gay', 22, 'JavaScript')
let student2 = new Student ('Gayer', 23, 'JavaScript')

console.log(student1)
console.log(student2)
student1.salute()

//---------------------//

//Prototypal inheritance with object.Create().
console.clear()

let human1 = {
    name: 'Rayne',
    age: 20,
    salute: function (toWhom = 'friend') {
        console.log(`Hello ${toWhom}, I'm ${this.name}!`)
    }
}

//creating an object that is the child of Human.

user1 = Object.create(human1)
user1.username = 'animeboy'
console.log(user1)
console.log(user1.name)
user1.salute()

//Inheritance is used less and less, especially in ES6. That is where things change.