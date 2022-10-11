const clock = document.querySelector("#clock");
const today = document.querySelector("#today");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

function getToday() {
    const date = new Date();
    const todayMonth = String(date.getMonth() + 1).padStart(2,"0");
    const todayDate = String(date.getDate()).padStart(2,"0");
    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const todayDay = week[date.getDay()];
    today.innerText = `${todayMonth}월 ${todayDate}일 ${todayDay}`
}

getClock();
getToday();
setInterval(getClock, 1000);
