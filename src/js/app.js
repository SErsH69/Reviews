import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import $ from 'jquery';

import FooterBlock from '../blocks/modules/footer/footer.js';
import FaqBlock from '../blocks/modules/faq_block/faq_block.js';
import MainProd from '../blocks/modules/main_prod/main_prod.js';
import MainWeb from '../blocks/modules/main_websites/main_websites.js';

$(function () {
    const footerBlock = new FooterBlock();
    const faqBlock = new FaqBlock();
    const mainProd = new MainProd();
    const mainWeb = new MainWeb();
    
    $('table').wrap('<div class="table_block"></div>');

    footerBlock.init();
    faqBlock.init();
    mainProd.init();
    mainWeb.init();
});