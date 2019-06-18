interface Animal {
    name: string
    age: number
    isDomestic: boolean
    type: string
}

interface Herbivore extends Animal {
    weight: number

}

class Horse implements Herbivore {
    /*     name: string
        age: number
        isDomestic: boolean
        type: string
        skinColor: string
        weight: number 
    
            constructor (name, age, isDomestic, type, skinColor, weight) {
                this.name = name
                this.age = age
                this.isDomestic = isDomestic
                this.type = type
                this.skinColor = skinColor
                this.weight = weight
            } */

    constructor(public name: string,
        public age: number,
        public isDomestic: boolean,
        public type: string,
        public skinColor: string,
        public weight: number) { }
}

let h1 = new Horse('Tornado', 5, true, 'Pureblood', 'black', 300)
console.log(h1)

//Type script has created an abreviated way of doing constructors by passing data to the program. look above. 