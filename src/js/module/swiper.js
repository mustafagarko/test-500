new Swiper(".swiper-1", {
  loop: true,
  keyboard: {
    enable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,

  spaceBetween: 40,

  navigation: {
    nextEl: ".swiper-button-nextCustom",
    prevEl: ".swiper-button-prevCustom",
  },
});
