const digitalClock = document.getElementById("digital");

function formatTimeUnit(timeUnit) {
  return timeUnit < 10 ? "0" + timeUnit : timeUnit;
}

function setDigitalTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

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
