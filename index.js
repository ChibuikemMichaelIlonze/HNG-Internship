const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDate = new Date();
const currentDayOfTheWeek = daysOfWeek[currentDate.getDay()];

function updateUtcTime() {
  const currentDate = new Date();
  const currentUtcTime = currentDate.toLocaleString("en-US", {
    timeZone: "UTC",
  });

  document.querySelector(".current-utc-time").textContent = currentUtcTime;
}

updateUtcTime();

setInterval(updateUtcTime, 1000);

document.querySelector(".current-day").textContent = currentDayOfTheWeek;
