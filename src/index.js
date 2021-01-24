const clock = document.querySelector(".clock");
const dateHTML = document.querySelector(".date");

function getDate() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const month = date.getMonth();
    const day = date.getDate();
    // dateHTML.innerText = `${date.toLocaleString('default', { month: 'long' })} ${day < 10 ? `0${day}` : day}`;
    clock.innerText = `${hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function indexInit() {
    getDate();
    setInterval(getDate, 1000);
}

indexInit();
