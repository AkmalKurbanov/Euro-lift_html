var mainItem = $('.main-item-js').outerWidth();
var distance = $(".container").offset().left;
var widthMenu = mainItem + distance
$('.menu-js').css('width', widthMenu);
$('.menu-js').css('padding-left', distance + 15);

$(document).mouseup(function (e) {
  var div = $(".menu-js, .nav-toggle-js");
  if (!div.is(e.target) &&
    div.has(e.target).length === 0) {
    div.removeClass('menu-open');
    $('.nav-toggle-js').removeClass('hamburger--open');
    $('.nav-toggle__button--visible').hide();
    $('.nav-toggle__button--hidden').show();
  }
});




