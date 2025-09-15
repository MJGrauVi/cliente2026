import {sumar, restar, multiplicar, dividir} from "../bibliotecaf/funciones.js";

const resultadoSuma = sumar(5, 3);
const resultadoResta = restar(5, 3);
const resultadoMultiplicacion = multiplicar(5, 3);
const resultadoDivision = dividir(5, 3);

console.log(`Suma: ${resultadoSuma}`);
console.log(`Resta: ${resultadoResta}`);
console.log(`Multiplicación: ${resultadoMultiplicacion}`);
console.log(`División: ${resultadoDivision}`);
