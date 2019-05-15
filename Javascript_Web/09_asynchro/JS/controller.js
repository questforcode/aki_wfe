export function controller () {
    //Event loops.
    //Settimeout allows me to create functions that will come in a bit later. still an event.

    //dom nodes.
    let btnShow = document.querySelector('#btn-show')
    let btnHello = document.querySelector('#btn-hello')
    let btnRead = document.querySelector('#btn-read')

    //event controllers.
    btnShow.addEventListener('click', show)
    btnHello.addEventListener('click', hello)
    btnRead.addEventListener('click', readData)

    //function

    function show () {
        setTimeout(()=>console.log('Item 1'), 0)

        console.log('Item 2')
    
        setTimeout(()=>console.log('Item 3'), 2000) //param 1 is handler, 2nd is time in miliseconds

    
        console.log('Item 4')
    
        setTimeout(()=>console.log('Item 5'), 1000)
    }

    function hello () {
        console.log('Hello, friend!')
    }

    function readData () {
        let i
        //synchronous reading
        //i = 33
        setTimeout(() => {
            i = 33
            showData()
        }, 1000);
        function showData() {
            console.log(i)
        }
       
    }
}
  