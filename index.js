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

const currentUtcTime = currentDate.toLocaleString("en-US", {
  timeZone: "UTC",
});

document.querySelector('.current-day').textContent = currentDayOfTheWeek;
document.querySelector('.current-utc-time').textContent = currentUtcTime;
