export function main() {
    let msg = [`give me a nya!`, `give me a woof!`]
    let toWhom = ''
    //Select DOM nodes.
    let insName = document.querySelector('#insname')
    let nyaBtn = document.querySelector('#nyabtn')
    let woofBtn = document.querySelector('#woofbtn')

    //Assign node managers.
    nyaBtn.addEventListener('click', nya)
    woofBtn.addEventListener('click', woof)

    function nya() {
        toWhom = insName.value
        console.log(toWhom + ', ' + msg[0])
    }

    function woof() {
        toWhom = insName.value
        console.log(toWhom + ', ' + msg[1])
    }
}
