/**function calculateLetter
 * @param dni: string
 * @returns : string
 */

function calculateLetter(id = '') {
    idLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    return idLetters[id % 23]
}

/**
 * function isLetterValid
 * @param id: string (format nnnnnnnnL)
 * @returns: boolean
 * length can go from 2 to 9
 */
function isLetterValid(id = '') {
    let r = true
    let letter = id[id.length - 1]
    let number = id.slice(0, id.length - 1)
    number = formatNumber(number)

    if (letter !== calculateLetter(number)) {
        r = false
    }

    return r
}

/** function formatNumber
 * @param string: string
 * @returns : string
 */

function formatNumber(string = '') {
    let aString = string.split('')
    for (let i = 0; i < aString.length; i++) {
        const item = aString[i]
        if (isNaN(item)) {
            aString.splice(i, 1) //removes item
        }

    } return aString.join('')
}


(function () {
    let myId = '50821728R'
    console.log(isLetterValid(myId))
})