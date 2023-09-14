const slider = ({
    sliderBlockClass,
    slideClass,
    slideActiveClass = 'slide-active',
    arrowClass,
    arrowLeftId = 'left',
    arrowRighttId = 'right',
    dotsBlockClass,    
    dotClass,   
    dotActiveClass = 'dot-active',    
    timeInterval = 2000
}) => {

    const sliderBlock = document.querySelector(`.${sliderBlockClass}`) 
    const slides = document.querySelectorAll(`.${slideClass}`) 
    const dotsBlock = document.querySelector(`.${dotsBlockClass}`)     
    
    let currentSlide = 0
    let dots 
    let interval 

    if (sliderBlock === null || slides === null) return


    const addDots = () => {
        slides.forEach(() => {
            dotsBlock.innerHTML = dotsBlock.innerHTML + `<li class="${dotClass}"></li>`
        })
        dots = document.querySelectorAll(`.${dotClass}`) 
        dots[0].classList.add(dotActiveClass)
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, slideActiveClass)
        prevSlide(dots, currentSlide, dotActiveClass)
        
        currentSlide++
        if (currentSlide >= slides.length) currentSlide = 0
        
        nextSlide(slides, currentSlide, slideActiveClass)
        nextSlide(dots, currentSlide, dotActiveClass)
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.matches(`.${dotClass}, .${arrowClass}`)) {
            return
        }

        prevSlide(slides, currentSlide, slideActiveClass)
        prevSlide(dots, currentSlide, dotActiveClass)

        if (e.target.matches(`#${arrowRighttId}`)) {
            currentSlide++
        } else if (e.target.matches(`#${arrowLeftId}`)) {
            currentSlide--
        } else if (e.target.classList.contains(dotClass)) {
            dots.forEach((dot, index) => {
                if (dot === e.target) {
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= slides.length) currentSlide = 0
        if (currentSlide < 0) currentSlide = slides.length - 1


        nextSlide(slides, currentSlide, slideActiveClass)
        nextSlide(dots, currentSlide, dotActiveClass)
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches(`.${dotClass}, .${arrowClass}`)) {
            stopSlide()
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches(`.${dotClass}, .${arrowClass}`)) {
            startSlide(timeInterval)
        }
    }, true)

    addDots()    
    startSlide(timeInterval)
}

export default slider
