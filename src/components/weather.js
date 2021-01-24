{
    const API_KEY = "4f7b0304656ee67e8ae29b070b38f482";
    const COORDS = "coords";
    const weather = document.querySelector(".weather");
    const weatherText = weather.querySelector(".weather-text")

    const getWeather = async (lat, lon) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const { name, main: { temp } } = await res.json();
        weatherText.innerText = `${temp} °C ${name}`.toUpperCase();
    }

    const loadCoords = () => {
        const loadedCoords = localStorage.getItem(COORDS);
        if (loadedCoords) {
            const {lat, lon} = JSON.parse(loadedCoords);
            getWeather(lat, lon);
        } else {
            askForCoords();
        }
    }

    const saveCoords = (coordinates) => {
        localStorage.setItem(COORDS, JSON.stringify(coordinates))
    }

    const handleGeoSuccess = (position) => {
        const { coords: { latitude: lat, longitude: lon } } = position;
        const coords = { lat, lon }
        saveCoords(coords);
        getWeather(lat, lon);
    }

    const askForCoords = () => {
        navigator.geolocation.getCurrentPosition(handleGeoSuccess, () => {
            console.error("Can't access geolocation");
        });
    }

    const init = () => {
        loadCoords();
    }

    init();
}
