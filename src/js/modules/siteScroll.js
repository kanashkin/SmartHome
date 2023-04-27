import widgetSwitcher from "./widgetSwitcher.js"

const siteScroll = (triggerBtnSelector, homeBtnSelector, downloadBtnSelector) => {
    const triggerBtn = document.querySelector(triggerBtnSelector),
        homeBtn = document.querySelector(homeBtnSelector),
        downloadBtn = document.querySelector(downloadBtnSelector)

    let slideIndex = 1

    const titleWrapper = document.querySelector('.title-wrapper'),
        titleItems = Array.from(titleWrapper.children)

    const visualWrapper = document.querySelector('.visual-wrapper'),
        visualItems = Array.from(visualWrapper.children)


    const titleBase = () => {
        titleItems.forEach(item => {
            gsap.set(`.${item.classList[1]} .title-anim`, {
                y: 100,
                autoAlpha: 0,
            });
        })
        
        gsap.set(`.${titleItems[0].classList[1]} .title-anim`, {
            y: 0,
            autoAlpha: 1,
        });
    }

    const titleScroll = () => {
        gsap.to(`.${titleItems[slideIndex - 1].classList[1]} .title-anim`, {
            duration: 0.6,
            y: -100,
            autoAlpha: 0,
            ease: "power1.inOut",
        });
        gsap.to(`.${titleItems[slideIndex].classList[1]} .title-anim`, {
            duration: 0.6,
            y: 0,
            autoAlpha: 1,
            ease: "power1.inOut",
        });
    }

    const visualBase = () => {
        visualItems.forEach(item => {
            item.style.display = 'none'
        })
        visualItems[0].style.display = 'block'
    }

    const visualScroll = () => {
        visualItems[slideIndex].style.display = 'block'
        visualItems[slideIndex].scrollIntoView({
            behavior: 'smooth'
        })
        setTimeout(() => {
            visualItems[slideIndex - 2].style.display = 'none'
        }, 600)
    }




    titleBase()
    visualBase()

    triggerBtn.addEventListener('click', () => {
        titleScroll()
        visualScroll()
        slideIndex += 1
    })
    document.addEventListener('keyup', event => {
        if (event.key === 'ArrowDown') {
            titleScroll()
            visualScroll()
            slideIndex += 1
        }
    })   
}

export default siteScroll