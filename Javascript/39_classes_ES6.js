class Person { //class name. inside, there's a constructor function.
    constructor(name, age, food) { //content of the function that will be inside
        this.name = name
        this.age = age
        this.food = food
        // this.soul = true
    }
    salute(toWhom = 'friend') { //this way, the system already knows this is a prototype method.

        console.log(`Hello, ${toWhom}, I'm ${this.name}.`)
    }
}

person1 = new Person('Rayne', 20, 'Honey')

person1.height = 149

console.log(person1)
person1.salute()

class Student extends Person { //Inheritance in ES6
 constructor (name, age, food, course) {
     super(name, age, food)
     this.course = course
 }
 salute(toWhom = 'friend') {
     super.salute(toWhom)
     console.log(`I am studying ${this.course}.`)
 }
}

student1 = new Student ('Vulkan', 25, 'Roast', 'Tank Driving')
console.log(student1)
student1.salute()