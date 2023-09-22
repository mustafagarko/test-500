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
  spaceBetween: 40,

  navigation: {
    nextEl: ".swiper-button-nextCustom",
    prevEl: ".swiper-button-prevCustom",
  },
});
