"use strict";
import {
  multiploTres,
  valoresMultiplos,
} from "../../../bibliotecaf/funcionesEjercicios.js";

console.log(multiploTres("hola"));
let multiTres = multiploTres(27);
console.log(multiploTres(100));
valoresMultiplos(100, 5);
console.log(typeof multiploTres(100));

console.log(`Los multiplos son: ${multiploTres(100).split(", ")}`);

console.log(valoresMultiplos(79, 9));
