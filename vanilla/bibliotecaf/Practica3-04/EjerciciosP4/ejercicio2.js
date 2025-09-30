"use strict";
//Funciones para la Práctica3.04.

/* Ejercicio 2 - Filtrando objetos
Genera tres array de diez números (del 1 al 10) generados de forma aleatoria (crea o
reutiliza una función para esta tarea). Con esos array, crea uno nuevo con los números que
sean mayor a cinco y múestralo por consola debidamente formateado. */


const generarArray = (longitud, min, max) => {
  return Array.from({ length: longitud }, () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  });
};

export {generarArray};