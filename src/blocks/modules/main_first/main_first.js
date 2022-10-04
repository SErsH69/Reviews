import $ from 'jquery';

const MainFirst = class MainFirst {
    constructor() {}
    moreText() {
      $('.main_first__more').on('click', function () {
        $(this).toggleClass('isActive');
        $('.main_first__text').toggleClass('isActive');
        if ($(this).hasClass('isActive')) {
            $(this).text('hide text')
        } else {
            $(this).text('read more')
        }
      })
    }
    init() {
        this.moreText();
    }
}

export default MainFirst;