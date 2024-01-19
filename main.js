const secHtml = document.querySelector("#sec");
const minsHtml = document.querySelector("#mins");
const hrsHtml = document.querySelector("#hrs");
const timerDisp = document.querySelector(".timer");
let endDate = new Date("January 20, 2024 09:30:00");
let endDateInMs = endDate.getTime();

function timer() {
  let nowInMs = new Date().getTime();
  let diff = endDateInMs - nowInMs;
  let diffInS = diff / 1000;
  let mTotal = Math.floor(diffInS / 60);
  let h = Math.floor(mTotal / 60);
  let m = Math.floor(mTotal - h * 60);
  let s = Math.floor(diffInS - mTotal * 60);

  if (diff > 0) {
    h >= 10 ? (hrsHtml.innerHTML = h) : (hrsHtml.innerHTML = `0${h}`);
    m >= 10 ? (minsHtml.innerHTML = m) : (minsHtml.innerHTML = `0${m}`);
    s >= 10 ? (secHtml.innerText = s) : (secHtml.innerText = `0${s}`);
  } else {
    clearInterval(countDown);
    timerDisp.innerHTML = "Evviva inizia la lezione";
  }
}

let countDown = setInterval(timer, 1000);
