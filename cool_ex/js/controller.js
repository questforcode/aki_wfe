export function controller() {

    //dom

    let time = document.querySelector('#time')
    let readScore = document.querySelector('#score')
    let winlose = document.querySelector('#winlose')

    let btnStart = document.querySelector('#start')

    let blue = document.querySelector('#blue')
    let red = document.querySelector('#red')
    let yellow = document.querySelector('#yellow')
    let green = document.querySelector('#green')
    let pink = document.querySelector('#pink')
    let orange = document.querySelector('#orange')

    //handler
    //por alguna razón no he conseguido hacerlo con el queryselectorall, me gustaría cambiar eso.

    btnStart.addEventListener('click', onStart)
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

            if (whatLeft < 0 && score >= 10) {
                clearInterval(countdown)
                youWon()
                return
            } else if (whatLeft < 0 && score < 10) {
                clearInterval(countdown)
                youLost()
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
        timer(2)
    }

    let score = 0

    function youLost() {
        winlose.innerHTML = `You've lost the game!`
        clearInterval(countdown)
    }

    function youWon() {
        winlose.innerHTML = `You've won the game!`
    }

    //actual game

    const colors = ['blue', 'red', 'yellow', 'green', 'pink', 'orange']

    function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    function onClick(ev) {
        randomColor(colors)
        console.log(randomColor(colors))
        if (randomColor(colors) === ev.target.id) {
            score++
        }

        readScore.innerHTML = `${score}`
    }

}