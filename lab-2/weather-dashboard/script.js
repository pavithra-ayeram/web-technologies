const API_KEY = "YOUR_API_KEY";

document.addEventListener("DOMContentLoaded", () => {
  fetchWeather("Atlanta"); 
});

function handleSearch() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city || city.length < 3) {
    showToast("Please enter a valid city name (min 3 letters).");
    return;
  }
  fetchWeather(city);
}

async function fetchWeather(city) {
  try {
    const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
    const geo = await geoRes.json();

    if (!geo || geo.length === 0 || !geo[0].name || geo[0].name.length < 3) {
      showToast("Invalid City. Showing Atlanta instead");
      fetchWeather("Atlanta");
      return;
    }

    const { lat, lon, name, country } = geo[0];

    const [currentRes, forecastRes, pollutionRes] = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`),
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`),
      fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    ]);

    const current = await currentRes.json();
    const forecast = await forecastRes.json();
    const pollution = await pollutionRes.json();

    if (!current.weather || !forecast.list || forecast.list.length === 0) {
      showToast("City not found. Try a real one 🌍");
      return;
    }

    document.getElementById("cityName").textContent = `${name}, ${country}`;
    document.getElementById("weatherDescription").textContent = current.weather[0].description;
    updateCurrentWeather(current);
    updateHourlyForecast(forecast.list);
    updateWeeklyForecast(forecast.list);
    updateAQI(pollution.list[0].main.aqi);
  } catch (err) {
    console.error(err);
    showToast("Something went wrong. Try again later.");
  }
}

function updateCurrentWeather(data) {
  document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
  document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  document.getElementById("humidity").textContent = `${data.main.humidity}%`;
}

function updateHourlyForecast(hourlyList) {
  const container = document.getElementById("hourlyForecast");
  container.innerHTML = "";

  const now = new Date();
  const futureForecasts = hourlyList.filter(entry => new Date(entry.dt * 1000) > now).slice(0, 4);

  futureForecasts.forEach(hour => {
    const time = new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const iconUrl = `https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`;

    const div = document.createElement("div");
    div.className = "hour";
    div.innerHTML = `
      <p>${time}</p>
      <img src="${iconUrl}" alt="${hour.weather[0].description}" />
      <p>${Math.round(hour.main.temp)}°</p>
    `;
    container.appendChild(div);
  });
}

function updateWeeklyForecast(forecastList) {
  const container = document.getElementById("weeklyForecast");
  container.innerHTML = "";

  const groupedByDay = {};

  forecastList.forEach(entry => {
    const date = new Date(entry.dt * 1000);
    const dayKey = date.toLocaleDateString("en-US", { weekday: "short" });
    if (!groupedByDay[dayKey]) {
      groupedByDay[dayKey] = [];
    }
    groupedByDay[dayKey].push(entry);
  });

  const today = new Date().toLocaleDateString("en-US", { weekday: "short" });
  let count = 0;

  for (let day in groupedByDay) {
    if (day === today) continue;
    if (count >= 6) break;

    const targetHour = 12;
    const closest = groupedByDay[day].reduce((prev, curr) => {
      const prevHour = new Date(prev.dt * 1000).getHours();
      const currHour = new Date(curr.dt * 1000).getHours();
      return Math.abs(currHour - targetHour) < Math.abs(prevHour - targetHour) ? curr : prev;
    });

    const iconUrl = `https://openweathermap.org/img/wn/${closest.weather[0].icon}@2x.png`;

    const div = document.createElement("div");
    div.className = "day";
    div.innerHTML = `
      <p>${day}</p>
      <img src="${iconUrl}" alt="${closest.weather[0].description}" />
      <p>${Math.round(closest.main.temp)}°</p>
    `;
    container.appendChild(div);
    count++;
  }
}

function updateAQI(aqi) {
  const aqiEl = document.getElementById("aqi");
  aqiEl.className = ""; 

  const levels = ["", "good", "fair", "moderate", "poor", "very-poor"];
  const labels = ["", "Good", "Fair", "Moderate", "Poor", "Very Poor"];

  const level = levels[aqi] || "unknown";

  aqiEl.classList.add(level);
  aqiEl.textContent = labels[aqi] || "N/A";
}


function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}
