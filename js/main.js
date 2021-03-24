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
    imageSrc: "img/newslatter--bg.jpg",
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

  const map = document.querySelector(".map-wrap");
  map.addEventListener("mouseover", function () {
    map.insertAdjacentHTML(
      "afterBegin",
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1223.4653431915197!2d55.13376898384139!3d25.07845799040722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f14aa4e136d0d%3A0x7fc04c4bbbd0db2!2sHilton%20Dubai%20Jumeirah!5e0!3m2!1sru!2sru!4v1615319539825!5m2!1sru!2sru" allowfullscreen="" aria-hidden="false" tabindex="0" class="map"></iframe>'
    );
  });
});