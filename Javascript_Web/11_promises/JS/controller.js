export function controller() {

    //dom nodes.
    let btnAsk = document.querySelector('#btn-ask')
    let btnHello = document.querySelector('#btn-hello')
    let output = document.querySelector('#output')
    let btnHello17 = document.querySelector('#btn-hello-17')
    let btnUsers = document.querySelector('#btn-users')

    //event controllers.

    btnAsk.addEventListener('click', onAsk)
    btnHello.addEventListener('click', onHello)
    btnHello17.addEventListener('click', onHelloAwait)
    btnUsers.addEventListener('click', onUsers)

    //function

    /**
     *A promise is an ES6 object that represents the termination or failure of an async operation.
     *In other words its a returned object to which you link callback functions, instead of passing them to a function.
     */

    function completeAction() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.3) { //70% of times working simulation
                    resolve(`Here's your hamburger.`)
                } else {
                    reject(`Sorry, we're fresh out of burgers.`)
                }
            }, 2000) //this is the callback
        })
    }

    function msgAfterTimeout(msg, name, time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([msg, name])
            }, time)
        })
    }

    function onAsk() {
        completeAction()
            .then((data) => {
                output.innerHTML += data + '<br>'
            }) //receives what resolves sends
            .catch((error) => {
                output.innerHTML += error + '<br>'
            }) //receives what reject sends
    }

    function onHello() {
        msgAfterTimeout('Flynn', 'Aki', 3500)
            .then(([msg, name]) => {
                let salute = `Hello, ${name}`
                console.log(salute)
                return msgAfterTimeout(msg, salute, 500)
            }).then(([whoIs, salute]) => {
                console.log(`${salute}, I'm ${whoIs}!`)
            })
    }

    /**
     * En ES2017, the async/await appears (it's a promise wrapper, depends on promises)
     */

    async function onHelloAwait() {
        let data = []
        data = await msgAfterTimeout('Flynn', 'Aki', 3500)
        let salute = `Hello, ${name}`
        console.log(salute)
        data = await msgAfterTimeout(msg, salute, 500)
        console.log(`${salute}, I'm ${msg}!`)
    }

    /**
     * Ajax and API examples.
     */

     function onUsers () {
         const url = 'https://jsonplaceholder.typicode.com/users'
         fetch(url)
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            console.dir(data)
         })
     }
}


