jQuery(document).ready(function() {
   /* 상단영역 고정   */
   var msie6 = $.browser == 'msie' && $.browser.version < 7;
   if (!msie6) {
      var top = jQuery('#comment_top').offset().top - parseFloat(jQuery('#comment_top').css('margin-top').replace(/auto/, 0));
      jQuery(window).scroll(function(event) {
         // what the y position of the scroll is
         var y = jQuery(this).scrollTop();

         // whether that's below the form
         if (y > top) {
            // if so, ad the fixed class
            jQuery('#comment_top').addClass('fixed');
         } else {
            // otherwise remove it
            jQuery('#comment_top').removeClass('fixed');
         }
      });
   }
});
