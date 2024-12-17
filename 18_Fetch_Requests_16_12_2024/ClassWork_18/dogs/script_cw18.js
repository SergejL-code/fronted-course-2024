// ! теория

//TODO HTTP - hyperText Transfer protocol - протокол передачи гипертекста

//TODO API - Application Programming Interface - интерфейс для общения программ друг с другом

//*fetch() извлечь, получить данные
//*делаем  fetch запрос за данными к API(частный случай работы с сервером)

//*в ответ на fetch запрос приходит объект  Promise  в состояние <Pending>
// * его не получится обработать синхронно - нужно использовать методы работы с асинхронными данными
//const data = fetch('https://dog.ceo/api/breeds/image/random');
//console.log(data);
// * ответ с сервера мы получаем в формате JSON
// JSON - JavaScript Object Notation

//! делаем Запрос

// находим пустой элемент img, чтобы добавить в него данные из API
const img = document.querySelector("#dog-img");
console.log(img);
const btnUpd = document.getElementById("btn-update");



function getDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    // первым .then() дожидаемся 'сырых' данных и преобразуем их в JS объект с помощью .json()
    .then((res) => res.json())

    //   .then((data) => console.log(data));
    // в data уже придут обработанные данные готовые к использованию
    .then((data) => {
      console.log("ключи", data);
      // перезаписываем аттрибут src значением из data
      img.src = data.message;
    });
}

getDog();

// btnUpd.addEventListener("click",()=>{getDog()});
btnUpd.addEventListener("click",getDog);
