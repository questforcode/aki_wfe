function main() {
    let string = 'Hello friend'
    let student= {}
    // let student = new Object()
    let users = ['Aki', 'Flynn', 'Sammy', 'Gina', 'Paul', 'Viktor']
    // let users = new Array()
    console.log(typeof users)

    //in other languages, primitive variables are treated as what they are.
    //js takes them as objects. 

    // string.toLowerCase()
    //let stringTemp = new String(). it disappears as SOON as it shows it to me.
    console.log(string.toLowerCase())

    //turning string in array
    let aString = string.split(' ')
    aString.join (' ')//the contrary of a split
    let aStringNoSpace = aString.join ('')

    //more stuff. splits into arrays, then joins without spaces AND uppercase.
    string = string.toUpperCase().split(' ').join('')
    console.log(string)

    //using slicing with index of. URL parsing.

    let url = "https://www.cife.es/alumnos"
    let urlTemp = url.slice(url.indexOf('//')+2)
    urlTemp = urlTemp.slice(0, urlTemp.indexOf('/'))
    console.log(urlTemp)

    console.log(url.split('/')[2])
}

main()