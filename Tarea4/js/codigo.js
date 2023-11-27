function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) return 1;
  return numero * calcularFactorial(numero - 1);
}

let numFactorial = parseInt(prompt("factorial:"));
console.log("El factorial de " + numFactorial + " es: " + calcularFactorial(numFactorial));

