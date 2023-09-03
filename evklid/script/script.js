window.addEventListener("DOMContentLoaded", function () {
  //swiper slider

  const swiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });

  //accordeon jquery

  $(function () {
    $("#accordion").accordion();
    $("#accordion").accordion({
      collapsible: true,
    });
    $("#accordion").accordion({
      active: false,
    });
    $("#accordion").accordion({
      heightStyle: "content",
    });
    $("#accordion").accordion({
      animate: 150,
    });
  });

  //Burger menu

  const burger = document.querySelector(".burger");
  const closeBtn = document.querySelector(".close-btn");
  const mainNav = document.querySelector(".header-nav__list");

  burger.addEventListener("click", function openBurger() {
    mainNav.classList.add("header-nav__list--open");
  });

  closeBtn.addEventListener("click", function closeBurger() {
    mainNav.classList.remove("header-nav__list--open");
  });

  //Section work slider

  document.querySelectorAll(".tabs__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;

      document
        .querySelectorAll(".section-work__slide")
        .forEach(function (tabContent) {
          tabContent.classList.remove("section-work__slide--active");
        });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("section-work__slide--active");
      document
        .querySelector(".btn-reset")
        .classList.remove("tabs__btn--active");
    });
  });
});
