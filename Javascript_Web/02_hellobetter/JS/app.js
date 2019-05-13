
function clickMe() {
    console.log('Falling for these things over and over says much about you.')
}
function goAway() {
    console.log('This stubborness makes absolutely no sense.')
}

function onMouseOver() {
    console.log('The mouse is in!')
}

function onMouseOut() {
    console.log('The mouse is out!')
}

/**
 * Accessing the DOM (Document Object Model). JS reads documents as objects. 
 */

window.onload = function () {
    document.querySelector('#button-yes').onclick = clickMe
    //document.querySelector('button:nth-of-type(2)').onclick = goAway
    document.querySelector('#button-no').onclick = goAway
    document.querySelector('#mouse-div').onmouseover = onMouseOver
    document.querySelector('#mouse-div').onmouseout = onMouseOut
}