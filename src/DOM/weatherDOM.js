import { getIcon } from "../assets/loadAsset.js";

const input = document.getElementById("city");
const content = document.getElementById("content");

export function getInput() {
  return input;
}

export async function renderContent(data) {
  // HEADER
  content.classList.add("render");
  const header = createElement("div", "header-content");

  const address = createElement("span", "address", data.address);
  const time = createElement("span", "time", data.time);
  const locationContainer = createElement("div", "location-container");
  locationContainer.append(address, time);

  const celsius = createElement("button", "celsius-btn", "°C");
  const fahrenheit = createElement("button", "fahrenheit-btn", "°F");
  const buttonsContainer = createElement("div", "buttons-container");
  buttonsContainer.append(celsius, fahrenheit);

  const weather = createElement("span", "weather", "Weather");
  const conditions = createElement("span", "conditions", data.conditions);
  const conditionContainer = createElement("div", "condition-container");
  conditionContainer.append(weather, conditions);

  header.append(locationContainer, buttonsContainer, conditionContainer);

  // MAIN
  const main = createElement("div", "main-content");

  const icon = createElement("img", "temp-icon");
  const iconSrc = await getIcon(data.icon);
  icon.src = iconSrc;
  const temp = createElement("span", "temp", `${data.temp}°C`);
  const tempContainer = createElement("div", "temp-container");
  tempContainer.append(icon, temp);

  const feelsLike = createElement("span", "feels-like", `${data.feelsLike}°C`);
  const feelsLikeSpan = createElement("span", "feelslike-span", "FEELS LIKE: ");
  const feelsLikeContainer = createElement("div", "feelslike-container");
  feelsLikeContainer.append(feelsLikeSpan, feelsLike);

  const humidity = createElement("span", "humidity", `${data.humidity}%`);
  const humiditySpan = createElement("span", "humidity-span", "HUMIDITY: ");
  const humidityContainer = createElement("div", "humidity-container");
  humidityContainer.append(humiditySpan, humidity);

  const wind = createElement("span", "wind", `${data.wind} km/h`);
  const windSpan = createElement("span", "wind-span", "WIND: ");
  const windContainer = createElement("div", "wind-container");
  windContainer.append(windSpan, wind);

  const statContainer = createElement("div", "stat-container");
  statContainer.append(feelsLikeContainer, humidityContainer, windContainer);

  main.append(tempContainer, statContainer);

  content.append(header, main);
}

export function showError(err) {
  const errorMsg = document.createElement("p");
  errorMsg.textContent = err.message;
  content.append(errorMsg);
  content.classList.add("render");
  content.classList.add("error");
  errorMsg.classList.add("error");
}

export function deployLoadingScreen() {
  const loading = createElement("span", "loading", "Loading...");
  content.innerHTML = "";
  content.append(loading);
}

function createElement(type, className, text) {
  const element = document.createElement(type);
  if (className) {
    element.classList.add(className);
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

export function changeFormat(unit, tempValue, feelsLikeValue) {
  const temp = document.querySelector(".temp");
  const feelsLike = document.querySelector(".feels-like");
  temp.textContent = `${tempValue}°${unit}`;
  feelsLike.textContent = `${feelsLikeValue}°${unit}`;
}
