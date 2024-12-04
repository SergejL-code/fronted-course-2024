// сделали тест подключения
// * console.log("hello js!");
// вывели в консоль глобальный объект document в виде html тегов (более читаемый вид html структуры)
// * console.log(document)
// вывели document в виде объекта со всеми вложенными свойствами (более строгий вид html структуры)
// * console.dir(document)

// завели переменную heading и положили в нее результат поиска через querySelector тега h1 передав аргументом в скобках имя тега

const heading = document.querySelector("h1");
// изменил цвет элемента в оранжевый
// document.querySelector('h1').style.color = 'orange'
heading.style.color = "orange";
// document.querySelector('h1').innerText = 'Урок 10: DOM методы'
heading.innerText = "Урок 10: DOM методы 🏠";

//  const newLocal = (heading.innerText = "Урок 10: DOM методы ");
// находим кнопку по id через обращение с символом #
const btnChange = document.querySelector("#btn-change");
const btnCreate = document.querySelector("#btn-create");
console.log("#btn-change") 
  //применяем функцию слушателя событий к найденной  кнопке
  btnChange.addEventListener("click", () => {
    // эти действия случатся по клику кнопки
    heading.style.color = "violet";
    heading.innerText = "Lesson 10: DOM methods";
  })

btnCreate.addEventListener("click", () => {
  // создали новый элемент (но еще не добавили на страницу)
  let newElement = document.createElement("p");
  // изменили текст элемента
  newElement.innerText = " Кажется я начинаю понимать этот DOM";
   // изменили цвет текста
  newElement.style.color = "red";
   // добавляем элемент на страницу
  // применяем метод append к родителю, в скобках передаем один элемент или несколько через запятую
  document.body.append(newElement);
  console.log(newElement);
});
