const btn = document.querySelector("#btnId");
console.dir(btn);

// function mensaje() {
//   console.log("Click en el botón");
// }

// const mensaje = () => console.log("Click en el botón");

// btn.addEventListener("click", mensaje);

// ---

btn.addEventListener("click", () => console.log("Click en el botón 1"));
btn.addEventListener("click", () => console.log("Click en el botón 2"));

btn.addEventListener("dblclick", () => console.log("Doble Click en el botón"));

// btn.onclick = () => console.log("Click en el botón 1");
// btn.onclick = () => console.log("Click en el botón 2"); // Sobre escribe la función anterior
