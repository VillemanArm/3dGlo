import timer from "./modules/timer.js";
import menu from "./modules/menu.js";
import modal from "./modules/modal.js";
import validation from "./modules/validation.js";
import tabs from "./modules/tabs.js";
import slider from "./modules/slider.js";
import calc from "./modules/calc.js"
import sendForm from "./modules/sendForm.js"

let deadline = '17 august 2023 17:00'

const sliderData = {
    sliderBlockClass: 'portfolio-content',
    slideClass: 'portfolio-item',
    slideActiveClass: 'portfolio-item-active',
    arrowClass: 'portfolio-btn',
    arrowLeftId: 'arrow-left',
    arrowRighttId: 'arrow-right',
    dotsBlockClass: 'portfolio-dots',    
    dotClass: 'dot' ,   
    dotActiveClass: 'dot-active',    
    timeInterval: 2000,
}


timer(deadline)
menu()
modal()
validation()
tabs()
slider(sliderData)
calc()
sendForm({ 
    formId: 'form1', 
    someElement: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})
sendForm({ formId: 'form2' })
sendForm({ formId: 'form3' })
