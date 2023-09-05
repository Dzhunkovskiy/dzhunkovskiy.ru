window.addEventListener("load", function () { window.scrollTo(0, 0); });

var calcButton = document.querySelector(".calculate");
var resetButton = document.querySelector(".reset");
var sumScreen = document.querySelector(".sum");
var inputs = document.querySelectorAll(".input");
var result = document.querySelector(".result");
var wrapper = document.querySelector(".wrapper");
var saveBtn = document.querySelector(".save-btn");
var delBtn = document.querySelector(".del-btn");
var donList = document.querySelector(".top-donaters_list");
var dons = donList.querySelectorAll(".donater");
var style = donList.querySelector(".style")
var instructionBtn = document.querySelector(".link-instruction")
var videoInstruction = document.querySelector(".video-instruction")
var refBtn = document.querySelector(".ref-btn")
var refFrame = document.querySelector(".ref-frame")
var closeBtnInst = document.querySelector(".close-btn-inst")
var closeBtnRef = document.querySelector(".close-btn-ref")
let donQuant = dons.length
let donsLength = (donQuant * 30).toString()

var keyFrames = `@keyframes scroll { from { transform: translate(100%, 0); }  to { transform: translate(-${donsLength}%, 0); } } .top-donaters_list {
  animation: scroll ${donQuant * 2}s linear infinite;}`
style.innerHTML = keyFrames

var monthSalary;
var nightShifts;
var dayShifts;
var holydayHours;

if (localStorage.getItem('hour-salary') !== null) {
  inputs[0].value = JSON.parse(localStorage.getItem('hour-salary'))
} else {
  localStorage.setItem('hour-salary', JSON.stringify([]))
}

saveBtn.addEventListener('click', function () {
  localStorage.setItem('hour-salary', JSON.stringify([inputs[0].value]))
})

delBtn.addEventListener('click', function () {
  localStorage.setItem('hour-salary', JSON.stringify([]))
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
  hourSalary = inputs[0].value;
  nightShifts = inputs[1].value;
  dayShifts = inputs[2].value;
  holydayHours = inputs[3].value;

  let dayShift = hourSalary * 11;
  let holydayHour = (dayShift / 11) * 2;
  let nightShift = hourSalary * 4 + hourSalary * 7 * 1.5;
  let tax = (dayShifts * dayShift + nightShifts * nightShift + holydayHours * holydayHour) * 0.13;
  let sum = Math.round(dayShifts * dayShift + nightShifts * nightShift + holydayHours * holydayHour - tax);

  wrapper.classList.add("display-none");
  result.classList.remove("display-none");
  calcButton.classList.add("display-none");
  resetButton.classList.remove("display-none");

  sumScreen.textContent = sum + " Р";
};

instructionBtn.addEventListener('click', (function() {
  videoInstruction.classList.remove("display-none")
}))

closeBtnInst.addEventListener('click', (function() {
  videoInstruction.classList.add("display-none")
}))

refBtn.addEventListener('click', (function() {
  refFrame.classList.remove("display-none")
}))

closeBtnRef.addEventListener('click', (function() {
  refFrame.classList.add("display-none")
}))

