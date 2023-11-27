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

function multiplicarArrays(array1, array2) {
  let resultado = [];
  for (let i = 0; i < array1.length; i++) {
      resultado.push(array1[i] * array2[i]);
  }
  return resultado;
}
let tamanoArrayFinal = parseInt(prompt("Tamaño del array:"));
let arrayAleatorio1 = llenarArrayAleatorio(tamanoArrayFinal);
let arrayAleatorio2 = llenarArrayAleatorio(tamanoArrayFinal);
let resultadoMultiplicacion = multiplicarArrays(arrayAleatorio1, arrayAleatorio2);

console.log("Array 1:", arrayAleatorio1);
console.log("Array 2:", arrayAleatorio2);
console.log("Resultado de la multiplicación:", resultadoMultiplicacion);
