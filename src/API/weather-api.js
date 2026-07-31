export async function Weather(city, unit) {
  const data = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
    ${city}?unitGroup=${unit}&key=WN46QYBNRS2A8SFZPPY5WPWAB&contentType=json`,
  );
  const json = await data.json();
  console.log(json);
  return json;
}

export function getTemperature(data) {
  const temp = data.currentConditions.temp;
  console.log(temp);
  return temp;
}

export function getHumidity(data) {
  const humidity = data.currentConditions.humidity;
  console.log(humidity);
  return humidity;
}

export function getWind(data) {
  const wind = data.currentConditions.windspeed;
  console.log(wind);
  return wind;
}

export function getTime(data) {
  const time = data.currentConditions.datetime;
  console.log(time);
  return time;
}

export function getConditions(data) {
  const conditions = data.currentConditions.conditions;
  console.log(conditions);
  return conditions;
}

export function getAddress(data) {
  const address = data.resolvedAddress;
  console.log(address);
  return address;
}

export function getIcon(data) {
  const icon = data.currentConditions.icon;
  console.log(icon);
  return icon;
}
