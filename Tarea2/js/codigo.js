function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cantidad = parseInt(prompt("Cuantos numeros a generar:"));
let minimo = parseInt(prompt("valor mínimo:"));
let maximo = parseInt(prompt("valor máximo:"));

for (let i = 0; i < cantidad; i++) {
  console.log(generarNumeroAleatorio(minimo, maximo));
}