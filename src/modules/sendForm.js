const sendForm = ({ formId, someElement = []}) => {
    const form = document.getElementById(formId)
    
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка'
    const successText = 'Спасибо! Наш менеджер свяжется с вами.'

    const validate = (list) => {
        let success = true
        const phoneSymbols = /[^\d\+\(\)-]/g
        const russianSymbols = /[^а-я- ]/gi
        const messageSymbols = /[^а-я- \,\.\:\;\'\"\@\%\(\)]/gi


        list.forEach(input => {
            if (input.name === 'user_phone' && phoneSymbols.test(input.value) ||
                input.name === 'user_name' && russianSymbols.test(input.value) ||
                input.name === 'user_message' && messageSymbols.test(input.value)) {
                success = false
            } 
        })

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }

        }).then(response => response.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        let formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElement.forEach(elem => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                statusBlock.textContent = successText

                formElements.forEach(input => {
                    input.value = ''
                })
            })
            .catch(error => {
                statusBlock.textContent = errorText

                console.log(error.message);
                }
            )
        } else {
            alert('Данные не валидны!')
        }
    }

    try {
        if (!form) {
            throw new Error('Форма отсутствует!')
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault()
    
            submitForm()
        })
    } catch(error) {
        console.log(error.message);
    }


    

}

export default sendForm