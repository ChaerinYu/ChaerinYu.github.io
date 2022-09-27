// 스크롤에 따른 헤더변화
const html = document.querySelector("html");
const headerMain = html.querySelector(".header.main");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  let scrollValue = html.scrollTop;

  if (scrollValue > 100) {
    if (scrollValue > lastScroll) {
      headerMain.style.display = "block";
      headerMain.classList.add("fix");
    } else {
      headerMain.style.display = "none";
    }
  } else {
    headerMain.style.display = "block";
    headerMain.classList.remove("fix");
  }

  lastScroll = scrollValue;
});

// 사이트맵 열고 닫기
const menuM = document.querySelector(".menu_m");
// const sitemap = menuM.querySelector(".sitemap");

// menuM.addEventListener("click", () => {
//   menuM.classList.toggle("active");
// });
