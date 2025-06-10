const apiKey = "a516a792024accb77f34519e395792f4";
const apiUrl =
  "http://api.weatherapi.com/v1/current.json?key=d49ef3c674d64b0ca6b93426251006&q=London&aqi=no";
const appId = `&appid=${apiKey}`;

window.onload = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      fetchWeatherByCoordinates(lat, lon);
    });
  }
};

function fetchWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return alert("Please enter a city name.");
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  fetchWeatherData(weatherUrl, forecastUrl);
}

function fetchWeatherByCoordinates(lat, lon) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  fetchWeatherData(weatherUrl, forecastUrl);
}

function fetchWeatherData(weatherUrl, forecastUrl) {
  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("city").textContent = data.name;
      document.getElementById("temperature").textContent = Math.round(
        data.main.temp
      );
      document.getElementById("weather-desc").textContent =
        data.weather[0].description;
      document.getElementById("feels-like").textContent = `${Math.round(
        data.main.feels_like
      )}°C`;
      document.getElementById(
        "humidity"
      ).textContent = `${data.main.humidity}%`;
      document.getElementById("wind").textContent = `${data.wind.speed} km/h`;
      document.getElementById(
        "weather-icon"
      ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      document.getElementById("date").textContent = new Date().toLocaleString(
        "en-US",
        {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }
      );
    });

  fetch(forecastUrl)
    .then((response) => response.json())
    .then((data) => {
      const forecastDiv = document.getElementById("forecast");
      forecastDiv.innerHTML = "";

      const dailyData = {};
      data.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];
        if (!dailyData[date] && item.dt_txt.includes("12:00:00")) {
          dailyData[date] = item;
        }
      });

      Object.values(dailyData)
        .slice(0, 5)
        .forEach((day) => {
          const date = new Date(day.dt_txt);
          const options = { weekday: "long" };
          const dayName = date.toLocaleDateString("en-US", options);

          const card = `
              <div class="day-card">
                <img src="https://openweathermap.org/img/wn/${
                  day.weather[0].icon
                }@2x.png" />
                <p>${dayName}</p>
                <span>${Math.round(day.main.temp_max)}° - ${Math.round(
            day.main.temp_min
          )}°</span>
                <p>${day.weather[0].main}</p>
              </div>`;
          forecastDiv.innerHTML += card;
        });
    });
}
