const smoothScroll = (e) => {
    e.preventDefault()
    const idBorder = e.target.href.indexOf('#')
    const block = document.querySelector(e.target.href.slice(idBorder))
    block.scrollIntoView({behavior: 'smooth'}, true )
}

export default smoothScroll