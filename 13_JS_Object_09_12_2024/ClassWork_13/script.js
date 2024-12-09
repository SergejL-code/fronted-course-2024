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

for (const tr in user){ 


    // console.log(`Ключ: ${tr}, Значение равно: ${user.tr};`)} 
    
    console.log(`Ключ: ${tr}, Значение равно: ${user[tr]};`)} 
     
    


user.greet = function () {
        console.log(`Привет, меня зовут ${this.name}  и мне ${this.age} `);
    
}
user.greet();