const img = document.querySelector("#person-img");

function getPerson() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
       // console.log(data.results[7].image);
      img.src = data.results[7].image;
    });
 
}
getPerson();
btnUpdTxt.addEventListener('click',getPerson)
