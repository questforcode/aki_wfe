
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
    show: function () {
        console.log(this.toString())
    },
    toString: function (obj = this) {
        let output = ''
        for (const key in obj) {
            const element = obj[key]
            if (typeof element === 'function') {
                continue
            }
            if (typeof element === 'object') {
                output = output + `The property ${key} is ...` + '\n'
                // output += `La propiedad ${key} vale ...`
                output = output + obj.toString(element)
            }
            else {
                output = output + `The property ${key} is ${element}` + '\n'
                //output += `La propiedad ${key} vale ${element}`
            }
        }
        return output
    }
}

flight.pilot = 'John Smith'
flight.show()

//We never do this. How to make multiple objects based on something. Constructive functions.


