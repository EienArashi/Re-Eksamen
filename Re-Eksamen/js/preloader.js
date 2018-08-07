
/*$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).load(function() {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
});

$(window).on('DOMContentLoaded', function() {
    var Body = $('body');
    Body.addClass('preloader-site');
});
 $(window).on('load', function() {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
});*/

$(window).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(document).load(function() {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
});
