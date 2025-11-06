"use strict";
import {
  crearAcordeon,
  activarAcordeon,
} from "./funcionesPractica5-02/Ejercicio5-02_1.js";
import configurarTabs from "./funcionesPractica5-02/Ejercicio5-02_2.js";

window.onload = () => {
  //Ejercicio 1 Acordeón.

  const acordeon = crearAcordeon(); // Crear el acordeón.
  document.body.appendChild(acordeon); // Insertarlo en el body.
  activarAcordeon(acordeon); // Activar su funcionalidad.

}; //fin de window.onload.



//Ejercicio 2 Pestañicas.

  document.addEventListener(
    "DOMContentLoaded",
    () => {
      configurarTabs(".tabs", ".contenidos");
    },
    false
  );
