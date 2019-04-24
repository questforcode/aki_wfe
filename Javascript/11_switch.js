//An if used on discrete values of a single variable. 

//Nonworking cases:
// if(x > 5) (not discrete)
// if(x = 2 && y = 3) (not a single variable)

//Working case.
let status // Boss, Senior, Junior, Internship
let bonus
status = 'Boss'
switch (status.toLowerCase()) {
    case 'boss':
        bonus = 10000
        break
    case 'senior':
        bonus = 1000
        break
    default:
        bonus = 0
        break
}

console.log(`Since you are a ${status}, your bonus is ${bonus} euros.`)

//In Java, C#, etc...
//string name  =  'Butter'
//string nameMay = UpperCase(name)  || a system function.

let array = []
array.push()

//JS system functions. the dot calls the object that surrounds it, and creates the propperties.
let name = 'Biscuit'
let nameMin = name.toLowerCase()
let nameUp = name.toUpperCase()

console.log(name, nameMin, nameUp)