$(document).ready(function () {
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
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  const openModalBtnAll = Array.from(document.querySelectorAll("[data-modal]"));
  const openModalBtn = document.querySelector("[data-modal]");
  const closeModalBtn = document.querySelector(".modal__close");

  openModalBtnAll.forEach((item) => {
    item.addEventListener("click", openModal);
  });

  closeModalBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", closeModalEsc);

  function openModal() {
    const modalWindow = document.querySelector(".modal__window");
    const modalOverlay = document.querySelector(".modal__overlay");
    modalWindow.classList.add("modal__window--visible");
    modalOverlay.classList.add("modal__overlay--visible");
  }
  function closeModal(e) {
    e.preventDefault();
    const modalWindow = document.querySelector(".modal__window");
    const modalOverlay = document.querySelector(".modal__overlay");
    modalWindow.classList.remove("modal__window--visible");
    modalOverlay.classList.remove("modal__overlay--visible");
  }
  function closeModalEsc(e) {
    if (e.keyCode === 27) {
      closeModal(e);
    }
  }

  $(".phone-us").mask("+7 (000) 000-00-00");

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "At least 2 axle boxes",
        },
        email: {
          required: "Enter your email address",
          email: "Use format of name@domain.com",
        },
        phone: {
          required: "Enter your phone number",
          minlength: "Please enter the full number",
        },
      },
    });
  });

  AOS.init({
    disable: "mobile",
  });
});
