export default new Swiper(".swiper", {
  loop: true,
  keyboard: {
    enable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  slidesPerView: 1.15,
  centeredSlides: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-nextCustom",
    prevEl: ".swiper-button-prevCustom",
  },
});
