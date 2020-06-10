$(document).ready(function () {

  setTimeout(function () {
    $('.preloader').addClass('loaded');
  });
  setTimeout(function () {
    $('.loaded').addClass('gate');
  }, 3800);
  setTimeout(function () {
    $('.preloader').remove();
  }, 8000);
});