import $ from 'jquery';
import 'slick-carousel';

const MainProd = class MainProd {
    constructor() {}
    sliderText() {
        $('.js_main_prod').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            responsive: [
                {
                  breakpoint: 1023,
                  settings: {
                    slidesToShow: 1,
                    variableWidth: true
                  }
                }
            ]
          });
    }
    init() {
        this.sliderText();
    }
}

export default MainProd;