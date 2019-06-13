import { ajax } from "./ajax.js";

export function controller() {
    console.log('Controller loaded')

    //initializer

    const url = 'https://randomuser.me/api/'
    //random user api ?/users=[number of users you want]. would have to create a loop.

    //nodes

    const output = document.querySelector('#output')
    const btnUser = document.querySelector('#btn-user')
    const btnErase = document.querySelector('#btn-erase')

    //event manager

    btnUser.addEventListener('click', onClickUser)
    btnErase.addEventListener('click', onClickUser)

    //function

    function onClickUser(ev) {

        let btn = ev.target.id //btn user or btn erase

        if (btn == 'btn-user') {

            ajax(url, 'GET', getUser)
        } else {
            output.innerHTML = ''
        }
    }

    function getUser(data) {
        let image = data.results[0].picture.medium
        let bigimage = data.results[0].picture.large
        let userName = data.results[0].name
        let gender = data.results[0].gender
        let email = data.results[0].email

        if (gender == 'male') {
           gender = 'man'
        }

        else {
            gender = 'woman'
        }

        output.innerHTML = `
        <figure>
        <figcaption class="${gender}">${userName.title} ${userName.first} ${userName.last}</figcaption>
        <a href="${bigimage}"><img src="${image}" alt ="User Image"> </a>
        <a class="fas fa-envelope-square" href="mailto://${email}"></a>
       </figure>
      `

      console.log(data.results[0])

    }
}