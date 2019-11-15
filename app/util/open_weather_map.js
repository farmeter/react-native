const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";
const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";

const UNIT = {
    F: "imperial",
    C: "metric"
};

async function fetchForecast(url) {
    let res = await fetch(url);
    let data = await res.json();
    if (res.ok) {
        return {
            main: data.weather[0].main,
            description: data.weather[0].description,
            temp: data.main.temp,
            unit: "C",
            icon: "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        };
    } else {
        Promise.reject(data);
        return null;
    }
}
function getForecast(zip) {
    console.log(
        `${API_STEM}q=${zip}&units=${UNIT.C}&APPID=${WEATHER_API_KEY}`
    );
    return fetchForecast(
        `${API_STEM}q=${zip}&units=${UNIT.C}&APPID=${WEATHER_API_KEY}`
    );
}

function getForecastByCityName(city) {
    console.log(`${API_STEM}q=${city}&units=${UNIT.C}&APPID=${WEATHER_API_KEY}`);
    return fetchForecast(
        `${API_STEM}q=${city}&units=${UNIT.C}&APPID=${WEATHER_API_KEY}`
    );
}

export { getForecast, getForecastByCityName };