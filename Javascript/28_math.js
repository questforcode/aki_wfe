//understanding the math object prototype.

function circleArea (radius) {
   let area = Math.PI * radius * radius
   return area.toFixed(2) // (number of decimals)
}

console.log(circleArea(2))

//next. pseudorandom numbers.

function randomNum () {
    return parseInt(Math.random() * 20) //multiplying factor affects the range
   
}

for (let i = 0; i < 10; i++) {
    console.log(randomNum())
}


//turn it into a function that does a no repeating one. exercise.