import widgetSwitcher from "./widgetSwitcher.js"

const siteScroll = (triggerBtnSelector, homeBtnSelector, downloadBtnSelector) => {
    const triggerBtn = document.querySelector(triggerBtnSelector),
        homeBtn = document.querySelector(homeBtnSelector),
        downloadBtn = document.querySelector(downloadBtnSelector)

    const titleWrapper = document.querySelector('.title-wrapper'),
        titleItems = Array.from(titleWrapper.children)

    const visualWrapper = document.querySelector('.visual-wrapper'),
        visualItems = Array.from(visualWrapper.children)
    
    let slideIndex = 1

    const itemsBase = (itemsArray, additionalSelector, yValue) => {
        itemsArray.forEach(item => {
            gsap.set(`.${item.classList[1]} ${additionalSelector}`, {
                y: yValue,
                autoAlpha: 0,
            });
            item.style.display = 'none'
        })
        gsap.set(`.${itemsArray[0].classList[1]} ${additionalSelector}`, {
            y: 0,
            autoAlpha: 1,
        });
        itemsArray[0].style.display = 'block'
    }

    const itemsScroll = (itemsArray, additionalSelector, firstDuration, secondDuration, yValue, easeValue) => {
        gsap.to(`.${itemsArray[slideIndex - 1].classList[1]} ${additionalSelector}`, {
            duration: firstDuration,
            y: yValue,
            autoAlpha: 0,
            ease: easeValue,
        });
        itemsArray[slideIndex].style.display = 'block'
        gsap.to(`.${itemsArray[slideIndex].classList[1]} ${additionalSelector}`, {
            duration: secondDuration,
            y: 0,
            autoAlpha: 1,
            ease: easeValue,
        });
        triggerBtn.disabled = true
        setTimeout(() => triggerBtn.disabled = false, 1200)    
    }

    const headerButtons = (itemsArray, itemsIndex, additionalSelector, firstDuration, secondDuration, yValue) => {
        gsap.to(`.${itemsArray[slideIndex - 1].classList[1]} ${additionalSelector}`, {
            duration: firstDuration,
            y: yValue,
            autoAlpha: 0,
            ease: "power1.inOut",
        });
        itemsArray[itemsIndex].style.display = 'block'
        gsap.to(`.${itemsArray[itemsIndex].classList[1]} ${additionalSelector}`, {
            duration: secondDuration,
            y: 0,
            autoAlpha: 1,
            ease: "power1.inOut",
        });
    }

    const runFunctions = () => {
        if (visualItems[slideIndex].classList[1] === 'click-visual') {
            widgetSwitcher('.app')
            itemsScroll(visualItems, '', 0, 0, -window.innerHeight, '')
        } else {
            itemsScroll(visualItems, '', 1.2, 1.2, -window.innerHeight, '')
        }
        itemsScroll(titleItems, '.title-anim', 0.8, 0.8, -100, 'power1.inOut')
        slideIndex += 1
    }

    itemsBase(titleItems, '.title-anim', 100)
    itemsBase(visualItems, '', window.innerHeight)


    triggerBtn.addEventListener('click', () => {
        if (slideIndex !== visualItems.length) {
            runFunctions()
        }
    })

    document.addEventListener('keyup', event => {
        if (event.key === 'ArrowDown') {
            triggerBtn.click()
        }      
    })

    homeBtn.addEventListener('click', () => {
        headerButtons(titleItems, 0, '.title-anim', 0.6, 0.6, 100)
        headerButtons(visualItems, 0, '', 0.8, 0.8, window.innerHeight)
        triggerBtn.disabled = true
        setTimeout(() => {
            itemsBase(titleItems, '.title-anim', 100)
            itemsBase(visualItems, '', window.innerHeight)
            triggerBtn.disabled = false
            document.querySelector('.app__click').remove()
        }, 600)
        slideIndex = 1
    })

    downloadBtn.addEventListener('click', () => {
        headerButtons(titleItems, titleItems.length - 1, '.title-anim', 0.6, 0.6, -100)
        headerButtons(visualItems, visualItems.length - 1, '', 0.8, 0.8, -window.innerHeight)
        slideIndex = visualItems.length
    })
}

export default siteScroll