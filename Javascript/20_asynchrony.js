/**
 * The function setTimeout
 * allows for an asynchronous process, out of time.
 */

 console.log('First')

 //A while from now, console.log'second', second would come up last.
 //Timeout is read in miliseconds.
 
setTimeout ( () => {
    console.log('Second')
}, 1000)

 console.log('Third')

 //The difference between server and client time is what creates asynchrony. We have to work on it.

 //This is the end of JS Core