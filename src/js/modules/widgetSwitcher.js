const widgetSwitcher = (cloneableSelector) => {
    const cloneableApp = document.querySelector('.app'),
        cloneApp = cloneableApp.cloneNode(true),
        cloneableBlock = cloneApp.querySelectorAll('.app__widgets__block')[0],
        cloneableWidget = cloneableBlock.querySelector('.widget-switcher')
        
    cloneableBlock.classList.add('cloneable')
    cloneableWidget.classList.add('cloneable')
    cloneApp.classList.add('app__click')
    document.querySelector('.click-visual').appendChild(cloneApp)

    const cloneWidget = cloneableWidget.cloneNode(true)

    const cloningWidget = () => {
        if (!document.querySelector('.clone')) {
            cloneWidget.classList.add('clone')
            cloneWidget.classList.remove('cloneable')
            cloneableBlock.appendChild(cloneWidget)
            cloneWidget.style.display = 'none'
        } else {
            return
        }
    }

    const showWidget = () => {
        cloneWidget.style.display = 'block'
    }

    const animationWidget = () => {
        cloneWidget.classList.add('animation')
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
        const switcher = document.querySelector('.widget-switcher.clone>label>input')
        switcher.checked = !switcher.checked
    }

    cloningWidget()
    switcherClick()
    setTimeout(blur, 500, cloneApp, 'app__widgets')
    setTimeout(blur, 500, document.querySelector('.app__click>.app__widgets'), 'cloneable')
    setTimeout(blur, 500, document.querySelector('.app__widgets__block.cloneable'), 'clone')
    setTimeout(showWidget, 500)
    setTimeout(animationWidget, 1500)
    setInterval(switcherClick, 1500)
}
export default widgetSwitcher