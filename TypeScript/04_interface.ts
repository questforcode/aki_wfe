//exclusve to typescript. allow to define what a class is going to contain without giving it specific values.
//a class without cosnstructors.

interface Animal {
    name: string
    age: number
    isDomestic: boolean
    type: string
    eat: () => void
}

//the interface forces a bare minimum of properties in a class
class Dog implements Animal {
    name: string
    age: number
    isDomestic: boolean
    type: string
    skinColor: string
    eat: () => void
}

class Cat implements Animal {
    name: string
    age: number
    isDomestic: boolean
    type: string
    weight: number
    eat: () => void
}

let a1: Animal //the variable has to be an animal
let p1: Dog
let c1: Cat

a1 = new Dog() //good example
p1 = new Dog()
// c1 = new Dog() || even if theyre both animals, a cat isnt a dog. cant excange them this way. 