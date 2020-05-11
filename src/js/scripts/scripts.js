var headerHeight = $('.header').outerHeight();
document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
var headerMainHeight = $('.header__main').outerHeight();


if ($(window).width() < 575) {
  $('.float-social').css('top', headerMainHeight);
}
$(window).scroll(function () {
  if ($(document).scrollTop() > 1) {
    $('.float-social').css('top', '0');
  } else {
    $('.float-social').css('top', headerMainHeight);
  }
});


