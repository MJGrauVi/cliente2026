"use strict";
//Funciones para la Práctica3.03.

/* Ejercicio 5 - Mostrando II (objetos)
Diseña una función que permita imprimir por consola cualquier objeto pasado como
parámetro. Se deberá comprobar el tipo de dato de cada propiedad del objeto y actuar en
consecuencia dependiendo si es un número, cadena, array, objeto o función (método).
La salida debe estar, como es tradicional, debidamente formateada e indicando el tipo de
dato que contiene cada clave del objeto. */

/* const inicialMayuscula = (texto) =>{
  return texto.charAt(0).toUpperCase() + texto.slice(1);
} */
//Fúnción flecha con retorno impicito e interpolación de los valores.
const inicialMayuscula = (texto) =>
  `${texto.charAt(0).toUpperCase()}${texto.slice(1)}`;

function imprimirObjeto(obj, nombre = "OBJETO") {
  console.log(`============== ${nombre} ==============`);

  // Recorremos las claves con Object.entries → devuelve [clave, valor]
  Object.entries(obj).map(([clave, valor]) => {
    const tipo = Array.isArray(valor) ? "array" : typeof valor;
    //console.log(typeof tipo);
    switch (tipo) {
      case "number":
        console.log(
          `El ${clave} es de tipo (${tipo}) y su valor es : ${valor}`
        );
        break;

      case "string":
        console.log(`${inicialMayuscula(clave)} (${tipo}) : "${valor}"`);
        break;

      case "array":
        console.log(
          `Las ${inicialMayuscula(
            clave
          )} están en un (${tipo}) y se detallan a continuación: `
        );
        valor.map((v, i) => console.log(`   ${i + 1}. ${v} (${typeof v})`));

        break;

      case "object":
        console.log(`${inicialMayuscula(clave)}, es de tipo (${tipo}) : `);
        imprimirObjeto(valor, clave.toLocaleUpperCase()); // recursividad para objetos anidados

        break;

      case "function":
        console.log(`${clave} (${tipo}) : [función]`);
        break;

      default:
        console.log(`${clave} (${tipo}) : ${valor}`);
    }
  });

  console.log("==============================");
}

export { imprimirObjeto, inicialMayuscula };
