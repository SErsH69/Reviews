import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import $ from 'jquery';
MainFirst
import Header from '../blocks/modules/header/header.js';
import MainFirst from '../blocks/modules/main_first/main_first.js';
import FooterBlock from '../blocks/modules/footer/footer.js';
import FaqBlock from '../blocks/modules/faq_block/faq_block.js';
import MainProd from '../blocks/modules/main_prod/main_prod.js';
import MainWeb from '../blocks/modules/main_websites/main_websites.js';

$(function () {
    const header = new Header();
    const mainFirst = new MainFirst();
    const footerBlock = new FooterBlock();
    const faqBlock = new FaqBlock();
    const mainProd = new MainProd();
    const mainWeb = new MainWeb();
    
    $('table').wrap('<div class="table_block"></div>');

    header.init();
    mainFirst.init();
    footerBlock.init();
    faqBlock.init();
    mainProd.init();
    mainWeb.init();
});