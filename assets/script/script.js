// main-intro
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
    if ($(window).width() > 1024) {
      // hover 이벤트
      $('.header__menu, .header__menu__list__sub, .header__overlay').off('mouseenter mouseleave click').on('mouseenter', function () {
        $('.header__menu__list__sub').stop(true, true).slideDown(200);
        $('.header__overlay').stop(true, true).fadeIn(200);
      }).on('mouseleave', function (e) {
        if (
          !$(e.relatedTarget).closest('.header__menu, .header__menu__list__sub, .header__overlay').length
        ) {
          $('.header__menu__list__sub').stop(true, true).slideUp(400);
          $('.header__overlay').stop(true, true).fadeOut(400);
        }
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
    $('.header__menu__list__sub').off('mouseenter mouseleave click');
    $('.header__overlay').off('mouseenter mouseleave click');

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

  $('.about__bg__cloud__left').css('transform', 'translateX(' + (scrollY * 4) + 'px)');
  $('.about__bg__cloud__left__sub').css('transform', 'translateX(' + (scrollY * 6) + 'px)');
  $('.about__bg__cloud__right__sub').css('transform', 'translateX(' + (-scrollY * 6) + 'px)');
  $('.about__bg__cloud__right').css('transform', 'translateX(' + (-scrollY * 4) + 'px)');

  $('.about__bg__balloon__blue').css('transform', 'translateY(-' + (scrollY * 2) + 'px)');
  $('.about__bg__balloon__green').css('transform', 'translateY(-' + (scrollY * 3) + 'px)');
  $('.about__bg__balloon__yellow').css('transform', 'translateY(-' + (scrollY * 3) + 'px)');
});

$(window).on('scroll', function () {
  var scrollY = $(this).scrollTop();
  var startPoint = $('.innovation').offset().top;

  if (scrollY > startPoint) {
    var relativeY = scrollY - startPoint;
    $('.innovation__bg__cloud__left').css('transform', 'translateX(' + (relativeY * 6) + 'px)');
    $('.innovation__bg__cloud__right').css('transform', 'translateX(' + (-relativeY * 6) + 'px)');
  } else {
    $('.innovation__bg__cloud__left, .innovation__bg__cloud__right').css('transform', 'translateX(0)');
  }
});

$(document).ready(function () {
  function bindDessertCardEvents() {
    if ($(window).width() <= 768) {
      $('.dessert__list__card .btn').off('click').on('click', function () {
        const card = $(this).closest('.dessert__list__card');
        const overlay = card.find('.card__overlay');
        const title = card.find('.menu-title');
        const btn = $(this);

        $('.card__overlay').fadeOut(200);
        $('.menu-title, .btn').fadeIn(200);

        overlay.delay(200).fadeIn(200);
        title.fadeOut(200);
        btn.fadeOut(200);
      });

      $('.dessert__list__card .overlay__close').off('click').on('click', function () {
        const card = $(this).closest('.dessert__list__card');
        card.find('.card__overlay').fadeOut(200);
        card.find('.menu-title, .btn').delay(300).fadeIn(200);
      });
    } else {
      $('.dessert__list__card .btn, .overlay__close').off('click');
      $('.card__overlay').removeAttr('style');
      $('.menu-title, .btn').removeAttr('style');
    }
  }

  bindDessertCardEvents();
  $(window).on('resize', bindDessertCardEvents);
});



//contact
$(function () {
  $(".tab-slider--body").hide();
  $(".tab-slider--body:first").show();
});

$(".tab-slider--nav li").click(function () {
  $(".tab-slider--body").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
  if ($(this).attr("rel") == "tab2") {
    $('.tab-slider--tabs').addClass('slide');
  } else {
    $('.tab-slider--tabs').removeClass('slide');
  }
  $(".tab-slider--nav li").removeClass("active");
  $(this).addClass("active");
});

$(function () {
  $('.region__select').each(function () {
    const $wrapper = $(this);
    const $select = $wrapper.find('select');
    const $custom = $wrapper.find('.custom__select');
    const $selected = $custom.find('.selected');
    const $options = $custom.find('li');
    const $optionList = $custom.find('.options');

    $custom.on('click', function (e) {
      e.stopPropagation();
      $custom.toggleClass('open');
    });

    $options.on('click', function (e) {
      e.stopPropagation();
      const value = $(this).data('value');
      const text = $(this).text();

      $selected.text(text);
      $select.val(value).change();
      $custom.removeClass('open');
      $optionList.slideUp(150);
    });
  });

  $(document).on('click', function () {
    $('.custom__select').removeClass('open');
    $('.custom__select .options').slideUp(150);
  });
});














