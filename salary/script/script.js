window.addEventListener("load", function () { window.scrollTo(0, 0); });

var calcButton = document.querySelector(".calculate");
var resetButton = document.querySelector(".reset");
var sumScreen = document.querySelector(".sum");
var inputs = document.querySelectorAll(".input");
var result = document.querySelector(".result");
var wrapper = document.querySelector(".wrapper");
var saveBtn = document.querySelector(".save-btn");
var delBtn = document.querySelector(".del-btn");

var monthSalary;
var nightShifts;
var dayShifts;
var holydayHours;

if (localStorage.getItem('month-salary') !== null) {
  inputs[0].value = JSON.parse(localStorage.getItem('month-salary'))
} else {
  localStorage.setItem('month-salary', JSON.stringify([]))
}

saveBtn.addEventListener('click', function () {
  localStorage.setItem('month-salary', JSON.stringify([inputs[0].value]))
})

delBtn.addEventListener('click', function () {
  localStorage.setItem('month-salary', JSON.stringify([]))
  inputs[0].value = '';
})

for (let input of inputs) {
  resetButton.onclick = function () {
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    sumScreen.textContent = "0" + " Р";

    wrapper.classList.remove("display-none");
    result.classList.add("display-none");
    calcButton.classList.remove("display-none");
    resetButton.classList.add("display-none");
  };
}
inputs.oninput = function () { };

calcButton.onclick = function () {
  monthSalary = inputs[0].value;
  nightShifts = inputs[1].value;
  dayShifts = inputs[2].value;
  holydayHours = inputs[3].value;

  let dayShift = monthSalary / 15;
  let holydayHour = (dayShift / 11) * 2;
  let nightShift = (dayShift / 11) * 4 + (dayShift / 11) * 7 * 1.5;
  let tax = (dayShifts * dayShift + nightShifts * nightShift + holydayHours * holydayHour) * 0.13;
  let sum = Math.round(dayShifts * dayShift + nightShifts * nightShift + holydayHours * holydayHour - tax);

  wrapper.classList.add("display-none");
  result.classList.remove("display-none");
  calcButton.classList.add("display-none");
  resetButton.classList.remove("display-none");

  sumScreen.textContent = sum + " Р";
};
