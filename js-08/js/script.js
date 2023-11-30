// let main = document.querySelector("main");

// main = document.querySelector("#principal");

// main = document.querySelector(".principal");

// console.log(main);

// let parrafo = document.querySelector("footer p");
// console.log(parrafo);

// const h2 = document.querySelector("main section h2.destacado");
// console.log(h2);

// ---

document.addEventListener("DOMContentLoaded", () => {
  let parrafos = document.getElementsByTagName("p");
  console.log(parrafos);

  parrafos = document.querySelectorAll("main p");
  console.log(parrafos);
});
