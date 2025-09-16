"use estrict"
import {calcularIMC} from "../../../bibliotecaf/funcionesEjercicios.js";
import {imcMayor} from "../../../bibliotecaf/funcionesEjercicios.js";

const pesoJuan = "hola" // en
const alturaJuan = 1.75;// en cm
const pesoMarcos = 95; // en kg
const alturaMarcos = 1.80;// en cm

const imcJuan = calcularIMC(pesoJuan, alturaJuan);
console.log(`El IMC de Juan es: ${imcJuan}`);

const imcMarcos = calcularIMC(pesoMarcos, alturaMarcos);
console.log(`El IMC de Marcos es: ${imcMarcos}`);

console.log(imcMayor(imcMarcos, imcJuan));

console.log(`¿El IMC de Marcos es mayor que el de Juan? ${imcMarcos > imcJuan ? "Sí" : "No"}`);