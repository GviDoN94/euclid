"use strict";
const btnSearchOpen = document.querySelector(".btn-open-search");
const btnSearchClose = document.querySelector(".btn-close-search");
const searchForm = document.querySelector(".search-form");

const tabEls = document.querySelectorAll(".tabs__button");
const articleLeftEls = document.querySelectorAll(".article__left");
const articleRightEls = document.querySelectorAll(".article__right");

const swiper = new Swiper('.hero-swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  effect: 'fade',
});

btnSearchOpen.addEventListener("click", () => {
  btnSearchOpen.classList.add("btn-open-search_active");
  searchForm.classList.add("search-form_active");
});

btnSearchClose.addEventListener("click", () => {
  btnSearchOpen.classList.remove("btn-open-search_active");
  searchForm.classList.remove("search-form_active");
});

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

const burgerBtn = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger_active');
  headerNav.classList.toggle('header__nav_active');
})
