const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  dni: 98765432,
};

let { nombre, dni } = usuario;

nombre = "Juan Pablo";

const mensaje = `El nombre es: ${nombre} y su DNI es: ${dni}`;

console.log(mensaje);
console.log(usuario);
