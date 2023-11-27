function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function esPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
  }
  return true;
}

function generarPrimoAleatorio(min, max) {
  let numero = generarNumeroAleatorio(min, max);
  while (!esPrimo(numero)) {
      numero = generarNumeroAleatorio(min, max);
  }
  return numero;
}

let tamanoArrayPrimos = parseInt(prompt("Tamaño del array de primos:"));
let arrayPrimos = [];
for (let i = 0; i < tamanoArrayPrimos; i++) {
  arrayPrimos.push(generarPrimoAleatorio(1, 300));
}

let mayorPrimo = Math.max(...arrayPrimos);
console.log("Array de números primos aleatorios:", arrayPrimos);
console.log("El número primo más grande es:", mayorPrimo);
