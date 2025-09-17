"use strict";
import { calcularIMC } from "../../../bibliotecaf/funcionesEjercicios.js";

const pesoJuan = -120;
const alturaJuan = 1.75;       
const pesoMarcos = 95;         
const alturaMarcos = 1.80;     

const imcJuan = calcularIMC(pesoJuan, alturaJuan);
const imcMarcos = calcularIMC(pesoMarcos, alturaMarcos);

if (imcJuan !== null && imcMarcos !== null) {
    console.log(`¿El IMC de Marcos es mayor que el de Juan? ${imcMarcos > imcJuan ? "Sí" : "No"}`);
}