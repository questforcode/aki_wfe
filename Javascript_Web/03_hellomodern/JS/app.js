
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

//let's just call this function main since its the main function.

function main() {
    document.querySelector('#button-yes').addEventListener('click', clickMe)
    document.querySelector('#button-no').addEventListener('click', goAway)
    document.querySelector('#mouse-div').addEventListener('mouseover', onMouseOver)
    document.querySelector('#mouse-div').addEventListener('mouseout', onMouseOut)
}

(function() {
    document.addEventListener('DOMContentLoaded', main)
})()

//Event listener allows more than 1 event manager per event, while the on method doesn't.
//window onload: old.
//window.addEventListener('load') one option. option2 is at top.