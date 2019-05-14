//Exporting to turn it into a module.

//how frameworks / ES6 work.
export class Dummy {
    constructor() {
        this.msg = ['Falling for these things over and over says much about you.', 'This stubborness makes absolutely no sense.',
            'The mouse is in!', 'The mouse is out!']
        this.manageDom()
        this.assignListeners()
    }
    manageDom() {
        this.nodes = {
            buttonYes: document.querySelector('#button-yes'),
            buttonNo: document.querySelector('#button-no'),
            mouseDiv: document.querySelector('#mouse-div')
        }
    }
    assignListeners() {
        this.nodes.buttonYes.addEventListener('click', this.clickMe.bind(this))
        this.nodes.buttonNo.addEventListener('click', this.goAway.bind(this))
        this.nodes.mouseDiv.addEventListener('mouseover', this.onMouseOver.bind(this))
        this.nodes.mouseDiv.addEventListener('mouseout', this.onMouseOut.bind(this))
    }
    clickMe() {
        console.log(this.msg[0])
    }
    goAway() {
        console.log(this.msg[1])
    }
    onMouseOver() {
        console.log(this.msg[2])
    }
    onMouseOut() {
        console.log(this.msg[3])
    }
}
//This is inconsistent and the responsible for executing. i need an object to use this class.