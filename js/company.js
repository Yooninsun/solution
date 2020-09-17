(function($){
    $('.company_bg li > a ').on('click',function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        $('#containerBox').remove();
        $('#boxArea').load(url);
        //클릭시 배경색 바꿔주기
        $(this).parent().addClass('on');
        $(this).parent().siblings().removeClass('on');
        
    })    
    

})(jQuery)
