const [btnForm] = document.getElementsByClassName("form-button");
const inputs = Array.from(document.querySelectorAll(".form-input"));
btnForm.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
  });
});

export { btnForm, inputs };
