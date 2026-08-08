import "./style.css";
import { locationFetch } from "./locationFetch.js";
import { Uicontrol } from "./uiControl.js";

const location = document.getElementById("location");
const locationForm = document.getElementById("location-form");

const weather = new locationFetch();
const uiController = new Uicontrol();

locationForm.addEventListener("click", async (e) => {
  e.preventDefault();
  const userLocation = location.value;
  if (!userLocation) return;

  const weatherData = await weather.fetchWeather(userLocation);
  if (weatherData) {
    console.log(weatherData);
    uiController.renderUi(weatherData);
  }
});
