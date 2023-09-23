const pars = document.querySelectorAll(".par");
const [header] = document.getElementsByTagName("header");

header.addEventListener("click", (e) => {
  if (e.target.classList.contains("par")) {
    pars.forEach((par) => par.classList.remove("par-active"));
    e.target.classList.add("par-active");
  }
});
