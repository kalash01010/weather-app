document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'ef2b1ff58bb35896f116b09961c659a3'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerText = error.message;
    }
}

function displayWeather(data) {
    const { name, main: { temp }, weather } = data;
    const weatherDescription = weather[0].description;
    const result = `Weather in ${name}: ${temp}°C, ${weatherDescription}`;
    document.getElementById('weatherResult').innerText = result;
}