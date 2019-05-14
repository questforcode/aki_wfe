export class Wordwiz {
    constructor() {
        this.msg = [`give me a nya!`, `give me a woof!`]
        this.toWhom = ''

        //Select DOM nodes.
        this.insName = document.querySelector('#insname')
        this.nyaBtn = document.querySelector('#nyabtn')
        this.woofBtn = document.querySelector('#woofbtn')
        this.output = document.querySelector('#output')
        this.goodbyeBtn = document.querySelector('#goodbyebtn')

        //Assign node managers.
        this.nyaBtn.addEventListener('click', this.nya.bind(this))
        this.woofBtn.addEventListener('click', this.woof.bind(this))
        this.goodbyeBtn.addEventListener('click', this.goodbye.bind(this))
    }
    nya() {
        if (this.insName.value) {
            this.toWhom = '<b>' + this.insName.value + '</b>'
            this.output.innerHTML = this.toWhom + ', ' + this.msg[0]
        }
    }
    woof() {
        if (this.insName.value) {
            this.toWhom = '<b>' + this.insName.value + '</b>'
            this.output.innerHTML = this.toWhom + ', ' + this.msg[1]
        }
    }


    goodbye() {
        this.output.innerHTML = ''
        this.insName.value = ''
    }
}