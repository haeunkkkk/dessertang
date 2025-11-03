// mainintro
$(function(){ 
  $('#main__intro__video').on('ended', function() {
    $('.main__intro__video__wrap').fadeOut(600, function(){
      $(this).remove();  
      $('.main__content').fadeIn(600);
    });
  });
});


//header 
  $(function() {
  function desktopMenu() {
    if ($(window).width() > 1023) {
      // hover 이벤트
      $('.menu-list').off('mouseenter mouseleave click').on('mouseenter', function() {
        $('.sub-menu-list').stop(true,true).slideDown(200);
        $('.header-overlay').stop(true,true).fadeIn(200);
      }).on('mouseleave', function() {
        $('.sub-menu-list').stop(true,true).slideUp(200);
        $('.header-overlay').stop(true,true).fadeOut(200);
      });

      // 메뉴 클릭 시 닫기
      $('.menu').on('click', function() {
        $(this).children('.sub-menu-list').slideUp(200);
        $('.header-overlay').fadeOut(200);
      });

    } else {
      mobileMenu();
    }
  }
    function mobileMenu() {
        // hover/desktop 이벤트 제거
        $('.menu').off('mouseenter mouseleave click');
        $('.sub-menu-list').off('click');
        $('.header-overlay').off('click');

        // 햄버거 버튼 클릭
        $('.hamburger-btn').off('click').on('click', function(e) {
        e.preventDefault();
        $('nav').fadeIn(300);
        $('.sub-menu-list').show();
        $('.header-overlay').fadeIn(200);
        $(this).hide();
        $('.hamburger-close-btn').show();
        });

        // 클로즈 버튼 또는 오버레이 클릭
        $('.hamburger-close-btn, .header-overlay, nav>a').off('click').on('click', function() {
        $('nav').fadeOut(300);
        $('.sub-menu-list').hide();
        $('.header-overlay').fadeOut(200);
        $('.hamburger-close-btn').hide();
        $('.hamburger-btn').show();
        });
    }

    // 초기 실행
    desktopMenu();

    // 창 크기 변경 시
    $(window).on('resize', function() {
        desktopMenu();
    });

});



//about
$(window).on('scroll', function() {
  var scrollY = $(this).scrollTop();

    $('.cloud__left').css('transform', 'translateX(' + (scrollY * 4) + 'px)');
    $('.cloud__right').css('transform', 'translateX(' + (-scrollY * 4) + 'px)');

    $('about__bg__balloon__blue').css('transform', 'translateY(-' + (scrollY * 2) + 'px)');
    $('about__bg__balloon__green').css('transform', 'translateY(-' + (scrollY * 3) + 'px)');
});







