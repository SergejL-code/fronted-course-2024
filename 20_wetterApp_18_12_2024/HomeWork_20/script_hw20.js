const weather = document.querySelector("#weather-container");
//создаем function запрос на геолокацию
async function getStandort() {
  const resGeo = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const dataGeo = await resGeo.json();

  // проверка данных
  console.log(dataGeo);

  //деструктурировали данные о локаций
  const { country, region, city, latitude, longitude } = dataGeo;

  const resWetterInfo = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );

  const dataWetterInfo = await resWetterInfo.json();

  // Деструктуризация данных о погоде
  const { temperature, windspeed, winddirection, weathercode, time } =
    dataWetterInfo.current_weather;

  const {
    temperature: tempEinheit,
    windspeed: geschwindigkeitEinheit,
    winddirection: windRichtungEinheit,
  } = dataWetterInfo.current_weather_units;

  // Расшифровка погодного кода
  const code = interpretationCodes(weathercode);

  // Вывод данных на страницу
  //создание элементов
  const stadt = document.createElement("p");
  stadt.className = "stadt";
  stadt.textContent = ` ${city}`;

  const temperatur = document.createElement("p");
  temperatur.className = "temperatur";
  temperatur.textContent = `🌡Temperatur  ${temperature}  ${tempEinheit}`;

  const geschwindigkeit = document.createElement("p");
  geschwindigkeit.className = "geschwindigkeit";
  geschwindigkeit.textContent = `🌬Windgeschwindigkeit: ${windspeed} ${geschwindigkeitEinheit}`;

  const windRichtung = document.createElement("p");
  windRichtung.className = "windRichtung";
  windRichtung.textContent = `WindRichtung:${winddirection} ${windRichtungEinheit}`;

  const wetterCode = document.createElement("p");
  wetterCode.className = "wetterCode";
  wetterCode.textContent = ` ${code}`;

  const zeit = document.createElement("p");
  zeit.textContent = `Aktuelle Zeit: ${time.replace("T", " ")}`;
  weather.append(
    stadt,
    temperatur,
    geschwindigkeit,
    windRichtung,
    wetterCode,
    zeit
  );
}

//создаём функция для расшифровки weathercode
function interpretationCodes(code) {
  switch (code) {
    case 0:
      return "Klarer Himmel";
    case 1:
      return "Überwiegend klar";
    case 2:
      return " teilweise bewölkt";
    case 3:
      return "bedeckt";
    case 45:
      return "Nebel";
    case 48:
      return "Raureifnebel";
    case 51:
      return "Nieselregen: leichte ";
    case 53:
      return "Nieselregen: mäßige ";
    case 55:
      return "Nieselregen: starke";
    case 56:
      return "Gefrierender Nieselregen: leichte";
    case 57:
      return "Gefrierender Nieselregen:dichte";
    case 61:
      return "Regen: leichte";
    case 63:
      return "Regen: mittlere";
    case 65:
      return "Regen: starke";
    case 66:
      return "Eisregen: leichte";
    case 67:
      return "Eisregen: starke";
    case 71:
      return "Schneefall: leichte";
    case 73:
      return "Schneefall: mäßige ";
    case 75:
      return "Schneefall: starke";
    case 77:
      return "Schneekörner";
    case 80:
      return "Regenschauer: leicht";
    case 81:
      return "Regenschauer: mäßig ";
    case 82:
      return "Regenschauer: heftig";
    case 85:
      return "Schneeschauer:leichte ";
    case 86:
      return "Schneeschauer: starke ";
    case 95:
      return "	Gewitter: Leicht oder mäßig";
    case 96:
      return "Gewitter mit leichtem Hage";
    case 99:
      return "Gewitter mit starkem Hage";
    default:
      return "Unbekannter Wettercode";
  }
}

//создаем loader

const loader = document.getElementById("loader");
const weatherContainer = document.getElementById("weather-container");

// Показать loader
function showLoader() {
  loader.classList.toggle("hidden"); // Убираем класс 'hidden', чтобы показать loader
  weatherContainer.classList.toggle("hidden"); // Скрываем контейнер с погодой
}

// Скрыть loader
function hideLoader() {
  loader.classList.toggle("hidden"); // Добавляем класс 'hidden', чтобы скрыть loader
  weatherContainer.classList.toggle("hidden"); // Показываем контейнер с погодой
}

// Имитация загрузки данных
showLoader(); // Показываем loader

setTimeout(() => {
  hideLoader(); // Скрываем loader через 3 секунды
}, 3000);

//! Вызываем функцию
getStandort();
