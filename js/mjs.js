var jb = jQuery.noConflict();
jb(document).ready(function(){
jb('#rollingNotice').slick({
    autoplay:true,
    vertical : true, /*수직슬라이드*/
    // fade: true, 슬라이드가 아닌 fade효과처리
});
  jb(".searchBtn").click(function(){
      jb(".search_bar").addClass('on');
    });

    jb(".searchClose").click(function(){
      jb(".search_bar").removeClass('on');
    });
});

$(function() {
      $(window).scroll(function() {
          if ($(this).scrollTop() > 500) {
              $('#topLink').fadeIn();
          } else {
              $('#topLink').fadeOut();
          }
      });

      $("#topLink").click(function() {
          $('html, body').animate({
              scrollTop : 0
          }, 1000);
          return false;
      });
  });
