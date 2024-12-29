//* Object - сложный тип данных
//* синтаксис объекта включает фигурные скобки
//* Объекты-это структура данных, состоящие из пар "ключ:значение".

//* Example
 


let user = { name: "John", age: 45, isAdmin: true };


//* 1.точечная нотация
console.log(user.name,user.age, user.isAdmin);

//* 2. квадратные скобки
console.log(user["name"],user["age"]);

console.log(user.salary);
// +'5000' -> получим число 5000

user.salary = 5000;

console.log(user);

user.age=31;

console.log(user);

delete user.isAdmin;
console.log(user);

// i - index (Array)
// key - ключ (Object)
// for (const key in object) {
    
// }
for (const key in user){ 


    // console.log(`Ключ: ${tr}, Значение равно: ${user.tr};`)} 
    
    console.log(`Ключ: ${key}, Значение равно: ${user[key]};`)} 
     
    


user.greet = function () {
        console.log(`Привет, меня зовут ${this.name}  и мне ${this.age} `);
    
}
user.greet();


//* окно уведомления
alert("Привет из модального окна")


//*взаимодействие с пользователем, подтверждение/отказ(boolean)
confirm(" Вы действительно хотите закрыть страницу") 

//*получение от пользователя ответа(String" true, false", cancel-null)
prompt()
answer = prompt("Введите Ваше Имя.")