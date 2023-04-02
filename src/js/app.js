import './modules/isWebp.js';
import positions from './modules/positions.js';
import widgetMusic from './modules/widgetMusic.js';
import scenariosChecked from './modules/scenariosChecked.js';
import accordion from './modules/accordion.js';
import pageScroll from './modules/pageScroll.js';

document.addEventListener('DOMContentLoaded', () => {
    positions('.promo__visual')
    positions('.apps__visual')
    positions('.devices__visual')
    widgetMusic('.widget-music-play')
    scenariosChecked('.real-checkbox')
    accordion('.accordion-trigger', '.accordion-content')
    pageScroll('.arrow', '.page-wrapper', '.header__logo', '.button-header')
})
