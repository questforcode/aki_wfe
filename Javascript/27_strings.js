function main (string = '') {
    let messages = [
        'The string is formed by uppercase letters only.',
        'The string is formed by lowercase letters only.',
        'The string is formed by both uppercase and lowercase letters.'
    ]
    console.log(messages[checkString(string)])

    function checkString(string = '') {
        let r = 2
        if (string === string.toUpperCase()) {
            r = 0
        } else if (string === string.toLowerCase()) {
            r = 1
        }
        return r
    }
    
}

//Gonna use modules / closures , which is more advanced programming.
//instead of having check string on its own, we put it inside the other one.

(function () {
   let text = 'hello'
    main(text) 
})()

//This way we don't have any global values. Anonymous autoexecutable function.
