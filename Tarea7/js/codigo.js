function convertirMoneda(euros, moneda) {
  switch (moneda.toLowerCase()) {
      case "libras":
          console.log(euros + " euros son " + (euros * 0.86) + " libras.");
          break;
      case "dolares":
          console.log(euros + " euros son " + (euros * 1.28611) + " dólares.");
          break;
      case "yenes":
          console.log(euros + " euros son " + (euros * 129.852) + " yenes.");
          break;
      default:
          console.log("Moneda no valida.");
  }
}

let cantidadEuros = parseFloat(prompt("Euros:"));
let monedaDestino = prompt("Convertir a:");
convertirMoneda(cantidadEuros, monedaDestino);
