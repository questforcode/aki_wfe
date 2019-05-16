export function controller() {

    //dom nodes.
    let btnHello = document.querySelector('#btn-hello')
    let btnHell = document.querySelector('#btn-hell')

    //event controllers.

    btnHello.addEventListener('click', onHello)
    btnHell.addEventListener('click', onHell)

    //function
    function msgAfterTimeout(msg, name, time, cb) {
        setTimeout(function () {
            cb(msg, name);
        }, time);
    }

    function onHello() {
        msgAfterTimeout('Hello', 'Aki', 2000, (msg, name) => console.log(msg, name))
        msgAfterTimeout('Hello', 'Flynn', 3000, (msg, name) => {
            document.querySelector('#output').innerHTML = msg + ' ' + name.toUpperCase()
        })
    }

    function onHell() {
        msgAfterTimeout('Flynn', 'Aki', 3500, (msg, name) => {
            let salute = (`Hello ${name}`)
            msgAfterTimeout(msg, salute, 500, (msg, salute) => {
                console.log(`${salute}, I'm ${msg}`)
            })
            //Asynchro process inside another asynchro process. If an a- process has data used by another a- process, i need to use them
            //one inside another. Callback hell is when an a calls an a calls an a calls an a. promises fix this. next exercise.
        })
    }

}

