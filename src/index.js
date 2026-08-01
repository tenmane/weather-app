import "./reset.css";
import "./style.css";
import {
  changeFormat,
  deployLoadingScreen,
  getInput,
  renderContent,
  showError,
} from "./DOM/weatherDOM.js";
import { getData } from "./API/weather-api.js";

const form = document.getElementById("city-form");
const content = document.getElementById("content");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  deployLoadingScreen();
  content.classList.remove("error");
  try {
    const [metricData, usData] = await Promise.all([
      getData(getInput().value, "metric"),
      getData(getInput().value, "us"),
    ]);
    content.innerHTML = "";
    await renderContent(metricData);

    const celsius = document.querySelector(".celsius-btn");
    celsius.addEventListener("click", function () {
      changeFormat("C", metricData.temp, metricData.feelsLike);
    });

    const fahrenheit = document.querySelector(".fahrenheit-btn");
    fahrenheit.addEventListener("click", async function () {
      changeFormat("F", usData.temp, usData.feelsLike);
    });
  } catch (err) {
    content.innerHTML = "";
    showError(err);
  }
});
