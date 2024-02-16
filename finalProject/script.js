// script.js
const searchButton = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const weatherContainer = document.getElementById('weather-container');

// Function to fetch weather data from the API
async function getWeatherData(city) {
    const apiKey = 'b574f0825116ef6224957edc26030638'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
        return null;
    }
}

// Function to display weather data on the page
function displayWeatherData(weatherData) {
    weatherContainer.innerHTML = '';

    if (!weatherData) {
        weatherContainer.textContent = 'Failed to fetch weather data.';
        return;
    }

    const city = weatherData.name;
    const temperature = weatherData.main && weatherData.main.temp ? Math.round(weatherData.main.temp - 273.15) : 'N/A';
    const description = weatherData.weather && weatherData.weather.length > 0 ? weatherData.weather[0].description : 'N/A';

    const weatherInfo = document.createElement('div');
    weatherInfo.innerHTML = `
      <h2>${city}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
    `;

    weatherContainer.appendChild(weatherInfo);
}

// Event listener for the search button
searchButton.addEventListener('click', async () => {
    const city = cityInput.value;

    if (city) {
        const weatherData = await getWeatherData(city);
        displayWeatherData(weatherData);
    }
});