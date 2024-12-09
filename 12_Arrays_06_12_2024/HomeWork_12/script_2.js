//* Task1
const names =new Array ("M","A","E","D");
const ages =[22,31,45,53];
const res=[];
for (let i = 0; i < names.length; i++) {
    res.push('${names[i]} ${ages[i]}лет/годов');// шаблонная строка
    // res.push(names[i] + " " + ages[i] + "лет/годов");
}

//*для массивов
// for (const i in names) {
//     res.push(names[i] + " " + ages[i] + "лет/годов");
// }
//*для объектов  
//    for (const element of object) {  } 

console.log(res);

//*  Task 2

const resRevers =[];
for (let i = resRevers.length-1; i>=0 ; i--) {
    resRevers.push(res[i]);
  
}
const resultReverseMethod = res.reverse();

console.log(resRevers);

//*Task 2

 const countries =[];
 countries.push("F","G","I");
 const it = countries.pop();
 countries.unshift(it)

 //* Task 4

 const number = [1,2,3,4,5];
 const newNumbers = [];
 for (const i in number) {
   console.log(number[i]*2);
newNumbers.push(number[i]*number[i]
);
//newNumbers[i]= (numbers[i]*numbers[i])

 }



//поверхностное копирование*чтение информаций

const arr1 = [1,2,3];
const arr1Copy = arr1;

// arr1 =[1,2,3]; нельзя заменить с переменной заменить массив 


console.log(arr1);
console.log(arr1Copy);

//Глубокое копирование 
const arr =  [1,2,3];
const arrCopy =[...arr];//spread

arrCopy[0]=1000;