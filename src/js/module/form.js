const [btnForm] = document.getElementsByClassName("form-button");
const inputs = Array.from(document.querySelectorAll(".form-input"));

const phone = document.getElementById("phone");
const date = document.getElementById("date");
const time = document.getElementById("time");
btnForm.addEventListener("click", () => {
  if (phone.value && date.value && time.value && time.value) {
    const application = {
      id: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      phone: phone.value,
      date: date.value,
      time: time.value,
    };
    const applications =
      JSON.parse(localStorage.getItem("applications_test_KM")) || [];

    applications.push(application);

    localStorage.setItem("applications_test_KM", JSON.stringify(applications));

    console.log(applications);
    inputs.forEach((input) => {
      input.value = "";
    });
  }
});
