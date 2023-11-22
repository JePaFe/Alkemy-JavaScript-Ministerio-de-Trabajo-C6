const numeros = [];

numeros.push(2);
numeros.push(5, 7);

numeros.unshift(1);

let numero_pop = numeros.pop();
console.log(numero_pop);

let numero_shift = numeros.shift();
console.log(numero_shift);

console.log(numeros);
// console.log(numeros.length);
