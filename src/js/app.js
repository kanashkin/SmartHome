import './modules/isWebp.js';
import positions from './modules/positions.js';
import widgetMusic from './modules/widgetMusic.js';
import scenariosChecked from './modules/scenariosChecked.js';
import widgetSwitcher from './modules/widgetSwitcher.js';

document.addEventListener('DOMContentLoaded', () => {
    positions('.promo__visual')
    positions('.apps__visual')
    widgetMusic('.widget-music-play')
    scenariosChecked('.real-checkbox')
    widgetSwitcher('.app__widgets__block.cloneable', '.widget-switcher.cloneable', '.app__click')
})