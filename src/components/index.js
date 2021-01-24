{
    const clock = document.querySelector(".clock");

    const getDate = () => {
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const seconds = date.getSeconds();
        clock.innerText = `${hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    }

    const init = () => {
        getDate();
        setInterval(getDate, 1000);
    }

    init();
}