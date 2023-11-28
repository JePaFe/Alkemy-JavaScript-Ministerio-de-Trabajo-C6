const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  dni: 98765432,
};

usuario.nombre = "Juan Pablo";
usuario["dni"] = 23456789;

usuario.email = "x@x.com";

delete usuario.apellido;

// console.log(usuario);

// ---

for (const prop in usuario) {
  console.log(prop, usuario[prop]);
}
