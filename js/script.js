"use strict";

const burgerBtn = document.querySelector(".burger");
const headerNav = document.querySelector(".header__nav");
const bodyEl = document.body;

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger_active");
  headerNav.classList.toggle("header__nav_active");
  bodyEl.classList.toggle("stop-scroll");

  if (burgerBtn.classList.contains("burger_active")) {
    burgerBtn.ariaLabel = "закрыть меню навигации";
  } else {
    burgerBtn.ariaLabel = "открыть меню навигации";
  }
});

headerNav.addEventListener("click", (event) => {
  if (!event.target.classList.contains("nav__link")) {
    return;
  }

  burgerBtn.classList.remove("burger_active");
  headerNav.classList.remove("header__nav_active");
  bodyEl.classList.remove("stop-scroll");

  if (burgerBtn.classList.contains("burger_active")) {
    burgerBtn.ariaLabel = "закрыть меню навигации";
  } else {
    burgerBtn.ariaLabel = "открыть меню навигации";
  }
});

const btnSearchOpen = document.querySelector(".btn-open-search");
const btnSearchClose = document.querySelector(".btn-close-search");
const searchForm = document.querySelector(".search-form");

btnSearchOpen.addEventListener("click", () => {
  btnSearchOpen.classList.add("btn-open-search_active");
  searchForm.classList.add("search-form_active");
});

btnSearchClose.addEventListener("click", () => {
  btnSearchOpen.classList.remove("btn-open-search_active");
  searchForm.classList.remove("search-form_active");
});

const tabEls = document.querySelectorAll(".tabs__button");
const articleLeftEls = document.querySelectorAll(".article__left");
const articleRightEls = document.querySelectorAll(".article__right");

document.querySelector(".tabs").addEventListener("click", (event) => {
  const activeBtn = event.target;
  const activeBtnAttrDataset = event.target.dataset.path;
  if (!event.target.classList.contains("tabs__button")) {
    return;
  }

  tabEls.forEach((el) => {
    el.classList.remove("tabs__button-active");
    if (activeBtn === el) {
      activeBtn.classList.add("tabs__button-active");
    }
  });

  articleLeftEls.forEach((el) => {
    el.classList.remove("article__left-active");
    if (activeBtnAttrDataset === el.dataset.target) {
      el.classList.add("article__left-active");
    }
  });

  articleRightEls.forEach((el) => {
    el.classList.remove("article__right-active");
    if (activeBtnAttrDataset === el.dataset.target) {
      el.classList.add("article__right-active");
    }
  });
});

new Swiper(".hero-swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  effect: "fade",

  a11y: {
    firstSlideMessage: "Это первый слайд",
    lastSlideMessage: "Это последний слайд",
    nextSlideMessage: "Следующий слайд",
    prevSlideMessage: "Предыдущий слайд",
    paginationBulletMessage: "Перейти на слайд {{index}}",
  },
});

new Accordion(".accordion", {
  elementClass: "accordion__item",
  triggerClass: "accordion__btn",
  panelClass: "accordion__content",
  activeClass: "accordion__item_active",
  showMultiple: true,
});
