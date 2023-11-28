function Usuario(nombre, apellido, dni) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.dni = dni;
  this.admin = false;

  this.nombreCompleto = function (simbolo) {
    return `El nombre completo es: ${this.nombre} ${this.apellido} ${simbolo}`;
  };
}

const usuario1 = new Usuario("Juan", "Perez", 98765432);
const usuario2 = new Usuario("Maria", "Garcia", 98765433);

// const usuario = {
//   nombre: "Juan",
//   apellido: "Perez",
//   dni: 98765432,
// };

console.log(usuario1, usuario2);

console.log(usuario1.nombreCompleto("!!"));
