//Program that tells me if a string is all lowercase all not. 

/**
 * Function checkString
 *  to figure out if a string has only caps, all lowercase, or a mix
 * 
 * @param string: string
 * @returns number
 * 0 - all caps
 * 1 - all low
 * 2 - mix
 */


function checkString(string = '') {
    let r = 2
    if (string === string.toUpperCase()) {
        r = 0
    } else if (string === string.toLowerCase()) {
        r = 1
    }
    return r
}

/**
 * Function main
 * @param string : string
 * @returns void
 * 
 */
function main (string = '') {
    let messages = [
        'The string is formed by uppercase letters only.',
        'The string is formed by lowercase letters only.',
        'The string is formed by both uppercase and lowercase letters.'
    ]
    console.log(messages[checkString(string)])
}

let text = 'hello'
main(text)

