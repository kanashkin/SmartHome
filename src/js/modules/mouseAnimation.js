const mouseAnimaton = (mouseBlocksSelector, animationBlockSelector) => {
    const mouseBlocks = document.querySelectorAll(mouseBlocksSelector),
        animationBlock = document.querySelector(animationBlockSelector)


    mouseBlocks.forEach(item => {
        item.addEventListener('mouseenter', () => {
            animationBlock.style.transition = '2s all'
            if (item.classList.contains('top')) {
                animationBlock.style.top = '60%'
            } else if (item.classList.contains('down')) {
                animationBlock.style.top = '40%'
            } else if (item.classList.contains('left')) {
                animationBlock.style.top = '50%'
                animationBlock.style.right = '2.5%'
            } else if (item.classList.contains('right')) {
                animationBlock.style.top = '50%'
                animationBlock.style.right = '15%'
            }
        })
        item.addEventListener('mouseleave', () => {
            animationBlock.style.top = '50%'
            animationBlock.style.right = ''
        })
    });
}

export default mouseAnimaton