import widgetSwitcher from "./widgetSwitcher.js"

const pageScroll = (triggerBtnSelector, wrapperSelector, homeBtnSelector, downloadBtnSelector) => {
    const wrapper = document.querySelector(wrapperSelector),
        triggerBtn = document.querySelector(triggerBtnSelector),
        homeBtn = document.querySelector(homeBtnSelector),
        downloadBtn = document.querySelector(downloadBtnSelector)

    let slideIndex = 1
    const items = Array.from(wrapper.children)

    items.forEach(item => {
        item.style.display = 'none'
    })

    items[0].style.display = 'block'

    const changeSlides = () => {
        items[slideIndex].style.display = 'block'
        if (items[slideIndex].classList.contains('click')) {
            widgetSwitcher('.app__widgets__block.cloneable', '.widget-switcher.cloneable', '.app__click')
        }
        items[slideIndex].scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        })

        triggerBtn.disabled = true

        setTimeout(() => {
            items[slideIndex - 1].style.display = 'none'
            if (getComputedStyle(items[items.length - 1]).display === 'none') {
                triggerBtn.disabled = false
            }
            slideIndex += 1
        }, 600)
    }

    const toHome = () => {
        homeBtn.addEventListener('click', () => {
            items[slideIndex - 1].style.display = 'none'
            items[0].style.display = 'block'
            slideIndex = 1
            triggerBtn.disabled = false
        })
    }

    const toDownload = () => {
        downloadBtn.addEventListener('click', () => {
            items[items.length - 1].style.display = 'block'
            items[items.length - 1].scrollIntoView({
                block: 'center',
                behavior: 'smooth'
            })

            triggerBtn.disabled = true

            setTimeout(() => {
                items[slideIndex - 1].style.display = 'none'
                items[items.length - 1].style.display = 'block'
                slideIndex = items.length
            }, 600)
        })
    }

    triggerBtn.addEventListener('click', () => {
        changeSlides()
    })
    document.addEventListener('keyup', event => {
        if (event.key === 'ArrowDown') {
            changeSlides()
        }
    })
    toHome()
    toDownload()

    
}

export default pageScroll