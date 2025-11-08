const currentMonth = document.querySelector(".calendar_top_section h1");
const currentDay = document.querySelector(".current_day");
const currrent_month = document.querySelector(".currrent_month");
const currentDate = document.querySelector(".current_date");
const currentYear = document.querySelector(".current_year");
monthIndex = new Date().getMonth();
const lastDate = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
console.log(lastDate);
const day = document.querySelector(".days");

// console.log(monthIndex);

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const data = new Date().getDate();
console.log(data)

currentMonth.innerHTML = months[monthIndex];
console.log(months[monthIndex]);
// console.log(months.length)

currrent_month.innerHTML = months[monthIndex];
currentDay.innerHTML = new Date().toLocaleDateString('en-US', { weekday: 'short' });
currentDate.innerHTML = `0${new Date().getDate()}`;
currentYear.innerHTML = new Date().getFullYear();

let days = "";
for(let i = 1; i <= lastDate; i++) {
    days += `<div>${i}</div>`
}

day.innerHTML = days;

// currentDate.innerHTML = new Date().getDate();
// currentDay.innerHTML = new Date().getDay();
// const date = document.createElement("span");
// date.textContent = new Date().getDate();
// currentMonth.appendChild(date);
