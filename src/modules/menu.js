import smoothScroll from "./smooth_scroll";

const menu = () => {
    const menu = document.querySelector('menu')
    const main = document.querySelector('main')


    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    document.addEventListener('click', (e) => {
        if (e.target.matches('menu li>a')) {
            handleMenu()            
            smoothScroll(e)
        } else if (e.target.matches('a.close-btn')) {
            handleMenu() 
        } else if (e.target.closest('.menu')) {
            handleMenu()  
        } else if (e.target.matches('main>a')) {
            smoothScroll(e)
        } else if (!e.target.closest('menu') && menu.classList.contains('active-menu')) {
            handleMenu()  
        }        
    })
}

export default menu