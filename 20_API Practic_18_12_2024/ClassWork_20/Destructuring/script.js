async function getWetter() {
    const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
    const data = await res.json();
  
   // TODO    работа с данными из объекта без деструктуризации
    //*  объявили переменные и присвоили им значения из объекта
  
  // const city= data.city
  // const latitude =data.latitude
  // const longitude=data.longitude
  // ToDO   работа с данными из объекта с деструктуризацией
  //* мы в одну строчку объявляем переменные с именами совпадающими с именем нужных нам ключей и передаем им соответствующее значение(три переменные; data источник)
   //const { city, latitude, longitude } = data;
    //console.log(city, latitude, longitude);
   
    const { stadt, breitengrad,längengrad : { city, latitude,longitude } } = data;

  
  }
  
  
  getWetter();
  
 