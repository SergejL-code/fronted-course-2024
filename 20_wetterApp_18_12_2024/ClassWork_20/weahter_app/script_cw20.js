async function getWeather() {
    
      // Получение данных геолокации
      const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
      const data = await res.json();
  
      // Деструктуризация геоданных
      const { city, latitude, longitude } = data;
  
      // Получение данных погоды
      const wetterRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const wetterData  = await wetterRes.json();
  
      // Деструктуризация данных о погоде
      const { temperature, windspeed, weathercode } = wetterData .current_weather;
      const { temperature: temperatureUnit, windspeed: windspeedUnit } =
      wetterData.current_weather_units;
  
      // Расшифровка погодного кода
      const code = interpretationCodes(weathercode);

  
      // Вывод данных на страницу
      const stadt = document.createElement("p");
      stadt.textContent = `Wetter in ${city}`

      const temperatur = document.createElement("p");
      temperatur.textContent =`Temperatur  ${temperature}  ${temperatureUnit}`

      const geschwindigkeit = document.createElement("p")
      geschwindigkeit.textContent =`geschwindigkeit: ${windspeed} ${windspeedUnit}`

      const wetterCode = document.createElement("p")
      wetterCode.textContent=`Beschreibung: ${code}`
      
      document.body.append(stadt,temperatur,geschwindigkeit,wetterCode);
   
  }
  
  // Функция для расшифровки weathercode
  function interpretationCodes(code) {
    if (code === 0) {
      return "Klarer Himmel";
    } else if (code === 1 || code === 2 || code === 3) {
      return "Überwiegend klar, teilweise bewölkt und bedeckt";
    } else if (code === 45 || code === 48) {
      return "Nebel";
    } else if (code === 51 || code === 53 || code === 55) {
      return "Leichter Nieselregen";
    } else if (code === 61 || code === 63 || code === 65) {
      return "Regen";
    } else if (code === 71 || code === 73 || code === 75) {
      return "Schneefall";
    } else if (code === 80 || code === 81 || code === 82) {
      return "Regenschauer";
    } else if (code === 95) {
      return "Gewitter";
    } else if (code === 96 || code === 99) {
      return "Gewitter mit Hagel";
    } else {
      return "Unbekannte Wetterbedingung";
    }
  }
  
  // Запуск функции
  getWeather();