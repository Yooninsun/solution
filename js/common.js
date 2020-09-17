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
