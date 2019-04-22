//working with fancier functions

let name
name = 'Aki'

let age = 22

age = 35


let data
show(data)

data = 'Why hello there, friends!'
show(data)

data = 35
show(data)

data = true
data = false
show(data)

data = {
    myname: 'Grima',
    myage: 600
}
show(data)

data = [20, 30, 50]
show(data)


function show(input) {
    console.log('The received data is', input)
    console.log('The type of data is', typeof input)
    console.log('-----------')
}