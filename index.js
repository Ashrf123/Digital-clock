// let hourPoint = document.querySelector("#hour");
// hourPoint.innerHTML = "Games";

// let d = new Date();
// let time = d.getTime();
// let getHours = d.getHours();
// let getMinutes = d.getMinutes();

// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// hourPoint.innerHTML = `${getHours}`;
// console.log(hourPoint);

setInterval(() => {
  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const period = now.getHours() >= 12 ? "pm" : "am";
  document.querySelector(".hour").textContent = hours;
  document.querySelector(".minutes").textContent = minutes;
  document.querySelector(".pointer").textContent = period;
  document.querySelector(".seconds").textContent = seconds;
}, 1000);
