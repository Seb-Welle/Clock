const digitalClock = document.getElementById("digital");
const pointerSeconds = document.querySelector("#pointer-seconds");
const pointerMinutes = document.querySelector("#pointer-minutes");
const pointerHours = document.querySelector("#pointer-hours");

function formatTimeUnit(timeUnit) {
  return timeUnit < 10 ? "0" + timeUnit : timeUnit;
}

function setDigitalTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  pointerSeconds.style.transform =
    "translateY(-50%) rotate(" + seconds * 6 + "deg)";
  pointerMinutes.style.transform =
    "translateY(-50%) rotate(" + minutes * 6 + "deg)";
  pointerHours.style.transform =
    "translateY(-50%) rotate(" + hours * 30 + "deg)";

  digitalClock.innerText =
    formatTimeUnit(hours) +
    ":" +
    formatTimeUnit(minutes) +
    ":" +
    formatTimeUnit(seconds);
}

setInterval(() => {
  setDigitalTime();
}, 1000);

setDigitalTime();
