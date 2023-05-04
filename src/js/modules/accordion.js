const accordion = (triggersSelector, blocksSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
        accordionBlocks = document.querySelectorAll(blocksSelector)
  
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                btns.forEach(btn => {
                    btn.classList.remove('active')
                    Array.from(btn.parentNode.parentNode.children).forEach(item => {
                        if (item.classList.contains('accordion-content')) {
                            item.classList.remove('active')
                        }
                    })
                })
            }

            this.disabled = true
            this.classList.toggle('active')

            Array.from(this.parentNode.parentNode.children).forEach(item => {
                let accordionBlock = item.parentNode
                if (item.classList.contains('accordion-content')) {
                    item.classList.toggle('active')
                }
                accordionBlock.style.height = accordionBlock.offsetHeight + item.offsetHeight + 'px'
                accordionBlocks.forEach(block => {
                    if (!item.classList.contains('active')) {
                        block.style.height = ''
                    }
                })
                setTimeout(() => this.disabled = false, 800)
            })
        })
    })
}

export default accordion