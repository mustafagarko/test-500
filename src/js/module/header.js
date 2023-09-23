const pars = document.querySelectorAll(".par");

pars.forEach((par, i) => {
  par.addEventListener("click", () => {
    pars.forEach((par) => {
      par.classList.remove("par-active");
    });
    par.classList.toggle("par-active");
  });
});
