const API_KEY = "5292884783329f2fab1dfacf3cf15c97";
const GEO_API_URL = "https://api.openweathermap.org/geo/1.0/direct";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/forecast";

var searchForm = document.getElementById("searchForm");
var cityInput = document.getElementById("cityInput");
var cityName_h2 = document.getElementById("cityName");
var todaySection = document.getElementById("todaySection");
var futureSection = document.getElementById("futureSection");
var historyUl = document.getElementById("historyUl");

// use the openweather geo API to fetch the latitude and longitude for the input city name
const getLatAndLon = async (cityname) => {
     try {
       const response = await fetch(
         `${GEO_API_URL}?appid=${API_KEY}&q=${cityname}`
       );
       const data = await response.json();
       return {
         name: data[0].name,
         lat: data[0].lat,
         lon: data[0].lon,
       };
     } catch (error) {
       console.error(error);
       return {};
     }
   };
   
   // returns the weather forecast for the given latitude and longitude
   const getWeatherForecast = async ({ lat, lon }) => {
     try {
       const response = await fetch(
         `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
       );
       const data = await response.json();
       return data;
     } catch (error) {
       console.error(error);
     }
   };

   
   // given a city name, get the latitude and longitude
  // then fetch the weather data for that lat and lon
  const showWeather = async (city) => {
     const { name, lat, lon } = await getLatAndLon(city);
     if (!name || !lat || !lon) {
       alert("Something went wrong");
       return;
     }
     const weatherForecast = await getWeatherForecast({ lat, lon });
     cityName_h2.innerText = name;
     updateWeatherInfo(weatherForecast);
   };
   
   // convert the weather info to JSON string and add it to local storage to be displayed in history search
   const addToLS = (val) => {
     const history = JSON.parse(localStorage.getItem("weatherHistory"));
     val = val.toLowerCase();
     if (history.indexOf(val) === -1) {
       history.push(val);
       localStorage.setItem("weatherHistory", JSON.stringify(history));
       createHistoryCard(val);
     }
   };
   // there will be a lot of unnecessary data returned by the API
  // parse the required fields and return it.
     const getRequiredFields = (data, idx) => {
     const today = data.list[idx];
     let date = today.dt_txt.split(" ")[0];
     date = new Date(date);
     date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
     const iconUrl = createIconUrl(today.weather[0].icon);
     const temp = today.main.temp;
     const wind = today.main.humidity;
     const humidity = today.wind.speed;
     return {
       date,
       iconUrl,
       temp,
       wind,
       humidity,
     };
   };

//html elements 
// create HTML for the elements to append to the weather card section
     const createWeatherCard = ({ date, iconUrl, temp, wind, humidity }) => {
     const div = document.createElement("div");
     div.classList.add("weather-card");
     const h3 = document.createElement("h3");
     h3.classList.add("date");
     h3.innerText = date;
     const img = document.createElement("img");
     img.src = iconUrl;
     const temp_p = document.createElement("p");
     temp_p.innerText = `Temp: ${temp}F`;
     const wind_p = document.createElement("p");
     wind_p.innerText = `Wind: ${wind} MPH`;
     const humidity_p = document.createElement("p");
     humidity_p.innerText = `Humidity: ${humidity}%`;
     div.append(h3, img, temp_p, wind_p, humidity_p);
     return div;
   };
   
   
   // seconds to date string
     const secondsToDateText = (secs) => {
     return new Date(secs * 1000).toLocaleDateString();
   };
   

   // set weather representation icons
     const createIconUrl = (icon) => {
     return `https://openweathermap.org/img/wn/${icon}.png`;
   };

   // given a weather data, create a weather card and append it to the todaySection
     const updateTodaySection = (data) => {
     todaySection.innerHTML = "";
     const div = createWeatherCard(getRequiredFields(data, 0));
     todaySection.append(div);
   };
   
   // given weather data, create weather cards and append it to the futureSection
     const updateFutureSection = (data) => {
     futureSection.innerHTML = "";
     let idx = 0;
     for (let i = 0; i < 5; i++) {
       idx += 8;
       const div = createWeatherCard(getRequiredFields(data, idx - 1));
       futureSection.append(div);
     }
   };

   const updateWeatherInfo = (data) => {
     updateTodaySection(data);
     updateFutureSection(data);
   };

   // returns HTML for the element in the history section
   const createHistoryCard = (txt) => {
     let li = document.createElement("li");
     li.innerText = txt;
     li.addEventListener("click", async () => await showWeather(txt));
     historyUl.append(li);
   };
   
   const handleFormSubmit = async (event) => {
     event.preventDefault();
     let val = cityInput.value;
     await showWeather(val);
     addToLS(val);
     cityInput.value = "";
   };

   async function main() {
     searchForm.addEventListener("submit", handleFormSubmit);
     await showWeather("Atlanta");
     const history = JSON.parse(localStorage.getItem("weatherHistory"));
     if (!history) {
       localStorage.setItem("weatherHistory", JSON.stringify([]));
     } else {
       history.forEach(createHistoryCard);
     }
   }
   
   window.addEventListener("DOMContentLoaded", main);
   