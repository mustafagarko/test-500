export default function accordion() {
  const titles = document.querySelectorAll(".accordion-title");
  const contents = document.querySelectorAll(".accordion-content");

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
}
