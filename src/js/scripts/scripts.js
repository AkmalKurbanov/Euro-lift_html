var headerHeight = $('.header').outerHeight();
var wrapper = $(".container").offset().left;
var wrapperLine2 = $('.about__total-item').outerWidth();
var headerMainHeight = $('.header__main').outerHeight();


document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
document.documentElement.style.setProperty('--wrapper', `${wrapper}px`);

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



// $('.title').each(function (index) {
//   var characters = $(this).text().split("");

//   $this = $(this);
//   $this.empty();
//   $.each(characters, function (i, el) {
//     $this.append("<span>" + el + "</span");
//   });

// });


if ($(window).width() > 575) {
  const cards = document.querySelectorAll('.card');

  Array.from(cards).map(card => {
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
  })

  function startRotate(e) {
    const cardItem = this.querySelector('.card__item');
    const halfHeight = cardItem.offsetHeight / 2;
    const rotateX = `rotateX(${-(e.offsetY - halfHeight) / 20}deg)`;
    const rotateY = `rotateY(${(e.offsetX - halfHeight) / 25}deg)`;
    cardItem.style.transform = `${rotateX}${rotateY}`;
  }

  function stopRotate() {
    const cardItem = this.querySelector('.card__item');
    cardItem.style.transform = `rotateX(0) rotateY(0)`;
  }


  $('.news__item').on('mousemove', function (e) {
    var amountMovedX = 20 - 30 * ((e.pageX + 100) / $(document).width());
    var amountMovedY = 20 - 30 * ((e.pageY + 100) / $(window).height());

    $(this).find('.news__date').css({
      'margin-left': '-' + amountMovedX + 'px',
      'margin-top': '-' + amountMovedY + 'px'
    });


  });

}



var rellax = new Rellax('.scroll-effect');

$(window).resize(function () {

  if ($('header').width() == 320) {

    $('.section').removeClass('parallax-window')

  }

});

$('.parallax-window').parallax({
  overScrollFix: true,
  androidFix: true
});