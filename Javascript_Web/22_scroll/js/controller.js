export function controller() {
    console.log('Controller cargado')

    // Variables
    let isSticky = false;

    // Nodos
    let header = document.querySelector('#main-header')
    let aItemsMenu = document.querySelectorAll('.main-menu a')
    let aSections = document.querySelectorAll('.main-content section')
    let aOffSets = calculaOffSets()

    // Manejadores de eventos
    window.addEventListener('scroll', onScroll)
    aItemsMenu.forEach(item => item.addEventListener('click', onClickMenu))

    function calculaOffSets() {
        let aDatos = []
        aSections.forEach(item => aDatos.push(item.offsetTop))
        aDatos[0] = 0
        console.dir(aDatos)
        return aDatos
    }

    function onScroll(ev) {
        if (scrollY >= 40 && !isSticky) {
            header.classList.add('sticky-header')
            isSticky = true
            aOffSets = calculaOffSets()
        } else if (scrollY < 40 && isSticky) {
            header.classList.remove('sticky-header')
            isSticky = false
        }
        let id
        if (scrollY < aOffSets[1]) {
            //inicio
            id = 0
        } else if (scrollY < aOffSets [2]) {
            //section 1 (portfolio)
            id = 1
        } else if (scrollY < aOffsets [3]) {
            //section 2 (clients)
            id = 2
        } else {
            //section 3 (about us)
            id = 3
        }
        ponActivo(id)
    }

    function onClickMenu(ev) {
        ev.preventDefault()
        let id = +ev.target.dataset.orden
        if (id && !isSticky) { // click inicial en opción distinta de inicio 
            header.classList.add('sticky-header')
            isSticky = true
        }
        aOffSets = calculaOffSets()

        let destino = 0
        let offset = aOffSets[id]

        ponActivo(id)

        console.log('Item', id)
        console.log('offset', offset)
        /* if (isSticky) { */
        destino = offset - 50
        /*  } else {
             destino = offset
         } */
        window.scrollTo(0, destino)
    }

    function ponActivo (id) {
        aItemsMenu.forEach(item => item.classList.remove('activo'))
        aItemsMenu[id].classList.add('activo')
    }

}