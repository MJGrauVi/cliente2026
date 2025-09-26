"use strict";

//Funciones para la Práctica3.03.
//Ejercicio2.

function imprimirInforme(curso) {
    console.log(`---------------------- Informe------------------------`);
   for (let propiedad in curso) {
        console.log(`${propiedad} : ${curso[propiedad]}`);
        
    }
    console.log(`------------------------------------------------------`);
   
}

export { imprimirInforme };