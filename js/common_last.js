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
  
  //스크롤바가 있을때랑 없을때   
  var deviceSize =767;
  
  function scrollOX (status) {
   $('html').css({
     overflowY:status
   })
   var htmlWidth = $('html').width()
   return htmlWidth
  }
  var  swh = scrollOX('hidden');
  var sws = scrollOX('scroll');
  var swd = swh - sws ;
  
  if ( swd > 0 ) {
    deviceSize = deviceSize - swd
  }
  
  //윈도우 크기에 따라 nav 메뉴 작동법 다르게하기
  init();
  function init() {
    var ww = $(window).width();
    if ( ww > deviceSize && !$('html').hasClass('pc') ) {
      $('html').addClass('pc').removeClass('mobile');
      $('.logo_nav .nav').show();
      $('.depth1 > li').removeClass('on');
      $('.open_nav, .close_nav, .depth2').hide();
    } else if  (ww <= deviceSize && !$('html').hasClass('mobile')){
        $('html').addClass('mobile').removeClass('pc');
        $('.open_nav').show();
        $('.logo_nav .nav, .depth2, .deco_box').hide();
    }
  }
  
  
  /*리사이즈 이벤트가 발생할때마다 윈도우 크기 구하기(리사이즈 부작용 없애기)*/
  $(window).on('resize', function(){
    init()
  
  })
  
  //mobile 화면에서 메뉴바 click 이벤트
  $(".depth1 > li > a").on("click", function (e) {
    e.preventDefault();
    if ($("html").hasClass("mobile")) {
      if ($(this).next().is(".depth2")) {
        $(this).parent().toggleClass("on");
        $(this).parent().find(".depth2").stop().slideToggle(300);
        $(this)
          .parent()
          .siblings()
          .each(function () {
            if ($(this).find(".depth2").css("display") === "block") {
              $(this).find(".depth2").slideUp(300);
              $(this).removeClass("on");
            }
          });
      } else if (!$(this).next().is(".depth2")) {
        var url = $(this).attr("href");
        $("#containerBox").remove();
        $("#boxArea").load(url);
        $(".open_nav").show();
        $(".logo_nav .nav, .close_nav").hide();
        $(".depth1 > li").removeClass("on");
      }
    } else if ($("html").hasClass("pc")) {
      var url = $(this).attr("href");
      $("#containerBox").remove();
      $("#boxArea").load(url);
    }
  }); 
  //pc 화면에서 1단계메뉴에 호버했을때 2단계 메뉴 보이게 하기
  $('.depth1 > li, .deco_box').hover(
    function() {
      if ($('html').hasClass('pc')) {
        $('.depth2').stop().slideDown(300);
        $('.deco_box').stop().slideDown(300);
      }
    },
    function() {
      if ($('html').hasClass('pc')) {
        $('.depth2').stop().slideUp(300);
        $('.deco_box').stop().slideUp(300);
      }
    }
  )
  
  
  //햄버거 버튼 클릭시 네비박스 나타내기
  $('.logo_nav .open_nav').on('click', function(){
      $(this).next().stop().slideDown(300);
      $(this).hide();
      $(this).nextAll('.close_nav').css({display:'block'});
  })
  //닫기 버튼 클릭시 네비 박스 사라지기
  $('.logo_nav .close_nav').on('click', function(){
      $(this).prev().stop().slideUp(300);
      $(this).hide();
      $(this).prevAll('.open_nav').css({display:'block'});
      $('.depth2').hide();
      $('.logo_nav .nav .depth1 > li').removeClass('on')
  })
  
  /* 스크롤 탑값에 따라 헤더아래쪽 선 너비 변경하기*/
  var sct;
  var flag=true;
     $(window).on('scroll',function() {
          var scollSize = $(document).height()- $('#header').height() - $(window).height();
          sct = $(this).scrollTop();
          var wid = (sct/scollSize)*100+'%';
          $('.scrolling-bar')
          .css({
              zIndex : 99999999, 
              opacity : 1,  
              width : wid,
          });
              
          // 스크롤탑값에 따라 헤더구역 고정시키기
          if ( sct > 0 && flag ) {
              $('#header').css({
                  position:'fixed',
                  backgroundColor:'rgba(255,255,255,0.9)'
              })
              flag = false;
          } else if (sct===0 && !flag ) {
              $('#header').css({
                  position:'relative',
                  backgroundColor:'rgba(255,255,255,1)'
              })
              flag=true
          }
  
  
          // var sct = $(this).scrollTop();
          var ourNear = $('.our_work').offset().top - ($(this).height()*0.8);
          if (sct >= ourNear){
              $('.our_work').addClass('on');
          } else {
              $('.our_work').removeClass('on')
          } 
          
          var banNear =$('.banner').offset().top -($(this).height()*0.8);
          if (sct >= banNear){
              $('.banner').addClass('on');
          } else if(sct===0) {
              $('.banner').removeClass('on');
          }
  
          var proNear = $('.gallery').offset().top -($('.gallery').height()*0.8);
          if (sct >= proNear){
              $('.product').addClass('on');
          } else if(sct===0){
              $('.product').removeClass('on');
          }
  
          var utubNear = $('.utube').offset().top -($('.utube').height()*0.8);
          if (sct >= utubNear){
              $('.utube').addClass('on');
          } else if(sct===0) {
              $('.utube').removeClass('on');
          }
          //else if(sct===0)을 넣어주면 스크롤 탑값이 0이 되었을때 띡 사라지는게 없어짐
  
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
  
  // 2단계 메뉴 클릭하면 모든 화면에서 페이지 로드시킨 후, 모바일화면에서는 햄버거 버튼만 보이게 하기
  $('.depth2 > li > a').on('click',function(e){
      e.preventDefault()
      var url = $(this).attr('href')
      $('#containerBox').remove()
      $('#boxArea').load(url)
      if ($("html").hasClass("mobile")) {
        $(".open_nav").show();
        $(".logo_nav .nav, .depth2, .close_nav").hide();
        // $(".depth1 > li").removeClass("on");
      }
  })
  
  
  
  })(jQuery)