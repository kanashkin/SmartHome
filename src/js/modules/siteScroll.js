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
        if (visualItems[slideIndex].classList[1] === 'click-wrapper') {
            visualItems[slideIndex - 1].style.display = 'none'
            widgetSwitcher('.app__widgets__block.cloneable', '.widget-switcher.cloneable', '.app__click')
        } else {
            visualItems[slideIndex].scrollIntoView({
                behavior: 'smooth'
            })
            setTimeout(() => {
                visualItems[slideIndex - 2].style.display = 'none'
                visualItems[0].style.display = 'block'
            }, 500)
        }
    }

    const toHome = () => {
        gsap.to(`.${titleItems[slideIndex - 1].classList[1]} .title-anim`, {
            duration: 0.6,
            y: 100,
            autoAlpha: 0,
            ease: "power1.inOut",
        });
        gsap.to(`.${titleItems[0].classList[1]} .title-anim`, {
            duration: 0.6,
            y: 0,
            autoAlpha: 1,
            ease: "power1.inOut",
        });

        visualItems[0].scrollIntoView({
            behavior: 'smooth'
        })
        setTimeout(() => {
            visualItems[slideIndex - 2].style.display = 'none'
        }, 500)

        slideIndex = 1
    }

    const toDownload = () => {
        gsap.to(`.${titleItems[slideIndex - 1].classList[1]} .title-anim`, {
            duration: 0.6,
            y: 100,
            autoAlpha: 0,
            ease: "power1.inOut",
        });
        gsap.to(`.${titleItems[titleItems.length - 1].classList[1]} .title-anim`, {
            duration: 0.6,
            y: 0,
            autoAlpha: 1,
            ease: "power1.inOut",
        });

        visualItems[visualItems.length - 1].style.display = 'block'
        visualItems[visualItems.length - 1].scrollIntoView({
            behavior: 'smooth'
        })
        setTimeout(() => {
            visualItems[slideIndex - 2].style.display = 'none'
            visualItems[0].style.display = 'block'
        }, 500)

        slideIndex = visualItems.length
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

    homeBtn.addEventListener('click', () => {
        toHome()
    })

    downloadBtn.addEventListener('click', () => {
        toDownload()
    })

}

export default siteScroll