// сделали тест подключения
// * console.log("hello js!");
// вывели в консоль глобальный объект document в виде html тегов (более читаемый вид html структуры)
// * console.log(document)
// вывели document в виде объекта со всеми вложенными свойствами (более строгий вид html структуры)
// * console.dir(document)

// завели переменную heading и положили в нее результат поиска через querySelector тега h1 передав аргументом в скобках имя тега

const f = document.querySelector("h1");
// изменил цвет элемента в оранжевый
// document.querySelector('h1').style.color = 'orange'
f.style.color = "orange";
// document.querySelector('h1').innerText = 'Урок 10: DOM методы'
const newLocal = (f.innerText = "Урок 10: DOM методы ");
const btnChange = document.querySelector("#btn-change");
const btnCreate = document.querySelector("#btn-create");
console.log("#btn-change") /
  //применяем функцию слушателя событий к найденной  кнопке
  btnChange.addEventListener("click", () => {
    // эти действия случатся по клику кнопки
    f.style.color = "violet";
    f.innerText = "Lesson 10: DOM methods";
  });

btnCreate.addEventListener("click", () => {
  let newElement = document.createElement("p");
  newElement.innerText = " Кажется я начинаю понимать этот DOM";
  newElement.style.color = "red";
  document.body.append(newElement);
  console.log(newElement);
});
