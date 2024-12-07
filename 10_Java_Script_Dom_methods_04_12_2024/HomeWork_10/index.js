// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
//клонируем - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener("click", () => {
  /*при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  получили кнопку по id через обращение  с символом # magic-btn*/
  //const btn = document.querySelector("#magic-btn");
  //создали  кнопку cloneBtn c id "magic-btn-2" к body
  document.body.appendChild(clonedBtn);
  // изменили надпись с "нажми меня" на "Я изменю тебя"
  clonedBtn.innerText = "Я изменю тебя";

  // изменили цвет фона на #a78b71
  clonedBtn.style.backgroundColor = "#a78b71";
  clonedBtn.style.color = "white";
  clonedBtn.className = "second-btn";
  console.log("первый слушатель!");
});

// здесь можете создать EventListener для второй кнопки

//применил функцию слушателя события к кнопке clonedBtn
clonedBtn.addEventListener("click", () => {
  //меняем цвет фона кнопки "btn" через кнопку с clonedBtn
  btn.style.backgroundColor = "#9c4a1a";
  // меняем цвет текста кнопки "btn" через кнопку с clonedBtn
  btn.style.color = "black";
  console.log("второй слушатель!");
});
console.log("основной блок кода!");
