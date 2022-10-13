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
import ServBlock from '../blocks/modules/serv_block/serv_block.js';

$(function () {
    const header = new Header();
    const mainFirst = new MainFirst();
    const footerBlock = new FooterBlock();
    const faqBlock = new FaqBlock();
    const mainProd = new MainProd();
    const mainWeb = new MainWeb();
    const servBlock = new ServBlock();
    
    $('table').wrap('<div class="table_block"></div>');      
    $('.main_first__more').on('click', function () {
        $(this).toggleClass('isActive');
        $('.content__text').toggleClass('isActive');
        if ($(this).hasClass('isActive')) {
            $(this).text('hide text')
        } else {
            $(this).text('read more')
        }
      })

    header.init();
    mainFirst.init();
    footerBlock.init();
    faqBlock.init();
    mainProd.init();
    mainWeb.init();
    servBlock.init();
});