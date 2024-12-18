// сделайте fetch запрос по адресу:
  // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
  // вам нужно заменить координаты в строке на данные выше
  // получите данные погоды: температуру, скорость ветра и.т.д
  // также заберите weathercode - он вам понадобится


async function getGeo() {
  const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const geoData = await res.json();
  const { latitude, longitude, city } = geoData;
  console.log('гео',geoData);

  //   data.map((dt) => {
  //     //создаем  данные по широте
  //     const lat = document.createElement("p");
  //     lat.textContent = ` Latitude: ${dt.latitude}`;
  //     console.log(lat);
  //     //создаем  данные по долготе
  //     const long = document.createElement("p");
  //     long.textContent = `Longitude: ${dt.longitude}`;
  //     //создаем  данные по городу
  //     const stadt = document.createElement("p");
  //     stadt.textContent = `City: ${dt.city}`;

  //     document.append(lat, long, stadt);
  // });

// const weatherRes = await fetch(
//   `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
// );
// const weatherData = await weatherRes.json();
// // деструктуризация вложенного в data объекта по ключу current_weather
// const { temperature, windspeed, weathercode } = weatherData.current_weather;
// // деструктуризация current_weather_units с переименованием переменных
// const { temperature: temperatureUnit, windspeed: windspeedUnit } =
//   weatherData.current_weather_units;
// console.log(temperature, temperatureUnit, windspeed, windspeedUnit, weathercode);



}
//console.log(dt);





async function wetterData() {

   const res = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);

   const weatherData = await res.json()
  
   console.log('погода',weatherData);

  const { temperature, windspeed, weathercode } = weatherData.current_weather;

  
 }
 wetterData()
getGeo();
