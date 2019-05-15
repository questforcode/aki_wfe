export function controller () {
    let name = ''
    let initialMsg = ''

    //nodes

    let insName = document.querySelector('#insname')
    let goodbyeBtn = document.querySelector('#goodbyebtn')
    let output = document.querySelector('#output')

    initialMsg = output.innerHTML + ' '

    //node event assigning

    insName.addEventListener('input', onInput)
    goodbyeBtn.addEventListener('click', goodbye)

    //functions

    function onInput() {
        name = insName.value
        output.innerHTML = initialMsg + name
    }

    function goodbye() {
        name = ''
        output.innerHTML = initialMsg + ''
    }
}