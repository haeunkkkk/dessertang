// mainintro
$(function () {
  $('#main__intro__video').on('ended', function () {
    $('.main__intro__video__wrap').fadeOut(600, function () {
      $(this).remove();
      $('.main__content').fadeIn(600);
    });
  });
});


//header 
$(function () {
  function desktopMenu() {
    if ($(window).width() > 1023) {
      // hover 이벤트
      $('.header__menu').off('mouseenter mouseleave click').on('mouseenter', function () {
        $('.header__menu__list__sub').stop(true, true).slideDown(200);
        $('.header__overlay').stop(true, true).fadeIn(200);
      }).on('mouseleave', function () {
        $('.header__menu__list__sub').stop(true, true).slideUp(200);
        $('.header__overlay').stop(true, true).fadeOut(200);
      });

      // 메뉴 클릭 시 닫기
      $('.header__menu__list').on('click', function () {
        $(this).children('.header__menu__list__sub').slideUp(200);
        $('.header__overlay').fadeOut(200);
      });

    } else {
      mobileMenu();
    }
  }
  function mobileMenu() {
    // hover/desktop 이벤트 제거
    $('.header__menu__list').off('mouseenter mouseleave click');
    $('.header__menu__list__sub').off('click');
    $('.header__overlay').off('click');

    // 햄버거 버튼 클릭
    $('.header__hamburger__btn').off('click').on('click', function (e) {
      e.preventDefault();
      $('nav').fadeIn(300);
      $('header__menu__list__sub').show();
      $('.header__overlay').fadeIn(200);
      $(this).hide();
      $('.header__hamburger__close').show();
    });

    // 클로즈 버튼 또는 오버레이 클릭
    $('.header__hamburger__close, .header__overlay, nav>a').off('click').on('click', function () {
      $('nav').fadeOut(300);
      $('.header__menu__list__sub').hide();
      $('.header__overlay').fadeOut(200);
      $('.header__hamburger__close').hide();
      $('.header__hamburger__btn').show();
    });
  }

  // 초기 실행
  desktopMenu();

  // 창 크기 변경 시
  $(window).on('resize', function () {
    desktopMenu();
  });

});



//about
$(window).on('scroll', function () {
  var scrollY = $(this).scrollTop();

  $('.cloud__left').css('transform', 'translateX(' + (scrollY * 4) + 'px)');
  $('.cloud__left__sub').css('transform', 'translateX(' + (scrollY * 6) + 'px)');
  $('.cloud__right__sub').css('transform', 'translateX(' + (-scrollY * 6) + 'px)');
  $('.cloud__right').css('transform', 'translateX(' + (-scrollY * 4) + 'px)');

  $('.about__bg__balloon__blue').css('transform', 'translateY(-' + (scrollY * 2) + 'px)');
  $('.about__bg__balloon__green').css('transform', 'translateY(-' + (scrollY * 3) + 'px)');
  $('.about__bg__balloon__yellow').css('transform', 'translateY(-' + (scrollY * 3) + 'px)');
});







