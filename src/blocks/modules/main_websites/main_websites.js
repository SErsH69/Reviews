import $ from 'jquery';

const MainWeb = class MainWeb {
    constructor() {}
    openCard() {
        $('.main_websites__button').on('click', function() {
            $(this).toggleClass('isOpened');
            $(this).parent().find('.main_websites__text-hide').toggleClass('isOpened');
        })
    }
    init() {
        this.openCard();
    }
}

export default MainWeb;