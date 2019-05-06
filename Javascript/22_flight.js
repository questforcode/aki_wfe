
let flight = {
    airline: 'Oceanic',
    number: '815',

    departure: {
        code: 'IATA: SYD',
        date: '2004-09-22',
        time: '14:55',
        city: 'Sidney'
    },
    arrival: {
        code: 'IATA: LAX',
        date: '2004-09-23',
        time: '10:42',
        city: 'Los Angeles'
    }

}

/* let data = 'departure'
console.log(flight[data])  */
//Look for something that means data, substitute it and show it to me. '.' and [] are interchangeable,
//but we only use [] when we want to use a variable for the names of properties.


let users = ['Aki', 'Sammy', 'Gina', 'Paul', 'Viktor', 'Flynn']
for (let i = 0; i < users.length; i++) {
    const user = users[i]; //(can also be outside IF NEEDED but with a let)
    console.log(`Hello, ${user}!`)
}

//to go through an object, we cannot use a for loop. we have to use 'for in'.
//for each loop, it guards in key the name of a property, not the value.
//this is how we have the loop go through an object. 
/* 
for (const key in flight) {
    const element = flight[key]
    if (typeof element != 'object') {
        console.log(`The property ${key} is ${element}.`)

    } else {
        for (const key in element) {
            {
                const item = element[key]
                console.log(`The property ${key} is ${item}.`)

            }
        }
    }
}
 */
// DRY: Don't Repeat Yourself. Let's clean this up. This is asking us for a function and a callback.

function showFlight(obj) {
    for (const key in obj) {
        const element = obj[key];
        if (typeof element != 'object') {
            console.log(`The ${key} property is ${element}.`)
        } else {
            console.log(`The ${key} property is...`)
            showFlight(element)
        }
    }
}

showFlight(flight)