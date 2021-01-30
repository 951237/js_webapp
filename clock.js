const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");


function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // 숫자가 10보자 작은경우 숫자 앞에 0을 붙여주기 , mini if 문
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();