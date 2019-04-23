//Looking at Conditionals first.
/* 
if(condition) {
    //code
}

 if(condition) {
    //code A
 } 
 
 else {
   //code B    
 }

if(condition) {
    //code A
}
else if (condition2) {
    //code B
}
else {
    //code C
}
*/

let x = 3
x = 5
x = '3' //Will be casted.

 if(x === 3) { // = declares that x is 3. == is the one that asks if something IS equal. === will NOT do casting.
    console.log('Cold and broken Waluigi.')
 } else {
    console.log('Wah!')
 }
 //summary. == equal. === identical (value and type).
 //!= not equal. opposite of ==.
 //!== not identical. opposite of ===.


 //Casting to Boolean.

 //Falsy values -> Casted to False.
 x = false
 x = undefined
 x = ''
 x = NaN
 x = 0
 x = null

 //Truly values -> Casted to True. Everything else that isn't this is true.
 x = true
 x = 25
 x = 'Aki'
 x = []
 x = {}
 x = function () {}

 if (x) {
     console.log('Aliens are real!')
 } else {
     console.log('No, science is the only way!')
 }