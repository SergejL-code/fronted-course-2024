

const img = document.querySelector("#character-img");
const statusElement = document.querySelector('#character-status')
const nameElement = document.querySelector('#character-name')
const originElement = document.querySelector('#character-origin')
const genderElement =document.querySelector('#character-gender')

function getCharacter() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      img.src = data.results[7].image;
       statusElement.textContent = `Status: ${data.results[7].status}`;
       nameElement.textContent = `Name: ${data.results[7].name}`;
       originElement.textContent = `Origin: ${data.results[7].origin.name}`;
       genderElement.textContent = `Gender: ${data.results[7].gender}`;


     // const names = data.results.map(characterName=>characterName.name);
    //   const statuses = data.results.map(characterStatus=>characterStatus.status);
    //   const images = data.results.map(characterBild=>characterBild.image);
    //   const genders = data.results.map(characterGender=>characterGender.gender);
    //   console.log(names,statuses,images,genders);
   
    });
}
getCharacter();
