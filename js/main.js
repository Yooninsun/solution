/**************slide slick 연결********************/

$('.slide_inner').slick({
    autoplay: true,            
    autoplaySpeed: 2000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></    button>',
    nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></   button>',
    })
    
    $(window).scroll(function(){
        var sct = $(this).scrollTop();
        var ourNear = $('.our_work').offset().top - ($(this).height()*0.8);
        if (sct >= ourNear){
            $('.our_work').addClass('on');
        } else {
            $('.our_work').removeClass('on')
        } 
        
        var banNear =$('.banner').offset().top -($(this).height()*0.8);
        if (sct >= banNear){
            $('.banner').addClass('on');
        } else {
            $('.banner').removeClass('on');
        }

        var proNear = $('.gallery').offset().top -($('.gallery').height()*0.8);
        if (sct >= proNear){
            $('.product').addClass('on');
        } else {
            $('.product').removeClass('on');
        }

        var utubNear = $('.utube').offset().top -($('.utube').height()*0.8);
        if (sct >= utubNear){
            $('.utube').addClass('on');
        } else {
            $('.utube').removeClass('on');
        }

    })

    
//border에 자세히 보기 버튼에 notice 페이지 연결
$('.more').on('click',function(e){
    e.preventDefault()
    var url = $(this).attr('href')
    $('#containerBox').remove()
    $('#boxArea').load(url)
})



