export function controller() {

    //nodes
    const toNodesQuestion = document.querySelectorAll('.question')
    const toNodesAnswer = document.querySelectorAll('.asnwer')

    //handlers

    toNodesQuestion.forEach((item) => { item.addEventListener('click', onClick) })

    function onClick (ev) {
        toNodesQuestion.forEach((item) => item.classList.remove('highlighted'))
        ev.target.classList.add('highlighted')
        toNodesQuestion.forEach((item) => item.nextElementSibling.hidden = true)
        ev.target.nextElementSibling.hidden = false

    }
}