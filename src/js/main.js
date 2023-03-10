import modals from './modules/modals';
import slider from './modules/sliders';
import form from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', ()=>{
    'use strict';


    let modalState = {};

    modals();
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical', '', '');
    form(modalState);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price', modalState);
    filter();
    pictureSize('.sizes-block');
    // accordion('.accordion-heading', '.accordion-block'); //Для первого и второго способа 
    accordion('.accordion-heading'); //Для третьего способа
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
    drop();
});