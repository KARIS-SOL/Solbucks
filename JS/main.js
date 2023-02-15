
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

