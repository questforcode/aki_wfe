export function controller() {
    //doms
    const aNodesLinks = document.querySelectorAll('.social-menu a')
    const clicker = document.querySelector('#clicker')
    //event handler defined

    aNodesLinks.forEach( item => item.addEventListener('click', onClick))
    clicker.addEventListener('click', clickLink)

    //event handler implemented

    function onClick (ev) {
        ev.target.outerHTML += ` Oops, ${ev.target.title} not exist! <br>` //inner adds, outer substitutes
    }

    function clickLink () {
        console.log(`You've clicked it!`)
    }
}