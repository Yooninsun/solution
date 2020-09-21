(function($){
//메인 페이지 연결
$('#boxArea').load('main.html')
/* 로딩페이지 연결*/
var minCnt = setInterval(minusCount,1000);
var k = 3;
function minusCount(){
    k--;  
    if(k===0){
        clearInterval(minCnt);
        $('.introAni').fadeOut(300);
            return false;
        }
    }
/* 스크롤 탑값에 따라 헤더아래쪽 선 너비 변경하기*/

var flag=true;
	$(window).on('scroll',function() {
        var scollSize = $(document).height()- $('#header').height() - $(window).height();
        var sct = $(this).scrollTop();
        var wid = (sct/scollSize)*100+'%';
        $('.scrollig-bar')
        .css({
            zIndex : 99999999, 
            opacity : 1, 
            width : wid,
           
        });
        
        
        // 스크롤탑값에 따라 헤더구역 고정시키기
        if ( sct >= 136 && flag ) {
            $('#header').css({
                position:'fixed',
                opacity:'0',
                height:'0px',
                backgroundColor:'rgba(255,255,255,0.9)'
            }).stop().animate({
                height:'136px',
                opacity:'1',
            }, 500)
            flag = false;
        } else if (sct===0 && !flag ) {
            $('#header').css({
                position:'relative',
                height:'0',
                opacity:'0'
            }).stop().animate({
                opacity:1,
                height:'136px',
                backgroundColor:'rgba(255,255,255,1)'
            }, 500)
            flag=true
        }

	});




//로그인 페이지 연결
$('.topmenu a:nth-child(4)').on('click',function(e){
    e.preventDefault()
    var url = $(this).attr('href')
    $('#containerBox').remove()
    $('#boxArea').load(url)
})
//회원가입 페이지 연결
$('.topmenu a:nth-child(5)').on('click',function(e){
    e.preventDefault()
    var url = $(this).attr('href')
    $('#containerBox').remove()
    $('#boxArea').load(url)
})
//사이트 맵 페이지 연결
//회원가입 페이지 연결
$('.topmenu a:nth-child(6)').on('click',function(e){
    e.preventDefault()
    var url = $(this).attr('href')
    $('#containerBox').remove()
    $('#boxArea').load(url)
})

//nav li 클릭시 depth1의 첫번째 서브 페이지 연결
$('.depth1 > li > a').on('click',function(e){
    e.preventDefault()
    var url = $(this).attr('href')
    $('#containerBox').remove()
    $('#boxArea').load(url)
})
//COMPANY의 depth2 페이지 연결
$('.company > li > a').on('click',function(e){
    e.preventDefault()
    var url = $(this).attr('href')
    $('#containerBox').remove()
    $('#boxArea').load(url)
})
//CONTACT의 depth2 페이지 연결
$('.contact > li > a').on('click',function(e){
    e.preventDefault()
    var url = $(this).attr('href')
    $('#containerBox').remove()
    $('#boxArea').load(url)
})
//BOARD의 depth2 페이지 연결
$('.board > li > a').on('click',function(e){
    e.preventDefault()
    var url = $(this).attr('href')
    $('#containerBox').remove()
    $('#boxArea').load(url)
})



})(jQuery)
