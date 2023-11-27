function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function llenarArrayAleatorio(tamano) {
  let array = [];
  for (let i = 0; i < tamano; i++) {
      array.push(generarNumeroAleatorio(0, 9));
  }
  return array;
}

function filtrarPorDigitoFinal(array, digito) {
  let resultado = array.filter(numero => numero % 10 === digito);
  return resultado;
}

let tamanoArrayFinal = parseInt(prompt("Tamaño del array:"));
let arrayFinal = llenarArrayAleatorio(tamanoArrayFinal);

let digitoFiltrar = parseInt(prompt("Digito para filtrar:"));
let arrayFiltrado = filtrarPorDigitoFinal(arrayFinal, digitoFiltrar);

console.log("Array original:", arrayFinal);
console.log("Array filtrado por dígito final:", arrayFiltrado);
