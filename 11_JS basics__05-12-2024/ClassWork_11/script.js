console.log("hello");

//* JavaScript basic:

// *LET*
// * объявляем переменную с помощью let - значение можно переприсвоить

let student;
// если переменной не присвоено значение - она равна undefined (ничего)
console.log(typeof student);
console.log(student);

// присваиваем значение
student = "Jury";
student = "Natalia";
// * оператор typeof используется для проверки типа переменной
console.log(typeof student);
console.log(student);
// в JS мы можем присвоить переменной значение другого типа

student = 100;
console.log(typeof student);
console.log(student);

// *Const*
// константу нельзя объявить не присвоив значение Z.B. 'JavaScript'
const language = "JavaScript";

// константе нельзя переприсвоить другое значение как с Let
// language='Python';

console.log(language);

// *Приметивные

//* 1.string
let planet = "Earth";
planet = "Mercury";
planet = `Mars`;

//* 2.number - число

let n1 = 42;
let p = 3.14;
let cold = -42
console.log(typeof p,cold,n1);

console.log('тип Nan' ,typeof NaN);

//* 3.boolean - булево значение
let isStudent;
let isBackend=false;
let hasPet=true;
console.log(typeof isStudent,isBackend,hasPet);

//* 4. undefined - неопределенный тип данных

let nothing1 = undefined;
let noValue;
console.log(typeof nothing1, noValue);

//* 5.null - ничего(ноль)

let nothing = null;
console.log(nothing);

let p1 = document.querySelector('h2');
console.log( typeof p1);

//* Основные  операторы


let v1= 12+42;
console.log(v1);

let v2= 12-42;
console.log(v2);

let v3= 12*42;
console.log(v3);

let v4= 12**42;
console.log(v4);

let v5= 12%42;
console.log(v5);

let v6= 12/42;
console.log(v6);










