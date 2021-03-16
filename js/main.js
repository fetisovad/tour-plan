const hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

$(".parallax-window").parallax({
  imageSrc: "img/newslatter-bg.jpg",
  speed: "0.7",
});

const mobileMenu = document.querySelector(".menu-button");
mobileMenu.addEventListener("click", () => {
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
})
