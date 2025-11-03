import {
  sumar,
  restar,
  multiplicar,
  dividir, reemplazarPalabraEnTodaLaWeb
} from "./bibliotecaf/funciones.js";
import { sumaArrayFor, stringMayus } from "./bibliotecaf/funcionesPrueba.js";
import { suma } from "./bibliotecaf/funciones.js";

/* const resultadoSuma = sumar(5, 3);
const resultadoResta = restar(5, 3);
const resultadoMultiplicacion = multiplicar(5, 3);
const resultadoDivision = dividir(5, 3);
console.log(typeof resultadoSuma);
const resultadoSumaArrayFor = sumaArrayFor([1, 2, 3, 4, 5]);
const sumando = suma(5, 9);
console.log(sumando);
console.log(`Suma: ${resultadoSuma}`);

console.log(`Resta: ${resultadoResta}`);
console.log(`Multiplicación: ${resultadoMultiplicacion}`);
console.log(`División: ${resultadoDivision}`); 
console.log(`La suma del array es: ${resultadoSumaArrayFor}`);

const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.reduce(
  (acumulador, elementoActual, indice, arrayOriginal) => {
    console.log("Acumulador:", acumulador);
    console.log("Elemento actual:", elementoActual);

    return acumulador + elementoActual; // lógica
  },
  0 // valor inicial del acumulador
);
console.log("Resultado final:", resultado); */
/* 
const palabras = ["js", "html", "js", "css", "html", "js"];

const conteo = palabras.reduce((acc, palabra, i) => {
  acc[palabra] = (acc[palabra] || 0) + 1;
  console.log(`Iteracion ${i +1}:`,palabra, "->", JSON.stringify(acc));
  return acc;
}, {});

console.log(conteo); */
// { js: 3, html: 2, css: 1 }

//Ejemplo object
//console.log(stringMayus);

// Función a asignar como respuesta-temario.
var cambioClase = function(){
var clase = this.innerHTML.toLowerCase();
document.body.className = clase;
}
// Asignando eventos.
<input type="button" id="Feo" value="Red" onClick="cambioClase();" />
var elemento = document.getElementById("feo");
elemento.onClick = cambioClase;
var botones = document.getElementsByTagName("button");
for (var i=0, i<botones.length; i++) {
botones[i].addEventListener("click", cambioClase, false);
}