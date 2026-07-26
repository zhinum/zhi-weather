import "./style.css";
import { locationFetch } from "./locationFetch.js";

const location = document.getElementById("location");
const locationBtn = document.getElementById("locationBtn");

const weather = new locationFetch(location, locationBtn);
