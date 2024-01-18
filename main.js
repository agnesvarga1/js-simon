const secHtml = document.querySelector("#sec");
const minsHtml = document.querySelector("#mins");
const hrsHtml = document.querySelector("#hrs");
const timerDisp = document.querySelector(".timer");
let endDate = new Date("January 19, 2024 09:30:00");
let endDateInMs = endDate.getTime();

const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;

function timer() {
  let nowInMs = new Date().getTime();
  let diff = endDateInMs - nowInMs;
  if (diff > 0) {
    hrsHtml.innerHTML = Math.floor((diff % dayInMs) / hourInMs);
    minsHtml.innerHTML = Math.floor((diff % hourInMs) / minuteInMs);
    secHtml.innerHTML = Math.floor((diff % minuteInMs) / secondInMs);
  } else {
    clearInterval(countDown);
    timerDisp.innerHTML = "Evviva inizia la lezione";
  }
}

let countDown = setInterval(timer, 1000);
