import {animate} from './helpers'

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const content = modal.querySelector('.popup-content')

    const moveToCenter = (element) => {
        if (innerWidth > 768) {
            element.style.transform = 'translateY(-50%)'

            animate({
                duration: 1000,
                timing: bounceEaseOut,
                draw(progress) {
                    element.style.top = (50 * progress) + '%'
                }
              });
        }
    }

    function makeEaseOut(timing) {
        return function(timeFraction) {
          return 1 - timing(1 - timeFraction);
        }
      }
    
    function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
    }

    let bounceEaseOut = makeEaseOut(bounce);
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            moveToCenter(content)
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.closest('.popup-close')) {
            modal.style.display = 'none'
        }
    })

}

export default modal