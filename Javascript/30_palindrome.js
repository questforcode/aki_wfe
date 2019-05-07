/**function isPalindrome
 * @param sentence: string
 * returns boolean
 * 'as i pee sir i see pisa'
 */

function isPali(string = '') {
    let r = true
    let stringNoSpace = string.split(' ').join('').toLowerCase()
    //console.log(stringNoSpace)
    let stringReverse = stringNoSpace.split('').reverse().join('').toLowerCase()
    //console.log(stringReverse)
    if (stringNoSpace !== stringReverse) {
        r = false
    }
    return r
}

(function () {
    let texts = [
        'This is not a palindrome',
        'As I pee sir I see pisa'
    ]
    for (let i = 0; i < texts.length; i++) {
        const text = texts[i];
        console.log(text)
        console.log(isPali(text))
    }
})()
