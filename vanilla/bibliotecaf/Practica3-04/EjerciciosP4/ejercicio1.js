"use strict";
//Funciones para la Práctica3.04.

//Ejercicio1.
/* He creado una nueva variable para almacenar el nuevo array generado por map, 
aunque en este caso no sería necesario porque solo hay que mostrarlo por consola. */

const stringAmayusculas = (valoresArray) => {
  let nuevosValores = [...valoresArray];
  return nuevosValores.map((valor) => valor.toUpperCase());
};

//Esto es un objeto.
let nombres = ["Manolo", "Juan", "Paco", "Carmina", "Pilar"];
const stringMayus = nombres.map((valor) => {
  return valor.toUpperCase();
});

//Nombres ordenados alfabéticamente al revés.
//Compruebo que efectivamente entra un array y guardo en un nuevo array los valores transformados.
const ordenaAlReves = (valoresArray) => {
  if (Array.isArray(valoresArray)) {
    let valoresTransformados = [...valoresArray].sort().reverse();
    return valoresTransformados;
  }
 return `No entra un array`;
};

//Punto3
/* const convertirAJson = (valoresArray) => {
  let valoresJson = [...valoresArray];
  return valoresJson.map((v, i) => ({ id: i, nombre: v }));
}; */
const convertirAJson = (valoresArray) => {
  let valoresJson = [...valoresArray];
  return valoresJson.map(
    (v, i) => (`Los valores del array son: `, { id: i, nombre: v })
  );
};

function mostrarJson(valoresJson) {
  console.log("============================================");
  console.log(`ID:     ${valoresJson.id}`);
  console.log(`Nombre: ${valoresJson.nombre}`);
  console.log("============================================");
}

//Ejercicio2

export {
  stringAmayusculas,
  stringMayus,
  ordenaAlReves,
  convertirAJson,
  mostrarJson,
};
