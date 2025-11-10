"use strict";
import {cargarImagenes} from "./funciones.js";


window.addEventListener("DOMContentLoaded", () => {

  cargarImagenes();
document.getElementById("contenedorImg").addEventListener(
  "dragstart",
  (evento) => {
    console.log(evento);
    //Configurar el identificador del elemento a arrastrar.
    evento.dataTransfer.setData("identificador", evento.target.id);
    // Se muestran los datos por consola.
    console.log(evento.dataTransfer.getData("identificador"));
    console.log(evento.dataTransfer.getData("nombre"));
  },
  false
);
document.getElementById("contenedorImg").addEventListener(
  "dragover",
  (evento) => {
    evento.preventDefault(); //Previene el comportamiento del navegador.
  },
  false
);
document.getElementById("contenedorPuzle").addEventListener(
  "dragstart",
  (evento) => {
    console.log(evento);
    //Configurar el identificador del elemento a arrastrar.
    evento.dataTransfer.setData("identificador", evento.target.id);
    // Se muestran los datos por consola.
    console.log(evento.dataTransfer.getData("identificador"));
    console.log(evento.dataTransfer.getData("nombre"));
  },
  false
);
document.getElementById("contenedorPuzle").addEventListener(
  "dragover",
  (evento) => {
    evento.preventDefault("");
  },
  false
);
document.getElementById("contenedorPuzle").addEventListener(
  "drop",
  (evento) => {
    evento.preventDefault();
    if (evento.target.classList.contains("celda")) {
      console.log(`Suelto imagen: ${evento.target.className}`);
      evento.target.appendChild(
        document.getElementById(evento.dataTransfer.getData("identificador"))
      );
    }
  },
  false
);
   

});//fin del addEventListener.
