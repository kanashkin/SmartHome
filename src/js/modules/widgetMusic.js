const widgetMusic = (playBtnSelector) => {
    const playBtn = document.querySelector(playBtnSelector)

    playBtn.addEventListener('click', () => {
        playBtn.classList.toggle('active')

        if (playBtn.classList.contains('active') === true) {
            playBtn.style.backgroundImage = "url('../img/important/widgets/widget-music/pause.png')"
        } else {
            playBtn.style.backgroundImage = "url('../img/important/widgets/widget-music/play.png')"
        }
    })


}

export default widgetMusic