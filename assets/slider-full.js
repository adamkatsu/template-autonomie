var swiper = new Swiper(".slider-full", {
  loop: true,
  pagination: {
    el: ".slider-full-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".slider-full-next",
    prevEl: ".slider-full-prev",
  },
});
