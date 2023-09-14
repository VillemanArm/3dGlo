const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcType = document.querySelector('.calc-type')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const total = document.querySelector('#total')

    const countCalc = () => {
        let calcCountValue = 1
        let calcDayValue = 1

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10){
            calcDayValue = 1.5
        }

        return price * (+calcType.value) * (+calcSquare.value) * calcCountValue * calcDayValue

    }

    const animateTotal =() => {
        const firstValue = +total.innerText
        const lastValue = countCalc()

        if (firstValue < lastValue) {
            liveCount(total, firstValue, lastValue)
        } else if (firstValue > lastValue) {
            liveCount(total, lastValue, firstValue)
        }
    }

    const liveCount = (element, firstValue, lastValue, step = 100) => {
        const idInterval = setInterval(() => {
            firstValue += step
            element.innerText = firstValue
        
            if (firstValue >= lastValue - step) {
                element.innerText = lastValue
                clearInterval(idInterval)
            }
        }, 1)
    }

    calcBlock.addEventListener('change', (e) => {
        if (calcType.value && calcSquare.value) {
            animateTotal()
        }        
    })

}

export default calc