import './modules/isWebp.js';
import positions from './modules/positions.js';
import widgetMusic from './modules/widgetMusic.js';
import scenariosChecked from './modules/scenariosChecked.js';
import accordion from './modules/accordion.js';
import siteScroll from './modules/siteScroll.js';

document.addEventListener('DOMContentLoaded', () => {
    positions('.promo-visual')
    positions('.apps-visual')
    positions('.devices-visual')
    widgetMusic('.widget-music-play')
    scenariosChecked('.real-checkbox')
    accordion('.accordion-trigger', '.accordion-content')
    siteScroll('.arrow')
})