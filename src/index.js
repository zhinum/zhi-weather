import "./style.css";
import { locationFetch } from "./locationFetch.js";
import { Uicontrol } from "./uiControl.js";

const location = document.getElementById("location");
const locationBtn = document.getElementById("locationBtn");

const weather = new locationFetch();
const uiController = new Uicontrol();

locationBtn.addEventListener("click", async () => {
  const userLocation = location.value;
  if (!userLocation) return;

  const weatherData = await weather.fetchWeather(userLocation);
  if (weatherData) {
    console.log(weatherData);
    uiController.renderUi(weatherData);
  }
});
