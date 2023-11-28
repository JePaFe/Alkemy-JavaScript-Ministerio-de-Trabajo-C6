const auto1 = {
  color: "Azul",
  marca: "Fiat",
  modelo: 2015,
  0: "Un valor",
  "nombre completo": "Nombre del auto",
};

let color = auto1.color;

console.log(color);

console.log(auto1.marca);
console.log(auto1["marca"]);

console.log(auto1[0]);

console.log(auto1["nombre completo"]);
