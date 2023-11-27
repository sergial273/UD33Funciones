function llenarArray() {
  let array = [];
  for (let i = 0; i < 10; i++) {
      array.push(parseInt(prompt("Valor para la posicion " + i + ":")));
  }
  return array;
}

function mostrarArray(array) {
  for (let i = 0; i < array.length; i++) {
      console.log("Posicion " + i + ": " + array[i]);
  }
}

let miArray = llenarArray();
mostrarArray(miArray);
