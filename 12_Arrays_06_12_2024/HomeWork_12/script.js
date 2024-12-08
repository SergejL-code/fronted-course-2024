//* Task 1/

document.addEventListener("DOMContentLoaded", () => {

  // created an array of “names” with the elements
  const names = ["Marie", "Alex", "Elena", "Dimitri"];
  //created an array of “names” with the elements
  const ages = [22, 31, 45, 53];

  const str = ["года", "год", "лет", "года"];

  //created an empty “nameAge” array
  const nameAge = [];

  //iterated an array of “names”
  for (let i = 0; i < names.length; i++) {
    //added elements from the arrays "str", "ages", "names" to the “nameAge” array

    nameAge.push(names[i] + " " + ages[i] + " " + str[i]);
  }

  //output the array data "nameAge" to the console
  console.log(nameAge);

  document.getElementById("text_1").innerHTML = nameAge.join("<br>");

  //* Task 2

  //created an empty “rev” array
  const rev = [];
  //iterated an array of “namesAge”
  for (let i = 0; i < nameAge.length; i++) {
    // added elements from an array "nameAge" to the “rev ” array
    rev.push(nameAge[i]);
    console.log(rev);
  }
  //expanded the elements in the ‘rev’ array in reverse order using the ‘reverse’ method

  rev.reverse();
  //output the array data "rev" to the console
  console.log(rev);
  document.getElementById("text_2").innerHTML = rev.join("<br>");

  //* Task 3/

  //created an empty “countries” array
  const countries = [];
  //added elements to the end of the array "countries" using the method push()
  countries.push("France");
  countries.push("Germany");
  countries.push("Italy");

  console.log(countries);
  //method of "pop()"" removes an element from the end of the array and stores it in the 'country' variable.
  let country = countries.pop();

  console.log(countries);
  console.log(country);
  //add an element to the beginning of the array"countries" using the "unshift()" method
  countries.unshift(country);
  console.log(countries);

  document.getElementById("text_3").innerHTML = countries.join("<br>");
  //* Task 4/

  //created an array of “myNumbers” with the elements
  const myNumbers = [1, 2, 3, 4, 5];
  //created an empty “quad” array
  let quad = [];
  multi = [];
  console.log("original array", myNumbers, "new array", quad);
  //iterated an array of “myNumbers”
  for (let i = 0; i < myNumbers.length; i++) {
    //*1.

    //multiply each element by 2 and add it to the array "m"
    multi.push(myNumbers[i] * 2);

    //*2.

    quad.push(Math.pow(myNumbers[i], 2));
  }

  console.log("Multiply  ", multi);

  //output the array data original array to the console

  console.log("original array", myNumbers);

  //output the array data quad array to the console
  console.log("square from the original array ", quad);
  
  document.getElementById("text_4").innerHTML = multi.join("<br>");})
