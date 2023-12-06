// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;

const searchBtn = document.getElementById("searchBtn");
const searchMenu = document.getElementById("searchMenu");
const searchClose = document.getElementById("searchClose");
const userBtn = document.getElementById("userBtn");
const userMenu = document.getElementById("userMenu");

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");

  searchMenu.classList.remove("active");
  searchBtn.classList.remove("active");
  userMenu.classList.remove("active");
  userBtn.classList.remove("active");
};
window.addEventListener("click", function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
});
// menu end
// search start
searchBtn.onclick = () => {
  userMenu.classList.remove("active");
  userBtn.classList.remove("active");
  searchMenu.classList.toggle("active");
  searchBtn.classList.toggle("active");

  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
};

searchClose.onclick = () => {
  searchMenu.classList.remove("active");
  searchBtn.classList.remove("active");
};

userBtn.onclick = () => {
  searchMenu.classList.remove("active");
  searchBtn.classList.remove("active");
  userMenu.classList.toggle("active");
  userBtn.classList.toggle("active");

  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
};
// search end
// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// tab start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// tab end
// // faq start
// const faqBtn = document.querySelectorAll(".faqBtn");
// const faqEvent = document.querySelectorAll(".faqEvent");
// faqBtn.forEach((e) => {
//   onFaqClick(faqBtn, faqEvent, e);
// });
// function onFaqClick(faqBtns, faqItems, item) {
//   item.addEventListener("click", function (e) {
//     let currentBtn = item;
//     let faqId = currentBtn.getAttribute("data-faq");
//     let currentTab = document.querySelector(faqId);
//     if (currentBtn.classList.contains("active")) {
//       const faq = currentBtn.parentElement.querySelector(".faqEvent");
//       if (faq) {
//         faq.classList.remove("active");
//         currentBtn.classList.remove("active");
//       }
//     } else if (!currentBtn.classList.contains("active")) {
//       faqBtn.forEach(function (item) {
//         item.classList.remove("active");
//       });

//       faqItems.forEach(function (item) {
//         item.classList.remove("active");
//       });
//       currentBtn.classList.add("active");
//       currentTab.classList.add("active");
//     }
//   });
// }
// // faq end
// sliders
$(function () {
  $(".partner__inner-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 700,
    fade: true,
  });
});
