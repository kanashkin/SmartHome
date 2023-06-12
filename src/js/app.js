import './modules/isWebp.js';
import positions from './modules/positions.js';
import accordion from './modules/accordion.js';
import groupsAnimation from './modules/groupsAnimation.js';
import siteScroll from './modules/siteScroll.js';

document.addEventListener('DOMContentLoaded', () => {
    groupsAnimation('.groups-item', 'groups-item-center', 'groups-item-left', 'groups-item-right')
    positions('.promo-visual')
    positions('.apps-visual')
    positions('.devices-visual')
    accordion('.accordion-trigger', '.accordion__block')
    siteScroll('.arrow', '.header__logo','.button-header')
})