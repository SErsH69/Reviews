import $ from 'jquery';

const FooterBlock = class FooterBlock {
    constructor() {}
    openedMenu() {
      $('.footer__menu--tit').on('click', function () {
        $(this).toggleClass('isOpened')
        $(this).parent().find('ul').toggleClass('isOpened')
      })
    }
    appendInfo() {
      $(window).resize(function(){
        if (window.matchMedia("(min-width: 1024px)").matches) {
            $('.footer__info--logo').appendTo($('.footer__info'));
            $('.footer__info--socs').appendTo($('.footer__info'));
        }
        if (window.matchMedia("(max-width: 1023px)").matches) {
          $('.footer__info--logo').appendTo($('.footer__mob'));
          $('.footer__info--socs').appendTo($('.footer__mob'));
        }
      });
      $(window).trigger('resize');
      if (window.matchMedia("(min-width: 1024px)").matches) {
          $('.footer__info--logo').appendTo($('.footer__info'));
          $('.footer__info--socs').appendTo($('.footer__info'));
      }
      if (window.matchMedia("(max-width: 1023px)").matches) {
        $('.footer__info--logo').appendTo($('.footer__mob'));
        $('.footer__info--socs').appendTo($('.footer__mob'));
      }
    }
    init() {
        this.openedMenu();
        this.appendInfo();
    }
}

export default FooterBlock;