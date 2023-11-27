function esPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
  }
  return true;
}

let numero = parseInt(prompt("Es primo:"));
console.log(esPrimo(numero));
