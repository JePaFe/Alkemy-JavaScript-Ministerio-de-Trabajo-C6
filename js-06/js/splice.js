// const numeros = [4, 7, 1, 9, 3];

// const unos_numeros = numeros.slice(2, 4); // [1, 9]

// console.log(unos_numeros);

// ---

const meses = ["Enero", "Marzo", "Abril", "Junio"];

meses.splice(1, 0, "Febrero"); // Insertar

meses.splice(4, 1, "Mayo"); // Sobrescribo

meses.splice(0, 1); // Borrar

meses.splice(4, 0, "Julio", "Agosto"); // Insertar varios elementos

// delete meses[3];

console.log(meses);
