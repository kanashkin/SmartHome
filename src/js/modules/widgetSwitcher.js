const widgetSwitcher = (parentSelector, elementSelector, appSelector) => {
    const parent = document.querySelector(parentSelector),
        element = document.querySelector(elementSelector),
        appBlock = document.querySelector(appSelector)

    const cloneElement = element.cloneNode(true)

    const cloneWidget = () => {
        if (!document.querySelector('.clone')) {
            cloneElement.classList.add('clone')
            cloneElement.classList.remove('cloneable')
            parent.appendChild(cloneElement)
            cloneElement.style.display = 'none'
        } else {
            return
        }
    }

    const showWidget = () => {
        cloneElement.style.display = 'block'
    }

    const blur = (block, exception) => {

        const childrens = block.children
        Array.from(childrens).forEach(item => {
            if (!item.classList.contains(exception)) {
                item.style.transition = '.3s ease-in-out'
                item.style.filter = 'blur(4px)'
            }
        })
    }

    const switcherClick = () => {
        const switcher = document.querySelector('.widget-switcher.clone>label.switch')
        switcher.click()
    }

    cloneWidget()
    switcherClick()
    setTimeout(blur, 1000, appBlock, 'app__widgets')
    setTimeout(blur, 1000, document.querySelector('.app__click>.app__widgets'), 'cloneable')
    setTimeout(blur, 1000, document.querySelector('.app__widgets__block.cloneable'), 'clone')
    setTimeout(showWidget, 2000)
    setInterval(switcherClick, 2000)
    

}

export default widgetSwitcher