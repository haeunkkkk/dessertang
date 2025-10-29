
//intro-hero
$(window).on('scroll', function() {
  var scrollY = $(this).scrollTop();

    $('.cloud-left').css('transform', 'translateX(' + (scrollY * 4) + 'px)');
    $('.cloud-right').css('transform', 'translateX(' + (-scrollY * 4) + 'px)');

    $('.intro-balloon-blue').css('transform', 'translateY(-' + (scrollY * 2) + 'px)');
    $('.intro-balloon-green').css('transform', 'translateY(-' + (scrollY * 3) + 'px)');
});
