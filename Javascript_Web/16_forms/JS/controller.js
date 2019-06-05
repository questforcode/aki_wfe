export function controller() {

    let courseForm = document.querySelector('#course-form')
    let formData = {}

    //console.log(aControls)

    courseForm.addEventListener('submit', onSubmit)

    function onSubmit(ev) {
        ev.preventDefault()
        let aControls = document.querySelectorAll(`[type= "text"], 
                                                   [type= "email"], 
                                                   [type= "password"], 
                                                   textarea`)
        aControls.forEach(
            item => { formData[item.id] = item.value }
        )

        let aChecks = document.querySelectorAll(`[type ="checkbox"]`)


        aChecks.forEach(
            item => { formData[item.id] = item.checked }
        )

        let aRadioSchool = document.querySelectorAll(`[name= "school"]`)

        setRadio(aRadioSchool, formData)

        let aSelects = document.querySelectorAll(`select`)

        aSelects.forEach(
            item => setSelect(item, formData)
        )

        console.log(formData)

        /*         setTimeout(() => {
                    course_form.submit()
                }, 3000)
         */
    }

    function setRadio (radio, data) {
        radio.forEach(
            item => {
                if (item.checked) {
                    data[item.name] = item.value
                    return
                }
            }
        )
    }

    function setSelect (select, data) {
        console.dir(select[select.selectedIndex])
        data[select.name] = {
            key: select[select.selectedIndex].value,
            name: select[select.selectedIndex].text
        }
    }

}