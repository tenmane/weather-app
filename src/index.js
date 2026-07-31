import "./reset.css";
import "./style.css";
import {
  Weather,
  getTemperature,
  getHumidity,
  getWind,
  getTime,
  getConditions,
  getAddress,
  getIcon,
} from "./API/weather-api.js";

const data = await Weather("Arizona", "metric");
getTemperature(data);
getHumidity(data);
getWind(data);
getTime(data);
getConditions(data);
getAddress(data);
getIcon(data);
