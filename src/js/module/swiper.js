export default new Swiper(".swiper", {
  loop: true,
  keyboard: {
    enable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  slidesPerView: 1.1,
  // slidesPerGroup: 1.1,
  centeredSlides: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-nextCustom",
    prevEl: ".swiper-button-prevCustom",
  },
});
