// main-intro
$(function () {
  const introPlayed = localStorage.getItem("introPlayed");

  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {

    if (introPlayed === "true") {
      $('.main__intro').remove();
      $('.main__content').show();
      $('body').css('overflow', 'auto');
      return;
    }

    const $video = $('#main__intro__video');

    if ($video.length && $video.is(':visible')) {
      $('body').css('overflow', 'hidden');

      $video.on('ended', function () {

        localStorage.setItem("introPlayed", "true");

        $('.main__intro').fadeOut(300, function () {
          $(this).remove();
          $('body').css('overflow', 'auto');
          $('.main__content').fadeIn(300);
        });
      });
    }
  }
});



//header
$(function () {
  $(".hamburger__menu").click(function () {
    $("body, html").toggleClass("open-menu");
  });

  $('.header__wrapper nav ul li .menu__icon').click(function () {
    if ($(window).width() <= 1024) {
      const $submenu = $(this).siblings("div.sub__menu");

      $submenu.stop(true, true).fadeToggle(200);

      $(this)
        .closest("li")
        .siblings()
        .find("div.sub__menu")
        .stop(true, true)
        .fadeOut(200);

      $(this).toggleClass("open-menu");
      $(this)
        .closest("li")
        .siblings()
        .find(".menu__icon")
        .removeClass("open-menu");
    }
  });
});








//about
$(window).on('scroll', function () {
  var scrollY = $(this).scrollTop();

  $('.about__bg__cloud__left').css('transform', 'translateX(' + (scrollY * 2) + 'px)');
  $('.about__bg__cloud__left__sub').css('transform', 'translateX(' + (scrollY * 2) + 'px)');
  $('.about__bg__cloud__right__sub').css('transform', 'translateX(' + (-scrollY * 2) + 'px)');
  $('.about__bg__cloud__right').css('transform', 'translateX(' + (-scrollY * 2) + 'px)');
  $('.innovation__bg__cloud__left').css('transform', 'translateX(' + (-scrollY * 2) + 'px)');
  $('.innovation__bg__cloud__right').css('transform', 'translateX(' + (scrollY * 2) + 'px)');

  $('.about__bg__balloon__blue').css('transform', 'translateY(-' + (scrollY * 2) + 'px)');
  $('.about__bg__balloon__green').css('transform', 'translateY(-' + (scrollY * 3) + 'px)');
  $('.about__bg__balloon__yellow').css('transform', 'translateY(-' + (scrollY * 3) + 'px)');


});

//menu
$(function () {
  function bindDessertCardEvents() {
    if ($(window).width() <= 768) {
      $('.dessert__list__card .btn').off('click').on('click', function () {
        const card = $(this).closest('.dessert__list__card');
        const overlay = card.find('.card__overlay');
        const btn = $(this);

        $('.card__overlay').fadeOut(200);


        overlay.delay(200).fadeIn(200);
        title.fadeOut(200);
        btn.fadeOut(200);
      });

      $('.dessert__list__card .overlay__close').off('click').on('click', function () {
        const card = $(this).closest('.dessert__list__card');
        card.find('.card__overlay').fadeOut(200);

      });
    } else {
      $('.dessert__list__card .btn, .overlay__close').off('click');
      $('.card__overlay').removeAttr('style');
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

  $(".tab-slider--trigger").on("click", function (e) {
    e.preventDefault();

    const tabId = $(this).attr("rel");
    openTab(tabId);
  });


  const urlParams = new URLSearchParams(window.location.search);
  const tabParam = urlParams.get("tab");

  if (tabParam === "2") {
    openTab("tab2");
  } else {
    openTab("tab1");
  }

});
$(function () {

  $('.custom__select .arrow').on('click', function (e) {
    e.preventDefault();
    const $custom = $(this).closest('.custom__select');
    $custom.find('ul.options').slideToggle(200);
    $custom.toggleClass('open');
  });

  $('.custom__select .options li').on('click', function () {
    const value = $(this).data('value');
    const $custom = $(this).closest('.custom__select');
    $custom.find('.selected').text(value);
    $custom.find('ul.options').slideUp(200);
    $custom.removeClass('open');

    $custom.prev('select').val(value);
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.custom__select').length) {
      $('.custom__select ul.options').slideUp(200);
      $('.custom__select').removeClass('open');
    }
  });
});
$('.btn').click(function () {
  // 현재 열려있는 form 찾기
  const activeForm = $('.tab-slider--body:visible').find('form');

  // 제출시도
  activeForm[0].reportValidity();
  // HTML 기본 validation 실행
});





//event



//process
var circles = $('.progress .circle');
var bars = $('.progress .bar');
var i = 0;

var interval = setInterval(function () {

  $(circles[i]).addClass('active');

  if (i > 0) {
    $(circles[i - 1]).removeClass('active').addClass('done');
  }
  i++;
}, 2000);


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













