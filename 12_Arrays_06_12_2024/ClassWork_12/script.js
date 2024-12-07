console.log("Hello Arrays!");

// ! arrays
// сложный тип данных
// синтаксис массива включает квадратные скобки

let numbers = [1, 2, 3, 4, 5];
let fruits = ["orange", "apple", "banana"];

// чтобы обратиться к элементу массива мы используем индекс
// индекс - это порядковый номер элемента в массиве, начинаются с 0
let item = fruits[0];
console.log(item);

let item1 = numbers[3];
console.log(item1);

console.log(numbers[4]);

// если мы обратимся к несуществующему индексу мы получаем undefined
let secret = fruits[10];
console.log(secret);

// мы можем создавать массивы из разных типов данных
// но как правило это не нужно и неудобно 🫠
let arr1 = [1, false, undefined, "strawberry"];
console.log(arr1);

// выводим значение длинны массива
let length = arr1.length;
console.log("длина массива arr1 ===>", length);

// обращение к последнему элементу массива
// вычитаем из длинны единицу и получаем индекс последнего элемента
let lastElement = arr1[arr1.length - 1];
console.log(lastElement);

//! Arrays methods: push(), pop()
// методы массивов можно разделить на две группы:

// 1. Мутирующие - изменяют исходный массив
// 2. Не мутирующие - возвращают новый массив с измененными данными


// * push(), pop() - мутирующие методы 👨‍🔬//  методы массивов

// push() - метод добавления элемента в конец массива
// в push() мы передаем новый элемент массива в круглых скобках
// возвращенное значение - длинна измененного массива


fruits.push("pineapple");
console.log(fruits);
console.log(fruits.length);

// ! будьте осторожны с мутирующими методами!
// ! например, результат push()  если положить его в новую переменную
// ! это будет длинна нового измененного массива (а не сам массив)

// * newArrLength - это длинна нового массива
// let newArrLength = fruits.push('pineapple');

// console.log('вот что в arr', newArrLength)
// console.log(fruits)

// ! вызывайте метод и используйте измененные данные

fruits.push('pineapple');
fruits.push('watermelon');

// console.log(fruits)

// pop() - метод удаления элемента из конца массива
// возвращенное значение - удаленный элемент


fruits.pop();
console.log(fruits);

// одним действием удаляем элемент из массива и записываем его в новую переменную lastFruit
let lastFruit = fruits.pop();
console.log('удаленный элемент  ===>  ', lastFruit)
console.log('новый измененный массив  ===>  ', fruits)


// ! методы shift(), unshift() для работы с массивами
// мутирующие методы для работы с началом массива

let planets = ["Mars", "Venus", "Earth", "Saturn"];

// shift() - удаляет первый элемент из массива
// возвращенное значение - удаленный элемент

planets.shift();

console.log("planets, но мез Марса ===>>  ", planets);

// unshift() - добавляет новый элемент в начало массива
// возвращенное значение - длинна измененного массива

// добавляем меркурий, а длину нового массива кладем в переменную newPlanetsLength
let newPlanetsLength = planets.unshift("Mercury")

console.log('возвращенное значение unshift', newPlanetsLength);

console.log("planets, но с Меркурием ===>>  ", planets);

// ! строчка снизу распространенная ошибка
// ! при записи результата мутирующих методов добавления и удаления в новую переменную мы не получаем новый массив
// let newPlanets = planets.push('Jupiter')
// ! в newPlanets будет длинна нового массива

console.log(planets)

/*Методы push, pop, shift и unshift
Методы push, pop, shift и unshift предоставляют удобные способы изменения содержимого массива в JavaScript.

push(): Добавляет один или несколько элементов в конец массива и возвращает новую длину массива.*/

let fruits1 = ['apple', 'banana'];
let length1 = fruits.push('orange', 'pear');
// fruits теперь ['apple', 'banana', 'orange', 'pear']
// length теперь 4
/*pop(): Удаляет последний элемент из массива и возвращает его. Массив укорачивается на один элемент.*/

let fruits2 = ['apple', 'banana', 'orange'];
let lastFruit1 = fruits.pop();
// fruits теперь ['apple', 'banana']
// lastFruit теперь 'orange'
/*shift(): Удаляет первый элемент из массива и возвращает его. Массив укорачивается на один элемент.*/

let fruits3 = ['apple', 'banana', 'orange'];
let firstFruit1 = fruits.shift();
// fruits теперь ['banana', 'orange']
// firstFruit теперь 'apple'
/*unshift(): Добавляет один или несколько элементов в начало массива и возвращает новую длину массива.*/

let fruits4 = ['banana', 'orange'];
let length2= fruits.unshift('apple', 'pear');
// fruits теперь ['apple', 'pear', 'banana', 'orange']
// length теперь 4
/*Эти методы являются мощными инструментами для манипуляции массивами в JavaScript и используются для добавления, удаления и изменения элементов в начале или конце массива.*/

// ! for loop - цикл for
// i - переменная итератор, число которое мы изменяем при каждой итерации
// его удобно использовать как индекс в массиве, если конец цикла ориентирован на длину массива


for (let i = 0; i < fruits.length; i++) {
  console.log("элемент", i, fruits[i]);
}

// ! while - цикл
let count = 0;
// в круглых скобках условие для выхода из цикла

while (count < 5) {
 console.log('количество циклов', count);
  // если не написать строчку ниже (count ++) мы попадем в бесконечный цикл (не будет соблюдено условие для выхода из цикла)
  count++;
//   console.log(,count);
  }

// ! методы работы со строками

let planet = 'Planet Earth';

// длинна строки - свойство length
let planetLength = planet.length
console.log('длина переменной planet ===>', planetLength);

//* приведение строки к нижнему регистру
// не забываем сделать вызов метода

let lowerCase = planet.toLocaleLowerCase();
console.log('название планета земля  в нижнем регистре',lowerCase);


// * приведение строки к верхнему регистру

let upperCase = planet.toLocaleUpperCase();
console.log('название планета земля в верхнем регистре',upperCase);


// * получение подстроки - substring
// мы можем обрезать исходную строку указав два индекса
// 1. левый индекс входит
// 2. правый индекс не входит (указываем следующий после нужного нам в подстроке)

// * в substring(0, 6) - мы получаем строку с 0 по 5 индекс
let substring = planet.substring(0,6);
console.log("подстрока с 0 по 5 включительно ===>  ", substring);

console.log(planet);
console.log(substring);

// * поиск индекса подстроки
// если подстрока не найдена мы получим не индекс ее начала, а -1


let indexOfPlanet = planet.indexOf('Earth')
console.log('индекс подстроки Earth ===>', indexOfPlanet);
console.log("символ под индексом 7 ===>  ", planet[7]);

// ! сложные операции над числами с Math
// Math.random() - получение случайного числа от 0 до 1

let random = Math.random();
console.log(random );

// случайное число от 1 до 100 включительно
let randomFloor = Math.floor(Math.random()*100) + 1;
console.log(randomFloor);

// случайное число от 0 до 100

let randomFloor1 = Math.floor(Math.random() * 101);
console.log(randomFloor1);

const roundedNumber = Math.round(4.67);
console.log(roundedNumber);


const roundedNumberCeil = Math.ceil(4.01);
console.log(roundedNumberCeil);

// Вывести в консоль случайное число от 1 до 10

console.log("Случайное число 0 до 10 = " + Math.round(Math.random() * 10));

// возведение в степень с помощью Math
const pow = Math.pow(2, 3); // 2**3
console.log(pow);
// min & max

const maxNumber = Math.max(1297, 4096, 2, 8, -4);
console.log(maxNumber);



// Создадим пустой массив
// Заполним случайными числами от 0 до 10
// Длина массива 15

const arrX = [];
for(let i = 0; i < 15; i++) {
    arrX.push(Math.round(Math.random() * 10));
}
console.log(arrX);

// Заполнить массив числами от 5 до 9, должно получиться [5, 6, 7, 8, 9]
// использовать .push()
// использовать цикл
const arrC=[]
for(let i = 0; i < 5; i++) {
  arrC.push(i + 5);
}

// let x = 5;
// while(x < 10) {
//   arrC.push(x);
//   x++;
// }

console.log(arrC);