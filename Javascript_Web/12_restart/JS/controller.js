export function controller () {
    console.log('App is Executing')

    let oPerson = {
        name: 'Aki',
        age: '22'
    }
    console.dir(oPerson)

    let nodeDocument = document
    console.dir(nodeDocument)

   //nodeDocument.children[0].children[1].children[1].children[1].children[1].value = 'Aki'
   //document.querySelector('#inpName').value = 'Aki'

   //1. dom nodes we are interested in
   const inpName = document.querySelector('#inpName')
   const outSalute = document.querySelector('#outSalute')
   const inMail = document.querySelector('#inMail')
   const btnHello = document.querySelector('#btnHello')
   const btnDelete = document.querySelector('#btnDelete')

   //2. define the event managers
   inpName.addEventListener('input', onInputHello)
   inpName.addEventListener('change', onSalute) //Whenever the focus is lost
   btnHello.addEventListener('click', onSalute)

   //3. implement event manager

    function onInputHello () {
       if (inpName.value) {
           outSalute.innerHTML = `Hello, ${inpName.value}, welcome to the Internet!`
       }
   }

/*    function onChangeSalute () {
    if (inpName.value) {
        outSalute.innerHTML = `Hello, ${inpName.value}, welcome to the Internet!`
    }else {
        outSalute.innerHTML = ``
    }
   } */
   function onSalute () {

   }
} 

