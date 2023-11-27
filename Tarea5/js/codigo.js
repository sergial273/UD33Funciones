function decimalABinario(numero) {
  return numero.toString(2);
}

let numDecimal = parseInt(prompt("Convertir a binario:"));
console.log("El número binario es: " + decimalABinario(numDecimal));
