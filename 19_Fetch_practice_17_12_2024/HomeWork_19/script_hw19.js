const gridProducts = document.querySelector("#grid-dieArtikel");


frageDerArtikel();


async function frageDerArtikel() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  console.log(data);
  data.products.map((product) => {


    //*создаем карточку*/
    const card = document.createElement("div");
   console.log(card);
    card.className = "artikel-card";

    //*создаём заголовок*/
    const überschrift = document.createElement("h4");
    überschrift.textContent = product.title;
    card;

    //*создаем картинку*/
   const img =document.createElement('img');
   img.src=product.images;
   img.alt=product.title;
   //Создаем обертку для картинки- для обрезания
   const wrapper = document.createElement("div");
   wrapper.className = "img-wrapper";
   wrapper.append(img);

   //*создаем описание товара*/
   const desc = document.createElement('details')
   desc.textContent = product.description


   //*добавляем цену*/
    const price =document.createElement('p')
    price.textContent = `Price: ${product.price} Euro `
 
    //* добавляем элементы
    card.append(überschrift,wrapper,desc,price);
    gridProducts.append(card);
  });
}

console.log(product);
