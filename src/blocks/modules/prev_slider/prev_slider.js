import $ from 'jquery';
import 'slick-carousel';

const PrevSlider = class PrevSlider {
    constructor() {}
    sliderPrev() {
        $('.sl_prev').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            responsive: [
                {
                  breakpoint: 1280,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 1023,
                  settings: {
                    slidesToShow: 1,
                    arrows: false,
                    variableWidth: true
                  }
                }
            ]
          });
    }
    init() {
        this.sliderPrev();
    }
}

export default PrevSlider;