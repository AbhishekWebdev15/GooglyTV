$(document).ready(function () {

// scroll to top ---------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
// ------------

// scroll smooth when clicked on nav link
$('a[href^="#"]').click(function(e) {
  e.preventDefault();

  var $target = this.hash;

  $('html, body').animate({"scrollTop" : $($target).offset().top}, 500);
});


});