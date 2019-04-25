let numbers = [1, 2, 4, 6]
let friends = ['Gina', 'Viktor', 'Paul', 'Flynn']
let everything = [1, 45, 'Dog', 'Cat', true, { name: 'Person', age: 22 }]
//we usually make arrays of things of the same type, not like in line 3.

for (let i = 0; i < friends.length; i++) {
    const element = friends[i]
    console.log(`Hello, ${element}!`)
}

/**
 * A program that checks if a name was used before by a king of spain.
 */

/**
 * Function isKing
 * @param name : string
 * @returns : boolean
 */

function isKing(name) {
    let kings = ['Fernando', 'Isabel', 'Carlos', 'Felipe', 'Luis', 'José',
        'Amadeus', 'Juan Carlos', 'Alfonso']

    for (let i = 0; i < kings.length; i++) {
        const king = kings[i];
        if (king.toLowerCase() === name.toLowerCase()) {
            return true
        }
    } 
    return false
}

/**
 * Function that shows me the result.
 * @param name: string
 * @returns: void
 */

function show(name) {
    let i = 1
    let messages = [
        `The name ${name} has been used by a Spanish king before.`,
        `The name ${name} has never been used by a Spanish king before.`
    ]

    if (isKing(name)) {
        i = 0
    }
    console.log(messages[i])
}

let name = 'Carlos'
name = 'Ernest'
name = 'CARLOS'
show(name)