// нашли родитель для добавления карточек

const gridProducts = document.querySelector("#grid-products");

// ! fetch запрос на .then
// fetch("https://fakestoreapi.com/products")
//   .then(res => res.json())
//   .then(data => {
// все операции с данными с сервера будут происходить внутри второго then()
//     console.log(data);
//     data.map(product=>{
//       const item = document.createElement('p')
//       console.log(item)

//       item.textContent = product.title
//       document.body.append(item)
//     })
//   });

//! fetch запрос на async / await

// альтернативный популярный способ обработки асинхронных запросов в javascript
// 'под капотом' работает также как и then(), но визуально выглядит иначе
// в асинхронных функциях сохраняется порядок выполнения кода для синхронных и асинхронных действий

//перед объявлением асинхронной функций пишем async
async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  //console.log(res);
  const data = await res.json();
  //console.log(data);
  data.map((product) => {
    //* Создаем карточку с датами
    const card = document.createElement("div");
    console.log(card);

    //TODO  создание класса
    card.className = "product-card";

    //TODO  добавляет новый класс в существующему классу
    card.classList.add("primary");
    console.log(card);

    //*создаем заголовок
    const heading = document.createElement("h4");
    heading.textContent = product.title;
    //добавляем элементы к карточкам
    // card.append(heading);

    //*создаем картинку
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.titel;
    //Создаем обертку для картинки- для обрезания
    const wrapper = document.createElement("div");
    wrapper.className = "img-wrapper";
    wrapper.append(img);

    //* создаем описание товара
    const desc = document.createElement("p");
    desc.textContent = product.description;
    // обрезам длинный текст
    let descText = product.description;
    if (product.description.length > 200) {
      desc.textContent = descText.slice(0, 200) + "...";
    } else {
      desc.textContent = product.description;
    }

    //* добавляем цену товара
    const price = document.createElement("p");
    price.textContent = `Price: ${product.price} Euro`;
    // price.textContent = product.price; //только цифры

    // добавляем элементы к карточке в append()
    //в том порядке, в котором вы хотите их увидеть в контейнере
    card.append(heading, price, wrapper, desc);
    console.log(card);
    gridProducts.append(card);
  });
}

//! не забываем вызвать функцию
fetchProducts();

// * пример именной асинхронной стрелочной функции

// * поскольку в стрелочных функциях мы кладем имя функции в константу мы не сможем вызывать функцию до инициализации переменной
// const fetchProducts = async()=> {
//   const res = await fetch("https://fakestoreapi.com/products")
//     console.log(res);
//     const data = await res.json();
//     console.log(data);
// }

//!

fetch("https://fakestoreapi.com/products?limit=2")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

async function getAsyncProduct() {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await res.json();
  console.log(data);
}

const frage = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=3");
  const data = await res.json();
  console.log(data);
};

frage();
getAsyncProduct();
