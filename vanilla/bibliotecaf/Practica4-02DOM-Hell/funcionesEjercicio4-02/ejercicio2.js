"use strict";
/*Ejercicio 2 - Escribe un programa que cree dinámicamente una tabla de 10 por 10 celdas en la carga de
la página (sin esperar los dos segundos). Cada celda de la tabla tendrá un número único que
empezará en uno y se irá incrementando en uno. 
Además, trancurridos dos segundos desde la carga inicial, todas las celdas de la tabla que
tengan números primos se pongan con un fondo rojo y el texto en negrita (utiliza clases para el
estilo).*/

//Reutilizo funciones de archivo.
const esPrimo = (numero) => {
  if (numero < 2) return false;
  if (numero === 2) return true;
  // Iteramos desde 2 hasta el número introducido.
  for (let i = 2; i <= numero - 1; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
};
//Con esta función puedo crear una tabla del tamaño indicado a filas y columnas.
const crearTabla = (filas, columnas) => {
  const tabla = document.createElement("table");
  let contador = 1; //Empieza a rellenar cada celda en 1.

  for (let i = 0; i < filas - 1; i++) {
    const fila = document.createElement("tr");

    for (let j = 0; j < columnas - 1; j++) {
      const celda = document.createElement("td");
      celda.textContent = contador++;
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  document.body.appendChild(tabla);
};
function aplicarEstiloPrimos() {
  let celdas = document.querySelectorAll("td"); // Selecciona todas las celdas.
  celdas = [...celdas]; //Transformo NodeList en array para usar .map().
  celdas.map((celda) => {
    if (esPrimo(parseInt(celda.textContent, 10))) {// Verifica si el número en la celda es primo.
      celda.classList.add("primo"); // Añade la clase 'primo' para cambiar el estilo.
    }
  });
}

export { crearTabla, aplicarEstiloPrimos };
