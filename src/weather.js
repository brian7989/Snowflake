const COORDS = "coords";
const API_KEY = "4f7b0304656ee67e8ae29b070b38f482";
const weather = document.querySelector(".weather");
const weatherText = weather.querySelector(".weather-text")


function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(res =>
        res.json()
    ).then(json => {
        const temperature = json.main.temp;
        const place = json.name;
        weatherText.innerHTML = `${temperature} °C ${place}`.toUpperCase();
    }
    );
}

function saveCoords(coordinates) {
    localStorage.setItem(COORDS, JSON.stringify(coordinates))
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude,
        longitude = position.coords.longitude;
    const coords = {
        latitude,
        longitude
    }
    saveCoords(coords);
    getWeather(latitude, longitude);
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, () => {
        console.error("Can't access geolocation");
    });
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        console.log("ran");
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

const weatherInit = () => {
    loadCoords();
}

weatherInit();
