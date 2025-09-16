"use estrict"
import {calcularIMC} from "../../../bibliotecaf/funcionesEjercicios.js";

const pesoJuan = 70; // en kg
const alturaJuan = 1.75; // en metros
const pesoMarcos = 95; // en kg
const alturaMarcos = 1.8; // en metros

const imcJuan = calcularIMC(pesoJuan, alturaJuan);
//console.log(`El IMC de Juan es: ${imcJuan}`);

const imcMarcos = calcularIMC(pesoMarcos, alturaMarcos);
//console.log(`El IMC de Marcos es: ${imcMarcos}`);

console.log(`¿El IMC de Marcos es mayor que el de Juan? ${imcMarcos > imcJuan ? "Sí" : "No"}`);