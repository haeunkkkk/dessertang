// main-intro
$(function () {
  $('#main__intro__video').on('ended', function () {
    $('.main__intro').fadeOut(800, function () {
      $(this).remove(); 
      $('.main__content').fadeIn(600);
    });
  });
});


//header 
$(function () {
  function desktopMenu() {
    if ($(window).width() > 1024) {
      // 이벤트 초기화
      $('.header__menu__list, .header__menu__list__sub').off();

      // 마우스 호버로 서브 메뉴 열기
      $('.header__menu__list').on('mouseenter', function () {
        $('.header__menu__list__sub').stop(true, true).slideUp(300);
        $(this).children('.header__menu__list__sub').stop(true, true).slideDown(300);
      });

      $('.header__menu__list').on('mouseleave', function (e) {
        const $this = $(this);
        const $submenu = $this.children('.header__menu__list__sub');
        setTimeout(function () {
          if (!$this.is(':hover') && !$submenu.is(':hover')) {
            $submenu.stop(true, true).slideUp(300);
          }
        }, 100);
      });

      $('.header__menu__list__sub a').on('click', function () {
        $('.header__menu__list__sub').slideUp(300);
      });

    } else {
      mobileMenu();
    }
  }

  function mobileMenu() {
    // 이벤트 초기화
    $('.header__hamburger__btn, .header__hamburger__close').off();

    // 햄버거 클릭 → nav에 'on' 클래스 토글
    $('.header__hamburger__btn').on('click', function(e){
      e.preventDefault();
      $('nav').addClass('on');           // 메뉴 열기
      $(this).hide();
      $('.header__hamburger__close').show();
    });

    // 닫기 버튼 클릭 → nav에서 'on' 제거
    $('.header__hamburger__close').on('click', function(){
      $('nav').removeClass('on');       // 메뉴 닫기
      $(this).hide();
      $('.header__hamburger__btn').show();
    });

    // 메뉴 항목 클릭 → nav 닫기
    $('nav').on('click', '.header__menu__list a, .header__menu__list__sub a', function(){
      $('nav').removeClass('on');
      $('.header__hamburger__close').hide();
      $('.header__hamburger__btn').show();
    });
  }

  // 초기 실행
  desktopMenu();

  // 창 크기 변경 시 다시 실행
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


//process
var circles = $('.progress .circle'); 
var bars = $('.progress .bar');       
var i = 0;

var interval = setInterval(function() {

  $(circles[i]).addClass('active');

  if(i > 0){
    $(circles[i-1]).removeClass('active').addClass('done');
  }
  i++;
}, 500);














