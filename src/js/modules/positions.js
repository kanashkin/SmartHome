const positions = (parentSelector) => {
    const parentElem = document.querySelector(parentSelector)
    Array.from(parentElem.children).forEach(elem => {
        elem.style.position = 'absolute'
    })
}

export default positions