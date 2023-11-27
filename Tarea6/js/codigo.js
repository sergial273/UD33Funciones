function contarCifras(numero) {
  if (numero < 0) {
      console.log("Error");
      return;
  }
  return numero.toString().length;
}

let numEntero = parseInt(prompt("numero:"));
console.log("El número de cifras es: " + contarCifras(numEntero));
