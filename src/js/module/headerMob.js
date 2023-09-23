const titles = document.querySelectorAll(".ph-acc-title");
const contents = document.querySelectorAll(".ph-acc-content");

titles.forEach((item, i) => {
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
  // if (navBlock.classList.contains("mob-container-active")) {
  //   phMenu.style.backgroundImage = 'url("../../img/closeMenuPhone.svg")';
  // } else {
  //   phMenu.style.backgroundImage = 'url("../../img/menuPhone.svg")';
  // }
  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");
  bar1.classList.toggle("active-bar1");
  bar2.classList.toggle("active-bar2");
  bar3.classList.toggle("active-bar3");
});
