let names = ['Aki', 'Paul', 'Jesse', 'Sammy', 'Gina', 'Viktor']
// slice: 2 parameters. the start, and the end. doesn't modify the original array.
console.log(names.slice(1,4))

//splice: it splits the array in two halves, but it does modify the original array. 

let newNames = names.splice(1,1) //from position one, take away one
console.log(names)
console.log(newNames)

// other functions. they're all modifiers.
// stacks and and heaps

//stack (first in last out)
names.push('Flynn') //adds a new element to the end 
names.pop() // removes a new element from the end

//heap 
names.shift() //remove the first element 
names.unshift('Kira') // add to the beginning