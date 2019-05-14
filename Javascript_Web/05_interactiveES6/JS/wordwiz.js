export class Wordwiz {
    constructor() {
        this.msg = [`give me a nya!`, `give me a woof!`]
        this.toWhom = ''
        //Select DOM nodes.
        this.insName = document.querySelector('#insname')
        this.nyaBtn = document.querySelector('#nyabtn')
        this.woofBtn = document.querySelector('#woofbtn')

        //Assign node managers.
        this.nyaBtn.addEventListener('click', this.nya.bind(this))
        this.woofBtn.addEventListener('click', this.woof.bind(this))
    } 
    nya() {
        this.toWhom = this.insName.value
        console.log( this.toWhom + ', ' + this.msg[0])
    }
    woof() {
        this.toWhom = this.insName.value
        console.log(this.toWhom + ', ' + this.msg[1])
    }
}