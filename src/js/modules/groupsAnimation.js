const groupsAnimation = (itemsSelector, centerItemSelector, leftItemSelector, rightItemSelector) => {
    let items = Array.from(document.querySelectorAll(itemsSelector))

    items.forEach(item => {
        item.addEventListener('click', e => {
            let currentItem = items.indexOf(item)
            item.classList.add('groups-item-center')
            if (item.classList.contains(leftItemSelector)) {
                items[currentItem - 1].classList.add('groups-item-right')
                items[currentItem + 1].classList.add('groups-item-left')
                items = [item, items[currentItem + 1], items[currentItem - 1]]
            } else if (item.classList.contains(rightItemSelector)) {
                items[currentItem - 1].classList.add('groups-item-right')
                items[currentItem - 2].classList.add('groups-item-left')
                items = [item, items[currentItem - 2], items[currentItem - 1]]
            }
            items.forEach(item => {
                item.style.animationName = 'groupsAnimation'
                item.classList.remove(item.classList[1])
                setTimeout(() => item.style.animationName = 'none', 1000)
            })
        })
    })
}

export default groupsAnimation