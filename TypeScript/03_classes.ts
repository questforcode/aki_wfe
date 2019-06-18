class Person { 
    name //public property by default. parent AND child classes can access it. 
    protected age: number
    private food: boolean //can be used by the parent class but not the child classes. 
    constructor(name, age, food) { 
        this.name = name
        this.age = age
        this.food = food
        // this.soul = true
    }
    salute(toWhom = 'friend') { 

        console.log(`Hello, ${toWhom}, I'm ${this.name}.`)
    }
}

let person1 = new Person('Rayne', 20, 'Honey')

// person1.height = 149 it would give an error in TS but not in JS so it's fine.

console.log(person1)
person1.salute()

class Student extends Person {
    course: string
 constructor (name, age, food, course) {
     super(name, age, food)
     this.course = course
 }
 salute(toWhom = 'friend') {
     super.salute(toWhom)
     console.log(`I am studying ${this.course}.`)
 }
}

let student1 = new Student ('Vulkan', 25, 'Roast', 'Tank Driving')
console.log(student1)
student1.salute()