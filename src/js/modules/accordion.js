const accordion = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
        blocks = document.querySelectorAll(itemsSelector)

    blocks.forEach(block => {
        block.classList.add('fadeInDown')
    })
  
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
            this.classList.toggle('active')
            Array.from(this.parentNode.parentNode.children).forEach(item => {
                if (item.classList.contains('accordion-content')) {
                    item.classList.toggle('active')
                }
            })
        })
    })
}

export default accordion