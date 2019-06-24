export function controller() {

    //dom

    let time = document.querySelector('#time')
    let readScore = document.querySelector('#score')
    let winlose = document.querySelector('#winlose')

    let btnStart = document.querySelector('#start')
    let btnRefresh = document.querySelector('#refresh')

    let blue = document.querySelector('#blue')
    let red = document.querySelector('#red')
    let yellow = document.querySelector('#yellow')
    let green = document.querySelector('#green')
    let pink = document.querySelector('#pink')
    let orange = document.querySelector('#orange')

    //handler


    btnStart.addEventListener('click', onStart)
    btnRefresh.addEventListener('click', onRefresh)

    //por alguna razón no he conseguido hacerlo con el queryselectorall, me gustaría cambiar eso.
    blue.addEventListener('click', onClick)
    red.addEventListener('click', onClick)
    yellow.addEventListener('click', onClick)
    green.addEventListener('click', onClick)
    pink.addEventListener('click', onClick)
    orange.addEventListener('click', onClick)


    //timer functions

    let countdown

    function timer(seconds) {
        clearInterval(countdown)

        const now = Date.now()
        const later = now + seconds * 1000
        showTime(seconds)

        countdown = setInterval(() => {
            const whatLeft = Math.round((later - Date.now()) / 1000)

            if (whatLeft > 0 && score >= 10) {
                clearInterval(countdown)
                winlose.innerHTML = `You've won the game!`
                playWin()
                return
            } else if (whatLeft < 0 && score < 10) {
                clearInterval(countdown)
                winlose.innerHTML = `You've lost the game!`
                playLost()
                return
            }
            showTime(whatLeft)
        }, 1000)
    }

    function showTime(seconds) {
        const minutes = Math.floor(seconds / 60)
        const remaining = seconds % 60
        const seeTime = `${minutes < 10 ? '0' : ''}${minutes}:${remaining < 10 ? '0' : ''}${remaining}`

        time.innerHTML = seeTime
    }

    function onStart() {
        playClick()
        timer(90)
    }

    let score = 0

    //actual game

    function onClick(ev) {
        playClick()
        const colors = ['blue', 'red', 'yellow', 'green', 'pink', 'orange']
        let random = colors[Math.floor(Math.random() * colors.length)]
        //dejo los console para que se pueda comprobar que funciona
        //console.log(random)
        //console.dir(ev.target.id)
        if (random === ev.target.id) {
            score++
        }

        readScore.innerHTML = `${score}`
    }

    function onRefresh () {
        playClick()
        score = 0
        readScore.innerHTML = `0`
        clearInterval(countdown)
        time.innerHTML = `00:00`
    }

    //sonidos

    function playClick() {
        const click = new Audio()
        click.src = './assets/click.wav'
        click.play()
    }

    function playWin() {
        const win = new Audio()
        win.src = './assets/win.wav'
        win.play()
    }

    function playLost() {
        const lost = new Audio()
        lost.src = './assets/lose.wav'
        lost.play()
    }

}