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
  function openTab(tabId) {
    $(".tab-slider--body").hide(); 
    $("#" + tabId).fadeIn();        
    $(".tab-slider--nav li").removeClass("active"); 
    $('.tab-slider--nav li[rel="' + tabId + '"]').addClass("active");

    if (tabId === "tab2") {
      $('.tab-slider--tabs').addClass('slide');
    } else {
      $('.tab-slider--tabs').removeClass('slide');
    }
  }

 
  var hash = window.location.hash;
  if (hash && $(hash).length) {
    openTab(hash.substring(1));
  } else {
    openTab("tab1"); 
  }


  $(".tab-slider--nav li").click(function(e) {
    e.preventDefault(); 
    var tabId = $(this).attr("rel");
    openTab(tabId);

    history.replaceState(null, null, "#" + tabId);
  });
});



//event



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


// modal
$(document).ready(function () {
  const modalConfigs = [
    {
      modal: $(".modal__terms"),
      openBtns: $(".open__terms"),
      closeBtns: $(".close__terms")
    },
    {
      modal: $(".modal__privacy"),
      openBtns: $(".open__privacy"),
      closeBtns: $(".close__privacy")
    },
    {
      modal: $(".modal__popup"),
      openBtns: $(".open__popup"),
      closeBtns: $(".close__popup")
    }
  ];

  let scrollPosition = 0;

  modalConfigs.forEach(({ modal, openBtns, closeBtns }) => {
    if (modal.length === 0) return;

    openBtns.on("click", function () {
      scrollPosition = $(window).scrollTop();
      $("html, body").addClass("no-scroll");
      $("body").css("top", `-${scrollPosition}px`);
      modal.show();
    });

    const closeModal = () => {
      modal.hide();
      $("html, body").removeClass("no-scroll");
      $("body").css("top", "");
      $(window).scrollTop(scrollPosition);
    };


 
    closeBtns.on("click", closeModal);

  
    modal.on("click", function (e) {
      if (e.target === this) closeModal();
    });

    modal.find(".modal__content").on("click", function (e) {
      e.stopPropagation();
    });
  });
});













