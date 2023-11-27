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

function mostrarArrayYSuma(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
      console.log("Posicion " + i + ": " + array[i]);
      suma += array[i];
  }
  console.log("La suma de los elementos es: " + suma);
}

let tamanoArray = parseInt(prompt("Tamaño del array:"));
let arrayAleatorio = llenarArrayAleatorio(tamanoArray);
mostrarArrayYSuma(arrayAleatorio);
