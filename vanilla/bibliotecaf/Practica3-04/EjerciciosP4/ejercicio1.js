"use strict";
//Funciones para la Práctica3.04.

/* Ejercicio 1 - Mezclando objetos
Crea una array con cinco cadenas de texto que sean nombres propios (los que estimes
oportunos). Con ese array:
• muestra por consola todos los nombres en mayúscula, */

/* Podría crear una variable para almacenar el nuevo array generado por map, 
aunque en este caso no es necesario porque solo hay que mostrarlo por consola. */

const stringAmayusculas = (valores) => {
  //let nuevosValores = [...valoresArray];
  return valores.map((valor) => valor.toUpperCase());
};

//Esto es un objeto.
let nombres = ["Manolo", "Juan", "Paco", "Carmina", "Pilar"];
const stringMayus = nombres.map((valor) => {
  return valor.toUpperCase();
});

//• crea un nuevo array con los nombres ordenados alfabeticamente al revés y múes￾tralo por consola,

//Compruebo que efectivamente entra un array y guardo en un nuevo array los valores transformados.
const ordenaAlReves = (valoresArray) => {
  if (Array.isArray(valoresArray)) {
    let valoresTransformados = [...valoresArray].sort().reverse();
    return valoresTransformados;
  }
  return `No, no entra un array.`; //He incluido este return porque necesito entender en este caso si no entra un array
  // y no esta el return da undefined y entonces ???
};

/* • crea un nuevo array que contenga un objeto JSON por cada nombre del array. Ese
objeto tendrá dos propiedades: id con el índice de cada posición y nombre con el
valor de cada posición. Múestralo por consola.*/

/*   const convertirAJson = (valoresArray) => {
  let valoresJson = [...valoresArray];
  return valoresJson.map((v, i) => ({ id: i, nombre: v }));
};  
console.log(typeof valoresJson); */

const convertirAJson = (valoresArray) => {
  if (Array.isArray(valoresArray)) {
    let valoresJson = valoresArray.map((v, i) => {
      return { id: i, nombre: v };
    });
    return JSON.stringify(valoresJson, null, 2); // devuelve string JSON formateado
  }
};

//Ejercicio2

export { stringAmayusculas, stringMayus, ordenaAlReves, convertirAJson };
