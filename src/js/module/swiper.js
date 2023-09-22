export default new Swiper(".swiper", {
  loop: true,
  keyboard: {
    enable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  slidesPerView: 1,
  breakpoints: {
    // when window width is <= 499px

    // when window width is <= 999px
    1000: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  // centeredSlides: true,
  spaceBetween: 40,

  navigation: {
    nextEl: ".swiper-button-nextCustom",
    prevEl: ".swiper-button-prevCustom",
  },
});
