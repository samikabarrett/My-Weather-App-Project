function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;

  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "3ta98ca40d628aobcaf1ca49bf2be168";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(updateWeatherData);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lisbon");
