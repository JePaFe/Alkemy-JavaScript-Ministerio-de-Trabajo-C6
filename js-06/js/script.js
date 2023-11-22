const numeros = [4, 7, 1, 9, 3, 8, 5, 6, 2];

// function seleccionar(item) {
//   if (item % 2 != 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const filtrados = numeros.filter(seleccionar);

// const seleccionar = item => item % 2 != 0 ? true : false;
// const seleccionar = item => item % 2 != 0;

const filtrados = numeros.filter(numero => numero % 2 == 0);

console.log(numeros, filtrados);
