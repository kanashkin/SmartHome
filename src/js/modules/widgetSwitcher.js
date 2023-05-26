const widgetSwitcher = (blurElementSelector, widgetSelector) => {
    const blurElement = document.querySelector(blurElementSelector),
        widget = document.querySelector(widgetSelector)
    
    blurElement.style.animationName = 'blur'

    setTimeout(() => widget.classList.add('animation'), 1500)

    const switcherClick = () => {
        const switcher = document.querySelector('.widget-switcher>label>input')
        if (widget.classList.contains('animation')) {
            switcher.checked = !switcher.checked
        } else {
            clearInterval(interval)
            console.log('clear');
        }
    }
    const interval = setInterval(switcherClick, 1500)
}

export default widgetSwitcher