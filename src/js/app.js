import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import $ from 'jquery';

import FooterBlock from '../blocks/modules/footer/footer.js';
import FaqBlock from '../blocks/modules/faq_block/faq_block.js';
import MainProd from '../blocks/modules/main_prod/main_prod.js';

$(function () {
    const footerBlock = new FooterBlock();
    const faqBlock = new FaqBlock();
    const mainProd = new MainProd();
    
    $('table').wrap('<div class="table_block"></div>');

    footerBlock.init();
    faqBlock.init();
    mainProd.init();
});