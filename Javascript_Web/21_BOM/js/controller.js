export function controller () {
    console.log('Controller Loaded')

    const btnTest = document.querySelector('#btn-test')

    btnTest.addEventListener('click', onClickTest)

    function onClickTest () {
        //window.alert()
        //window.prompt()
        //window.confirm()

        let x = window.open()

        //Set timeout is part of window as well. its not necessary to write window.
       console.log(x)
    }
}