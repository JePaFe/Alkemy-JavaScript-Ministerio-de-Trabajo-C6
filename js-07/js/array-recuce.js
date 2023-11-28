let estudiante3 = {
  nombre: "Nahuel",
  edad: 21,
  curso: "Desarrollo Web",
  calificaciones: [65, 80, 79],
};

// acumulador = 0, item = 65
// acumulador = 65, item = 80
// acumulador = 145, item = 79
// totalCalificaciones = 224
const totalCalificaciones = estudiante3.calificaciones.reduce(
  (acumulador, item) => acumulador + item,
  0
);

console.log(totalCalificaciones);
