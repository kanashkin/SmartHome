const scenariosChecked = (checkboxesSelector) => {
    const checkboxes = document.querySelectorAll(checkboxesSelector)

    checkboxes.forEach(item => {
        item.addEventListener('click', (e) => {
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = false
            }
            e.target.checked = true
        })
    })
}

export default scenariosChecked