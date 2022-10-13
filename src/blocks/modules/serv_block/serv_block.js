import $ from 'jquery';

const ServBlock = class ServBlock {
    constructor() {}
    copyButton() {
        $('.serv_block__copy').on('click', function() {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(this).find('span').text()).select();
            document.execCommand("copy");
            $temp.remove();
        
            $(this).text('Скопировано!');
        });
    }
    init() {
        this.copyButton();
    }
}

export default ServBlock;