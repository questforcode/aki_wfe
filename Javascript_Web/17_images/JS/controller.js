export function controller() {
    console.log('Controller loaded.')

    let kitsune1 = true

    document.querySelector('#kitsune').addEventListener('click', onClickImg)

    function onClickImg(ev) {
        if (kitsune1) {
            ev.target.src = "./assets/kitsune2.jpg"
        } else {
            ev.target.src = "./assets/kitsune1.jpg"
        }
        kitsune1 = !kitsune1
    }
}