const validation = () => {
    const calcTextInputs = document.querySelectorAll('.calc-block>input[type=text]')
    const names = document.querySelectorAll('.form-name-validation')
    const emails = document.querySelectorAll('.form-email')
    const phones = document.querySelectorAll('.form-phone')

    const digits = /[^\d]/g
    const cyrillic = /[^а-я -]/gi
    const email = /[^\w\d@-_\.\!\~\*\']/gi
    const phone = /[^\d()-]/gi


    const addValidaton = (input, regExp) => {
        input.addEventListener('input', (event) => {
            input.value = input.value.replace(regExp, '')
            if (input.value && input.value.match(/  /g)) {
                if (input.value.match(/  /g).length > 0) {
                    input.value = input.value.slice(0, input.value.length - 1)
                }

            }
        })
    }


    calcTextInputs.forEach((input) => {
        addValidaton(input, digits)
    })

    names.forEach((input) => {
        addValidaton(input, cyrillic)
    })

    emails.forEach((input) => {
        addValidaton(input, email)
    })

    phones.forEach((input) => {
        addValidaton(input, phone)
    })
}

export default validation