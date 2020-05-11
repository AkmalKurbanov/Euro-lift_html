$('.nav-toggle-js').on('click', function () {
  $(this).toggleClass('hamburger--open');
  $('.nav-toggle__button--hidden').toggle();
  $('.nav-toggle__button--visible').toggle();
  $('.menu-js').toggleClass('menu-open');
});

if ($(window).width() < 575) {
  $('.nav-toggle__button').remove();
}