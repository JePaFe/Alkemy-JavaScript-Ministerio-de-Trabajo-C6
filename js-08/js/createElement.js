const section = document.createElement("section");

const h2 = document.createElement("h2");
h2.textContent = "Sección 4";

// console.log(section, h2);

section.appendChild(h2);

const main = document.getElementById("principal");

main.appendChild(section);

// section.removeChild(h2);

// main.remove();
