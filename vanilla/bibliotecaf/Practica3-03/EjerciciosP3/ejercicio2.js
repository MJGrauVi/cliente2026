"use strict";

//Funciones para la Práctica3.03.

/* Ejercicio 2 - Mostrando (objetos)
Escribe una función para hacer un informe completo (que muestre toda la información que
contiene) del objeto curso y que lo muestre por consola, ya sabes como: debidamente
formateado.
NOTA: para recorrer el objeto utilizar la estructura for(propiedad in objeto){};*/

function imprimirInforme(curso) {
    console.log(`---------------------- Informe------------------------`);
   for (let propiedad in curso) {
        console.log(`${propiedad} : ${curso[propiedad]}`);
        
    }
    console.log(`------------------------------------------------------`);
   
}

export { imprimirInforme };