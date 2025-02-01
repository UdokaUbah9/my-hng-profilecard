const currentTime = document.querySelector("[data-testid='currentTimeUTC']");
// const currentTime = document.querySelector("[data-testid='currentTimeUTC']");

const weekDays = [
  "Subday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function updateTime() {
  const date = new Date();
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const hour = String(date.getUTCHours() + 1).padStart(2, 0);
  const minute = String(date.getUTCMinutes()).padStart(2, 0);
  const seconds = String(date.getUTCSeconds()).padStart(2, 0);
  currentTime.textContent = `${hour} - ${minute} - ${seconds}`;
}

updateTime();
setInterval(updateTime, 1000);
