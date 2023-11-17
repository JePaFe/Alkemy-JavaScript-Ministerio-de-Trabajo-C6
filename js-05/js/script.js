// function mostrarConsole(texto) {
//   console.log(texto);
// }

// function mostrarAlert(texto) {
//   alert(texto);
// }

// function mostrarWrite(texto) {
//   document.write(texto);
// }

// mostrarConsole("Hola!");
// mostrarAlert("Hola!!");
// mostrarWrite("Hola!!!");

function mostrar(texto, callback) {
  //   debugger;
  callback(texto);
}

function imprimir(mensaje) {
  document.write(mensaje);
}

mostrar("Hola!", console.log);
// mostrar("Hola!!", alert);
mostrar("Hola!!!", imprimir);

console.log(imprimir);
