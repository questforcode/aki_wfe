import { GENEROS } from "./datos.js";

export function controller () {
    console.log('Controller cargado')
    console.log(GENEROS)
    const aGeneros = GENEROS
    let html = ''


    let selectGeneros = document.querySelector('#generos')
    let selectAutores = document.querySelector('#autores')
    let btnPedir = document.querySelector("#btnPedir")

    selectGeneros.addEventListener('change', onChangeGenero)
    selectAutores.addEventListener('change', onChangeAutores)


    aGeneros.forEach ( item => {
        html += `<option value="${item.value}">${item.label}</option>`     
    })

    selectGeneros.innerHTML = html

    function onChangeGenero(ev) {
        let iGenero = ev.target.selectedIndex
        let aAutores = aGeneros[iGenero].autores
        let html = '<option value=""></option>'
        
        aAutores.forEach ( item => { 
            html += `<option value="${item.value}">${item.label}</option>`     
        })

        selectAutores.innerHTML = html
        selectAutores.focus()
    }
     

    function onChangeAutores (ev) { 
        console.log(ev.target.selectedIndex) 
    }
    
}