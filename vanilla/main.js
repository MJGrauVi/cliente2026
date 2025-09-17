import {sumar, restar, multiplicar, dividir} from "./bibliotecaf/funciones.js";
import {sumaArrayFor} from "./bibliotecaf/funcionesPrueba.js";

const resultadoSuma = sumar(5, 3);
const resultadoResta = restar(5, 3);
const resultadoMultiplicacion = multiplicar(5, 3);
const resultadoDivision = dividir(5, 3);

const resultadoSumaArrayFor = sumaArrayFor([1, 2, 3, 4, 5]);

/* console.log(`Suma: ${resultadoSuma}`);
console.log(`Resta: ${resultadoResta}`);
console.log(`Multiplicación: ${resultadoMultiplicacion}`);
console.log(`División: ${resultadoDivision}`); 
console.log(`La suma del array es: ${resultadoSumaArrayFor}`);*/
 
const numeros = [1, 2, 3, 4, 5];
 const resultado = numeros.reduce(
  (acumulador, elementoActual, indice, arrayOriginal) => {
    console.log("Acumulador:", acumulador);
    console.log("Elemento actual:", elementoActual);
   

    return acumulador + elementoActual; // lógica
  },
  0 // valor inicial del acumulador
);               
console.log("Resultado final:", resultado); 
/* 
const palabras = ["js", "html", "js", "css", "html", "js"];

const conteo = palabras.reduce((acc, palabra, i) => {
  acc[palabra] = (acc[palabra] || 0) + 1;
  console.log(`Iteracion ${i +1}:`,palabra, "->", JSON.stringify(acc));
  return acc;
}, {});

console.log(conteo); */
// { js: 3, html: 2, css: 1 }