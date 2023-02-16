// MAIN HEADER
// SEARCH

const searchEl = document.querySelector(".search");  //div요소선택
const searchInputEl = searchEl.querySelector("input"); // search라는 곳으로 범위를 줄임
console.log(searchEl);
console.log(searchInputEl);




searchEl.addEventListener("click",function() {  //돋보기를 누르지않고 그주변만가도 되게끔!
  searchInputEl.focus();
});


searchInputEl.addEventListener("focus", function() {
  searchInputEl.setAttribute("placeholder", "통합 검색"); //html에서 지우고 여기서 구현
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

//SWIPER
//SWIPER NOTICE
const swiperNotice = new Swiper(".notice .notice-line .inner .inner__left .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

//SWIPER PROMOTION 
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal", 
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,  //핵심 사진을 어디다 둘건지
  loop: true,
  autoplay: {
    delay: 1000, //mm per second
    disableOnInteraction: false, //계속움직이는게 아니라 고정되어있는 상태로 우리가 버튼을 눌렀을 떄 움직이게끔
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable : true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

//AutoPlay Control 
function controlAutoPlay () {
  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start();
  } else {
    swiperPromotion.autoplay.stop();
  }
}

//Toggle Promotion
const protmotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  if (protmotionSection.classList.contains("hide")) {
    protmotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    protmotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
});

// Animation Part - Visual
//페이지가 로딩되자마자 시작
window.onload = function () {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

// Animation Part - Scroll 
// Elsalvador
// console.log(window.scrollY); 마우스 위치확인 , 큰수치를 위에서 부터내려가면 from 2555 to 490 더 효율적임 
window.addEventListener("scroll", function() {
  console.log(window.scrollY);
  if (window.scrollY > 490) {
    const elsalvadorSection = document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  } else {
    const elsalvadorSection = document.querySelector(".elsalvador");
    elsalvadorSection.classList.remove("animate");
  }

});

//Ethiopia
window.addEventListener("scroll", function() {
  console.log(window.scrollY);
  if (window.scrollY > 1030) {
    const ethiopiaSection = document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  } else {
    const ethiopiarSection = document.querySelector(".ethiopia");
    ethiopiaSection.classList.remove("animate");
  }

});

//Favourite
window.addEventListener("scroll", function() {
  console.log(window.scrollY);
  if (window.scrollY > 1460) {
    const favouriteSection = document.querySelector(".favourite");
    favouriteSection.classList.add("animate");
  } else {
    const favouriteSection = document.querySelector(".favourite");
    favouriteSection.classList.remove("animate");
  }

});

//Magazine
window.addEventListener("scroll", function() {
  console.log(window.scrollY);
  if (window.scrollY > 2220) {
    const magazineSection = document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  } else {
    const magazineSection = document.querySelector(".magazine");
    magazineSection.classList.remove("animate");
  }

});

//Store
window.addEventListener("scroll", function() {
  console.log(window.scrollY);
  if (window.scrollY > 2555) {
    const storeSection = document.querySelector(".store");
    storeSection.classList.add("animate");
  } else {
    const storeSection = document.querySelector(".store");
    storeSection.classList.remove("animate");
  }

});
