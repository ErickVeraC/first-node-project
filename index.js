// Esto importa la biblioteca prompt-sync para poder solicitar entradas al usuario desde la terminal.
const prompt = require("prompt-sync")(); // common js

// Mensaje de bienvenida
console.log("¡Bienvenid@!");

// Función getNames:
// Esta función solicita nombres al usuario hasta que se presiona Enter sin ingresar un nombre.
// Todos los nombres se almacenan en el array names.
const getNames = () => {
  let names = [];
  let input = prompt(
    "Ingresa un nombre (o presiona Enter para que me detenga): "
  );

  while (input !== "") {
    names.push(input);
    input = prompt(
      "Ingresa un nombre (o presiona Enter para que me detenga): "
    );
  }

  return names;
};

/* Función countNames
Esta función devuelve la cantidad de nombres ingresados.*/
const countNames = (names) => names.length;

/* Función hasDuplicates:
Esta función verifica si hay nombres duplicados utilizando un Set para comparar el tamaño del 
conjunto de nombres únicos con la longitud del array original.*/
function hasDuplicates(names) {
  let uniqueNames = [];
  for (let name of names) {
    if (uniqueNames.includes(name)) return true;

    uniqueNames.push(name);
  }
  return false;
}
/* Función findLongestName: 
Esta función encuentra el nombre más largo utilizando el método reduce.*/
function findLongestName(names) {
  return names.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
}

/* Función findShortestName:
Esta función encuentra el nombre más corto utilizando el método reduce.*/
function findShortestName(names) {
  return names.reduce((shortest, current) => {
    return current.length < shortest.length ? current : shortest;
  }, names[0]);
}

/* Llamadas a las funciones:
Finalmente, se llaman las funciones para obtener la información deseada y se imprimen los resultados.*/
const names = getNames();

console.log(`Cantidad de nombres ingresados: ${countNames(names)}`);
console.log(`¿Hay nombres duplicados? ${hasDuplicates(names) ? "Sí" : "No"}`);
console.log(`El nombre más largo es: ${findLongestName(names)}`);
console.log(`El nombre más corto es: ${findShortestName(names)}`);
