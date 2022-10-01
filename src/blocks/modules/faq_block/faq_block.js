import $ from 'jquery';

const FaqBlock = class FaqBlock {
    constructor() {}
    toggleBlock() {
        $('.faq_block__block').on('click', function() {
            $(this).toggleClass('isOpened');
            if($(this).hasClass('isOpened')) {
                $(this).find('.faq_block__txt').show(400);
            } else {
                $(this).find('.faq_block__txt').hide(400);
            }
        })
    }
    init() {
        this.toggleBlock();
    }
}

export default FaqBlock;