var swiper = new Swiper('#dailyBanner', {
    slideToClickedSlide : true,
    loopAdditionalSlides : 1,
    loop:true,
    pagination: {
      el: "#dailyBanner .swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: "#dailyBanner .swiper-button-next",
      prevEl: "#dailyBanner .swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    width:245
});

var swiper2 = new Swiper('#topSlide', {
    loop:true,
    pagination: {
      el: "#topSlide .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#topSlide .swiper-button-next",
      prevEl: "#topSlide .swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
});
