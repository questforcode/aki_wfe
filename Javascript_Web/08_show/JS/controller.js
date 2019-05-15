export function controller() {
    //declare variables

    let isVisibleDiv = false
    let titles = ['Make me Real', 'Tear Me Down']

    //nodes
    let nodes = {
        changeBtn: document.querySelector('#change'),
        ghostTxt: document.querySelector('#ghost')
    }

    nodes.changeBtn.innerHTML = titles[0]

    //node event assigning
    nodes.changeBtn.addEventListener('click', toggle)

    //functions

    function toggle() {
        nodes.changeBtn.innerHTML = titles[isVisibleDiv ? 0 : 1]
        nodes.ghostTxt.classList.toggle('ghost')
        isVisibleDiv = !isVisibleDiv
    }
}