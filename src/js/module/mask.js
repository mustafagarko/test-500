import IMask from "imask";

const phone = document.getElementById("phone");
const date = document.getElementById("date");
const time = document.getElementById("time");
const submitBtn = document.getElementById("submitBtn");

const phoneMask = IMask(phone, {
  mask: "+{7}(000)000-00-00",
});

const dateMask = IMask(date, {
  mask: Date,
  lazy: true,
  autofix: true,
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      placeholderChar: "д",
      from: 1,
      to: 31,
      maxLength: 2,
    },
    m: {
      mask: IMask.MaskedRange,
      placeholderChar: "м",
      from: 1,
      to: 12,
      maxLength: 2,
    },
    Y: {
      mask: IMask.MaskedRange,
      placeholderChar: "г",
      from: 1900,
      to: 2100,
      maxLength: 4,
    },
  },
});

const timeMask = IMask(time, {
  mask: "HH:MM",
  lazy: true,
  blocks: {
    HH: {
      mask: IMask.MaskedRange,
      placeholderChar: "ч",

      from: 0,
      to: 23,
    },
    MM: {
      mask: IMask.MaskedRange,
      placeholderChar: "м",

      from: 0,
      to: 59,
    },
  },
});

submitBtn.addEventListener("click", () => {
  dateMask.updateValue("");
  timeMask.updateValue("");
  phoneMask.updateValue("");
});
