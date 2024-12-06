console.log("hello");

//*! JavaScript basic:

// * let
//* объявляем переменную с помощью let - значение можно переприсвоить

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

//*  const
// константу нельзя объявить не присвоив значение Z.B. 'JavaScript'
const language = "JavaScript";

// константе нельзя переприсвоить другое значение как с let
// language='Python';

console.log(language);


//*! Примитивные типы данных

//* 1.string - строка
// строки в js можно обозначать тремя видами кавычек:

// "" - двойные
let planet = "Earth";

// '' - одинарные
planet = "Mercury";

// `` - косые кавычки (backticks)
planet = `Mars`;

//* 2.number - число

let n1 = 42;
let p = 3.14;
let cold = -42
console.log(typeof p,cold,n1);

// существует специальное зарезервированное значение NaN
// NaN - Not A Number
// приходит ответом на некорректные математические операции
console.log('тип Nan' ,typeof NaN);

//* 3.boolean - булевое значение
let isStudent;
let isBackend=false;
let hasPet=true;
console.log(typeof isStudent,isBackend,hasPet);

//* 4. undefined - неопределенный тип данных

let nothing1 = undefined;
let noValue;
console.log(typeof nothing1, noValue);

//* 5.null - ничего(ноль)
// это специальное значение обозначающее ничего
// при проверки типа показывает object, поэтому проверку нужно делать не по типу, а по значению

let nothing = null;
console.log(nothing);

let p1 = document.querySelector('h2');
console.log( typeof p1);

//*! Основные  операторы

// * арифметические операторы

let v1= 12+42;
console.log(v1);

let v2= 12-42;
console.log(v2);

let v3= 12*42;
console.log(v3);

let v4= 12**42;  // возведение в степень
console.log(v4);

let v5= 12%42;  // остаток от деления
console.log(v5);

let v6= 12/42;
console.log(v6);

// * операторы сравнения

// > - больше
// < - меньше
// >= - больше или равно
// <= - меньше или равно
// === - строгое равенство (рекомендуется к использованию)
// == - нестрого равенство с приведением типов (строка может оказаться равной числу)


console.log(25 === "25");

//! * приведение типов

// мы можем привести число к строке через String()
let num1 = String(25);

console.log(num1 === "25");

// мы можем привести строку к числу через Number()
let string1 = Number("100");
console.log(string1 === 100);

string2 = "200$ 400$";

// если среди символов строки встретится непереводимый в число символ вам вернется NaN, если использовать Number()
console.log(Number(string2));

// если среди символов строки встретится непереводимый в число символ вам parseInt() остановится, но вернет преобразованную часть в виде числа
console.log(parseInt(string2));






