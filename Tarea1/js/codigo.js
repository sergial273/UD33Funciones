function calcularAreaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularAreaCuadrado(lado) {
  return lado * lado;
}

let figura = prompt("Figura:").toLowerCase();

if (figura === "circulo") {
  let radio = parseFloat(prompt("radio:"));
  console.log("Area: " + calcularAreaCirculo(radio));
} else if (figura === "triangulo") {
  let base = parseFloat(prompt("base:"));
  let altura = parseFloat(prompt("altura:"));
  console.log("Area: " + calcularAreaTriangulo(base, altura));
} else if (figura === "cuadrado") {
  let lado = parseFloat(prompt("lado:"));
  console.log("Area: " + calcularAreaCuadrado(lado));
} else {
  console.log("Figura no válida");
}