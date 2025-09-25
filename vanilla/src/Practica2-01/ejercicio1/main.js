"use strict";
import { calcularIMC, calcularIMCC } from "../../../bibliotecaf/funcionesEjercicios.js";

/* const pesoJuan = 70;
const alturaJuan = 1.75;       
const pesoMarcos = 95;         
const alturaMarcos = 1.80;   */   

const imcJuan = calcularIMCC(70, 1.65);
const imcMarcos = calcularIMCC(70, 1.65);
console.log(imcJuan);
console.log(imcMarcos);

if (imcJuan !== null && imcMarcos !== null) {
    console.log(`¿El IMC de Marcos es mayor que el de Juan? ${imcMarcos > imcJuan ? "Sí" : "No"}`);
}