console.log("start");

//const блочная видимость,let(пусть) блочная видимость,var(deprecated)
// асинхронное действие
//function - regular(регулярная , она может быть безымянная(можно обратится только один раз) и именная)
//*1.Можем вызвать функцию как до определения значения функции,так и после
//*2.Синтаксис
//*3.this( ведёт на объект, у которого выполняется действие)*/

setTimeout(function name() {
  console.log(5);
}, 7000); //число в мс

console.log("finish");
function giveFiveAfterSevenSeconds() {
  setTimeout(
    (function name() {
      return 5;
    },
    7000)
  );
}
//синхронное действие
let res = giveFiveAfterSevenSeconds();
console.log("печать", res);

//! Обработка асинхронного действия

const promise = new Promise(function (resolve, reject) {
  //resolve//разрешать к then, reject//отклонять к  catch
  //Arrow function- стрелочная функция
  //* 1.Можем вызвать функцию только после определения значения функции

  //перед стрелкой , что принимает, после ,что возвращает
  //если сразу возвращает ,не надо открывать отдельный блок кода и писать return
  //setTimeout (()=>{return 5} , 7000);})
  setTimeout(() => {
    if (10 > 5) {
      reject("Mistake");
    } else {
      resolve(5);
    }
  }, 7000);
});
promise
  .then((value) => console.log(value)) //успешный вариант
  .catch((err) => console.log(err)) // не успешный вариант
  .finally(() => console.log("End")); //в любом случае
