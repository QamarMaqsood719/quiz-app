const currentMonth = document.querySelector(".calendar_top_section h1");
const currentDay = document.querySelector(".current_day");
const currrent_month = document.querySelector(".currrent_month");
const currentDate = document.querySelector(".current_date");
const currentYear = document.querySelector(".current_year");
const daysContainer = document.querySelector(".week_days");

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
];

const today = new Date();
const monthIndex = today.getMonth();
const year = today.getFullYear();
const date = today.getDate();
const weekday = today.toLocaleDateString('en-US', { weekday: 'short' });


currentMonth.textContent = months[monthIndex];
currrent_month.textContent = months[monthIndex];
currentDay.textContent = weekday;
currentDate.textContent = date < 10 ? `0${date}` : date;
currentYear.textContent = year;


const lastDate = new Date(year, monthIndex + 1, 0).getDate();


let firstDayIndex = new Date(year, monthIndex, 1).getDay();
firstDayIndex = firstDayIndex === 0 ? 6 : firstDayIndex -1; 


let daysHTML = "";
for(let i=0; i<firstDayIndex; i++){
    // daysHTML += `<div class="empty"></div>`;
}


for(let i=1;i<=lastDate;i++){
    if(i===date){
        daysHTML += `<div class="today">${i}</div>`;
    } else {
        daysHTML += `<div>${i}</div>`;
    }
}

daysContainer.innerHTML = daysHTML;
