//Making the previous exercise better. Objects should have the function of showing themselves inside.
//It is way more logical. So instead of having a function i give the object to, i have the object
//able to show itself. we turn the function into a method.

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
    },

    show: function (obj = this) {
        for (const key in obj) {
            const element = obj[key]
            if (typeof element === 'function') {
                continue
            }
            if (typeof element !== 'object') {
                console.log(`The ${key} property is ${element}.`)
            } else {
                console.log(`The ${key} property is...`)
                obj.show(element)
            }
        }
    }
}

flight.show()

//Look at teacher files because I don't understand the next part. 

/**
 * @param : object
 * @returns: string
 */
flight.toString = function (obj = this) {
    let output = ''
    for (const key in obj) {
        const element = obj[key]
        if (typeof element === 'function') {
            continue
        }
        if (typeof element === 'object') {
            output = output + `The property ${key} is ...` + '\n'
            // output += `La propiedad ${key} vale ...`
            output = output + obj.toString(element) }
        else {
             output = output + `The property ${key} is ${element}` + '\n'
             //output += `La propiedad ${key} vale ${element}`
        }
    }
    return output
}

flight.showFinal = function () {
    console.log(this.toString())
}

// vuelo.mostrar()

flight.showFinal()