"use strict";

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
