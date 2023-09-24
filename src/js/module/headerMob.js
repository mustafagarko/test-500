const titles = document.querySelectorAll(".ph-acc-title");
const contents = document.querySelectorAll(".ph-acc-content");
const menuContainer = document.querySelector(".mob-container");
const mobMenu = document.getElementById("mob-menu");
const menuBtn = document.getElementById("menu-btn");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const filterMob = document.getElementById("filter-mob");

menuContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    mobMenu.classList.remove("mob-container-active");
    menuBtn.classList.remove();
    filterMob.classList.remove("filter-mob-active");
    bar1.classList.toggle("active-bar1");
    bar2.classList.toggle("active-bar2");
    bar3.classList.toggle("active-bar3");
  }
});

titles.forEach((item) => {
  item.addEventListener("click", () => {
    const activeContent = document.querySelector("#" + item.dataset.tab);
    if (activeContent.classList.contains("active")) {
      activeContent.classList.remove("active");
      item.classList.remove("active");
      activeContent.style.maxHeight = 0;
    } else {
      contents.forEach((el) => {
        el.classList.remove("active");
        el.style.maxHeight = 0;
      });
      titles.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
      activeContent.classList.add("active");
      activeContent.style.maxHeight = activeContent.scrollHeight + "px";
    }
  });
});

const [navBlock] = document.getElementsByClassName("mob-container");
const [phMenu] = document.getElementsByClassName("ph-menu");
phMenu.addEventListener("click", () => {
  navBlock.classList.toggle("mob-container-active");
  filterMob.classList.toggle("filter-mob-active");

  bar1.classList.toggle("active-bar1");
  bar2.classList.toggle("active-bar2");
  bar3.classList.toggle("active-bar3");
});
