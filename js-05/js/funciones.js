function saludar(nombre, edad) {
  console.log(edad);
  // console.log(nombre, !nombre);
  // if (nombre != '') {
  // if (nombre != null) { // Si
  // if (!nombre) {
  // if (nombre !== undefined) { // Si
  // if (nombre !== undefined && nombre != null) {
  if (typeof nombre == "string" && nombre.length >= 2) {
    console.log("Hola, " + nombre);
  }
}

// saludar();
// saludar("Juan");
// saludar("Maria");
// saludar("Pedro", 30, "Perez");

// undefined, null, 0, ''

// ---

function sumar(primerNumero, segundoNumero) {
  return primerNumero + segundoNumero;
}

function mostrar(mensaje) {
  console.log(mensaje);
}

let resultado = sumar(5, 2);
mostrar(resultado);

resultado = sumar(7, 3);
mostrar(resultado);

// let nombre = prompt('Ingrese su nombre: ')
