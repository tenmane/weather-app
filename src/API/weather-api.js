async function Weather(city, unit) {
  const data = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
    ${city}?unitGroup=${unit}&key=WN46QYBNRS2A8SFZPPY5WPWAB&contentType=json`,
  );
  if (!data.ok) {
    throw new Error(`We couldn't find "${city}". Please try again.`);
  }
  const json = await data.json();
  return json;
}

export async function getData(city, unit) {
  const data = await Weather(city, unit);
  return {
    temp: data.currentConditions.temp,
    feelsLike: data.currentConditions.feelslike,
    humidity: data.currentConditions.humidity,
    wind: data.currentConditions.windspeed,
    time: data.currentConditions.datetime,
    conditions: data.currentConditions.conditions,
    address: data.resolvedAddress,
    icon: data.currentConditions.icon,
  };
}
